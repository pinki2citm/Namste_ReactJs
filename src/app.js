import React, { Children, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from './components/About'
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";


//on demand Loading
//Lazy Loading

//
const Grocery = lazy(() => import("./components/Grocery") )
//Layout of APP
const AppLayout = () => {
  return (
    <div className="app_layout">
      <Header />
     <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>, 
  children: [
    {
      path:'/',
    element: <Body/>
    },
  {
    path:'/about',
    element: <About/>
  },
  {
    path:'/contact',
    element: <Contact/>
  },
  {
    path:'/cart',
    element: <Cart/>
  },
  {
    path:'/grocery',
    element:<Suspense fallback={<Shimmer/>}> <Grocery/></Suspense>
  },
  {
    path: '/restraunts/:resId', //:resId is used to dynamic Routing
    element: <RestrauntMenu/>
  }
],
  errorElement: <Error/>
}
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
