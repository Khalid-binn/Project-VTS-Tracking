      document.addEventListener("DOMContentLoaded", () => {
        const trackingCards = document.querySelectorAll(".tracking-card",".tracking-card-extra");

        trackingCards.forEach((trackingCard) => {
          const contactBtn = trackingCard.querySelector(".contact-btn");
          const flipBackBtn = trackingCard.querySelector(".flip-back-btn");
          const copyBtn = trackingCard.querySelector(".copy-btn");
          const trackingInput = trackingCard.querySelector("#tracking");
          const shipper = trackingCard.querySelector("#shipper");
          const websiteLink = trackingCard.querySelector(".website-link");

          function flipCard() {
            trackingCard.classList.toggle("flipped");
          }

          contactBtn.addEventListener("click", flipCard);
          flipBackBtn.addEventListener("click", flipCard);

          copyBtn.addEventListener("click", () => {
            const companyName = shipper.textContent;
            const trackingNumber = trackingInput.value;
            const website = websiteLink.href;

            const isExtraCard = trackingCard.classList.contains("tracking-card-extra");
            const modifiedWebsite = isExtraCard ? `${website}${trackingNumber}` : website;


            const textToCopy = `Shipping Company: ${companyName}\nTracking: ${trackingNumber}\nWebsite: ${modifiedWebsite}`;

            navigator.clipboard.writeText(textToCopy).then(() => {
              copyBtn.textContent = "Copied";
              copyBtn.classList.add("copied");

              setTimeout(() => {
                copyBtn.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="clipboard-icon"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                            Copy to Clipboard
                        `;
                copyBtn.classList.remove("copied");
              }, 2000);
            });
          });
        });
      });

      // searchbox
      const searchBox = document.getElementById('searchBox');

      searchBox.addEventListener('input', () => {
        const searchTerm = searchBox.value.toLowerCase();
        const cards = document.querySelectorAll('.tracking-card');
    
        cards.forEach(card => {
          const shipperName = card.querySelector('h2').textContent.toLowerCase();
          card.style.display = shipperName.includes(searchTerm) ? 'block' : 'none';
          card.classList.toggle('fade-in', shipperName.includes(searchTerm));
        });
      }); 