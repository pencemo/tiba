
import React from "react"
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/LoginPage"
import Admin from "./pages/Admin";
import { db } from "./firebase/firebase_init";
import { CarDBServices } from "./firebase/database_services/car_db";

function App() {
  const carDB = new CarDBServices();
  // carDB.addCarDoc({});
  // carDB.updateCarDoc("9fb4ba8b-7a0b-47dd-9d9c-148321e1b9cb", {
  //   milege: "20km/L",
  // });
  // carDB.deleteCarDoc("9fb4ba8b-7a0b-47dd-9d9c-148321e1b9cb");
  // const foo = carDB.getCarDoc("55ef1267-1cd4-4d14-9f96-7b8090696688");
  // console.log(foo);

 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route  path='/login'  element={<Login/>} />
        <Route  path='/admin'  element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
