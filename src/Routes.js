import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  redirect
} from "react-router-dom";
import Signin from "./Components/Signin";
import Dashboard from "./Components/Dashboard";
import Nomatch from "./Nomatch";
import Root from './Components/Root'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="Signin" element={<Signin />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
