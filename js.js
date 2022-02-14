function validateForm() {

/* first name */
    let fn = document.forms["form"]["firstname"].value;
    let fnpattern = /[a-zA-Z]{1,}$/;
    let fnsubmit = fn.match(fnpattern);

/* last name */
    let ln = document.forms["form"]["lastname"].value;
    let lnpattern = /[a-zA-Z]{1,}$/;
    let lnsubmit = ln.match(lnpattern);

/* email */
    let em = document.forms["form"]["email"].value;
    let empattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    let emsubmit = em.match(empattern);

/* statements */
    if (fn == "" || ln == "" || em == "") {
        alert("Cannot leave blank! Please input.")
    }
    else if(!fnsubmit) {
        alert("Names must contain at least 1 character. No numerical values.")
    }
    else if(!lnsubmit) {
        alert("Names must contain at least 1 character. No numerical values.")
    }
    else if(!emsubmit) {
        alert("Email invalid!")
        return false;
    }
        else {
        alert("Form submitted! :)")
    }
}