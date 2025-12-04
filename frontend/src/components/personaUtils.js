const personaPool = [
  {
    title: 'Strategist',
    blurb: 'Structured, methodical, prefers crisp reasoning.',
  },
  {
    title: 'Visionary',
    blurb: 'Bold leaps, paints big pictures and future states.',
  },
  {
    title: 'Skeptic',
    blurb: 'Challenges assumptions and pokes at weak spots.',
  },
  {
    title: 'Storyteller',
    blurb: 'Explains with narrative, analogies, and vivid hooks.',
  },
  {
    title: 'Engineer',
    blurb: 'Grounded, implementation-first, ships working ideas.',
  },
  {
    title: 'Coach',
    blurb: 'Supportive tone, breaks work into motivating steps.',
  },
];

export function getPersona(model) {
  const shortName = model?.split('/')?.[1] || model || 'LLM';
  const seed = shortName
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const persona = personaPool[seed % personaPool.length];
  const accent = `accent-${seed % 3}`;

  return { shortName, accent, ...persona };
}
