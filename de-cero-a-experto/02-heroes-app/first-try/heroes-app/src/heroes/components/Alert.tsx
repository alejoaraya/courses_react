interface Props {
  state: string;
  type?: "error" | "info";
}

const InfoAlert = () => (
  <>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      className='w-6 h-6 stroke-current shrink-0'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      ></path>
    </svg>
    <span>What hero do you want to look for?</span>
  </>
);

const ErrorAlert = ({ state }: Props) => (
  <>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6 stroke-current shrink-0'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
    <span>
      The hero <b className='uppercase'>{state}</b> you wanted to look for does
      not exist in this gallery.
    </span>
  </>
);

export const Alert = ({ state, type }: Props) => {
  return (
    <div role='alert' className={`alert alert-${type}`}>
      {type === "error" ? <ErrorAlert state={state} /> : <InfoAlert />}
    </div>
  );
};
