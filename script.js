window.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const toggleInput = document.getElementById('mode-toggle');
  const body = document.body;
  const modeIcon = document.getElementById('mode-icon');

  // Load mode from localStorage
  let darkMode = localStorage.getItem('darkMode') === 'true';
  setMode(darkMode);

  function setMode(isDark) {
    if (isDark) {
      body.classList.add('dark-mode');
      modeIcon.textContent = 'light_mode'; // sun icon
    } else {
      body.classList.remove('dark-mode');
      modeIcon.textContent = 'dark_mode'; // moon icon
    }
  }

  toggleInput.addEventListener('click', () => {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    setMode(darkMode);
  });

  // Sidebar hamburger toggle
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  let sidebarOpen = true;
  function setSidebar(open) {
    sidebarOpen = open;
    if (sidebarOpen) {
      sidebar.classList.add('sidebar-open');
    } else {
      sidebar.classList.remove('sidebar-open');
    }
  }
  setSidebar(false); // Sidebar hidden by default
  sidebarToggle.addEventListener('click', () => {
    setSidebar(!sidebarOpen);
  });

  // Pop-in effect for all h1 and p elements
  const elements = document.querySelectorAll('h1, p');
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('pop-in');
    }, i * 120); // stagger the animation
  });
});