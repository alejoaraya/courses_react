import { Route, Routes } from "react-router";
import {
  DcPage,
  MarvelPage,
  HeroesLayout,
  SearchHeroesPage,
  PUBLISHED_MARVEL,
  PUBLISHED_DC,
} from "./heroes";
import { HomePage, Navbar } from "./ui";
import { HeroDetailPage } from "./heroes/pages/HeroDetailPage";
// import { LoginPage } from "./auth";

export const HeroesApp = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='gallery' element={<HeroesLayout />}>
          <Route
            path='marvel'
            element={<MarvelPage published={PUBLISHED_MARVEL} />}
          />
          <Route path='dc' element={<DcPage published={PUBLISHED_DC} />} />
          <Route path='search' element={<SearchHeroesPage />} />
          <Route path='detail/:id' element={<HeroDetailPage />} />
        </Route>

        {/* <Route path='/login' element={<LoginPage />} /> */}

        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
};
