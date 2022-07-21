import { useParams } from "react-router";

function IssuesViewerPage() {
    let params = useParams();
    const { repoOwner, repoName } = params;
    console.log(params);

    if (!repoOwner || !repoName) {
        return (
            <div>Something went wrong, please start over</div>
        )
    }

    return (
        <div>Viewer page, owner: {repoOwner}, repo: {repoName} </div>
    );
}

export default IssuesViewerPage;