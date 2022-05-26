export const InputImageFile = ({ onChange, form }) => {
  const imagePath = form.imagePath;
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        물건 사진
      </label>
      {imagePath ? (
        <div className="flex justify-start mt-8 gap-5">
          <img src={imagePath} alt="preview" className="flex items-center  w-40" />
          <div className="w-40 flex flex-col justify-around ">
            <div className="flex justify-center content-center">
              <button className="w-28 h-10 text-white bg-blue-500 rounded shadow-xl">
                image delete
              </button>
            </div>
            <div className="flex justify-center content-center">
              <button className=" w-28 h-10 text-white bg-blue-500 rounded shadow-xl">
                image edit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-start  mt-8">
          <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
            <div className="m-4">
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Attach a file
                    </p>
                  </div>
                  <input
                    className="opacity-0"
                    type="file"
                    accept="image/*"
                    name="imagePath"
                    onChange={onChange}
                  ></input>
                </label>
              </div>
            </div>
            <div className="flex justify-center p-2"></div>
          </div>
        </div>
      )}

      {/* <button onClick={uploadImage}>UploadImage</button> */}
    </>
  );
};
