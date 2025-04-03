// scripts.js

// Script 1: Navflash
function flashNavbarColor() {
    var navbar = document.getElementById("contactnav");
    navbar.style.backgroundColor = "#3498db"; // Change color to blue
    setTimeout(function() {
      navbar.style.backgroundColor = "#333"; // Revert color back to default after 500 milliseconds
    }, 800);
  }

// Script 2: Navigate
	window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar2');
            // Show navbar when scrolled 200px or more
            if (window.pageYOffset > 230) {
                navbar.style.right = '0';
            } else {
                navbar.style.right = '-300px';
            }
        });

// Script 3: Navselect
	document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('section');
            const navButtons = document.querySelectorAll('.nav-button');

            // Function to check which section is in view
            function makeActive() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                        current = section.getAttribute('id');
                    }
                });

                navButtons.forEach(button => {
                    button.classList.remove('active');
                    if (button.getAttribute('href') === `#${current}`) {
                        button.classList.add('active');
                    }
                });
            }

            // Run on scroll and on initial load
            window.addEventListener('scroll', makeActive);
            makeActive();
        });

// Script 3: Fullscreen photos
	document.addEventListener('DOMContentLoaded', function() {
    // Select all grid containers (sections)
    const gridContainers = document.querySelectorAll('.grid-container');
    
    gridContainers.forEach(container => {
        const gridItems = container.querySelectorAll('.grid-item');
        const overlay = document.querySelector('.fullscreen-overlay');
        const fullscreenImage = document.querySelector('.fullscreen-image');
        const closeBtn = document.querySelector('.close-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const fullscreenTitle = document.querySelector('.fullscreen-title');
        const fullscreenAuthor = document.querySelector('.fullscreen-author');
        
        let currentIndex = 0;
        let currentGridItems = []; // This will store items from the current section only
        
        // Open fullscreen overlay
        gridItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentGridItems = Array.from(gridItems); // Store items from this section only
                currentIndex = index;
                updateFullscreenImage();
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close fullscreen overlay
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Navigate between images
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + currentGridItems.length) % currentGridItems.length;
            updateFullscreenImage();
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % currentGridItems.length;
            updateFullscreenImage();
        });
        
        // Update fullscreen image and info
        function updateFullscreenImage() {
            const activeItem = currentGridItems[currentIndex];
            const imgSrc = activeItem.querySelector('img').src;
            const title = activeItem.querySelector('h3').textContent;
            const author = activeItem.querySelector('p').textContent;
            
            fullscreenImage.src = imgSrc;
            fullscreenImage.alt = activeItem.querySelector('img').alt;
            fullscreenTitle.textContent = title;
            fullscreenAuthor.textContent = author;
        }
    });
    
    // These event listeners can remain global
    const overlay = document.querySelector('.fullscreen-overlay');
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

    });
    
    // Close when clicking outside image
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Script 4: Custom playbutton //

	document.addEventListener('DOMContentLoaded', function() {
            const videoContainers = document.querySelectorAll('.video-container');
            
            videoContainers.forEach(container => {
                container.addEventListener('click', function() {
                    const videoId = this.getAttribute('data-video-id');
                    const title = this.getAttribute('data-title');
                    
                    this.innerHTML = `
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            title="${title}"
                        ></iframe>
                    `;
                });
            });
        });
		
// Script 5: Fade in video //

document.addEventListener("DOMContentLoaded", function() {
    const mediaElements = document.querySelectorAll('img, video');
    
    mediaElements.forEach(element => {
      if (element.complete || element.readyState > 3) {
        // Already loaded
        element.style.opacity = 1;
      } else {
        element.addEventListener('load', () => {
          element.style.opacity = 1;
        });
        element.addEventListener('loadeddata', () => {
          element.style.opacity = 1;
        });
        element.addEventListener('error', () => {
          // Handle broken images
          element.style.opacity = 1;
        });
      }
    });
  });