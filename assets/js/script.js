document.getElementById("myForm").addEventListener("submit", function (hi) {
  hi.preventDefault();

//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const content = document.getElementById("subject").value.trim();
//   const message = document.getElementById("message").value.trim();
  
  emailjs.sendForm("service_0tkbjbl", "template_5xc3sv4", this).then(function () {
      document.querySelector(".sent-message").style.display = "block";
      document.querySelector(".error-message").innerHTML = "";
      document.getElementById("myForm").reset();
    })
    .catch(function (error) {
      document.querySelector(".error-message").innerHTML =
        "Failed to send message!";
      console.error(error);
    });
});
const dark=document.getElementById('active');
dark.addEventListener('click',function(event){
  document.getElementsByTagName('body').classList.toggle('dark');
  console.log('Dark')
})