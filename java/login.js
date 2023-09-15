const firebaseConfig = {
    apiKey: "AIzaSyAZIL3AfPm_p5Rkq7t_a2or8XA1j5-QpkE",
    authDomain: "bankai-b1c82.firebaseapp.com",
    databaseURL: "https://bankai-b1c82-default-rtdb.firebaseio.com",
    projectId: "bankai-b1c82",
    storageBucket: "bankai-b1c82.appspot.com",
    messagingSenderId: "985047293607",
    appId: "1:985047293607:web:c9d4af9b7a0f250e89c582",
    measurementId: "G-T99R64GE48",
  };
  
  firebase.initializeApp(firebaseConfig);



  function login(){
    var username = $("#username").val()
    var pass = $("#password").val()
    var dataRef = firebase.database().ref("Admin/Users/"+username);
    if(username.trim().length < 1){
        $("#error-text").css("display","block")
        $("#error-text").html("Enter Username")
    }

    else if(pass.length < 8){
        $("#error-text").css("display","block")
        $("#error-text").html("Wrong Password")
    }

    else{
        
    dataRef.once("value", function (snapshot) {
        if(snapshot.exists()){
            $("#error-text").css("display","none")
            var datapass = snapshot.val().password
            if(pass == datapass){
                localStorage.setItem("login", "true")
                localStorage.setItem("username", username)
                window.location.href = "index.html"
            }
            else{
                $("#error-text").css("display","block")
                $("#error-text").html("Wrong Password")
            }
        }

        else{
            $("#error-text").css("display","block")
            $("#error-text").html("Username not exist")
        }

        
      });
    }
  }
  

//   sendData()
//   function sendData(){
 
//       firebase
//       .database()
//       .ref("Admin/Users/Zoro" )
//       .set(
//         {
//           username: "Zoro",
//           password : "BANKAI@1234",
  
//         },
      
//       );
     
    
// }