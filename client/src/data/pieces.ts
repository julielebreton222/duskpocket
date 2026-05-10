/*
 * DUSK POCKET — Magazine Data
 * Edit this file to add new pieces and contributors.
 * Prompts are craft exercises — not story prompts.
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
  videoLink?: string;
}

export interface Contributor {
  name: string;
  bio: string;
  pieceCount: number;
}

export const prompts: Prompt[] = [
  {
    id: "p001",
    title: "Write a place using only texture and temperature.",
    category: "Sensory Writing",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p002",
    title: "Write dialogue where the conflict is never named.",
    category: "Dialogue & Subtext",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p003",
    title: "Write a moment of change in exactly 100 words.",
    category: "Turning Points",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p004",
    title: "Write a character's hands. Nothing else.",
    category: "Character & Object",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p005",
    title: "Write a scene using only one sense.",
    category: "Sensory Detail",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p006",
    title: "Write the same moment from two different emotional states.",
    category: "Emotion & Tension",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p007",
    title: "Write a setting that reflects a character's inner state.",
    category: "Setting & Atmosphere",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p008",
    title: "Write a scene with no adjectives.",
    category: "Voice & Perspective",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p009",
    title: "Write something that suggests memory without naming it.",
    category: "Memory & Time",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p010",
    title: "Write a metaphor that becomes literal.",
    category: "Metaphor & Symbolism",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p011",
    title: "Write a scene where silence is louder than words.",
    category: "Subtext & Silence",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p012",
    title: "Write from the perspective of something inanimate.",
    category: "Point of View",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    id: "p013",
    title: "Write a scene that builds and releases tension in under 300 words.",
    category: "Pacing & Structure",
    videoLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
];

// Pieces will appear here as they are submitted and accepted.
// To add a piece, follow this format:
// {
//   id: "001",
//   title: "Title of the Piece",
//   author: "Author Name",
//   prompt: "The exact prompt they responded to.",
//   promptCategory: "Sensory Writing",
//   issue: 1,
//   date: "2026-04-01",
//   bio: "A short bio about the author.",
//   text: `The full text goes here.`,
// },
export const pieces: Piece[] = [
  {
    id: "001",
    title: "Hands",
    author: "Julie Lebreton",
    prompt: "Write a character's hands. Nothing else.",
    promptCategory: "Character & Object",
    issue: 1,
    date: "2026-03-24",
    bio: "Julie is a writer living in a cave, desperately trying to get other people to write instead of procrastinating.",
    text: `Her hands moved across the table like they belonged to someone else and she wished they did. Inert extremities lying useless. The left one was scared and scarred at the knuckle from a door that slammed too fast. The right one's nails were bitten to the quick, a habit she couldn't break, but at least she'd limit it to the right. When she held a pen, her fingers trembled slightly. Bitten-nails and all. Not from fear. From the weight of all the words she hadn't written yet, jumbled inside of her mind.

She pressed her palms flat against the wood. SHE-she-moved them. They could do something. They should write something.

Instead, they reached for her phone.`,
  },
  {
    id: "002",
    title: "Texture",
    author: "Julie Lebreton",
    prompt: "Write a place using only texture and temperature.",
    promptCategory: "Sensory Writing",
    issue: 1,
    date: "2026-03-24",
    bio: "Julie is a writer living in a cave, desperately trying to get other people to write instead of procrastinating.",
    text: `The cave is cold. Not the clean cold of winter, but the deep, bone-settling cold that settles likes a dead body. The walls are rough—limestone that catches your fingertips if you're not careful. Its pores might host an entire colony of miniature humans and moss and insects. Damp. Always damp. The air tastes like minerals and dust that never settled for lack of wind or want.

There's a spot near the entrance where the sun reaches in the afternoons and that is where the dust always chooses to dance, put on a show for the colony possibly living in the pores. That patch is warm. The stone there is smooth from years of erosion, and there are no colonies nor moss, just shiny polished, mirror-stone.

At night, the temperature drops further and the dust dances in a silent valse alongside the fireflies. The darkness becomes texture—thick when their lights flicker out, heavy like a teardrop, but then the light comes on again and the dust dances and the colony lives and the cave breathes.`,
  },
];

// Contributors will appear here as pieces are published.
// To add a contributor:
// {
//   name: "Author Name",
//   bio: "A short bio.",
//   pieceCount: 1,
// },
export const contributors: Contributor[] = [
  {
    name: "Julie Lebreton",
    bio: "A writer living in a cave, desperately trying to get other people to write instead of procrastinating.",
    pieceCount: 2,
  },
];

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
