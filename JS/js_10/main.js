/*створити  функцію щоб передати імя вік пароль і логін
міняти можна пароль і вік
вік тільки більший за сталий
* */

function  user(name,age,login,password){

    function setAgeUser(newAge){
        if(newAge>age){
            age=newAge
        }
        else {
            return console.warn("Ваш вік менший за попередній")
        }
        return console.log(age);
    }
    function setPasswordUser(){
        if(prompt("login-->")===login && prompt("password-->")===password){
            const newPassword=prompt("newPassword-->");
            if(newPassword.length>6 && newPassword.split("").includes("@")){
                password=newPassword;
            }
            else {
                return console.warn("error")
            }
        }
        else {
            return console.warn("Ви щось неправельно ввели");
        }
        return console.log("НОВИЙ ПАРОЛЬ",password);
    }

    return{
        name,age,login,password,
        setAgeUser,setPasswordUser
    }
}

const User= user("ivan",19,"ivan1906","ivan@1906");
console.log(User);
User.setAgeUser(20);
User.setAgeUser(19);
User.setPasswordUser();
