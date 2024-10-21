import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home';
import Error from './routes/Error';
import Game from './Game.jsx';

const router= createBrowserRouter([
  {
    //Elemento Pai
    path: '/', element: <App/>,
    errorElement:<Error/>,

    //Elementos Filhos

    children:[
      {path:'/', element:<Home/>},
      {path:'/game', element:<Game/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


