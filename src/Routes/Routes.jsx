import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Errorpage from "../Pages/ErrorPage/Errorpage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Errorpage/>
    }
])