import { type OKH_TYPE } from "../OKH.type";
let TEST_OKH: OKH_TYPE = {
  title: "Character Generator",
  description:
    "A 3x5 index card representing the head of an comic book/Disney/anime/manga style character. ",
  "intended-use":
    "This is mean as a test and a fun game. The Head can be mounted on a torso and legs to make a complete figure.",
  "project-link":
    "https://github.com/PubInv/okh-character-generator/blob/main/README.md",
  image:
    "https://user-images.githubusercontent.com/5296671/117578924-5ca84480-b0b6-11eb-93c2-dc681b584ece.jpg",
  made: true,
  "made-independently": false,
  license: {
    hardware: "CC0-1.0",
    documentation: "CC-BY-1.0",
    software: "GPL-3.0-only",
  },
  licensor: {
    name: "Robert Lee Read",
    affiliation: "Public Invention",
    email: "read.robert@gmail.com",
  },
  "okh-manifest-version": "1.0.0",
  "date-created": "2021-05-09T00:00:00.000Z",
  "date-updated": "2021-05-09T00:00:00.000Z",
  "manifest-author": {
    name: "Robert Lee Read",
    affiliation: "Public Invention",
    email: "read.robert@gmail.com",
  },
  "manifest-language": "en-US",
  contact: {
    name: "Robert Lee Read",
    affiliation: "Public Invention",
    email: "read.robert@gmail.com",
  },
  "making-instructions": [
    {
      path: "https://github.com/PubInv/okh-character-generator/blob/main/README.md",
      title: "Making Head",
    },
  ],
};
console.log(TEST_OKH);
