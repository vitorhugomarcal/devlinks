function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")
}

function copyPix(event) {
  event.preventDefault();
  const pixCode = "00020126580014BR.GOV.BCB.PIX013625328557-a8f8-42fc-ae2a-e2e2ed8a65dd5204000053039865802BR592566.101.610 TAMMYRIS DIAS 6009SAO PAULO610805409000622505215GeGxBRM1j0ZUFX4nteis6304B1BA";

  navigator.clipboard.writeText(pixCode).then(() => {
    const button = document.getElementById("pix-button");
    const originalText = button.textContent;
    button.textContent = "Pix Copiado! ✅";

    // Desabilitar cliques temporariamente para evitar cliques duplos durante a animação
    button.style.pointerEvents = "none";

    setTimeout(() => {
      button.textContent = originalText;
      button.style.pointerEvents = "auto";
    }, 2000);
  }).catch(err => {
    console.error("Erro ao copiar o Pix: ", err);
    alert("Não foi possível copiar o Pix automaticamente. Por favor, tente novamente.");
  });
}

