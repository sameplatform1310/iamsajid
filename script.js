document.getElementById('mode').addEventListener('click', function () {
        const html = document.documentElement;
        const systemIcon = document.getElementById('system');
        const sunIcon = document.getElementById('sun');
        const moonIcon = document.getElementById('moon');

        if (html.classList.contains('light-mode')) {
          // Switch to dark mode
          html.classList.remove('light-mode');
          html.classList.add('dark-mode');

          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
          systemIcon.style.display = 'none';
        } else if (html.classList.contains('dark-mode')) {
          // Switch to system mode
          html.classList.remove('dark-mode');
          html.classList.add('system-mode');

          sunIcon.style.display = 'none';
          moonIcon.style.display = 'none';
          systemIcon.style.display = 'block';
        } else {
          // Switch to light mode
          html.classList.remove('system-mode');
          html.classList.add('light-mode');

          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
          systemIcon.style.display = 'none';
        }
      });

    