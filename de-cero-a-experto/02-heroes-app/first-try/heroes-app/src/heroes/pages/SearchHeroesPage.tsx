import { useLocation } from "react-router";
import { getHeroesByName } from "../helpers";
import { HeroesList, Title } from "../components";
import { AlertByState } from "../components/AlertByState";
import { useMemo } from "react";

export const SearchHeroesPage = () => {
  const { state } = useLocation();

  const heroes = useMemo(() => getHeroesByName(state), [state]);

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
