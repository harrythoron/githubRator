import { View, StyleSheet, Pressable } from 'react-native';
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
        gap: 10


    },
    color: {
        backgroundColor: '#24292e',

    }
});

const AppBar = () => {
    return (
        <View style={[styles.container, styles.color]}>
            <Pressable>
                <Link to='/'>
                    <CustomText style={{ color: '#e6ebf2' }} fontWeight='bold'>Repositories</CustomText>
                </Link>

            </Pressable>
            <Pressable>
                <Link to='/signin'>
                    <CustomText style={{ color: '#e6ebf2' }} fontWeight='bold'>Sign in</CustomText>
                </Link>
            </Pressable>
        </View>
    )
};

export default AppBar;
