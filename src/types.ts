export interface GithubIssue {
    id: number;
    title: string;
    body: string;
    html_url: string;
    labels: {
        id: number;
        name: string;
        color: string;
    }[];
}