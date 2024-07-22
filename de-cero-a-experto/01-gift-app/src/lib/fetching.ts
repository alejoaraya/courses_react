const API_KEY = "prOD8p9RJpAl2cjJ9VQKfrfoVgfqaL8J";

export const getGifs = async (category: string) =>
  await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`
  )
    .then((res) => res.json())
    .then(({ data = [] }) => {
      const gifs = data.map((res) => ({
        id: res.id,
        title: res.title,
        image: res.images.downsized_medium.url,
      }));

      //console.log(gifs);

      return gifs;
    });
