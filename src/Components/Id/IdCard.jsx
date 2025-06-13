import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import Logo from "../../assets/fcs-logo.png";
import { downloadImage } from "@/utils/func";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const IdCard = () => {
  const { user } = useKindeAuth();
  const email = user?.email;
  const { state } = useLocation();

  console.log(state);

  const [userInfo, setUserInfo] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    // isLoading(true);
    console.log(email);
    if (email)
      axios
        .get(`https://sodapi.onrender.com/user?email=${email}`)
        .then((response) => {
          setUserInfo(response.data);
          console.log(response.data);
          // setIsLoading(false);
        })
        .catch((error) => {
          // setIsError(true);
          console.log(error);
        });
  }, [email]);

  // if (isLoading || userInfo === null) {
  //   return (
  //     <div className="">
  //       <p className="text-accent font-semibold text-[0.9em]">LOADING...</p>
  //     </div>
  //   );
  // }
  // if (isError) {
  //   return (
  //     <div className="">
  //       <p className="text-accent font-semibold text-[0.9em]">ERROR...</p>
  //     </div>
  //   );
  // }

  console.log(userInfo);

  return (
    <div className="flex justify-center items-center my-40 relative flex-col ">
      {/* heading */}
      <div>
        <p className="text-accent font-semibold text-[0.9em]">
          DOWNLOAD ID CARD
        </p>
      </div>

      <div
        id="divToDownload"
        className="pattern-wavy pattern-blue-500 pattern-bg-white flex flex-col justify-around
  pattern-size-8 pattern-opacity-10 bg-gradient-to-r from-blue-100/40 to-cyan-200 xs:w-screen mx-1 h-[240px] my-10 border-2 rounded-md"
      >
        {/* <svg
          className="inline-block fill-current w-full  h-auto text-blue-400/40"
          viewBox="0 0 1440 450"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1189.2 169.2H421H253.8C159.8 169.2 69.1 203.1 0 262.6V449.8C30.5 349.9 131.3 276.7 252 276.7H424.1h3187.4C1280.9 276.7 1371 243.2 1440 184.3V0C1408.1 97.9 1308.3 169.2 1189.2 169.2Z"></path>
        </svg> */}
        {/* header */}
        <div className="h-[30%]  flex flex-row">
          <div className="w-[25%]  flex flex-row justify-center items-center">
            <img
              src={Logo}
              alt=""
              srcSet=""
              className="rounded-[55%] w-[70%]"
            />
          </div>
          <div className="w-[75%]  flex flex-col justify-center">
            <h3 className="font-bold text-[0.7em] text-blue-900">
              Fellowship of Christian Students
            </h3>
            <p className="text-[0.7em]">
              Federal University of Technology Minna
            </p>
            <p className="text-[0.9em] font-bold text-green-600">
              School of Destiny (SOD) 2025
            </p>
            <p className="italic text-[0.5em] font-semibold">
              (The Light of Life)
            </p>
          </div>
        </div>
        {/* details */}
        <div className=" h-[150px] flex flex-row p-2 gap-1  ">
          <div className="w-[35%] h-[140px] bg-gray-100 rounded-lg p-2">
            <div className="w-full overflow-hidden">
              <img
                src={state !== null ? state.data.image : userInfo?.data.image}
                alt="user_image"
                className="rounded-xl h-[125px] w-full object-cover"
              />
            </div>
          </div>

          <div className="w-[65%] bg-gray-100 rounded-md p-2 flex flex-col justify-center ">
            {/* <div className="font-semibold text-blue-900">DETAILS</div> */}
            <div>
              <h3 className="font-semibold text-gray-900 text-[0.8em] space-x-1">
                <span className="">FIRSTNAME: </span>
                <span className="capitalize">
                  {state !== null
                    ? state?.data?.firstname
                    : userInfo?.data.firstname}
                </span>
              </h3>
              <h3 className="font-semibold text-gray-900 text-[0.8em] space-x-1">
                <span className="uppercase">surname: </span>
                <span className="capitalize">
                  {state !== null
                    ? state?.data?.surname
                    : userInfo?.data.surname}
                </span>
              </h3>
              <h3 className="font-semibold text-gray-900 text-[0.8em] space-x-1">
                <span className="uppercase">dept: </span>
                <span className="capitalize text-xs">
                  {state !== null
                    ? state?.data?.department
                    : userInfo?.data.department}
                </span>
              </h3>
              <h3 className="font-semibold text-gray-900 text-[0.8em] space-x-1">
                <span className="uppercase">matric. No: </span>
                <span className="capitalize text-xs">
                  {state !== null
                    ? state?.data?.matric_no
                    : userInfo?.data.matric_no}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
 
        <p className="py-10 italic text-[0.8em]  ">*Do well to take a screenshot</p>
      
      <button
        className="bg-accent p-2  rounded-md hover:bg-secondary duration-300 ease-in-out text-white"
        onClick={downloadImage}
      >
        Download ID Card{" "}
      </button>
    </div>
  );
};
