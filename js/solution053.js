const warnTheSheep = a => (a = a.length - a.indexOf('wolf') - 1) ?
  `Oi! Sheep number ${a}! You are about to be eaten by a wolf!`:
  'Pls go away and stop eating my sheep';