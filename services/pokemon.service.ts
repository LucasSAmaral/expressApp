import { Request, Response } from "express";
import { getPokemonListByLimit } from "../repository/pokemon.repository";

export const getPokemonByLimit = async (req: Request, res: Response) => {
  const {
    params: { limit },
  } = req;

  try {
    const results = await getPokemonListByLimit(limit);

    res.send(JSON.stringify(results));
  } catch (error) {
    console.log("ERROR", error);
    res.send(error);
  }
};

const pokemonList: { name: string }[] = [];

export const addPokemon = (req: Request, res: Response) => {
  const {
    body: { name },
  } = req;

  pokemonList.push({ name });

  res.send(JSON.stringify(pokemonList));
};
