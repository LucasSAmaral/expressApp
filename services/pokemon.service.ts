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