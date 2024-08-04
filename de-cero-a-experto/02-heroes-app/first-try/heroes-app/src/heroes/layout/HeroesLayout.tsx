import { Outlet } from "react-router";

export const HeroesLayout = () => {
  return (
    <div className='p-10'>
      <Outlet />
    </div>
  );
};
