import { HeroesList, Title } from "../components";
import { getHeroesByPublished } from "../helpers";

interface Props {
  published: string;
}

export const DcPage = ({ published }: Props) => {
  const heroes = getHeroesByPublished(published);

  return (
    <div className='grid grid-cols-1 gap-10'>
      <Title heroes={heroes.length} title="DC's" />

      <HeroesList heroes={heroes} />
    </div>
  );
};
