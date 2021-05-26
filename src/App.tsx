import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './App.css';
import { pokeData } from './data/poke-data';
import { findById, pickThreePoke } from './utils';

interface Props {
  url_image: string,
  pokemon: string,
  id: number,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PokeDisplay: React.FC<Props> = ({url_image, pokemon, id, handleChange}) => {
  return (
    <>
      <div className='poke'>
          <img className='poke-image' id='pokemon' src={url_image} alt={pokemon}/>
          <input type="radio" id="pokemon" name="poke" value={id} onChange={(e) => handleChange(e.target.value)}/>
      </div>
    </>
      
  )
}


function App() {
  const [pokeIds, setPokeIds] = useState<number[]>(pickThreePoke());
  const [pokeResults, setPokeResults] = useState<PokeResult[]>([]);
  const [selectedPoke, setSelectedPoke] = useState<number | null>(null);

  useEffect(() => {

    // const pokeIdArray: Array<number> = pickThreePoke();
    // setPokeIds(pokeIdArray);
    
    
}, [])

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    for(let pokeId of pokeIds){
      const currentStateCheck = findById(pokeResults, pokeId)
      if(currentStateCheck) {
        setPokeResults(pokeResults => pokeResults.map(result => {
          if(result.id === currentStateCheck.id) return {...result, encountered: result.encountered++
          }
          return result
        }))
      } else {
        const newResult = {
          id: pokeId,
          encountered: 1,
          captured: 0
        }
        setPokeResults(pokeResults => [...pokeResults, newResult])
      }
    }

      const selectedRadio: HTMLInputElement | null = document.querySelector(':checked');
      const selectedPokemonId: string = selectedRadio!.value;
      const numericalPokemonId: number = Number(selectedPokemonId);

      const chosenPoke = findById(pokeResults, numericalPokemonId)

      console.log(chosenPoke, 'chosen')
      console.log(pokeResults, 'pokeResults')
      setPokeResults(pokeResults => pokeResults.map(result => {
        if(result.id === chosenPoke!.id) return {...result, captured: result.captured++}
        return result
  }))
  const pokeIdArray: Array<number> = pickThreePoke();
    setPokeIds(pokeIdArray);
}

  const pokeToDisplay: Array<Pokemon> = pokeData.filter(pokemon => pokeIds.includes(pokemon.id));

  const pokeElements = pokeToDisplay.map(poke => (
    <div key={poke.id}>
      <PokeDisplay {...poke} handleChange={setSelectedPoke}/>
    </div>
  ))

  return (
    <form onSubmit={submitHandler} className="App">
      {pokeElements}
      <button>Catch that Poke!</button>
    </form>
  );
}

export default App;
