      const hamburger = document.querySelector('.hamburger');
      const mobileNavLinks = document.querySelector('.mobile-nav-links');

      hamburger.addEventListener('click', () => {
          mobileNavLinks.classList.toggle('open');
      });

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();

              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });

              if (mobileNavLinks.classList.contains('open')) {
                  mobileNavLinks.classList.remove('open');
              }
          });
      });

      const backToTopButton = document.getElementById('back-to-top');

      window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
              backToTopButton.classList.add('show');
          } else {
              backToTopButton.classList.remove('show');
          }
      });

      backToTopButton.addEventListener('click', () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });

      const modalButtons = document.querySelectorAll('.project-details-btn');
      const modals = document.querySelectorAll('.modal');
      const closeButtons = document.querySelectorAll('.close-button');

      modalButtons.forEach(button => {
          button.addEventListener('click', () => {
              const modalId = button.getAttribute('data-modal');
              document.getElementById(modalId).style.display = 'block';
          });
      });

      closeButtons.forEach(button => {
          button.addEventListener('click', () => {
              button.closest('.modal').style.display = 'none';
          });
      });

      window.addEventListener('click', (event) => {
          modals.forEach(modal => {
              if (event.target === modal) {
                  modal.style.display = 'none';
              }
          });
      });

      const themeToggle = document.getElementById('theme-toggle');
      const themeToggleMobile = document.getElementById('theme-toggle-mobile');
      const body = document.body;
      let isDarkMode = localStorage.getItem('darkMode') === 'enabled';

      const enableDarkMode = () => {
          body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'enabled');
          themeToggle.textContent = 'Vaalea tila';
          themeToggleMobile.textContent = 'Vaalea tila';
          isDarkMode = true;
      };

      const disableDarkMode = () => {
          body.classList.remove('dark-mode');
          localStorage.setItem('darkMode', null);
          themeToggle.textContent = 'Tumma tila';
          themeToggleMobile.textContent = 'Tumma tila';
          isDarkMode = false;
      };

      if (isDarkMode) {
          enableDarkMode();
      }

      themeToggle.addEventListener('click', () => {
          isDarkMode ? disableDarkMode() : enableDarkMode();
      });

      themeToggleMobile.addEventListener('click', () => {
          isDarkMode ? disableDarkMode() : enableDarkMode();
      });