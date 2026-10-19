// ---------- Active navbar link highlighting on scroll ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav div a');
const ACTIVE = ['bg-pink-600', 'text-white', 'shadow-[0_0_10px_rgba(219,39,119,0.4)]'];

window.addEventListener('scroll', () => {
    let current = 'home';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 160) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        const isActive = link.getAttribute('href').slice(1) === current;
        link.classList.remove(...ACTIVE, 'text-gray-400', 'hover:text-white');
        if (isActive) {
            link.classList.add(...ACTIVE);
        } else {
            link.classList.add('text-gray-400', 'hover:text-white');
        }
    });
});

// ---------- Typewriter animation (role order: AI/ML, GenAI, Full Stack, Software) ----------
new Typed('#typing-text', {
    strings: ['AI/ML Engineer', 'GenAI Engineer', 'Full Stack Developer', 'Software Engineer'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});

// ---------- Fade-in on scroll ----------
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- Contact form: open the mail client with pre-filled details ----------
function sendMail() {
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all the fields before sending!');
        return;
    }

    const yourEmail = 'sainikashish415@gmail.com';
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(
        `Hi Kashish,\n\nYou have received a new message from your portfolio website:\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`
    );

    window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
}
