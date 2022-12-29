import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './compnenets/Home/Home';
import Login from './compnenets/Login/Login';
import Signup from './compnenets/SignUp/Signup';
import AddTask from './compnenets/AddTask/AddTask';
import MyTask from './compnenets/My Task/MyTask';
import CompletedTask from './compnenets/Completed Task/CompletedTask';

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
          path: '/add-task',
          element: <AddTask />
        },
        {
          path: '/my-task',
          element: <MyTask />
        },
        {
          path: '/completed-task',
          element: <CompletedTask />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <Signup />
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
