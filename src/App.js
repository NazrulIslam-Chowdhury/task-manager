import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './compnenets/Home/Home';
import Login from './compnenets/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
