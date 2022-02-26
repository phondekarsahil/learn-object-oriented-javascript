// var userOne = {
//     email: "ryu@ninjas.com",
//     name: "Ryu",
//     login() {
//         console.log(this.email, "has logged in");
//     },
//     logout() {
//         console.log(this.email, "has logged out");
//     },
// };

// userOne.login();
// userOne.logout();

class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        });
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);
// userTwo.deleteUser(userOne); // won't work

console.log(users);


// PROTOTYPE MODEL CLASS
function User2(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    };
}

// Similiar to class constructor
function User3(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

// similar to adding methods in class
User3.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
};

User3.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};

function Admin2(email, name, isSuperAdmin){
    console.log(email, name, isSuperAdmin)
    User3.apply(this, [email, name]);
    this.isSuperAdmin = isSuperAdmin;
}

Admin2.prototype = Object.create(User3.prototype);

Admin2.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};
var admin2 = new Admin2('shaun@ninjas.com', 'Shaun', true);


