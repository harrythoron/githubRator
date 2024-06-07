import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';


const styles = StyleSheet.create({
    container: {


        backgroundColor: '#e1e4e8',
        display: 'flex',
        flexDirection: 'column',



    },
});

const Main = () => {
    return (
        <View style={styles.container} >
            <AppBar />
            <RepositoryList />
        </View>
    );
};

export default Main;