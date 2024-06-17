import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import CustomText from './Text';

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
    return (

        <View style={styles.container}>
            <ScrollView horizontal >

                <View style={styles.gapView}>
                    <Link to='/'>
                        <CustomText style={{ color: '#e6ebf2' }} fontWeight='bold'>Repositories</CustomText>
                    </Link>
                    <Link to='/signin'>
                        <CustomText style={{ color: '#e6ebf2', marginRight: 10 }} fontWeight='bold'>Sign in</CustomText>
                    </Link>

                </View>







            </ScrollView>
        </View>
    )
};

export default AppBar;
