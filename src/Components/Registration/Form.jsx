import { useCallback, useState } from "react";
import PaystackBtn from "../Paystack/PaystackBtn";
import "./index.css";
import { deptData } from "@/utils/data";
import { useDropzone } from "react-dropzone";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [user_name, setUser_name] = useState("");
  const [user_surname, setUser_surname] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [coupon, setCoupon] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [dataURL, setDataURL] = useState(null);
  const [uploadedURL, setUploadedURL] = useState(null);
  const [isImgLoading, setIsImgLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        setDataURL(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, acceptedFiles, getInputProps, isDragActive } =
    useDropzone({ onDrop });

  const selectedFile = acceptedFiles[0];

  const uploadImage = async () => {
    let formData = new FormData();
    setIsImgLoading(true);

    formData.append("file", selectedFile);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

    await fetch(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        setUploadedURL(data.url);
        setIsImgLoading(false);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await uploadImage();
    const formData = {
      user_name,
      user_surname,
      department,
      image: uploadedURL,
      coupon,
    };

    console.log(formData);

    try {
      const response = await fetch(
        `https://sodapi.onrender.com/register?email=${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const responseBody = await response.json();
      if (response.ok) {
        console.log(responseBody);
        toast({
          type: "foreground",
          title: "Success",
          description: "Successfully registered",
          variant: "default",
        });
        navigate("/id-card", { state: responseBody });
        setIsLoading(false);
      } else {
        toast({
          type: "background",
          description: responseBody.message,
          variant: "destructive",
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast({
        type: "Something went wrong!",
        description: error.message,
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const [formStep, setFormStep] = useState(0);

  const updateFormSteps = (step) => {
    setFormStep(step);
  };

  const updateProgressBar = () => {
    return (formStep / 4) * 100 + "%";
  };

  const nextStep = () => {
    if (formStep < 4) {
      updateFormSteps(formStep + 1);
    }
  };

  const prevStep = () => {
    if (formStep > 0) {
      updateFormSteps(formStep - 1);
    }
  };

  return (
    <div className="py-32 px-[5vw]">
      {/* heading */}
      <div className="bg-white dark:bg-primary dark:text-white flex flex-col justify-center items-center py-14 text-center">
        <p className="font-bold text-accent"> SOD REGISTRATION</p>
        <h1 className="text-3xl py-2 font-bold text-secondary">
          Proceed to Register
        </h1>
      </div>

      <div className=" flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="form w-full max-w-lg p-8 bg-primary/40 rounded shadow-md"
        >
          <h1 className="text-2xl text-center mb-4">Registration Form</h1>
          {/* Progress bar */}
          <div className="progressbar flex justify-between mb-8 relative z-0">
            <div
              className="progress absolute top-1/2 transform -translate-y-1/2 h-1 w-full bg-gray-300 z-0"
              style={{ width: updateProgressBar() }}
            />
            <div
              className={`progress-step ${
                formStep >= 0 && "progress-step-active"
              } relative z-10 w-8 h-8 bg-accent text-wrap rounded-full flex items-center justify-center`}
              data-title="Intro"
            ></div>
            <div
              className={`progress-step ${
                formStep >= 1 && "progress-step-active"
              } relative z-10 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center`}
              data-title="Contact"
            ></div>
            <div
              className={`progress-step ${
                formStep >= 2 && "progress-step-active"
              } relative z-10 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center`}
              data-title="ID"
            ></div>
            <div
              className={`progress-step ${
                formStep >= 3 && "progress-step-active"
              } relative z-10 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center`}
              data-title="Payment"
            ></div>
            <div
              className={`progress-step ${
                formStep >= 4 && "progress-step-active"
              } relative z-10 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center`}
              data-title="Complete"
            ></div>{" "}
            {/* New step */}
          </div>

          {/* Steps */}
          {formStep === 0 && (
            <div className="form-step form-step-active">
              <div>
                <p className="font-bold text-accent text-center pb-4">
                  Personal Details
                </p>
              </div>
              <div className="input-group mb-4">
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium mb-2"
                >
                  Firstname
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={user_name}
                  onChange={(e) => setUser_name(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
               />
              </div>
              <div className="input-group mb-4">
                <label
                  htmlFor="user_surname"
                  className="block text-sm font-medium mb-2"
                >
                  Surname
                </label>
                <input
                  type="text"
                  name="user_surname"
                  id="user_surname"
                  value={user_surname}
                  onChange={(e) => setUser_surname(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div className="text-right">
                <button
                  type="button"
                  className="btn bg-accent text-white py-2 px-4 rounded ml-auto"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {formStep === 1 && (
            <div className="form-step">
              <div>
                <p className="font-bold text-accent text-center pb-4">
                  Personal Details
                </p>
              </div>
              <div className="input-group mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="mt-1 p-2 border border-gray-300 rounded w-full "
                  required
                />
              </div>
              <div className="input-group mb-4">
                <label
                  htmlFor="department"
                  className="block text-sm font-medium mb-2"
                >
                  Department
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="block appearance-none border w-full  border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                >
                  <option value="">Select an option</option>
                  {deptData.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="btn bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={prevStep}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn bg-accent text-white py-2 px-4 rounded"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {formStep === 2 && (
            <div className="form-step">
              <div>
                <p className="font-bold text-accent text-center pb-4">
                  Upload Passport Photograph
                </p>
              </div>
              <div className="max-w-80 mx-auto my-8">
                <div
                  className={`rounded w-full flex justify-center items-center overflow-hidden border ${
                    !dataURL === true
                      ? "border-gray-400 border-2 px-4 border-dashed"
                      : "border-none"
                  }`}
                >
                  {dataURL ? (
                    <div className="relative">
                      {isImgLoading && (
                        <div className="min-w-full min-h-full bg-green-600/70 absolute right-0 left-0 bottom-0 top-0">
                          <div className="absolute flex justify-center items-center p-2 right-0 bottom-0 top-0 left-0 w-full h-full gap-2 backdrop-filter">
                            <span className="text-white border-none transition-all duration-300 md:text-3xl font-bold p-3">
                              Upoading...
                            </span>
                          </div>
                        </div>
                      )}
                      <img src={dataURL} />
                      <div className="absolute flex justify-end p-2 right-0 bottom-0 w-full gap-2 backdrop-filter">
                        {uploadedURL && (
                          <span className="bg-[#238622] text-white font-semibold rounded-full border-none cursor-pointer transition-all duration-300 px-4 py-2 text-[0.7em]">
                            Uploaded!
                          </span>
                        )}
                        {!uploadedURL && (
                          <button
                            onClick={() => setDataURL(null)}
                            className="bg-[#872222] text-white rounded-full border-none cursor-pointer transition-all duration-300 p-3"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="w-full h-full cursor-pointer"
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <div className="rounded w-full h-36 flex justify-center items-center transition-all duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height="50"
                            width="50"
                            fill="currentColor"
                          >
                            <path d="M1 14.5C1 12.1716 2.22429 10.1291 4.06426 8.9812C4.56469 5.044 7.92686 2 12 2C16.0731 2 19.4353 5.044 19.9357 8.9812C21.7757 10.1291 23 12.1716 23 14.5C23 17.9216 20.3562 20.7257 17 20.9811L7 21C3.64378 20.7257 1 17.9216 1 14.5ZM16.8483 18.9868C19.1817 18.8093 21 16.8561 21 14.5C21 12.927 20.1884 11.4962 18.8771 10.6781L18.0714 10.1754L17.9517 9.23338C17.5735 6.25803 15.0288 4 12 4C8.97116 4 6.42647 6.25803 6.0483 9.23338L5.92856 10.1754L5.12288 10.6781C3.81156 11.4962 3 12.927 3 14.5C3 16.8561 4.81833 18.8093 7.1517 18.9868L7.325 19H16.675L16.8483 18.9868ZM13 13V17H11V13H8L12 8L16 13H13Z"></path>
                          </svg>
                        </div>
                      ) : (
                        <div className="rounded w-full h-36 flex justify-center items-center transition-all duration-300">
                          Drop your files here or click to browse
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="btn bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={prevStep}
                >
                  Previous
                </button>

                {dataURL && !!uploadedURL === true ? (
                  <button
                    type="button"
                    className="btn bg-accent text-white py-2 px-4 rounded"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn bg-accent text-white py-2 px-4 rounded"
                    onClick={uploadImage}
                  >
                    Upload
                  </button>
                )}
              </div>
            </div>
          )}
          {formStep === 3 && (
            <div className="form-step">
              <div>
                <p className="font-bold text-accent text-center pb-4">
                  Payment
                </p>
              </div>
              <div className="input-group mb-4">
                <label
                  htmlFor="paystack"
                  className="block text-sm font-medium mb-2"
                >
                 Use Paystack
                </label>
                <PaystackBtn
                user_name={user_name}
                user_surname={user_surname}
                email={email}
                department={department}
                image={uploadedURL}
                />
              </div>
              <div className="input-group mb-4">
                <label
                  htmlFor="couponid"
                  className="block text-sm font-medium mb-2"
                >
                  *Or coupon
                </label>
                <input
                  type="number"
                  name="couponid"
                  id="couponid"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="btn bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={prevStep}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn bg-accent text-white py-2 px-4 rounded"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {formStep === 4 && (
            <div className="form-step">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold text-accent">Confirmation</h2>
                <p className="text-secondary font-semibold">
                  Please confirm your details before submitting:
                </p>
              </div>
              <div className="mb-4">
                <strong>Firstname:</strong> {user_name}
              </div>
              <div className="mb-4">
                <strong>Surname:</strong> {user_surname}
              </div>
              <div className="mb-4">
                <strong>Department:</strong>
                {department}
              </div>

              <div className="mb-4">
                <strong>Coupon ID:</strong> {coupon}
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="btn bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={prevStep}
                >
                  Previous
                </button>
                <Button
                  variant=""
                  disabled={isLoading}
                  type="submit"
                  value="Submit"
                  className="btn bg-accent text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
