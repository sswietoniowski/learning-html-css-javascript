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

  // Get search results
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${gitHubUrl}/search/users?${params}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${gitHubToken}`,
      },
    });
    const { items } = await response.json();

    console.log(items);

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers: searchUsers,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
