
function goToSearch(){
    document.location.href="../../index.html";
    return false;
}

function checkUser(){
    var newUser=[document.querySelector('#email').value, document.querySelector('#password').value ];
            //get all registered users
            users= JSON.parse(localStorage.getItem('users')) || [];
            //check if the new user exist in the registered users
            var exist= false;
            for (let i=0; i<users.length; i++){
                user= users[i];
                if(user[2]==newUser[0] && user[3]==newUser[1] ){ //////////////////////////////////////////////////////
                    exist=true;
                    currentUser= user;
                    break;
                }
            }

            if(exist){
                window.localStorage.setItem('loggedUser', currentUser);
                window.localStorage.setItem('online', "true");
                goToSearch();
                return false;
            }else{
                alert("Incorrect email and/or password... Try again")
                loginform.querySelector('#email').value= "";
                loginform.querySelector('#password').value= "";
            }
            return false;
}

