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

    useEffect(() => {
        const endpoint = `/${owner}/${repo}/issues?state=${state}`;
        githubFetcher(endpoint).then((data) => {
            console.log('got data', data);
            setList(data);
        })
    }, [owner, repo, state])

    return list;
}

export default useIssues;