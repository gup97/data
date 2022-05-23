import 입력값을만족하는배열 from "util/search-check";
export const ListData = ({ store, input }) => {
  const filterArray = 입력값을만족하는배열(store, input);
  return (
    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {filterArray.map((user) => (
        <li key={user.id}>
          <button
            type="button"
            className="group p-2 w-full flex items-center justify-between rounded-md
        border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none 
        focus:ring focus:ring-offset-2 focus:ring-indigo-500"
          >
            <div className=" min-w-0 flex-1 flex items-center space-x-3">
              <div className=" px-7 min-w-0 flex-1">
                <div className="flex">
                  <p className="font-medium text-gray-900 truncate w-1/2">{user.name}</p>
                </div>
                <div className="flex gap-3">
                  <p className="text-sm font-medium truncate">{user.dorm}</p>
                  <p className="text-sm font-medium truncate">{user.room}</p>
                  <p className="text-sm font-medium truncate">{user.place}</p>
                </div>
              </div>
            </div>
            <div className=" flex-shrink-0"></div>
          </button>
        </li>
      ))}
    </ul>
  );
};
