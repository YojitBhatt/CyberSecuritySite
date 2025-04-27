// ========== SIGNUP FORM ==========
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (email && password) {
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      alert('Signup Successful! Please Login.');
      window.location.href = 'login.html';
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// ========== LOGIN FORM ==========
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      alert('Login Successful!');
      window.location.href = 'index.html'; // Redirect to home
    } else {
      alert('Invalid Email or Password. Please try again.');
    }
  });
}

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
      contactForm.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
}

// ========== MOBILE MENU (optional if you want a collapsible menu) ==========
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('nav ul');

if (navToggle) {
  navToggle.addEventListener('click', function() {
    navList.classList.toggle('show');
  });
}
