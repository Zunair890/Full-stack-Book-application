import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";


const router= createBrowserRouter([{
    path:"/",
    element: <App/>,
    children:[
        {
            path:"/",
            element: <p>Homepage</p>
        },
        {
            path:"/orders",
            element: <p>Orders</p>
        },
        {
            path:"/about",
            element: <p>about page</p>
        }
    ]
}]);

export default router