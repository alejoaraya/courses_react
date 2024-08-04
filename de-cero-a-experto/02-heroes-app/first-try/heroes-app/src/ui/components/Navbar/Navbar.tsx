import { LinksItems, NavbarAccount, NavbarForm } from "./components";

export const Navbar = () => {
  return (
    <div className='sticky top-0 left-0 z-10 navbar bg-base-300'>
      <LinksItems />

      <div className='flex-none gap-2'>
        <NavbarForm />
        <NavbarAccount />
      </div>
    </div>
  );
};
