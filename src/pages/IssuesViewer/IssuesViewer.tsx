import { useCallback, useState } from "react";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router";
import './index.css';
import { APP_ROUTES } from "../../App";
import IssuesList from "../../components/IssuesList/IssuesList";
import useIssues from "../../api/issues";

export const ISSUE_STATES = {
    all: 'All issues',
    open: 'Open issues',
    closed: 'Closed issues',
    pr: 'Pull Requests',
}
const issuesStates = Object.keys(ISSUE_STATES);

function IssuesViewerPage() {
    const routerParams = useParams();
    const navigate = useNavigate();
    const [stateFilter, setStateFilter] = useState('all');
    const { repoOwner = '', repoName = '' } = routerParams;
    const itemsList = useIssues({
        owner: repoOwner,
        repo: repoName,
        state: stateFilter,
    });

    const onClose = useCallback(() => navigate(APP_ROUTES.HOME), [navigate]);
    const onStateSelect = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        const key = (event.target as HTMLButtonElement).dataset.issueKey;
        console.log(key)
        if (key) {
            setStateFilter(key);
        }
    }, [])

    if (!repoOwner || !repoName) {
        return (
            <div>Something went wrong, please start over</div>
        )
    }

    return (
        <div className="viewer-page">
            <header>
                <h1>GitHub Issue Viewer</h1>
                <div>
                    https://github.com/{repoOwner}/{repoName}
                </div>
            </header>

            <div className="viewer-content">
                <div className="sub-header">
                    <div className="issues-states">
                        {issuesStates.map((key) => {
                            const name = (ISSUE_STATES as { [key: string]: string })[key];
                            return (
                                <button
                                    key={key}
                                    disabled={key === 'pr'}
                                    title={key === 'pr' ? 'TODO' : ''}
                                    data-issue-key={key}
                                    onClick={e => onStateSelect(e)}
                                    className={classNames('issue-state', {
                                        'issue-state-selected': stateFilter === key
                                    })}>
                                    {name}
                                </button>
                            );
                        })}
                    </div>
                    <div>
                        <button onClick={onClose}>X</button>
                    </div>
                </div>

                <IssuesList items={itemsList} />

            </div>
        </div>
    );
}

export default IssuesViewerPage;