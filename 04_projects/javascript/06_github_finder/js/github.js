class GitHub {
  constructor() {
    this.client_id = '4e2c106b37d0574d8f5d';
    this.client_secret = 'e2625bbb1922b1a5ad56cc6b9f759d1b3329706a';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=100&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
