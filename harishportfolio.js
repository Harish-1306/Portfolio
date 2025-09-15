document.addEventListener('DOMContentLoaded', () => {

  // EmailJS Service Credentials (configured by the user)
  const EMAILJS_SERVICE_ID = "service_9d5qqak";
  const EMAILJS_TEMPLATE_ID = "template_1t75grt";
  const EMAILJS_PUBLIC_KEY = "veCtou7AagpbItsV3";

  // ===================== NAVIGATION & SCROLL EFFECTS =====================
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  const header = document.querySelector('header');

  // Toggle mobile navigation on hamburger click
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      hamburger.classList.toggle('toggle');
      body.classList.toggle('no-scroll');
    });
  }

  // Close mobile nav when a link is clicked
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
        body.classList.remove('no-scroll');
      });
    });
  }

  // Add a class to the navbar on scroll for a subtle effect
  if (header) {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ===================== CONTACT FORM SUBMISSION =====================
  
  // Initialize EmailJS with your Public Key
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
  });

  const contactForm = document.getElementById('contact-form');
  const statusMessage = document.getElementById('status-message');
  const submitBtn = document.querySelector('.btn-submit');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      // Show a loading state
      submitBtn.disabled = true;
      submitBtn.classList.add('loading');
      statusMessage.textContent = 'Sending message...';
      statusMessage.className = 'status-message';
      statusMessage.style.display = 'block';

      // Send the email using the EmailJS sendForm method
      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            statusMessage.textContent = 'Message sent successfully!';
            statusMessage.className = 'status-message success';
            contactForm.reset(); // Clear the form fields
          },
          (error) => {
            console.error('FAILED...', error);
            statusMessage.textContent = 'Failed to send message. Please try again later.';
            statusMessage.className = 'status-message error';
          }
        )
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.classList.remove('loading');
          setTimeout(() => {
            statusMessage.style.display = 'none';
          }, 5000);
        });
    });
  }
});