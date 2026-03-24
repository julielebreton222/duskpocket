/*
 * THE WRITER'S GYM — Sample Magazine Data
 * This file contains sample pieces, prompts, and contributor data.
 * In production, Julie would edit this file to add new pieces.
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
    title: "Write about a room you'll never enter again.",
    category: "Setting & Atmosphere",
    videoLink: "https://www.youtube.com/@Reveriesdejulie",
  },
  {
    id: "p002",
    title: "A character reaches into their pocket and finds something that shouldn't be there.",
    category: "Character & Object",
  },
  {
    id: "p003",
    title: "Describe a meal where nobody says what they mean.",
    category: "Dialogue & Subtext",
    videoLink: "https://www.youtube.com/@Reveriesdejulie",
  },
  {
    id: "p004",
    title: "Write a scene using only what can be heard.",
    category: "Sensory Writing",
  },
  {
    id: "p005",
    title: "Two people say goodbye, but only one of them knows it's the last time.",
    category: "Emotion & Tension",
  },
  {
    id: "p006",
    title: "Write about the moment just before something changes forever.",
    category: "Turning Points",
  },
];

export const pieces: Piece[] = [
  {
    id: "001",
    title: "The Blue Kitchen",
    author: "Mara Chen",
    prompt: "Write about a room you'll never enter again.",
    promptCategory: "Setting & Atmosphere",
    issue: 1,
    date: "2026-03-15",
    bio: "Mara Chen writes from Melbourne. She is working on her first collection of short stories.",
    text: `The kitchen was blue — not painted blue, but blue the way a bruise is blue, the way late afternoon pushes through curtains that haven't been opened in weeks. My grandmother kept her spices in jars she'd labelled in a handwriting I can no longer read. Cumin. Coriander. Something in Mandarin that my mother once translated as "the one that smells like rain."

I stood in that kitchen for the last time on a Tuesday. I know it was Tuesday because the garbage trucks were grinding down the laneway and my grandmother always said Tuesdays sounded like the world chewing. The linoleum had a crack that ran from the fridge to the back door, a fault line I used to trace with my sock foot while she cooked.

She wasn't there. She'd been gone three weeks by then. But the kitchen still smelled like her — like oil and ginger and something underneath that I've never been able to name. Something warm. Something that meant I was about to be fed whether I was hungry or not.

I opened the spice cabinet. The jars were still arranged by height, tallest at the back, the way she insisted. I unscrewed one and held it to my nose and breathed in and it was her, it was completely her, and I closed it fast because I wasn't ready.

I'm still not ready. The house sold in April. Someone else's kitchen now. Someone else's crack in the floor.

But sometimes, when I'm cooking and I reach for the cumin, my hand stops mid-air and I'm back in the blue. I'm standing on the fault line. The garbage trucks are chewing. And she's about to turn from the stove and say, "Sit. Eat. You're too thin."`,
  },
  {
    id: "002",
    title: "Inventory",
    author: "James Okafor",
    prompt: "A character reaches into their pocket and finds something that shouldn't be there.",
    promptCategory: "Character & Object",
    issue: 1,
    date: "2026-03-15",
    bio: "James Okafor is a high school English teacher in Sydney who writes on the train.",
    text: `Left pocket: keys, phone, lint. Right pocket: a marble.

Not my marble. I don't own marbles. I'm thirty-four years old and I teach Year 10 English and I haven't touched a marble since I was a kid rolling them down the driveway with my brother who doesn't call anymore.

It's a cat's eye. Green and gold, with that frozen swirl in the centre that used to look like a tiny galaxy when you held it up to the sun. I hold it up to the fluorescent light of the staffroom and it just looks like glass.

But it's warm. That's the thing. It's warm like it's been in someone's hand, like someone was just holding it, rolling it between their thumb and forefinger the way my brother used to do when he was thinking. He'd sit on the back step with a marble in his hand and he'd roll it and roll it and I'd ask him what he was thinking about and he'd say "nothing" and I knew he meant "everything."

I put the marble on my desk next to the stack of unmarked essays. It sits there all day. Every time I look at it I think about calling him. Every time I pick up my phone I put it down again.

At 3:15 the last bell rings and I put the marble back in my pocket. Right side. It clicks against my house key.

I drive home. I cook dinner. I eat it standing at the counter.

At 9pm I take the marble out and put it on the nightstand. In the dark it catches the streetlight and throws a tiny green galaxy on the ceiling.

I pick up my phone. I put it down. I pick it up.

I call.`,
  },
  {
    id: "003",
    title: "The Roast",
    author: "Priya Sharma",
    prompt: "Describe a meal where nobody says what they mean.",
    promptCategory: "Dialogue & Subtext",
    issue: 1,
    date: "2026-03-15",
    bio: "Priya Sharma is a Writer's Gym regular who believes the best stories happen at dinner tables.",
    text: `"The lamb is good," my father says, which means: I drove forty minutes to be here.

"Thank you," my mother says, which means: I know.

My sister pours more wine. "Anyone want some?" which means: I need more and I don't want to be the only one.

"Just a half," I say, which means: fill it.

The dining room is the same as it's always been. The good plates. The candles my mother lights even though it's just us, even though it's a Sunday and not a holiday. She lights them because she wants this to feel like something. She wants us to notice.

"How's work?" my father asks my sister, which means: are you still doing that thing I don't understand?

"Fine," she says, which means: I'm not going to explain it again.

"She got promoted," my mother says, which means: be proud of her, you stubborn man.

"Good," my father says, which means: I am. I don't know how to say it.

The lamb is actually overcooked. Nobody mentions it. My mother's face is tight in the way it gets when she knows something hasn't turned out right but she's already committed to the performance. We eat every bite.

"Dessert?" she asks, which means: don't leave yet.

"Of course," I say, which means: I wasn't going to.

She brings out a pavlova that's slightly collapsed on one side. It's beautiful. We tell her so. We mean it.

My father takes a second piece, which means everything he'll never say out loud.`,
  },
  {
    id: "004",
    title: "Platform 3",
    author: "Lena Voss",
    prompt: "Write a scene using only what can be heard.",
    promptCategory: "Sensory Writing",
    issue: 1,
    date: "2026-03-15",
    text: `The announcement comes first — that automated woman's voice, the one that sounds like she's reading your future and finding it unremarkable. "The 7:42 service to Central has been delayed approximately... eight... minutes." The pause before the number, like even she's embarrassed.

A sigh. Not mine. Someone to my left, close enough that I can hear the breath leave their body. The rustle of a newspaper — actual paper, not a screen. The sound of someone who woke up early enough to buy a newspaper, which is its own kind of statement.

Pigeons. That wet, throaty gurgling they do, like they're gargling with gravel. One of them is close — I can hear its claws ticking on the concrete, that frantic little walk they do, like they're late for something important.

A coffee cup being set down on a metal bench. The hollow ring of it. Then the scrape of it being picked up again immediately, because the bench is too cold or the coffee is too hot or both.

Somewhere down the platform, a child is counting. "Fourteen, fifteen, sixteen..." Counting what? Steps? Tiles? Seconds? The counting stops at twenty-three. Starts again at one.

The tracks begin to hum. You can hear it before you see anything — that low metallic vibration, like the rails are remembering what's coming. The hum builds. The pigeons stop gargling. The newspaper rustles shut.

The child says, "Twenty-three."

The train arrives like a held breath finally released.`,
  },
  {
    id: "005",
    title: "Last Light",
    author: "Tom Birch",
    prompt: "Two people say goodbye, but only one of them knows it's the last time.",
    promptCategory: "Emotion & Tension",
    issue: 1,
    date: "2026-03-15",
    bio: "Tom Birch writes short fiction between shifts. He lives with two cats who don't care about literature.",
    text: `She walks me to the door the way she always does — slowly, one hand on the wall, the other waving away my offer to help. "I'm not an invalid," she says, and she's right, she's not, she's just eighty-six and the hallway is longer than it used to be.

"Same time Thursday?" I say.

"If I'm not busy," she says, and we both laugh because we both know her calendar has exactly one thing on it and it's me.

I kiss her cheek. She smells like Yardley lavender and Bushells tea and something else, something underneath — the smell of a house that's been lived in by one person for a very long time. It's not a bad smell. It's the smell of all her days, layered.

"Drive safe," she says.

"Always do."

"You don't. You drive like your father."

I laugh. She's right about that too.

I'm halfway down the path when she calls out. "The hydrangeas need cutting back. Don't let me forget."

"I won't."

But I will. And she will. Because Thursday I'll get the call at 6am and the voice on the other end will be calm and gentle and will use words like "peacefully" and "in her sleep" and I'll sit on the edge of my bed and think about hydrangeas.

I didn't know. Standing on that path, turning back to wave, seeing her in the doorway with the hall light behind her making her look like she was glowing — I didn't know it was the last time.

She did, I think. She must have. Because she stood there longer than usual, watching me go. And she didn't close the door until I'd turned the corner.`,
  },
  {
    id: "006",
    title: "Before",
    author: "Mara Chen",
    prompt: "Write about the moment just before something changes forever.",
    promptCategory: "Turning Points",
    issue: 1,
    date: "2026-03-15",
    bio: "Mara Chen writes from Melbourne. She is working on her first collection of short stories.",
    text: `This is the last morning of the world as I know it, but I don't know that yet. I'm making toast. The butter is too cold and it tears the bread and I swear under my breath and start again.

The radio is on. Someone is talking about the weather — fine, mostly, with a chance of afternoon storms. I'm half-listening the way you half-listen to weather reports, filing it away in the part of your brain that decides whether to bring a jacket.

My phone is on the counter, face down. It will ring in four minutes. I don't know this. I'm thinking about toast. I'm thinking about whether I put the bins out last night. I'm thinking about a meeting at ten that I'm not prepared for and whether anyone will notice.

The toast pops. I butter it properly this time, edge to edge, the way my mother taught me. "If you're going to do something," she used to say, "do it all the way to the edges." I think about this every time I butter toast, which means I think about my mother every morning, which is maybe the point.

I take a bite. The crunch is loud in the quiet kitchen. Outside, a magpie is doing that liquid warbling thing they do, the sound that means the day is starting whether you're ready or not.

My phone rings.

I chew. I swallow. I wipe my hands on my jeans.

I pick it up.

And the world I've been living in — the one with cold butter and weather reports and bins and meetings — that world ends. A new one starts. I don't get to choose which one. Nobody does.

But for one more second, the toast is warm and the magpie is singing and I don't know yet. I don't know.

That second is the one I keep going back to.`,
  },
];

export const contributors: Contributor[] = [
  {
    name: "Mara Chen",
    bio: "Mara Chen writes from Melbourne. She is working on her first collection of short stories.",
    pieceCount: 2,
  },
  {
    name: "James Okafor",
    bio: "James Okafor is a high school English teacher in Sydney who writes on the train.",
    pieceCount: 1,
  },
  {
    name: "Priya Sharma",
    bio: "Priya Sharma is a Writer's Gym regular who believes the best stories happen at dinner tables.",
    pieceCount: 1,
  },
  {
    name: "Lena Voss",
    bio: "Lena Voss prefers to let the writing speak for itself.",
    pieceCount: 1,
  },
  {
    name: "Tom Birch",
    bio: "Tom Birch writes short fiction between shifts. He lives with two cats who don't care about literature.",
    pieceCount: 1,
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
