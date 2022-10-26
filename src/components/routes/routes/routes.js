import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import CourseDetals from "../../CourseDetails/CourseDetals";
import Courses from "../../Courses/Courses";
import Error from "../../Error/Error";
import Faq from "../../Faq/Faq";
import Main from "../../layout/Main";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import CheackOut from '../../CheackOut/CheackOut'
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Courses></Courses>, loader: () => fetch('https://build-your-web-server.vercel.app/courses') },
            // { path: '/courses/:id', element: <Courses></Courses>, loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`) },
            { path: '/courses/:id', element: <CourseDetals></CourseDetals>, loader: ({ params }) => fetch(`https://build-your-web-server.vercel.app/courses/${params.id}`) },
            { path: '/faq', element: <Faq></Faq> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/cheackout', element: <PrivateRoute><CheackOut></CheackOut></PrivateRoute> },
            { path: '*', element: <Error></Error> },
        ]
    }
])