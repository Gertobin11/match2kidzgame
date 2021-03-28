//got the function from our walkthrough project with the code institute
function sendMail(contactForm) {
    emailjs.send("match2kidz", "match2kidz", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feed_back": contactForm.feedback.value
    })
    //function added to notify user of successful feedback left and also to clear the input fields
    .then(
        function() {
            alert("Your feedback was sent successfully!!!");
            contactForm.name.value = "";
            contactForm.emailaddress.value = "";
            contactForm.feedback.value = "";
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}