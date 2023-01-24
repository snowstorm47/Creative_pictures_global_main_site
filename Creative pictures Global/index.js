function sendMail(){
    var params = {
        name: document.getElementById("name") .value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceId = "service_t6zj0u9"
    const templateId = "template_rxpiwi7"
    
    emailjs.send(serviceId, templateId, params)
    .then(
        res => {
             document.getElementById("name") .value = "";
             document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your feed back has been successfully sent, Thank you")
        }
    )
    
    .catch((err) => console.log(err))
}
