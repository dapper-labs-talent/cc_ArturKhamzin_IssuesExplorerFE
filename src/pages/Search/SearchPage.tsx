import { useState } from "react";
import { useNavigate, generatePath } from "react-router-dom";
import { APP_ROUTES } from "../../App";
import './index.css';

// https://github.com/facebook/react

const GITHUB_REPO_REGEXP = /^https\:\/\/github.com\/(\w+)\/(\w+)$/;


function SearchPage() {
    const navigate = useNavigate();
    const [repoUrl, setRepoUrl] = useState('');
    const [isInputInvalid, setInputInvalid] = useState(false);
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setInputInvalid(false);
        setRepoUrl(target.value.trim())
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const reGroups = GITHUB_REPO_REGEXP.exec(repoUrl);
        if (!reGroups?.length) {
            setInputInvalid(true);
            return;
        }
        const [_, owner, repo] = reGroups;

        const nextPath = generatePath(APP_ROUTES.ISSUES_VIEWER, {
            repoOwner: owner,
            repoName: repo
        });

        navigate(nextPath);
    }

    return (
        <div className="main-container search-page">
            <div className="search-page-content">
                <h1>GitHub Issue Viewer</h1>

                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        className={isInputInvalid ? 'input-invalid' : ''}
                        placeholder="Paste a link to a GitHub repo"
                        onChange={onInputChange}
                        autoFocus
                        value={repoUrl}
                    />
                </form>
            </div>
        </div>
    );
}

export default SearchPage;