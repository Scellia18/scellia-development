function gererFormulaire(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", async function(e) {
        e.preventDefault(); // On gère tout manuellement

        let toutRempli = true;

        // Vérification des champs obligatoires
        this.querySelectorAll("[required]").forEach(champ => {
            if (!champ.value.trim()) toutRempli = false;
        });

        if (!toutRempli) {
            alert("⚠️ Merci de remplir tous les champs obligatoires.");
            return;
        }

        // Envoi du formulaire vers Formspree
        const data = new FormData(this);

        await fetch(this.action, {
            method: "POST",
            body: data,
            headers: { "Accept": "application/json" }
        });

        // Redirection manuelle GRATUITE vers la page Merci
        window.location.href = "/merci/";
    });
}

// Appel pour les formulaires
gererFormulaire("contact");
