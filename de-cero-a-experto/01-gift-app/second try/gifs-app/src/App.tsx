import { useState } from "react";
import { SearchAddCategory } from "./components/SearchAddCategory";
import { GridCategory } from "./components/GridCategory";

export const App = () => {
  const [categories, setCategories] = useState<string[]>(["Avatar Appa"]);

  const onAddCategory = (value: string) => {
    if (categories.includes(value)) return;

    setCategories([value, ...categories]);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-10 p-10'>
      <h1 className='text-2xl font-bold'>GIF'S GALLERY 2.0</h1>

      <SearchAddCategory onNewCategory={onAddCategory} />

      <div className='flex flex-col gap-10'>
        {categories.map((cat) => (
          <GridCategory key={cat} category={cat} />
        ))}
      </div>
    </div>
  );
};
