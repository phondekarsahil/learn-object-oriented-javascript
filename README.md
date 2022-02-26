# Object Oriented JavaScript

## Introduction

* Everything in JavaScript is an object.
* But not absolutely everything is an object. 
* For example `null` is not an object we can't call any methods or properties on this. Likewise numbers booleans and strings, they're not objects they're all called `primitive types` in JavaScript.
* However these things that are not objects can still actually behave like objects in JavaScript because JavaScript can wrap them in an object when we need to and it does that silent in the background.
* For example
```js
const name = "Tony";
console.log(typeof name); // 'string'
// But we can still access the lenght property
console.log(name.length) // 4
```
* Here, JavaScript will look at this and say okay it's a string and you want to use this `length` property on it therefore I'm going to wrap this `primitive type` i.e this string inside an object temporarily so that you can call this `length` method on it and we can give you an answer which is `4`.
* This is same as creating a string object
```js
const name = new String("Tony");
```

## Object Literals

* We need to create an `object literal`, so the way we create an object this way is by opening and closing our curly braces `{}`.
* So this right here at the minute is just an empty object right so inside here what we can do is add different properties and different methods to this object.
```js
let userOne = {
    email: 'abc@xyz.com',
    name: 'Tom'
}
```
* So what we're doing here is called `encapsulation`. We're capturing everything to do with the user here and we're containing it all together in one piece, one object or encapsulating what it means to be this user inside an object.
* So the literal meaning of `encapsulation` is to enclose a mixture of something inside a capsule so you can think of this object right here this is the capsule and the mixture is all of the different properties inside that capsule that's essentially what encapsulation means.
* If we want to add any kind of methods any kind of functionality we can add it as follows-
```js
let userOne = {
    email: 'abc@xyz.com',
    name: 'Tom'
    login() {
        console.log(this.email, "has logged in");
    },
}
```
* When we only ever need one type of object then something like this would do, just making an object literal. But if we ever want to create multiple versions of the same type of object like this we want to create several different users then what we're going to do is use a `class`.

## Classes

* If we want to create multiple objects of similar type, we can do this and we can do this in a couple of different ways.
* One way is to use the `ProtoType Model` but with the release of `es6` we gained a little syntactic sugar so that we can solve this problem using `classes` as well.
* Under the hood `classes` essentially do the same thing as working with `prototypes` in JavaScript but some people think that classes are nicer or easier to work with.
* `JavaScript` as a language doesn't really have `classes` built into it. So this is just some syntactic sugar which emulates the idea of classes in JavaScript and under the hood classes are just doing the same thing as the `prototype` model.
* You can think of a `class` in JavaScript as a bit like a blueprint that describes a particular object in a non specific way.
* Defining class -
```js
class User {
    
}
```
* So we have our class defined right here but nothing in it yet now the first thing we need to do inside a class is to create a constructor function.
* A constructor function is the function that actually construct our objects or create them.
```js
class User {
    constructor() {

    }
};
let user = new User();
```
* This `new` keyword does three things essentially. 
    1. The first thing it does is create a new empty object
    2. Then what it does is take that object and it sets the value of `this` inside the class to be the new empty object. So whenever we refer to `this` inside the class then it's the new object that is just created.
    3. Then we can go about adding properties on to that object by using `this` keyword.
```js
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}

var userOne = new User('abz@xyz.com', 'Tom');
var userTwo = new User('xyz@abc.com', 'Jerry');

userOne.login();
userTwo.logout();
```

## Method chaining
* To achieve `method chaining`, we don't want to return an undefined value whenever we call a method. What we want to do is return the instance of that object. 
* Now we know that the instance of the object is stored in `this` keyword. So all we need to do is `return this;` in the method.
```js
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.name, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.name, 'just logged out');
        return this;
    }
}

var userOne = new User('abz@xyz.com', 'Tom');

userOne.login().logout(); // Tom just logged in /n Tom just logged out 
```

## Class Inheritance

* We can achieve class inheritance using the `extends` keyword. It will add all of the Child Class properties to the parent class inheriting that class.
* Now we can add extra properties to the parent class.
```js
class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.name != user.name
        });
    }
}
const admin = new Admin('def@ghi.com', 'Tony');
admin.deleteUser('Tom');
```

## Constructors (Under the hood)

* `es6` classes were actually just a bit of syntactic sugar built on top of the JavaScript `prototype` model.
* So JavaScript as a language doesn't really have classes. The stuff we've seen right in here as so far basically been pretend classes built into the language as a way to emulate how classes behave.
* Now the `JavaScript prototype model` was the original way we tend to create or emulate classes in JavaScript before we had this `class` keyword.
* When we now create a class using the new `es6` `class` keyword javascript is still working the same way as it did before to emulate these classes using the prototype model under the hood.
```js
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    };
}
```
* We can still create the objects in the same way using the `new` keyword
```js
var userOne = new User('ryu@ninjas.com', 'Ryu');
```
* But when we add methods to this `User` function using `this` keyword, that method is added as a property to the object and not as a `prototype` as we have for objects created using `class`.
* Generally when we want to attach methods to an emulated class like this
we don't put those methods inside the constructor function instead we use the prototype property on this constructor function.

## Prototype
* It's always better to use the prototype property to add methods instead of using the constructor.
* Looking at objects in the console we saw that our objects had that `__proto__` property. In that we could see all of the different methods attached to that particular object.
* When we create methods using constructors they are not kept inside that `prototype` property instead they are directly inside the object we created
* That's because we've attached this function directly inside the constructor.
* So we need to attach our methods to some kind of prototype property instead of directly on to our objects.
* Prototype actually contains the functionality, i.e the different methods for that object type.
* Using prototype what we're doing is defining all methods once on a single `object prototype` and then when an object wants to use that method it will know how to do that. We can say it is similar to having a property of a class which every object can use.

```js

// Similiar to class constructor
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

// similar to adding methods in class
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
};

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
};

var userOne = new User('ryu@ninjas.com', 'Ryu');
userOne.login();
```

## Prototype Inheritance
* Prototype inheritance can be achieved by three steps.
    1. Inheriting the child constructor inside the parent constructor function using the `apply` method. We just need to select the constructor function we need to inherit and call `apply` method by passing the instance of the parent object i.e `this` and array of arguments required by the child constructor.
    2. Attact all the prototype methods of child class to parent class using `Object.create()` method.
    3. Add extra properties and prototype functions to the parent class.
 
```js
function Admin(email, name, isSuperAdmin){
    User.apply(this, [email, name]);
    this.isSuperAdmin = isSuperAdmin;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};
var admin = new Admin('shaun@ninjas.com', 'Shaun', true);
```
* If we have some other class inheriting the `Admin` class, we will find the chain of `__proto__` properties. This is called a `prototype chain`.