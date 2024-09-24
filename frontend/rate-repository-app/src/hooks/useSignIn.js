import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE_SIGNIN } from "../graphql/mutation";
import { useNavigate } from "react-router-native";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
    const authStorage = useAuthStorage()
    const [mutate, result] = useMutation(AUTHENTICATE_SIGNIN);
    const apolloClient = useApolloClient()
    const navigate = useNavigate()


    const signIn = async ({ username, password }) => {
        console.log('mutate--', username, password);

        const { data } = await mutate({
            variables: { credentials: { username, password } },
        });
        console.log('usesignin.js-', data);
        await authStorage.setAccessToken(data.authenticate.accessToken)
        console.log('authstorage--', authStorage);
        apolloClient.resetStore()
        navigate('/')


        return data

    };

    return [signIn, result];
};

export default useSignIn;