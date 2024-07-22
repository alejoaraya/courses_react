export const GifItem = ({ image, title }) => {
  return (
    <div className='flex flex-col items-center justify-between gap-2 border shadow bg-slate-100'>
      <img src={image} alt={title} />
      <h3 className='text-sm font-medium'>{title}</h3>
    </div>
  );
};
