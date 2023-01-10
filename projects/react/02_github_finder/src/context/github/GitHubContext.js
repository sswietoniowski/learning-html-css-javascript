import { createContext, useReducer } from 'react';

import GitHubReducer from './GitHubReducer';

const GitHubContext = createContext();

const gitHubUrl = process.env.REACT_APP_GITHUB_API_URL;
const gitHubToken = process.env.REACT_APP_GITHUB_API_PAT;

export const GitHubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
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

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  // Get single user
  const getSingleUser = async (login) => {
    setLoading();

    const response = await fetch(`${gitHubUrl}/users/${login}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${gitHubToken}`,
      },
    });

    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const user = await response.json();

      dispatch({
        type: 'GET_USER',
        payload: user,
      });
    }
  };

  // Clear search results
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers: searchUsers,
        clearUsers: clearUsers,
        getSingleUser: getSingleUser,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
