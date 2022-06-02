import express, { Request, Response } from "express";
import { getPokemonByLimit } from "../services/pokemon.service";
const router = express.Router();

router.get("/:limit", getPokemonByLimit);

const newPokemon: { name: string }[] = [];

router.post("/adicionar", (req: Request, res: Response) => {
  const {
    body: { name },
  } = req;

  newPokemon.push({ name });

  res.send(JSON.stringify(newPokemon));
});

module.exports = router;
