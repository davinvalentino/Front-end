function validateForm(){
        var x = document.forms["formLogin"]["emailLogin"].value;
        if (x == ""){
            alert("Email must be filled");
            return false;
        }

        var y = document.forms["formLogin"]["password"].value;
        if (y == ""){
            alert("Password must be filled");
            return false;
        }
}

function validateForm2(){
    var x = document.forms["registerForm"]["fname"].value;
    if (x == ""){
        alert("Name must be filled");
        return false;
    }else if (x.length < 8){
        alert("Name must contain at least 8 characters");
        return false;
    }
    
    var y = document.forms["registerForm"]["emailRegister"].value;
    if (y == ""){
        alert("Email must be filled");
        return false;
    }

   var z = document.forms["registerForm"]["gender"].value;
   if(z == ""){
       alert("Choose a gender");
       return false;
   }

   var a = document.forms["registerForm"]["city"].value;
   if (a == ""){
       alert("Choose city");
       return false;
   }

   var b = document.forms["registerForm"]["address"].value;
   if (b == ""){
       alert("Address must be filled");
       return false;
   } else if (b != "Street"){
       alert("Address must include 'Street'");
       return false;
   }
}