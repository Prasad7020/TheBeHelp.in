// Smooth scrolling to the Quick Look section
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#quick-look').scrollIntoView({ behavior: 'smooth' });
});

// Copy number to clipboard on card click
document.querySelectorAll('.quick-look-card').forEach(card => {
    card.addEventListener('click', function() {
        const number = this.getAttribute('data-number');
        if (number) {
            navigator.clipboard.writeText(number).then(() => {
                alert('Number copied to clipboard: ' + number);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        } else {
            console.error('No data-number attribute found');
        }
    });
});

document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-links').classList.toggle('active');
});

