import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error/ErrorPage';
import HomePage from './pages/Home/HomePage';
import Layout from './pages/Layout';
import CharactersHome from './pages/Characters/CharactersHome';
import Kick from './pages/Characters/Kick/KickPage';
import Ygg from './pages/Characters/Ygg/YggPage';
import Quarrion from './pages/Characters/Quarrion/QuarrionPage';
import Seraphine from './pages/Characters/Seraphine/SeraphinePage';
import LocationsHome from './pages/Locations/LocationsHome';
import SessionsHome from './pages/Sessions/SessionsHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: 'personagens',
        element: <CharactersHome></CharactersHome>,
      },
      {
        path: 'personagens/kick',
        element: <Kick></Kick>,
      },
      {
        path: 'personagens/yggdrasil',
        element: <Ygg></Ygg>,
      },
      {
        path: 'personagens/quarrion',
        element: <Quarrion></Quarrion>,
      },
      {
        path: 'personagens/seraphine',
        element: <Seraphine></Seraphine>,
      },
      {
        path: 'sessoes',
        element: <SessionsHome></SessionsHome>,
      },
      {
        path: 'locais',
        element: <LocationsHome></LocationsHome>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
