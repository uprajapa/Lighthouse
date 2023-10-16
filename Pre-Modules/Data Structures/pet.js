const pet = {
  hunger: 0,
  energy: 0,
  playfulness: 0,
  feed: function () {
    pet.hunger++;
  },
  sleep: function () {
    pet.energy++;
  },
  play: function () {
    pet.playfulness++;
  },
  status: function () {
    console.log(`Pet Status - Hunger:${pet.hunger} Energy:${pet.energy} Playfulness:${pet.playfulness}`);
  }
};

pet.status();