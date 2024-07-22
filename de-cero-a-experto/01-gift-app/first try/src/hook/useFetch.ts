import { useEffect, useState } from "react";
import { getGifs } from "../lib/fetching";
import { Gif } from "../@types/types";

export const useFetch = (category: string) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const saveGifs = async () => {
    const newImages = await getGifs(category);
    setGifs(newImages);
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    saveGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
