interface Pokemon {
     '_id':string,
     'pokemon': string,
     'id':number,
     'species_id':number,
     'height':number,
     'weight':number,
     'base_experience':number,
     'type_1': string,
     'type_2'?: string,
     'attack':number,
     'defense':number,
     'hp':number,
     'special_attack':number,
     'special_defense':number,
     'speed':number,
     'ability_1': string,
     'ability_2'?: string,
     'ability_hidden'?: string,
     'color_1': string,
     'color_2'?: string,
     'color_f'?: string,
     'egg_group_1': string,
     'egg_group_2'?: string,
     'url_image': string,
     'generation_id': number,
     'evolves_from_species_id'?: string,
     'evolution_chain_id'?: number,
     'shape_id': number,
     'shape': string,
     'pokebase': string,
     'pokedex': string
}

interface PokeResult {
  id: number,
  captured: number,
  encountered: number
}

