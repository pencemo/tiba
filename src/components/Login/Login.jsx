import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import Logo from "../../assets/Logo.png";
import { AuthService } from "../../firebase/auth_services/auth_service";
import { UserDBServices } from "../../firebase/database_services/user_db";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user_context";
import { UserModel } from "../../models/user_model";

import { User } from "lucide-react";
import { useLoading } from "../../contexts/loading_state_context";
import LoadingOverlay from "../Loading Overlay/loading_overlay";


function Login() {
  const authInstance = new AuthService();
  const userDBInstance = new UserDBServices();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [toast, setToast] = useState(false);
  const [loginerr, setloginerr] = useState('');
  const { userValue, updateUserValue } = useContext(UserContext);

  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      authInstance.isAuthenticated().then(async (isAuthenticated) => {
        if (isAuthenticated) {
          const userModel = await userDBInstance.getUser(email);

          if (userModel != null) {
            updateUserValue(
              new UserModel(
                userModel.email,
                userModel.password,
                userModel.name,
                userModel.role
              )
            );
          }

          navigate("/admin/dashboard");
        }
        setLoading(false);
      });
    }, 1000);
  }, [1]);

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (email.length != 0 && password.length != 0) {
        const userModel = await userDBInstance.getUser(email);

        if (userModel == null) {
          console.log("No user found");
          setToast(true)
          setloginerr('No user found')
          setTimeout(()=>{
            setToast(false)
          }, 4000)
          return;
        }

        const finalUser = new UserModel(
          userModel.email,
          userModel.password,
          userModel.name,
          userModel.role
        );
        updateUserValue(finalUser);

        await authInstance.login(email, password);

        navigate("/admin/dashboard");

        // const currentEmail = await authInstance.getCurrentUserEmail();

        console.log("logged in successfully as " + currentEmail);
      } else {
        console.log("fill all fields");
        setToast(true)
        setloginerr('fill all fields')
        setTimeout(()=>{
          setToast(false)
        }, 4000)
      }
    } catch (e) {
      setToast(true)
      setloginerr(e.message)
      setTimeout(()=>{
        setToast(false)
      }, 4000)
      console.log(
        "error in Login Page -> handleSubmitButton() _> " + e.message
        
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Login">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-20 w-auto" src={Logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                // type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmitButton}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
      {toast && <div className="toast opacity-100  absolute bottom-20 right-20 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert">
        <div className="flex p-4">
          <div className="flex-shrink-0">
            <svg className="flex-shrink-0 size-4 text-red-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
            </svg>
          </div>
          <div className="ms-3">
            <p className="text-sm text-gray-700 dark:text-neutral-400">
            {loginerr}
            </p>
          </div>
        </div>
      </div>
      // <Toast className="absolute bottom-20 right-20 bg-gray-100">
      //   <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
      //     <HiExclamation className="h-5 w-5" />
      //   </div>
      //   <div className="ml-3 text-sm font-normal">{loginerr}</div>
      //   <Toast.Toggle />
      // </Toast>
      }


      <LoadingOverlay />
    </div>
  );
}

export default Login;
