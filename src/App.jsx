import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LandingPage } from './pages/LandingPage';


const routers= createBrowserRouter(
  [
  {
    path: '/',
    element: <LandingPage />
  },

  {
    path: '/home',
    element: <HomePage />
  }
]
);

function App() {
    return <RouterProvider router={routers}/>
}

export default App;