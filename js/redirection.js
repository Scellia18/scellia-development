document.getElementById("contact")?.addEventListener("submit", async function(e) {
    e.preventDefault();

    // Vérification des champs requis
    if ([...this.querySelectorAll("[required]")].some(f => !f.value.trim())) {
        return alert("⚠️ Merci de remplir tous les champs obligatoires.");
    }

    try {
        const res = await fetch(this.action, {
            method: "POST",
            body: new FormData(this),
            headers: { "Accept": "application/json" }
        });

        const result = await res.json();
        console.log(result); // debug

        if (result.ok || result.success) {
            this.reset(); // vide le formulaire
            window.location.href = "https://www.scelliadevelopment.re/merci/"; // redirection
        } else {
            alert("❌ Une erreur est survenue lors de l’envoi.");
        }
    } catch (err) {
        console.error(err);
        alert("❌ Impossible d’envoyer le formulaire. Vérifiez votre connexion.");
    }
});
