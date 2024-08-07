import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES);
    let result;

    console.log('map result-', result);
    console.log('data-', data, 'error-', error, 'loading-', loading);
    const [repositories, setRepositories] = useState();
    // const [loading, setLoading] = useState(false);

    const fetchRepositories = async () => {


        // setLoading(true);

        // const response = await fetch('http://192.168.43.148:5000/api/repositories');
        if (!loading) {
            result = data.repositories
        }

        console.log('server result-', result);
        // setLoading(false)

        setRepositories(result);
    };

    useEffect(() => {
        fetchRepositories();
    }, [data]);

    return { repositories, loading, refetch: fetchRepositories };
}

export default useRepositories;