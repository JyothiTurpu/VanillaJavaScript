const posts = [
{title: 'Post 1', body: 'This is body one'},
{title: 'Post 2', body: 'This is body two'}
];

function createPost(post)
{
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      posts.push(post);
      const error = false;
      if(error)
        reject('Something Went Wrong');
      else
        resolve();
    },2000);
  });
}

function getPosts()
{
  setTimeout(function(){
    let output = ''
    posts.forEach(function(post){
      output += `<li>Title: ${post.title}</li>
      <li>Body: ${post.body}</li>
      <br><br>`;
    });
    document.body.innerHTML = output;
  },1000);
}

createPost({title: "Post 3",body: "This is body three"}).then(getPosts).catch(function(err){
  console.log(err);
});