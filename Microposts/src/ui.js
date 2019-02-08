class UI{
  constructor(){
    this.posts = document.getElementById('posts');
    this.title = document.getElementById('title');
    this.body = document.getElementById('body');
    this.id = document.getElementById('id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'Add';
  }

  showPosts(posts){
    let html = '';
    posts.forEach(post => {
      html += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id=${post.id}>
            <i class="fa fa-pencil"></i>
          </a>
          <a href="#" class="delete card-link" data-id=${post.id}>
            <i class="fa fa-remove"></i>
          </a>
        </div>
      </div>
      `;
    });

    this.posts.innerHTML = html;
    
  }

  reset()
  {
    this.title.value = '';
    this.body.value = '';
    this.id.value = '';
  }

  showAlert(className,message)
  {
    const successDiv = document.createElement('div');
    successDiv.className = className;
    successDiv.innerText = message;

    document.querySelector('.postContainer').insertBefore(successDiv,this.posts);

    setTimeout((() => {this.clearAlert()}),3000);
  }

  clearAlert()
  {
    document.querySelector('.alert').remove();
  }

  showNewPost(resp){
    this.reset();
    this.showAlert('alert alert-success','Post Added');
    let newPost = document.createElement('div');
    newPost.setAttribute("class","card mb-3"); 
    newPost.innerHTML = 
        `<div class="card-body">
          <h4 class="card-title">${resp.title}</h4>
          <p class="card-text">${resp.body}</p>
          <a href="#" class="edit card-link" data-id=${resp.id}>
            <i class="fa fa-pencil"></i>
          </a>
          <a href="#" class="delete card-link" data-id=${resp.id}>
            <i class="fa fa-remove"></i>
          </a>
        </div>`;

    this.posts.appendChild(newPost);

  }

  removePost(element,resp)
  {
    this.showAlert('alert alert-success',resp);
    this.posts.removeChild(element);
  }

  displayPostInfo(id,title,body)
  {
    this.title.value = title;
    this.body.value = body;
    this.id.value = id;

    this.postSubmit.textContent = 'Update Post';
    this.postSubmit.className = 'post-submit btn btn-warning btn-block';

    let cancel = document.createElement('button');
    cancel.className = 'post-cancel btn btn-light btn-block';
    cancel.textContent = 'Cancel Update';

    if(document.querySelector('.post-cancel') === null) 
      this.postSubmit.insertAdjacentElement('afterend',cancel);
  }

  restoreInitialState()
  {
    this.reset();

    this.postSubmit.textContent = 'Post It';
    this.postSubmit.className = 'post-submit btn btn-primary btn-block';
    document.querySelector('.post-cancel').remove();
  }

  displayEditedPost(resp)
  {
    let matches = document.querySelectorAll(`a[data-id='${resp.id}']`);
    
    matches[0].previousElementSibling.textContent = resp.body;
    matches[0].previousElementSibling.previousElementSibling.textContent = resp.title;

    this.restoreInitialState();
  }

 
}

export const ui = new UI();