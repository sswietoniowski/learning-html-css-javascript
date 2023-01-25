const gitHubUrl = process.env.REACT_APP_GITHUB_API_URL;
const gitHubToken = process.env.REACT_APP_GITHUB_API_PAT;

// Get search results
export const searchUsers = async (text) => {
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

  return items;
};

// Get single user
export const getSingleUser = async (login) => {
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

    return user;
  }
};

export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created:date-desc',
    per_page: 10,
  });

  const response = await fetch(`${gitHubUrl}/users/${login}/repos?${params}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${gitHubToken}`,
    },
  });

  const repos = await response.json();

  return repos;
};
