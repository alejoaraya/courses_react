import { useEffect, useState } from "react";
import { Gif } from "../@types/types";
import { getGifs } from "../lib/fetching";

interface Props {
  category: string;
}

export const useFetch = ({ category }: Props) => {
  const [images, setImages] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const saveImages = async () => {
    const res = await getGifs(category);
    setImages(res);
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    saveImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
