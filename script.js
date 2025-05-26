const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove 'active' from all links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add 'active' to the clicked link
      link.classList.add('active');
    });
  });