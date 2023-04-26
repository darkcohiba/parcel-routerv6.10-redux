import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Link
  } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Loading from "./pages/Loading";
import CreateUser from "./pages/CreateUser";
import { userSubmitAction } from "./utils/fetches";
import { getUsers } from "./utils/loaders";
import './index.css'
import RootLayout from "./layout/RootLayout";
import FormLayout from "./layout/FormLayout";
import BaseLayout from "./layout/BaseLayout";
import EditUser from "./pages/EditUser";




const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} errorElement={<Loading /> } id="root" loader={getUsers}>
        <Route path="/" element={<BaseLayout/>}>
            <Route
                index
                element={<Home />}
                
            />
            <Route
                path="about"
                element={<About />}
            />
        </Route>

        <Route path="forms" element={<FormLayout/>}>
            <Route
                index
                element={<CreateUser />}
            />
            <Route
                path=":userName"
                element={<EditUser />}
            />
        </Route>
    </Route>




))

// or (not working)
// const router = createBrowserRouter([
//     {
//       path: "/home",
//       element: <Home />,
//       children: [
//         {
//           path: "about",
//           element: <About />,
//         },
//       ],
//     },
//   ]);

// or this: (not working)
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//         <Route path="/about" element={<About />} />
//     </Route>
//     )
//   );



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <RouterProvider 
        router={router} 
    />
);
