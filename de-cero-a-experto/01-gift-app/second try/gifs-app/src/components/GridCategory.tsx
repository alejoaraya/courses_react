import { useFetch } from "../hooks/useFetch";
import { GifItem } from "./GifItem";

interface Props {
  category: string;
}

export const GridCategory = ({ category }: Props) => {
  const { images, isLoading } = useFetch({ category });

  return (
    <div className='flex flex-col gap-5'>
      {isLoading && <h1>CARGANDO...</h1>}
      <h1 className='text-lg font-bold '>{category}</h1>
      <div className='flex gap-5'>
        {images.map((gif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};
