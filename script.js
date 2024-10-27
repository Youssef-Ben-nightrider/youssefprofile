document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '') {
        alert('Veuillez entrer votre nom.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Veuillez entrer un email valide.');
        return;
    }

    alert('Formulaire soumis avec succès !');
    this.reset();
});