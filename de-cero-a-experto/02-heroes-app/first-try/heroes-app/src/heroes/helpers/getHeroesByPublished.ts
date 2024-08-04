import { heroes } from "../data/heroes.data";

export const getHeroesByPublished = (published: string) => {
  return heroes.filter((hero) => hero.publisher === published);
};
