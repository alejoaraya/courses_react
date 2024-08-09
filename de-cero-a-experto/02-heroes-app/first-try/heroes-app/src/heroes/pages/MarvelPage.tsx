import { useMemo } from "react";
import { HeroesList, Title } from "../components";
import { getHeroesByPublished } from "../helpers";

interface Props {
  published: string;
}

export const MarvelPage = ({ published }: Props) => {
  const heroes = useMemo(() => getHeroesByPublished(published), [published]);

  return (
    <div className='grid grid-cols-1 gap-10'>
      <Title heroes={heroes.length} title="Marvel's" />
      <HeroesList heroes={heroes} />
    </div>
  );
};
