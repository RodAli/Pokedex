import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import MainPage from './MainPage';
import PokemonDetailPage from './PokemonDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>There was an error ... 😔</div>,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/pokemon/:pokemonId",
        element: <PokemonDetailPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
