// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on

function toggleDarkMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
  }