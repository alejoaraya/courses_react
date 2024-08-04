import { Alert } from "./Alert";

interface Props {
  state: string;
}

export const AlertByState = ({ state }: Props) => {
  return state === null ? (
    <Alert type='info' state={state} />
  ) : (
    <Alert type='error' state={state} />
  );
};
