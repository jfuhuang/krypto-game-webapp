import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InitialPage from './components/InitialPage/InitialPage.jsx';
import GamePage from './components/GamePage/GamePage.jsx';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/game" element={<GamePage />} />
      <Route path="/" element={<InitialPage />} />
    </>
  ))

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;