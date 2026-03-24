/*
 * DUSK POCKET — Magazine Data
 * Edit this file to add new pieces and contributors.
 * Prompts are listed below — one per craft aspect.
 */

export interface Piece {
  id: string;
  title: string;
  author: string;
  prompt: string;
  promptCategory: string;
  text: string;
  issue: number;
  date: string;
  bio?: string;
}

export interface Prompt {
  id: string;
  title: string;
  category: string;
}

export interface Contributor {
  name: string;
  bio: string;
  pieceCount: number;
}

export const prompts: Prompt[] = [
  {
    id: "p001",
    title: "Write about a room you'll never enter again.",
    category: "Setting & Atmosphere",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p002",
    title: "A character reaches into their pocket and finds something that shouldn't be there.",
    category: "Character & Object",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p003",
    title: "Describe a meal where nobody says what they mean.",
    category: "Dialogue & Subtext",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p004",
    title: "Write a scene using only what can be heard.",
    category: "Sensory Writing",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p005",
    title: "Two people say goodbye, but only one of them knows it's the last time.",
    category: "Emotion & Tension",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p006",
    title: "Write about the moment just before something changes forever.",
    category: "Turning Points",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p007",
    title: "Write a scene where the weather mirrors what a character refuses to say.",
    category: "Metaphor & Symbolism",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p008",
    title: "Describe a photograph that someone keeps but wishes they could forget.",
    category: "Memory & Time",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p009",
    title: "Write a scene where two characters are doing something ordinary, but everything between them has changed.",
    category: "Subtext & Silence",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p010",
    title: "Write about a sound that makes a character stop mid-sentence.",
    category: "Sensory Detail",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p011",
    title: "A character lies about something small. Write what happens next.",
    category: "Voice & Perspective",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p012",
    title: "Write a scene set entirely in a moving vehicle.",
    category: "Pacing & Structure",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p013",
    title: "Describe a place through the eyes of someone seeing it for the last time.",
    category: "Point of View",
     videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
];

// Pieces will appear here as they are submitted and accepted.
// To add a piece, follow this format:
// {
//   id: "001",
//   title: "Title of the Piece",
//   author: "Author Name",
//   prompt: "The prompt they responded to.",
//   promptCategory: "Setting & Atmosphere",
//   issue: 1,
//   date: "2026-04-01",
//   bio: "A short bio about the author.",
//   text: `The full text goes here.`,
// },
export const pieces: Piece[] = [];

// Contributors will appear here as pieces are published.
// To add a contributor:
// {
//   name: "Author Name",
//   bio: "A short bio.",
//   pieceCount: 1,
// },
export const contributors: Contributor[] = [];

export function getPieceById(id: string): Piece | undefined {
  return pieces.find((p) => p.id === id);
}

export function getPiecesByPrompt(promptTitle: string): Piece[] {
  return pieces.filter((p) => p.prompt === promptTitle);
}

export function getPiecesByAuthor(author: string): Piece[] {
  return pieces.filter((p) => p.author === author);
}

export function getContributorByName(name: string): Contributor | undefined {
  return contributors.find((c) => c.name === name);
}
