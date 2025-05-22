let user ={
    username:"Ashok",
    showUsername: function(){
        console.log(this.username);
    }
}

function displayUsername(){
    console.log(this.username);
}

user.showUsername();
displayUsername();
displayUsername.call(user);
