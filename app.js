function Menu(e){
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

//START of JS for Download button
//START OF JS FOR CONTACT SUBMIT BUTTON
function sendEmail(){
    Email.send({
        SecureToken: "",
        //After a securetoken has been entered above the next 3 lines can be removed.
        //They are here for local testing purposes only
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",

        To : 'them@website.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Inquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}