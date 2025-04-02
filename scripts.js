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

// Script 3: Fullscreenphotos
document.addEventListener('DOMContentLoaded', function() {
            const gridItems = document.querySelectorAll('.grid-item');
            const overlay = document.querySelector('.fullscreen-overlay');
            const fullscreenImage = document.querySelector('.fullscreen-image');
            const closeBtn = document.querySelector('.close-btn');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const fullscreenTitle = document.querySelector('.fullscreen-title');
            const fullscreenAuthor = document.querySelector('.fullscreen-author');
            
            let currentIndex = 0;
            
            // Open fullscreen overlay
            gridItems.forEach((item, index) => {
                item.addEventListener('click', () => {
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
                currentIndex = (currentIndex - 1 + gridItems.length) % gridItems.length;
                updateFullscreenImage();
            });
            
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % gridItems.length;
                updateFullscreenImage();
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (!overlay.classList.contains('active')) return;
                
                if (e.key === 'Escape') {
                    overlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                } else if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + gridItems.length) % gridItems.length;
                    updateFullscreenImage();
                } else if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % gridItems.length;
                    updateFullscreenImage();
                }
            });
            
            // Update fullscreen image and info
            function updateFullscreenImage() {
                const activeItem = gridItems[currentIndex];
                const imgSrc = activeItem.querySelector('img').src;
                const title = activeItem.querySelector('h3').textContent;
                const author = activeItem.querySelector('p').textContent;
                
                fullscreenImage.src = imgSrc;
                fullscreenImage.alt = activeItem.querySelector('img').alt;
                fullscreenTitle.textContent = title;
                fullscreenAuthor.textContent = author;
            }
            
            // Close when clicking outside image
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        });