import { Hero } from "../@types";
import { heroes } from "../data/heroes.data";

export const getHeroesByName = (name: string): Hero[] => {
  const data = heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
  return data;
};
