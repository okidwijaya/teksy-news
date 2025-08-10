import { useEffect, useState } from "react";

export function useApi<T>(apiCall: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;

        setLoading(true);
        setError(null);

        apiCall()
            .then((response) => {
                if (isMounted) {
                    setData(response);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    setError(err.response?.data.message || new Error("An error occurred while fetching data"));
                }
            })
            .finally(() => {
                if (isMounted) {
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [apiCall]);
    return { data, error, loading };
}