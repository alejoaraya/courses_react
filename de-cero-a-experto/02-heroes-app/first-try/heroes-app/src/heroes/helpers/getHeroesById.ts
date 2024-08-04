import { Hero } from "../@types";
import { heroes } from "../data/heroes.data";

export const getHeroesById = (id: string): Hero[] => {
  const data = heroes.filter((hero) => hero.id.includes(id));
  return data;
};
