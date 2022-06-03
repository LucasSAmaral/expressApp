import { Request, Response } from 'express';
import { getPokemonListByLimit } from '../repository/pokemon.repository';

export const getPokemonByLimit = async (req: Request, res: Response) => {
  const {
    params: { limit },
  } = req;

  try {
    const results = await getPokemonListByLimit(limit);

    res.json(results);
  } catch (error) {
    console.log('ERROR', error);
    res.json(error);
  }
};

const pokemonList: { name: string }[] = [];

export const addPokemon = (req: Request, res: Response) => {
  const {
    body: { name },
  } = req;

  if (!name) {
    throw res.status(400).send('nome em branco');
  }

  pokemonList.push({ name });

  res.json(pokemonList);
};
