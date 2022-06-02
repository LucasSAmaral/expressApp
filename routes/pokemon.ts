import express from "express";
import { addPokemon, getPokemonByLimit } from "../services/pokemon.service";
const router = express.Router();

router.get("/:limit", getPokemonByLimit);

router.post("/adicionar", addPokemon);

module.exports = router;
