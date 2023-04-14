import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<HomePage/>
//   },
//   {
//     path:'/products',
//     element:<Products/>
//   }
// ]);

const routeDefination = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
  </Route>
)

const router = createBrowserRouter(routeDefination)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
