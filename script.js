function sendEmail (){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "gauravsharma12477@gmail.com",
        Password : "@computer@developer@12477",
        To : 'coding12477@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form Enquiry..",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}