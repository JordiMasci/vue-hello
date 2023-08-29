// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
}).mount("#app");

// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.
