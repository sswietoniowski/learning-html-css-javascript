import { createContext, useReducer } from 'react';

import GitHubReducer from './GitHubReducer';

const GitHubContext = createContext();

const gitHubUrl = process.env.REACT_APP_GITHUB_API_URL;
const gitHubToken = process.env.REACT_APP_GITHUB_API_PAT;

export const GitHubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  // Get initial users (testing purposes)
  const fetchUsers = async () => {
    setLoading();

    const response = await fetch(`${gitHubUrl}/users`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${gitHubToken}`,
      },
    });
    const data = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GitHubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
