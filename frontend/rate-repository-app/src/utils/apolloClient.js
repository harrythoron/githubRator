import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants'
import { setContext } from '@apollo/client/link/context'


console.log('apolloclient--', Constants.expoConfig.extra.uri);

const { uri } = Constants.expoConfig.extra;

const httpLink = createHttpLink({
    uri
})



const createApolloClient = (authStorage) => {
    const authLink = setContext(async (_, { headers }) => {
        try {
            const accessToken = await authStorage.getAccessToken();
            return {
                headers: {
                    ...headers,
                    authorization: accessToken ? `Bearer ${accessToken}` : '',
                },
            };
        } catch (e) {
            console.log('apolloClient.js err-', e);
            return {
                headers
            };

        }
    });
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;