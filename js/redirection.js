function gererFormulaire(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        let toutRempli = true;
        this.querySelectorAll("[required]").forEach(champ => {
            if (!champ.value.trim()) toutRempli = false;
        });

        if (!toutRempli) {
            alert("⚠️ Merci de remplir tous les champs obligatoires.");
            return;
        }

        const data = new FormData(this);

        try {
            const response = await fetch(this.action, {
                method: "POST",
                body: data,
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                this.reset(); // optionnel
                window.location.href = "https://www.scelliadevelopment.re/merci/";
            } else {
                alert("❌ Une erreur est survenue lors de l’envoi du formulaire.");
            }
        } catch (error) {
            alert("❌ Impossible d’envoyer le formulaire. Vérifiez votre connexion.");
        }
    });
}

// Appel pour les formulaires
gererFormulaire("contact");

