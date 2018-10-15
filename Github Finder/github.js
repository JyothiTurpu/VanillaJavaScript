class GitHub{
  constructor(){
    this.client_id = '9c926ce3f778604fbe75';
    this.client_secret = 'd07aba09b50f76ec8181ae37ea62e159cf079a2a';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }


  async getUser(user)
  {
    const profileResponse  = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse  = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repose = await reposResponse.json();
    
    return{
      profile,
      repose
    }

  }

}