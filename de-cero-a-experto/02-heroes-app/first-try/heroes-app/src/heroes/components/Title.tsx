export interface Props {
  heroes: number;
  title: string;
}
export const Title = ({ heroes, title }: Props) => {
  return (
    <div className='flex flex-row items-center gap-5 '>
      <h1 className='text-4xl font-bold'>{title} Gallery</h1>
      <div className='text-white badge badge-primary'>
        <b>{heroes}</b>
      </div>
    </div>
  );
};
