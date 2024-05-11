import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Admin from "./pages/Admin";
import AboutPage from "./pages/AboutPage";
// import { firebase_db } from "./firebase/firebase_init";
import { CarDBServices } from "./firebase/database_services/car_db";
import Dashbord from "./components/Admin/Dashbord/Dashbord";
import Order from "./components/Admin/Orders/Order";
import { AuthService } from "./firebase/auth_services/auth_service";
import ManageCars from "./components/Admin/ManageCars/ManageCars";
import Manageadmin from "./components/Admin/ManageAdmin/Manageadmin";
import Settings from "./components/Admin/Settings/Settings";
import Enquiries from "./components/Admin/Enquirie/Enquiries";
import Contactpage from "./pages/Contactpage";
import CarsList from "./pages/CarsList";
import GalleryPage from "./pages/GalleryPage";
import CarDetails from "./pages/CarDetails";


function App() {
  const test = async () => {
    const authService = new AuthService();
    // await authService.login("test@test.com", "testtest");
    // await authService.createUser('test2@test.com','testtest');
  };

  test();

  // const carDB = new CarDBServices();
  // carDB.addCarDoc({});
  // carDB.updateCarDoc("9fb4ba8b-7a0b-47dd-9d9c-148321e1b9cb", {
  //   milege: "20km/L",
  // });
  // carDB.deleteCarDoc("9fb4ba8b-7a0b-47dd-9d9c-148321e1b9cb");
  // const foo = carDB.getCarDoc("55ef1267-1cd4-4d14-9f96-7b8090696688");
  // console.log(foo);

  return (
    <>
    <BrowserRouter basename="/tiba">
      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route  path='/about'  element={<AboutPage />} />
        <Route  path='/contact'  element={<Contactpage />} />
        <Route  path='/login'  element={<Login/>} />
        <Route  path='/carlist'  element={<CarsList />} />
        <Route  path='/cardetails/:carName'  element={<CarDetails />} />
        <Route  path='/gallery'  element={<GalleryPage />} />
        <Route  path='/admin/'  element={<Admin /> } >
           <Route  path="dashboard"  element={<Dashbord />} />
           <Route  path="order"  element={<Order />} />
           <Route  path="manage-car"  element={<ManageCars />} />
           <Route  path="manage-admin"  element={<Manageadmin />} />
           <Route  path="settings"  element={<Settings />} />
           <Route  path="enquiries"  element={<Enquiries />} />
        </Route>
      </Routes>
    </BrowserRouter>
      

    </>
  );
}

export default App;
