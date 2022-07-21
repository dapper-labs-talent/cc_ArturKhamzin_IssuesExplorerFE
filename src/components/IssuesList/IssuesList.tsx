import './index.css';

interface GithubIssue {
    id: string;
    title: string;
}

interface IProps {
    items: GithubIssue[];
}

function IssuesList(props: IProps) {
    const { items } = props;
    return (
        <div className="issues-list">
            {items.map((item) =>
                <div key={item.id}>{item.title}</div>
            )}
        </div>
    );
}

export default IssuesList;