interface Props {
  id: string;
}

const url = "../../../assets/heroes/";

export const ImageHero = ({ id }: Props) => {
  return (
    <figure className='h-screen'>
      <img className='object-cover h-full' src={`${url}${id}.jpg`} alt={id} />
    </figure>
  );
};
