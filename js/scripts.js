document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') {
            return;
        }

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const roles = ['IT Professional', 'Software Developer', 'Music Producer'];
const typingText = document.getElementById('typing-text');
const typingCursor = document.getElementById('typing-cursor');

if (typingText && typingCursor) {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
        const currentRole = roles[roleIndex];

        if (!isDeleting) {
            typingText.textContent = currentRole.slice(0, charIndex + 1);
            charIndex += 1;

            if (charIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(typeLoop, 1200);
                return;
            }
        } else {
            typingText.textContent = currentRole.slice(0, charIndex - 1);
            charIndex -= 1;

            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeLoop, isDeleting ? 70 : 110);
    }

    typeLoop();
}