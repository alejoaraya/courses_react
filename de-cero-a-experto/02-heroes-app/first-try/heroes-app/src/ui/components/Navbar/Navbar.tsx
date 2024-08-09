import { Link } from "react-router-dom";
import { LinksItems, NavbarAccount, NavbarForm } from "./components";
import { useContext } from "react";
import { AuthContex } from "../../../auth/context/AuthContex";

export const Navbar = () => {
  const { state } = useContext(AuthContex);

  return (
    <div className='sticky top-0 left-0 z-10 flex justify-between w-full navbar bg-base-300'>
      <div className='justify-start'>
        <Link to={"/"} className='text-xl btn btn-ghost '>
          HeroesApp
        </Link>
        {state.logged && <LinksItems />}
      </div>

      <div className='justify-end gap-2 '>
        {state.logged && <NavbarForm />}

        {state.logged && <NavbarAccount />}
      </div>
    </div>
  );
};
