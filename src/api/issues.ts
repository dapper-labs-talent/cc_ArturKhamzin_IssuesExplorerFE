import { useEffect, useState } from "react";
import { githubFetcher } from ".";

interface IParams {
    owner: string;
    repo: string;
    state: string;
}

function useIssues(params: IParams) {
    const { owner, repo, state } = params;
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const endpoint = `/${owner}/${repo}/issues?state=${state}`;

        // todo: cache fetched results (actually, just use react-query)
        githubFetcher(endpoint).then((data) => {
            console.log('got data', data);
            setList(data);
        }).catch((error) => {
            // todo: render error state;
            console.log('fetching error', error);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [owner, repo, state])

    return { list, isLoading };
}

export default useIssues;