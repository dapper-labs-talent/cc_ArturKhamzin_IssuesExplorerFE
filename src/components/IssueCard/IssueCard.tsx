import { GithubIssue } from '../../types';
import './index.css';


interface IProps {
    item: GithubIssue;
}

function IssueCard(props: IProps) {
    const { item } = props;
    return (
        <div className="issue-card">
            <div className="issue-card-content">
                <h3 className="issue-title">
                    <a href={item.html_url} target="_blank" rel="noreferrer noopener">{item.title}</a>
                </h3>
                <div className="issue-description">
                    {item.body ? item.body : <span className="text-muted">No description provided</span>}
                </div>
                <ul className="issue-labels">
                    {item.labels.map((label) =>
                        (<li key={label.id}>{label.name}</li>))}
                </ul>
            </div>
        </div>
    );
}

export default IssueCard;