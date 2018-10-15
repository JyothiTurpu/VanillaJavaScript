class UI{
  constructor()
  {
    this.profile = document.getElementById('profile');
  }

  showProfile(userProfile){
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${userProfile.avatar_url}">
          <a href="${userProfile.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Reponses: ${userProfile.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${userProfile.public_gists}</span>
          <span class="badge badge-success">Followers: ${userProfile.followers}</span>
          <span class="badge badge-info">Following: ${userProfile.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${userProfile.company}</li>
            <li class="list-group-item">Website: ${userProfile.blog}</li>
            <li class="list-group-item">Location: ${userProfile.location}</li>
            <li class="list-group-item">Member Since: ${userProfile.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repositories</h3>
    <div id="repos"></div>
    `;
  }

  showRepose(userRepose){
    let output = '';

    userRepose.forEach(repos => {
        output += `
        <div class="card card-body mb-2">
          <div class = "row">
            <div class="col-md-6">
              <a href="${repos.html_url}" target="_blank">${repos.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repos.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repos.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repos.forks_count}</span>
            </div>
          </div>
        </div>
        `;
    });

    document.getElementById('repos').innerHTML = output;

  }

  clearProfile()
  {
    this.profile.innerHTML="";
  }

  showAlert(message,className)
  {
    this.clearAlert();
    const div = document.createElement('div');
    div.className=className;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div,search);

    setTimeout(()=>{
      this.clearAlert();
    },3000);
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
}