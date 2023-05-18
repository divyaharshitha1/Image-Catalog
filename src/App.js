import React from "react";
import Catalog from "./Catalog";
import "./App.css";

const images = [
  {
    src:
      "https://res.cloudinary.com/dmmum4bbq/image/upload/v1684409949/extreme-wow-ocean-escape_p3ealr.jpg",
    alt: "extreme-wow-ocean-escape_p3ealr",
    details:
      "The Maldives are known as “the tropical paradise” for reasons such as its beauty. This tropical country has separated islands and islands are surrounded by its own lagoon. Each island has pure white sandy beaches. The sea covers 99% of the Maldives and it is where you can see beautiful fishes and corals.",
  },
  {
    src:
      "https://res.cloudinary.com/dmmum4bbq/image/upload/v1684410231/hotel-shimla-hills-internation_facy4f.jpg",
    alt: "hotel-shimla-hills-internation_facy4f",
    details:
      "Shimla, the capital of the northern state of Himachal Pradesh, which borders Punjab, is India's largest and best known hill station. It spans a 12km ridge in the foothills of the Himalayas, with steep, forested slopes falling away below and mountain views above.",
  },
  {
    src:
      "https://res.cloudinary.com/dmmum4bbq/image/upload/v1684410425/LmpwZw_gui511.jpg",
    alt: "v1684410425/LmpwZw_gui511",
    details:
      "Europe is often described as a “peninsula of peninsulas.” A peninsula is a piece of land surrounded by water on three sides. Europe is a peninsula of the Eurasian supercontinent and is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, and the Mediterranean, Black, and Caspian seas to the south.",
  },
  {
    src:
      "https://res.cloudinary.com/dmmum4bbq/image/upload/v1684412756/Hill-Stations-Holidays_q97pwh.jpg",
    alt: "Hill-Stations-Holidays_q97pwh",
    details:
      "Hill stations are located at a high altitude and at a distance from the coast. They are often used as a retreat from the heat of the lower-lying areas. Some of the most famous hill stations are Shimla, Darjeeling, and Ooty. The weather is cooler and the air is fresher than on the plains.",
  },
  {
    src:
      "https://res.cloudinary.com/dmmum4bbq/image/upload/v1684412989/Jatayu-Nature-Park-in-Kerala-among-new-tourist-attractions-in-India_brjzpl.jpg",
    alt:
      "Jatayu-Nature-Park-in-Kerala-among-new-tourist-attractions-in-India_brjzpl",
    details:
      "Jatayupara is a hillock located in Chadayamangalam, near Kollam. The spot is famous for the giant rock sculpture of Jatayu, the mythical bird of the epic Ramayana. Jatayupara has been developed into rock-theme Nature Park, with many attractions drawing tourists throughout the year.",
  },
  /*{
      src: "",
      alt: "",
      details: "",
  }*/
];

const App = () => {
  return (
    <div className="app-container">
      <h1 className="heading">Image Catalog</h1>
      <Catalog images={images} />
    </div>
  );
};

export default App;
