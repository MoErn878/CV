// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Smooth Scrolling
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Form Validation
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
          alert('All fields are required.');
          return;
      }

      if (!validateEmail(email)) {
          alert('Please enter a valid email address.');
          return;
      }

      alert('Form submitted successfully!');
      form.reset();
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }

  // Back to Top Button
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '↑';
  backToTopButton.id = 'backToTop';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '2rem';
  backToTopButton.style.right = '2rem';
  backToTopButton.style.padding = '0.5rem 1rem';
  backToTopButton.style.backgroundColor = '#4a5ba8';
  backToTopButton.style.color = '#fff';
  backToTopButton.style.border = 'none';
  backToTopButton.style.borderRadius = '4px';
  backToTopButton.style.cursor = 'pointer';
  backToTopButton.style.display = 'none';
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Enhanced Dynamic Experience Timeline
  const experienceData = [
      {
          title: 'Senior Developer at XYZ Corp',
          date: 'Jan 2020 - Present',
          description: 'Developed numerous web applications and led a team of developers to create high-performance software solutions. Utilized technologies such as React, Node.js, and Docker to build scalable applications.'
      },
      {
          title: 'Junior Developer at ABC Inc',
          date: 'Jun 2015 - Dec 2019',
          description: 'Worked on various projects including web development, backend services, and database management. Improved application performance by optimizing SQL queries and refactoring code.'
      }
  ];

  const experienceSection = document.getElementById('experience');
  const experienceList = experienceSection.querySelector('ul');
  experienceList.innerHTML = ''; // Clear static content

  experienceData.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.classList.add('timeline-item');
      
      const title = document.createElement('h3');
      title.textContent = item.title;
      
      const date = document.createElement('p');
      date.textContent = item.date;
      date.classList.add('timeline-date');

      const description = document.createElement('p');
      description.textContent = item.description;
      description.classList.add('timeline-description');
      description.style.display = 'none';

      const toggleButton = document.createElement('button');
      toggleButton.textContent = 'Show Details';
      toggleButton.classList.add('toggle-details');
      toggleButton.addEventListener('click', () => {
          if (description.style.display === 'none') {
              description.style.display = 'block';
              toggleButton.textContent = 'Hide Details';
          } else {
              description.style.display = 'none';
              toggleButton.textContent = 'Show Details';
          }
      });

      listItem.appendChild(title);
      listItem.appendChild(date);
      listItem.appendChild(toggleButton);
      listItem.appendChild(description);
      experienceList.appendChild(listItem);
  });
});
