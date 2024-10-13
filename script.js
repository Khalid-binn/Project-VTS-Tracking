document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.querySelector('.profile-card');
    const contactBtn = document.querySelector('.contact-btn');
    const flipBackBtn = document.querySelector('.flip-back-btn');
    const copyBtn = document.querySelector('.copy-btn');
    const trackingInput = document.getElementById('tracking');
    const shipper = document.getElementById('shipper');
    const websiteLink = document.querySelector('.website-link');

    function flipCard() {
        profileCard.classList.toggle('flipped');
    }

    contactBtn.addEventListener('click', flipCard);
    flipBackBtn.addEventListener('click', flipCard);

    copyBtn.addEventListener('click', () => {
        const companyName = shipper.textContent;
        const website = websiteLink.textContent;

        const textToCopy = `Shipping Company: ${companyName}
Tracking: ${trackingInput.value}
Website: ${websiteLink}`;

        navigator.clipboard.writeText(textToCopy).then(() => {
            copyBtn.textContent = 'Copied';
            copyBtn.classList.add('copied');
            setTimeout(() => {
                copyBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clipboard-icon"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                    Copy to Clipboard
                `;
                copyBtn.classList.remove('copied');
            }, 2000);
        });
    });
});