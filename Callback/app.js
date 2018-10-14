const posts = [
{title: 'Post one', body: 'This is body one'},
{title: 'Post two', body: 'This is body two'}
];

// function createPost(post)
// {
//   setTimeout(function()
// {
//   posts.push(post);
// },2000);
// }

// function getPosts()
// {
//   setTimeout(function(){
//     let output = ''
//     posts.forEach(function(post){
//       output += `<li>Title: ${post.title}</li>
//       <li>Body: ${post.body}</li>`;
//     });
//     document.body.innerHTML = output;
//   },1000);
// }

// createPost({title: "Post Three",body: "This is body three"});

// getPosts();



function createPost(post,callback)
{
  setTimeout(function()
{
  posts.push(post);
  callback();
},2000);
}

function getPosts()
{
  setTimeout(function(){
    let output = ''
    posts.forEach(function(post){
      output += `<li>Title: ${post.title}</li>
      <li>Body: ${post.body}</li>`;
    });
    document.body.innerHTML = output;
  },1000);
}

createPost({title: "Post Three",body: "This is body three"},getPosts);