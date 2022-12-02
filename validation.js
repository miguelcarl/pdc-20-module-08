function confirm(){
    if(document.empForm.empid.value==""){
        document.getElementById("empidErr").innerHTML = "Please enter employee ID";
        return false;
    }

    if(document.empForm.fname.value==""){
        document.getElementById("fnameErr").innerHTML = "Please enter your first name";
        return false;
    }

    if(document.empForm.lname.value==""){
        document.getElementById("lnameErr").innerHTML = "Please enter your last name";
        return false;
    }

    if(document.empForm.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;
    } else {
        var regex = /^\$+@\S+\.\S+$/;
        if(regex.test(document.empForm.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }
}