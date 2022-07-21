const API_URL_PREFIX = 'https://api.github.com/repos/';

export function githubFetcher(endpoint: string) {
    const url = API_URL_PREFIX + endpoint;
    return fetch(url, {
        headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_SECRET}`,
        }
    })
}