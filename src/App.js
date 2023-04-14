import { createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Root from "./pages/Root";
import ErrorPage from './pages/ErrorPage'
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/products',
        element:<Products/>
      },
      {
        path:'/products/:productId',
        element:<ProductDetail/>
      }
    ],
  },
  
]);

// const routeDefination = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>}></Route>
//     <Route path="/products" element={<Products/>}></Route>
//   </Route>
// )

//const router = createBrowserRouter(routeDefination)

function App() {
  return <RouterProvider router={router} />;
  
}

export default App;
