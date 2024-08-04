import { useNavigate, useParams } from "react-router";
import { getHeroesById } from "../helpers";
import { ImageHero } from "../components/ImageHero";

export const HeroDetailPage = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();

  const hero = getHeroesById(id)[0];

  const handleDirection = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className='grid grid-cols-1 grid-rows-[1fr_auto] lg:grid-cols-[auto_1fr] lg:grid-rows-1 h-full'>
        <ImageHero id={hero.id} />

        <div>
          <div className='flex card-body'>
            <div>
              <h2 className='card-title'>{hero.superhero}</h2>
              <p className='stat-title'>{hero.publisher}</p>
              <div className='flex flex-col gap-3 my-3'>
                <p>
                  <b>Alter Ego: </b>
                  {hero.alter_ego}
                </p>
                <p>
                  <b>Character: </b>
                  {hero.characters}
                </p>
                <p>
                  <b>First Appearance: </b>
                  {hero.first_appearance}
                </p>
              </div>
            </div>

            <div className=' card-actions'>
              <button onClick={handleDirection} className='btn btn-primary '>
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
