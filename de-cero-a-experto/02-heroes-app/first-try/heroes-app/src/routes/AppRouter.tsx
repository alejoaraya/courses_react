import { Route, Routes } from "react-router";
import { LoginPage } from "../auth";
import {
  DcPage,
  HeroesLayout,
  MarvelPage,
  published,
  SearchHeroesPage,
} from "../heroes";
import { HeroDetailPage } from "../heroes/pages/HeroDetailPage";
import { HomePage, Navbar } from "../ui";
import { PrivateRoute } from "../heroes/routes/PrivateRoute";
import { PublicRoute } from "../heroes/routes/PublicRoute";

export const AppRouter = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Routes>
        <Route
          path='login'
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path='/gallery/*'
          element={
            <PrivateRoute>
              <Routes>
                <Route path='/*' element={<HeroesLayout />}>
                  <Route
                    path='marvel'
                    element={<MarvelPage published={published.marver} />}
                  />
                  <Route
                    path='dc'
                    element={<DcPage published={published.dc} />}
                  />
                  <Route path='search' element={<SearchHeroesPage />} />
                  <Route path='detail/:id' element={<HeroDetailPage />} />
                </Route>
              </Routes>
            </PrivateRoute>
          }
        />

        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
};
