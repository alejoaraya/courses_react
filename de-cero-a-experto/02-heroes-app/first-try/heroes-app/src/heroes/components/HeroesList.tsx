import { Hero } from "../@types";
import { HeroItem } from "./HeroItem";

interface Props {
  heroes: Hero[];
}

export const HeroesList = ({ heroes }: Props) => {
  return (
    <div className='grid grid-flow-row grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 '>
      {heroes.map((hero) => (
        <HeroItem key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
