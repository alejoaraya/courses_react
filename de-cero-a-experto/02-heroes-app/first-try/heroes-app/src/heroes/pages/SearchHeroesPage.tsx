import { useLocation } from "react-router";
import { getHeroesByName } from "../helpers";
import { HeroesList, Title } from "../components";
import { AlertByState } from "../components/AlertByState";

export const SearchHeroesPage = () => {
  const { state } = useLocation();

  const heroes = getHeroesByName(state);

  return (
    <>
      <div className='grid grid-cols-1 gap-10 '>
        <Title heroes={heroes.length} title="Heroes'" />

        {heroes.length === 0 ? (
          <AlertByState state={state} />
        ) : (
          <HeroesList heroes={heroes} />
        )}
      </div>
    </>
  );
};
