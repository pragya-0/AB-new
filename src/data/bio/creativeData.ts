import { bio, drawingPath, gamePath } from "./bioAssets";

export const creativeTracks = [
  {
    title: "Drawing",
    text: "Visual storytelling through sketches, character thinking, fantasy worlds and creative direction.",
    image: `${drawingPath}color/1.jpg`,
    fallbacks: [`${bio}banner5.jpg`, `${bio}blue-suit-contact.jpeg`],
    tags: ["Drawing", "Art", "Imagination"],
  },
  {
    title: "Comics",
    text: "Superheroes, IPs, comics, mythology-led characters and original Indian storytelling universe.",
    image: `${gamePath}comics.jpg`,
    fallbacks: [`${gamePath}comics-img3.jpg`, `${gamePath}comics-img6.jpg`],
    tags: ["Comics", "Superheroes", "IP"],
  },
  {
    title: "Coding",
    text: "From early programming to games, AI systems, VR/AR simulation and digital products.",
    image: `${bio}dev-google.png`,
    fallbacks: [`${bio}banner9.jpg`],
    tags: ["Coding", "AI", "Games"],
  },
  {
    title: "Diplomacy",
    text: "International business networks, delegation, smart-city platforms and cross-border collaboration.",
    image: `${bio}south-mou.png`,
    fallbacks: [`${bio}world-leader-summit-meeting.jpeg`, `${bio}wls2.jpg`],
    tags: ["Diplomacy", "Global Business"],
  },
];
