function login(){
    let email =localStorage.getItem("emails");
    let passwords =localStorage.getItem("passwords");


    let username = document.getElementById("emails").value;
    let password = document.getElementById("passwords").value;
    if((email=== username)&&(password===passwords)){
        window.open("main.html")
    }
    else if((email !== username)&& (password !== passwords)){
        alert("please creat account")
    }
    else{
        alert("Invalid email pasword")
    }
}