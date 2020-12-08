let arr = [];


function signup(){
    let name = document.getElementById("names").value
    localStorage.setItem("names" , name)

    let email = document.getElementById("emails").value
    localStorage.setItem("emails" , email)

    let password = document.getElementById("passwords").value
    localStorage.setItem("passwords" , password)

    let male = document.getElementById("males").value
    localStorage.setItem("males" , male)

    let female = document.getElementById("females").value
    localStorage.setItem("females" , female)
    if(male === true){
      arr.push("Name :"+name, "Email :"+email,"Password :"+password,"Male :"+male)
    }
    else{
      arr.push("Name :"+name, "Email :"+email,"Password :"+password,"Female :"+female)
    }
    console.log(arr)

}































    // var student =[];

// var email =document.getElementById("emails").value
// var password =document.getElementById("passwords").value

//     console.log( email + password );
//     alert(  email + "," + password );
//     student.push[email , password];
// }

// function signup(){
//     let name = document.getElementById("names").value
//     let email = document.getElementById("emails").value
//     let password = document.getElementById("passwords").value
//     console.log( name , email + password );
//     alert(  name + "," + email + "," + password );
//     student.push[name , email , password];

//     if (name === names.value && (email === emails.value && (password === passwords.value))){
//         alert("ok")
//         }
//         else{
//             alert("incorect")
//         }
//     }

//     function myFunction() {
//         var x = document.getElementById("passwords");
//         if (x.type === "password") {
//           x.type = "text";
//         } else {
//           x.type = "password";
//         }
//       }
    
        
