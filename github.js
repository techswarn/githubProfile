//Creating a contructur

class GitHub {
  constructor() {
    this.client_id = "59c6d90137ce9db840db";
    this.client_secret = "0f06d7ac4825bb3dacf29775fc2a011a63c97c7f";
    this.repos_count = "5";
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profileData = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile: profileData,
      repos: repos,
    };
  }
}
