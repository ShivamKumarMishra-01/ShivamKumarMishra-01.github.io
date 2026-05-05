$(document).ready(function(){

    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    document.body.classList.add(savedTheme);
    updateThemeToggleIcon(savedTheme);

    // Theme Toggle Functionality
    $('#theme-toggle').click(function() {
        const currentTheme = document.body.className;
        const newTheme = currentTheme.includes('light-mode') ? 'dark-mode' : 'light-mode';
        
        document.body.classList.remove('dark-mode', 'light-mode');
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggleIcon(newTheme);
    });

    function updateThemeToggleIcon(theme) {
        const icon = $('#theme-toggle i');
        if (theme === 'light-mode') {
            icon.removeClass('fa-moon').addClass('fa-sun');
            $('#theme-toggle').attr('title', 'Switch to Dark Mode');
        } else {
            icon.removeClass('fa-sun').addClass('fa-moon');
            $('#theme-toggle').attr('title', 'Switch to Light Mode');
        }
    }

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});

// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}