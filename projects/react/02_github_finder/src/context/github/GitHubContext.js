import { createContext, useReducer } from 'react';

import GitHubReducer from './GitHubReducer';

const GitHubContext = createContext();

const gitHubUrl = process.env.REACT_APP_GITHUB_API_URL;
const gitHubToken = process.env.REACT_APP_GITHUB_API_PAT;

export const GitHubContextProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

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

  // Set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  // Get user repos
  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: 'created:date-desc',
      per_page: 10,
    });

    const response = await fetch(
      `${gitHubUrl}/users/${login}/repos?${params}`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${gitHubToken}`,
        },
      }
    );

    const repos = await response.json();

    dispatch({
      type: 'GET_REPOS',
      payload: repos,
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        ...state,
        dispatch,
        clearUsers: clearUsers,
        getSingleUser: getSingleUser,
        getUserRepos: getUserRepos,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
