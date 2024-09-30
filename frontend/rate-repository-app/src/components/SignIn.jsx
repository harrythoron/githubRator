import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from 'yup';
import CustomText from "./Text";
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
    container: {








    },
    inlineContainer: {
        display: 'flex',
        flexDirection: 'column',

        gap: 10,
        padding: 10,
        justifyContent: 'space-between',


    }
});

const initialValues = {
    username: '',
    password: '',
}

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});

export const SignInContainer = ({ onSubmit }) => {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: onSubmit,
    })
    return (
        <View style={styles.container}>
            <View style={styles.inlineContainer}>
                { }
                <TextInput placeholder="username" value={formik.values.username} onChangeText={formik.handleChange('username')} style={{ padding: 10, border: formik.errors.username ? '3px solid #d73a4a' : '3px solid #adaca8' }} />

                {formik.touched.username && formik.errors.username && <CustomText style={{ color: 'red' }}>Username is required</CustomText>}
                <TextInput placeholder="password" value={formik.values.password} onChangeText={formik.handleChange('password')} secureTextEntry={true} style={{ padding: 10, border: formik.errors.username ? '3px solid #d73a4a' : '3px solid #adaca8' }} />
                {formik.touched.password && formik.errors.password && <CustomText style={{ color: 'red' }}>Password is required</CustomText>}
                <Pressable onPress={formik.handleSubmit}>
                    <CustomText style={{ backgroundColor: '#274ce3', padding: 10, color: '#f2f3f7', textAlign: 'center' }} fontWeight='bold'>Sign in</CustomText>
                </Pressable>
            </View>

        </View>
    )

}

const SignIn = () => {
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        console.log('signin-', values);
        const { username, password } = values;

        try {
            await signIn({ username, password });




        } catch (e) {
            console.log('error submit--', e);

        }


    };
    return <SignInContainer onSubmit={onSubmit} />

};

export default SignIn;