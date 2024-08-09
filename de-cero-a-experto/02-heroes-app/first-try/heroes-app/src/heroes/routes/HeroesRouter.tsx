import { Route } from "react-router";
import { HeroesLayout } from "../layout";
import { DcPage, MarvelPage, SearchHeroesPage } from "../pages";
import { published } from "../util";
import { HeroDetailPage } from "../pages/HeroDetailPage";

export const HeroesRouter = () => {
  return (
    <Route path='gallery' element={<HeroesLayout />}>
      <Route
        path='marvel'
        element={<MarvelPage published={published.marver} />}
      />
      <Route path='dc' element={<DcPage published={published.dc} />} />
      <Route path='search' element={<SearchHeroesPage />} />
      <Route path='detail/:id' element={<HeroDetailPage />} />
    </Route>
  );
};
