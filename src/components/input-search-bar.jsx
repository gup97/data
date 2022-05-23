export const InputSearch = ({ value, handleChange }) => {
  return (
    <input
      placeholder="검색"
      type="text"
      className="shadow-sm hover:border-slate-400 block w-full h-10 sm:text-lg px-5  rounded-md border-2  border-gray-400 "
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
