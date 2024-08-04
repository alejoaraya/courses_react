import { Link, NavLink } from "react-router-dom";

export const LinksItems = () => {
  return (
    <div className='flex-1 gap-5'>
      <Link to={"/"} className='text-xl btn btn-ghost '>
        HeroesApp
      </Link>
      <NavLink
        to={"../gallery/marvel"}
        className={({ isActive }) =>
          `text-gray-500 ${isActive ? "active" : ""}`
        }
      >
        Marvel
      </NavLink>
      <NavLink
        to={"../gallery/dc"}
        className={({ isActive }) =>
          `text-gray-500 ${isActive ? "active" : ""}`
        }
      >
        DC
      </NavLink>
    </div>
  );
};
