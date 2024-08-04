import { Link } from "react-router-dom";
import { Hero } from "../@types";

interface Props {
  hero: Hero;
}

export const HeroItem = ({ hero }: Props) => {
  return (
    <div className='shadow-xl card bg-base-300 w-96 h-96'>
      <figure className='h-full'>
        <img src={`/assets/heroes/${hero.id}.jpg`} alt={hero.id} />
      </figure>
      <div className='flex flex-row justify-between card-body'>
        <div>
          <h2 className='card-title'>{hero.superhero}</h2>
          <p>{hero.alter_ego}</p>
        </div>

        <div className=' card-actions'>
          <Link to={`../detail/${hero.id}`} className='btn btn-primary '>
            See more...
          </Link>
        </div>
      </div>
    </div>
  );
};
