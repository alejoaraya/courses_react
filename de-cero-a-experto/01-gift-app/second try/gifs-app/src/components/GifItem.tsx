import { Gif } from "../@types/types";

interface Props {
  gif: Gif;
}

export const GifItem = ({ gif: { title, image } }: Props) => {
  return (
    <div className='flex flex-col items-center justify-between p-1 border bg-slate-200'>
      <img src={image} alt={title} />
      <h1>{title}</h1>
    </div>
  );
};
