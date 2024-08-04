import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router";

export const NavbarForm = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearch(query);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = search.toLocaleLowerCase().trim();

    navigate(`/gallery/search?q=${query}`, {
      state: query,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form-control'>
      <input
        type='text'
        placeholder='Search hero'
        className='w-24 input input-bordered md:w-auto'
        onChange={handleChange}
        value={search}
        name='search'
      />
    </form>
  );
};
