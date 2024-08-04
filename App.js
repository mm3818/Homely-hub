import './App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Main from "./Components/Home/Main";
import PropertyList from './Components/Home/PropertyList';
import PropertyDetails from './Components/PropertyDetails1/PropertyDetails';

function App() {
  //creates routes from the elements passed to it
  const router = createBrowserRouter(createRoutesFromElements
    (
      //detects router components that matches all paths "/" and renders the Main component
      <Route path="/" element={<Main />} id="main" exact>
        <Route id="home" index element={<PropertyList/>} exact/>
        <Route element={<PropertyDetails/>} id="PropertyDetails" path="propertylist/:id" exact/>
      </Route>
    )
  );

  return (
    <div className="App">
      {/* this ensures that the routing functionality is avaliable throughout the app */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
