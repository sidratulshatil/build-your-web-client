import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import Courses from "../../Courses/Courses";
import Error from "../../Error/Error";
import Faq from "../../Faq/Faq";
import Main from "../../layout/Main";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Courses></Courses> },
            { path: '/courses', element: <Courses></Courses> },
            { path: '/faq', element: <Faq></Faq> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '*', element: <Error></Error> },
        ]
    }
])