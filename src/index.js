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
import App from "./app";
import CreateUser from "./pages/CreateUser";
import { userSubmitAction } from "./pages/CreateUser";



const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<App />} errorElement={<Loading />}>
        <Route
            path="/"
            element={<Home />}
        />
        <Route
            path="/about"
            element={<About />}
        />
        <Route
            path="/userform"
            element={<CreateUser />}
            action={userSubmitAction}
        />
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
