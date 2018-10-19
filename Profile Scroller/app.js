const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Willam Johnson',
      age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];


function profileIterator(profiles){
  let nextIndex = 0;
  return{
    next: function(){
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++],done: false } :
      { done: true }
    }
  };
}

function displayProfile()
{
  const displayInfo = profileData.next().value;
  if(displayInfo !== undefined)
  {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class = "list-group">
      <li class="list-group-item">Name: ${displayInfo.name}</li>
      <li class="list-group-item">Age: ${displayInfo.age}</li>
      <li class="list-group-item">Location: ${displayInfo.location}</li>
      <li class="list-group-item">Preference: ${displayInfo.gender} looking for ${displayInfo.lookingfor}</li>
    </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${displayInfo.image}">
    `;
  }
  else{
    window.location.reload();
  }
}

const profileData = profileIterator(data);
displayProfile();
document.getElementById('next').addEventListener('click',displayProfile);
