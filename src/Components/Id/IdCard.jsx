import { useLocation } from "react-router-dom";
import Logo from "../../assets/fcs-logo.png";
import Dom from "../Principals/img/Daniel.jpg";
import html2canvas from "html2canvas";

export const IdCard = () => {
  const { state } = useLocation();

  console.log(state);

  const downloadImage = () => {
    const domElement = document.getElementById("divToDownload"); // Replace 'divToDownload' with the ID of the div you want to download

    html2canvas(domElement)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "download.png";
        link.href = imgData;
        link.click();
      })
      .catch((error) => {
        console.error("Error generating image:", error);
      });
  };

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
        className="pattern-wavy pattern-blue-500 pattern-bg-white 
  pattern-size-8 pattern-opacity-10 bg-gradient-to-r from-blue-100/40 to-cyan-200 w-[500px] h-[300px] my-10 border-2 rounded-md"
      >
        <svg
          className="inline-block fill-current w-full  h-auto text-blue-400/40"
          viewBox="0 0 1440 450"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1189.2 169.2H421H253.8C159.8 169.2 69.1 203.1 0 262.6V449.8C30.5 349.9 131.3 276.7 252 276.7H424.1H1187.4C1280.9 276.7 1371 243.2 1440 184.3V0C1408.1 97.9 1308.3 169.2 1189.2 169.2Z"></path>
        </svg>
        {/* header */}
        <div className="h-[30%]  flex absolute top-10">
          <div className="w-[25%]  flex justify-center items-center">
            <img
              src={Logo}
              alt=""
              srcSet=""
              className="rounded-[55%] w-[70%]"
            />
          </div>
          <div className="w-[75%]  flex flex-col justify-center">
            <h1 className="font-bold text-blue-900">
              Fellowship of Christian Students
            </h1>
            <p className="text-[0.7em]">
              Federal University of Technology Minna
            </p>
            <p className="text-[0.9em] font-bold text-green-600">
              School of Destiny (SOD) 2024
            </p>
            <p className="italic text-[0.5em] font-semibold">
              (Manifesting the Life of the Spirit)
            </p>
          </div>
        </div>
        {/* details */}
        <div className="h-[2\18000px] w-[500px] flex flex-row p-5 gap-2  absolute top-36">
          <div className="w-[35%] bg-gray-100 rounded-lg p-2">
            <div className="">
              <h1 className="bg-white  h-[150px] w-[100%] rounded-lg flex justify-center items-center text-[0.7em]">
                <img src={Dom} alt="" className="rounded-md" />
              </h1>
            </div>
          </div>

          <div className="w-[65%] bg-white/40 rounded-md p-2 flex flex-col justify-center gap-4">
            <div className="font-semibold text-blue-900">DETAILS</div>
            <div>
              <h1 className="font-semibold text-gray-900 text-[0.8em]">
                FIRSTNAME:
              </h1>
              <h1 className="font-semibold text-gray-900 text-[0.8em]">
                SURNAME:
              </h1>
              <h1 className="font-semibold text-gray-900 text-[0.8em]">
                DEPT:
              </h1>
              <h1 className="font-semibold text-gray-900 text-[0.8em]">
                MATRIC-NO:
              </h1>
              <h1 className="font-semibold text-gray-900 text-[0.8em]"></h1>
            </div>
          </div>
        </div>
      </div>

      <button
        className="bg-accent p-2 rounded-md hover:bg-secondary duration-300 ease-in-out text-white"
        onClick={downloadImage}
      >
        Download ID Card{" "}
      </button>
    </div>
  );
};