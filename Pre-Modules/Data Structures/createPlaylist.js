let result = [];
const createPlaylist = function (concertObject) {
  // Your logic here.
  for(const con of concertObject.bands){
    for(const song of con.songs){      
      result.push(song.title);      
    }
  }
  console.log(result);
};

const concert = {
  name: "Rockin' Road Trip",
  location: "New York City",
  date: "July 4, 2023",
  bands: [
    {
      name: "The Rolling Stones",
      genre: "rock",
      songs: [
        {
          title: "Satisfaction",
          duration: 233,
        },
        {
          title: "Gimme Shelter",
          duration: 272,
        },
        {
          title: "Jumpin' Jack Flash",
          duration: 220,
        },
      ],
    },
    {
      name: "The Black Keys",
      genre: "rock",
      songs: [
        {
          title: "Lonely Boy",
          duration: 204,
        },
        {
          title: "Howlin' For You",
          duration: 210,
        },
        {
          title: "Gold on the Ceiling",
          duration: 223,
        },
      ],
    },
    {
      name: "Kendrick Lamar",
      genre: "hip-hop",
      songs: [
        {
          title: "HUMBLE.",
          duration: 177,
        },
        {
          title: "DNA.",
          duration: 185,
        },
        {
          title: "Alright",
          duration: 307,
        },
      ],
    },
  ],
};
createPlaylist(concert);