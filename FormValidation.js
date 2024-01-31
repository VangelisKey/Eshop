function validateForm() {
    var fname =
    document.forms.RegForm.Fname.value;
    var lname =
        document.forms.RegForm.Lname.value;
    var birthday =
        document.forms.RegForm.Birthday.value;
    var address =
        document.forms.RegForm.Address.value;
    var email =
        document.forms.RegForm.Email.value;
    var emailr =
        document.forms.RegForm.Emailrepeat.value;
    var phone =
        document.forms.RegForm.Phone.value;
    var username =
        document.forms.RegForm.Username.value;
    var psw =
        document.forms.RegForm.Psw.value;
    var pswrepeat =
        document.forms.RegForm.Pswrepeat.value;
    var maddress =
        document.forms.RegForm.Maddress.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
    var regName = /\d+$/g;                                    // Javascript reGex for Name validation
    var regPsw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (fname == "" || regName.test(fname)) {
        window.alert("Please enter your first name properly.");
        return false;
    }
    if (lname == "" || regName.test(lname)) {
        window.alert("Please enter your last name properly.");
        return false;
        
    }

    if (birthday=="") {
        window.alert("Please enter your birthday.");
        return false;
    }

    if (address == "") {
        window.alert("Please enter your address.");
        return false;
    }


    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        return false;
    }

    if (emailr != email) {
        window.alert("The emails do not match.");
        return false;
    }

    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    if (username == "") {
        alert("Please enter your username");
        return false;
    }
      
    if (psw == "") {
        alert("Please enter your password");
        return false;
    }

    if(!regPsw.test(psw))
    { 
        alert("Enter a valid password");
        return false;
    }

    if(!(psw==pswrepeat))
    { 
        alert("Your passwords do not match");
        return false;
    }

    if (maddress == "") {
        window.alert("Please enter your mailing address.");
        return false;
    }


    alert("Your account has been created!");
    return true;
}

