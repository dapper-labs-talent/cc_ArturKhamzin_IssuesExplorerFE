import { GithubIssue } from '../../types';
import IssueCard from '../IssueCard/IssueCard';
import './index.css';

interface IProps {
    items: GithubIssue[];
}

function IssuesList(props: IProps) {
    const { items } = props;
    return (
        <div className="issues-list">
            {items.map((item) =>
                <IssueCard key={item.id} item={item} />
            )}
        </div>
    );
}

export default IssuesList;