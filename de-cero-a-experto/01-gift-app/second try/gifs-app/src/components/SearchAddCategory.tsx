import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onNewCategory: (value: string) => void;
}

export const SearchAddCategory = ({ onNewCategory }: Props) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewCategory(search);
    setSearch("");
  };
  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (value.length <= -1) return;
    setSearch(value);
  };

  return (
    <form action='submit' onSubmit={(e) => handleSubmit(e)} className='w-full'>
      <input
        type='text'
        placeholder='Buscar gif'
        className='w-full p-2 border rounded-2xl'
        onChange={(e) => handleChange(e)}
        value={search}
      />
    </form>
  );
};
