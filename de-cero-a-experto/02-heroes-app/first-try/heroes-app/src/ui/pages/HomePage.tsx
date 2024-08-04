import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div
      className='min-h-screen hero'
      style={{
        backgroundImage: "url(../../../assets/heroes/heroes-hero.jpg)",
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='text-center hero-content '>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Heroes's gallery</h1>

          <Link to={"gallery/marvel"} className='text-white btn btn-primary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
