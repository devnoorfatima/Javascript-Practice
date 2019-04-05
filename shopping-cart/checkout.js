// Get the input field
let input = document.querySelector(".caps");

// Get the warning text
let text = document.getElementById("text");

// When the user presses any key on the keyboard, run the function
input.addEventListener("keyup", function (event) {

    // If "caps lock" is pressed, display the warning text
    if (event.getModifierState("CapsLock")) {
        text.style.display = "block";
    } else {
        text.style.display = "none"
    }
});

function phonenumber(inputtxt) {
    let phoneno = /^\d{11}$/;
    if ((inputtxt.value.match(phoneno))) {
            return true;
        } else {
            alert("message");
            return false;
        }
    }

    // function display() {
    //     const form=document.querySelector('.form');
    //     const icons=document.querySelector('.icons');
    //     const header=document.querySelector('.head');
    //     const final=document.querySelector('.final');
    //     if(input.value){
    //     form.style.display= 'none';
    //    icons.style.display= 'none';
    //    header.style.display= 'none';
    //    final.style.display= 'none';
    // }
    // }