import { createContext, useState } from 'react';

const GitHubContext = createContext();

const gitHubUrl = process.env.REACT_APP_GITHUB_API_URL;
const gitHubToken = process.env.REACT_APP_GITHUB_API_PAT;

export const GitHubContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${gitHubUrl}/users`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${gitHubToken}`,
      },
    });
    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <GitHubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
