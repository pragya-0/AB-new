const press = "/assets/press/";

export type PressAsset = [title: string, text: string, image: string];

export const globalRecognition: PressAsset[] = [
  ["TEDx", "Ideas, innovation and impact recognized worldwide.", `${press}2019/tedx.jpg`],
  ["Diplomatic World", "Global business matchmaking and diplomacy coverage.", `${press}2021/diplomatic-world-two.jpg`],
  ["Techsauce Global", "International technology and startup summit platform.", `${press}2018/tech-sauce.jpg`],
  ["Finland India", "International business and innovation platform.", `${press}2018/Finland_India.jpg`],
  ["China Blockchain", "International technology and blockchain forum.", `${press}China-blockchain.jpg`],
  ["Josh Talks", "Ideas, leadership and entrepreneurial journey.", `${press}Joshtalks.jpeg`],
];

export const nationalAuthority: PressAsset[] = [
  ["The Economic Times", "Driving innovation and entrepreneurial growth.", `${press}economic-times.jpg`],
  ["CNBC TV18", "Innovation leaders shaping the future.", `${press}cnbc.jpg`],
  ["Times of India", "Startups, investment and future growth coverage.", `${press}2024/timesofindia-B.jpg`],
  ["Hindustan Times", "Business ideas and entrepreneurship coverage.", `${press}hindustantimes.png`],
  ["Business Standard", "Technology, business and startup ecosystem visibility.", `${press}business standard.png`],
  ["IAMAI Delhi", "Game development, technology and innovation platform.", `${press}IAMAI_Delhi_gamedev.png`],
];

export const regionalMedia: PressAsset[] = [
  ["TV9 Bangla", "Technology, leadership and innovation conversation.", `${press}2022/TV9.jpg`],
  ["DD Bangla", "Public media and technology storytelling.", `${press}2019/DD-Bangla.jpg`],
  ["ABP Bangla", "Regional recognition and public platform presence.", `${press}ABP_Arijit.jpg`],
  ["Anandabazar", "Bengali press coverage and public recognition.", `${press}2024/anandabazar-B.jpg`],
];

export const publicPlatforms: PressAsset[] = [
  ["ICC Startup Funding", "Startup funding and founder ecosystem platform.", `${press}ICC_Startup_Funding.jpg`],
  ["IIT Kharagpur", "Institutional speaking and technology platform.", `${press}IIT-Kharagpur.jpg`],
  ["Startup Pad", "Founder ecosystem and startup leadership platform.", `${press}arijit_startup_pad.jpg`],
  ["Indian Chamber of Commerce", "Business, industry and startup visibility.", `${press}Indian_Chamber_of_Commerce.jpg`],
  ["Japan", "International business and founder network.", `${press}japan.jpg`],
  ["World Leadership Conference", "Leadership, entrepreneurship and global platform.", `${press}2020/World-Leadership-Conference.jpg`],
];