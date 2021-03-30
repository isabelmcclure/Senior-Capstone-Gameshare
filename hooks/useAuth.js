import useSWR from 'swr'

function fetcher(route) {

    return fetch(route)
        .then((r) => r.ok && r.json())
        .then((user) => user || null);
}

export default function useAuth() {
    const { user, userData, userBoardgames, error, mutate } = useSWR('/api/user', fetcher);
    const loading = user === undefined;

    return {
        user,
        userData,
        userBoardgames,
        loading,
        error,
    };
}