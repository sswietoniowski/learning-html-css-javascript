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
