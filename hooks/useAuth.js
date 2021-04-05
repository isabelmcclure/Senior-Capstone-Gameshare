import useSWR from 'swr'

function fetcher(route) {

    return fetch(route)
        .then((r) => r.ok && r.json())
        .then((user) => user || null);
}

export default function useAuth() {
    const { data, error } = useSWR('/api/user', fetcher);
    const loading = data === undefined;

    //console.log(data)
    return {
        data,
        loading,
        error,
    };
}