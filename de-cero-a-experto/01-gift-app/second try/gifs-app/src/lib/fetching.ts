import { Gif } from "../@types/types";

const API_KEY = "88A6buo4leIkHhNkzmg1EhLGKgXFgVmc";

export const getGifs = async (category: string): Promise<Gif[]> => {
  return await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`
  )
    .then((res) => res.json())
    .then(({ data }) => {
      const response: Gif[] = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        image: gif.images.downsized_medium.url,
      }));

      return response;
    });
};
