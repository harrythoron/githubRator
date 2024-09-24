import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';


import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';


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
            <Routes>

                <Route path='/signin' element={<SignIn />} />
                <Route path='/' element={<RepositoryList />} />

                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>

        </View>
    );
};

export default Main;