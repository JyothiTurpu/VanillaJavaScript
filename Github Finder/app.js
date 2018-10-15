const searchUser = document.getElementById('searchUser');
const github = new GitHub();
const ui = new UI();

searchUser.addEventListener('keyup',(e) => {
  const searchText = e.target.value;

  if(searchText !== '')
  {
    github.getUser(searchText).then(data => 
      {
        if(data.profile.message === 'Not Found')
        {
          ui.showAlert('User Not Found','alert alert-danger');
        }else
        {
          ui.showProfile(data.profile);
          ui.showRepose(data.repose);
        }
      });
  }else{
    ui.clearAlert();
    ui.clearProfile();
  }
});