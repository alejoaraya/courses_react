import { GifItem } from "./GifItem";
import { useFetch } from "../hook/useFetch";

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { gifs, isLoading } = useFetch(category);

  return (
    <div className='flex flex-col gap-5'>
      {isLoading && <h1>CARGANDO...</h1>}
      <h1 className='text-2xl font-bold'>{category}</h1>
      <div className='flex gap-10'>
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
};
