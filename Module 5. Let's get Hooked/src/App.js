import React, { lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Body from "../Components/Body";
import Header from "../Components/Header";
import About from "../Components/About";
import Contact from "../Components/Contact";
import RestaurantMenu from "../Components/RestaurantMenu";
import Error from "../Components/Error";
// import Cart from "../Components/Cart";
import RestaurantCard from "../Components/RestaurantCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Footer from "../Components/Footer";

const Cart = lazy(() => import("../Components/Cart"));
const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Suspense fallback={<h1>Loading...</h1>}><Cart /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);