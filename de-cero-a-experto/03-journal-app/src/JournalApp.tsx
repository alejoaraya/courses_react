import { BrowserRouter } from "react-router-dom";
import { RouterApp } from "./routes/RouterApp";

export const JournalApp = () => {
  return (
    <>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </>
  );
};
