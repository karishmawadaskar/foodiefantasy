import ReactDOM from 'react-dom/client';
import Home from "./view/Homefolder/H";
import About from './view/Aboutfolder/A';
import Contact from "./view/Contactfolder/C";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

root.render(<RouterProvider router={router} />);