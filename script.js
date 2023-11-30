const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuButton.classList.toggle('rotate');
});

function removeClass() {
  menuButton.classList.remove('rotate');
}

document.onscroll = () => {
  navbar.classList.remove('show');
  menuButton.classList.remove('rotate');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

function sendMail() {
  var params = {
    from_name: document.getElementById("from_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_6ovqv9c"; // service ID User
  const templateID = "template_w7d32cz"; // template ID User

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("from_name").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
      console.log("Your message sent successfully");

    })
    .catch(err => {
      console.log("Error:", err);
      alert("Failed to send your message. Please try again later.");
    });
}