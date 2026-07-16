// Active Navbar Links Highlighting on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav div a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('bg-pink-600', 'text-white', 'shadow-[0_0_10px_rgba(219,39,119,0.4)]');
        link.classList.add('text-gray-400', 'hover:text-white');
        
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.extract; // Reset fallback
            link.classList.add('bg-pink-600', 'text-white', 'shadow-[0_0_10px_rgba(219,39,119,0.4)]');
            link.classList.remove('text-gray-400', 'hover:text-white');
        }
    });
});

// Typewriter Animation Setup
var typed = new Typed('#typing-text', {
    strings: ['Full Stack Developer', 'Software Engineer', 'AI Engineer'],
    typeSpeed: 60,       // Text type hone ki speed (millisecond me)
    backSpeed: 40,       // Text delete hone ki speed
    backDelay: 1500,     // Pura text type hone ke baad rukne ka samay
    loop: true,          // Isse animation khatam hone ke baad dobara shuru se chalega
    showCursor: true,    // Typewriter wala blinking cursor (|) dikhayega
    cursorChar: '|'      // Cursor ka character kya hoga
});

// Function to redirect user to email client with pre-filled details
function sendMail() {
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    // Check if fields are empty
    if (!name || !email || !message) {
        alert("Please fill out all the fields before sending!");
        return;
    }

    // Dynamic Email Constructing
    const yourEmail = "sainikashish415@gmail.com"; //
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(
        `Hi Kashish,\n\nYou have received a new message from your portfolio website:\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`
    );

    // Opening Mail Client using standard mailto URI
    window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
}