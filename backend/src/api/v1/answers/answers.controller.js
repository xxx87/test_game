const answers = (req, res) => {
  const randomWords = ["Black", "Dog", "Package", "Block", "Speed", "ordonnee", "prudente", "sexy", "tendre", "random"];
  function rnd() {
    return randomWords[Math.floor(Math.random() * randomWords.length)];
  }

  const users = [
    { answer: rnd(), author: { avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg", name: "Anna" } },
    { answer: rnd(), author: { avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg", name: "Vova" } },
    { answer: rnd(), author: { avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg", name: "Lena" } },
    { answer: rnd(), author: { avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg", name: "Grisha" } },
    { answer: rnd(), author: { avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg", name: "Misha" } }
  ];
  res.status(200).send(users[Math.floor(Math.random() * users.length)]);
};

module.exports = {
  answers
};
