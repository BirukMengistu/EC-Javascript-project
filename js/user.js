

// object literlas and inhertance and object prototype.
function User(email,name){
    this.email= email
    this.name =name
};
User.prototype.login =()=>{
    this.online = true;
    console.log(`user status online ${email}`);
}
User.prototype.logout =()=>{
    this.online = false;
    console.log(`user status logout ${email}`);
}
function Admin(...args){
    User.apply(this,args);
    this.role ='Supper users';
    console.log(args);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
   users = users.filter(user=>{
     return user.email != u.email;
   });
}

let admin = new Admin('bm82008@gmail.com','Biruk');
let user1 = new User('bm82008@gmail.com','Biruk');
let user2 = new User('mg82008@gmail.com','Tome')
console.log(admin);

var users =[user1,user2,admin];




