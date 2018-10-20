function MemberFactory(){

  this.createMember =  function(name,type){

    let member;

    if(type === 'Simple'){
      member = new SimpleMemberShip(name);
    }
    else if(type === 'Standard'){
      member = new StandardMembership(name);
    }
    else if(type === 'Super'){
      member = new SuperMembership(name);
    }
    member.type = type;
    member.define = function(){
      console.log(`${member.name} has a membership of type "${member.type}" that would cost ${member.cost}`);
    }
    return member;
  }

  this.deleteMember = function(name,type){
    const updateMembers = members.filter(member => {
      return (member.name !== name && type !==  member.type);
    });
    return updateMembers;
  }

}

function SimpleMemberShip(name){
  this.name = name;
  this.cost = "$20";
}

function StandardMembership(name){
  this.name = name;
  this.cost = "$40";
}

function SuperMembership(name){
  this.name = name;
  this.cost = "$60";
}

var members = [];
const factory = new MemberFactory();
members.push(factory.createMember('John Doe','Simple'));
members.push(factory.createMember('Chris Jackson','Super'));
members.push(factory.createMember('Janice Williams','Standard'));

console.log(members);
members.forEach(member => {
  member.define();
});

members = factory.deleteMember('John Doe','Simple');
members = factory.deleteMember('John Doe','Simple');
members = factory.deleteMember('John Doe','Simple');
members = factory.deleteMember('Janice Williams','Standard');
console.log(members);