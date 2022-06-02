import axios, { AxiosRequestConfig } from "axios";

type PokemonResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Array<{ name: string; url: string }>;
};

export const getPokemonListByLimit = async (
  limit: string
): Promise<PokemonResponse["results"]> => {
  const instance = axios.create();

  const request = getPokemonByLimitRequest(limit);

  const {
    data: { results },
  } = await instance.request<PokemonResponse>(request);

  return results;
};

const getPokemonByLimitRequest = (limit: string): AxiosRequestConfig => {
  return {
    baseURL: "https://pokeapi.co/api/v2",
    url: "/pokemon",
    method: "GET",
    params: {
      limit,
      offset: "0",
    },
  };
};
