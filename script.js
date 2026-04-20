 // Typing Animation
        const texts = ['Anjeli Tajriani Raihanna', 'Backend Developer', 'Freelancer'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.querySelector('.typing-text');

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        type();

        // Smooth Scrolling
        document.querySelectorAll('.read-more-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const card = this.closest('.service-card');
                const title = card.querySelector('h3').innerText;
                const desc = card.querySelector('p').innerText;

                document.getElementById('serviceTitle').innerText = title;
                document.getElementById('serviceDesc').innerText = desc;
                document.getElementById('serviceModal').style.display = 'flex';
            });
        });

                // Kode Penutup Modal
        const modal = document.getElementById('serviceModal');
        const closeBtn = document.querySelector('.close-service-modal');

        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // Active Navigation
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // --- LOGIKA VIDEO MODAL (YANG SUDAH ADA) ---
 const projectModal = document.getElementById('projectModal');
const projectFrame = document.getElementById('projectFrame');
const downloadLink = document.getElementById('downloadLink');
const closeProjectBtn = document.querySelector('.close-project-modal');

document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Ambil path file dari atribut data-file di card
        const card = this.closest('.post-card');
        const filePath = card.getAttribute('data-file');
        
        // Set src iframe dan link download
        projectFrame.src = filePath;
        downloadLink.href = filePath;
        
        projectModal.style.display = 'flex';
    });
});

// Tutup Modal
closeProjectBtn.onclick = () => {
    projectModal.style.display = 'none';
    projectFrame.src = ""; // Stop loading file saat ditutup
};


        // Form Submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent successfully!');
            this.reset();
        });

        // Portfolio Showcase Functionality
        const viewDemoBtns = document.querySelectorAll('.view-demo-btn');
        const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
        const postCards = document.querySelectorAll('.post-card');

        viewDemoBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                alert('Demo button clicked! This is a simple demo action.');
            });
        });

        viewDetailsBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const card = this.closest('.post-card');
                const imageSrc = card.getAttribute('data-image');
                const caption = card.getAttribute('data-caption');

                postModalImage.src = imageSrc;
                postModalCaption.textContent = caption;
                postModal.style.display = 'flex';
            });
        });

        // Post Modal
        const postModal = document.createElement('div');
        postModal.className = 'modal';
        postModal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img id="postModalImage" src="" alt="Project" style="width: 100%; border-radius: 10px;">
                <div id="postModalCaption" style="padding: 1rem; color: #ffffff;"></div>
            </div>
        `;
        document.body.appendChild(postModal);

        const postModalImage = document.getElementById('postModalImage');
        const postModalCaption = document.getElementById('postModalCaption');
        const closePostModal = postModal.querySelector('.close-modal');

        postCards.forEach(card => {
            card.addEventListener('click', function() {
                const imageSrc = this.getAttribute('data-image');
                const caption = this.getAttribute('data-caption');

                postModalImage.src = imageSrc;
                postModalCaption.textContent = caption;
                postModal.style.display = 'flex';
            });
        });

        closePostModal.addEventListener('click', () => {
            postModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === postModal) {
                postModal.style.display = 'none';
            }
        });

        