import { useState } from "react";
import { GifGrid, Search } from "./components";

export const App = () => {
  const [categories, setCategories] = useState<string[]>([
    "Dachshund",
    "Perro salchicha",
  ]);

  const onAddCategory = (value: string): void => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-10 p-10 bg-slate-50'>
      <h1 className='text-2xl font-bold'>GIF'S GALLERY</h1>

      <Search onNewCategory={onAddCategory} />

      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </div>
  );
};
