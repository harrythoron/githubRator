import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useQuery, useApolloClient } from "@apollo/client";
import { USER_EXIST } from '../graphql/queries';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import CustomText from './Text';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,

        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',

        backgroundColor: '#24292e',



    },
    color: {
        backgroundColor: '#24292e',

    },
    scrollViewStyle: {
        display: 'flex',
        flexDirection: 'row',


        flexGrow: 1,

    },
    gapView: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        gap: 10
    }
});

const AppBar = () => {
    const { data } = useQuery(USER_EXIST);
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage()
    console.log('appbar--', data);



    const signOut = () => {
        authStorage.removeAccessToken()
        apolloClient.resetStore()
    }

    return (

        <View style={styles.container}>
            <ScrollView horizontal >

                <View style={styles.gapView}>
                    <Link to='/'>
                        <CustomText style={{ color: '#e6ebf2' }} fontWeight='bold'>Repositories</CustomText>
                    </Link>
                    {data?.me === null ?
                        <Link to='/signin'>
                            <CustomText style={{ color: '#e6ebf2', marginRight: 10 }} fontWeight='bold'>Sign in</CustomText>
                        </Link>
                        :
                        <Pressable onPress={signOut}>
                            <CustomText style={{ color: '#e6ebf2', marginRight: 10 }} fontWeight='bold'>Sign Out</CustomText>
                        </Pressable>
                    }




                </View>







            </ScrollView>
        </View>
    )
};

export default AppBar;
