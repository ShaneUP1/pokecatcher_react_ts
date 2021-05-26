
export function pickThreePoke(): Array<number> {
  let poke1: number = Math.ceil(Math.random()*14);
  let poke2: number = Math.ceil(Math.random()*14);
  let poke3: number = Math.ceil(Math.random()*14);

  if(poke1 === poke2 || poke1 === poke3 || poke2 === poke3) {
    return pickThreePoke();
  }
    return [poke1, poke2, poke3];
}


export function findById(someArray: Array<PokeResult> | Array<Pokemon>, someId: number): PokeResult | Pokemon | null {
  for (let item of someArray) {
    if (+item.id === +someId) return item;
  }
  return null
}

