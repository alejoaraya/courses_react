import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onNewCategory: (value: string) => void;
}

export const Search = ({ onNewCategory }: Props) => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newValue = search.trim();
    if (newValue.length < 1) return;

    onNewCategory(newValue);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <input
        className='w-full p-2 border rounded-lg'
        type='text'
        placeholder='Buscar gif'
        value={search}
        onChange={handleChange}
      />
    </form>
  );
};
