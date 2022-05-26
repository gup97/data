export const InputImageFile = ({ onChange, form }) => {
  const imagePath = form.imagePath;
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        물건 사진
      </label>
      <input type="file" accept="image/*" name="imagePath" onChange={onChange}></input>
      {imagePath && <img src={imagePath} alt="preview" width="50px" height="50px" />}
      {/* <button onClick={uploadImage}>UploadImage</button> */}
    </>
  );
};
