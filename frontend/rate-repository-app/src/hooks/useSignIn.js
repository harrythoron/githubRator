import { useMutation } from "@apollo/client";
import { AUTHENTICATE_SIGNIN } from "../graphql/mutation";

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE_SIGNIN);

    const signIn = async ({ username, password }) => {
        console.log('mutate--', username, password);

        const { data } = await mutate({
            variables: { credentials: { username, password } },
        });
        console.log('usesignin.js-', data);
        return data

    };

    return [signIn, result];
};

export default useSignIn;