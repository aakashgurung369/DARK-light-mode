const toggleSwitch = document.getElementById('toggle-dark-mode');
    const body = document.querySelector('body');
    
    toggleSwitch.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
    });