import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        paddingLeft: 10

    },
    color: {
        backgroundColor: '#24292e',

    }
});

const AppBar = () => {
    return (
        <View style={[styles.container, styles.color]}>
            <Pressable>
                <Text style={{ color: '#e6ebf2' }} fontWeight='bold'>Repositories</Text>
            </Pressable>
        </View>
    )
};

export default AppBar;
