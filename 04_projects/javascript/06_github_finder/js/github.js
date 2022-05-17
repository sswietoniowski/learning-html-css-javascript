class GitHub {
  constructor() {
    // define these properties to overcome GitHub API rate limit
    this.client_id = 'PUT_REAL_CLIENT_ID';
    this.client_secret = 'PUT_REAL_CLIENT_SECRET';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
