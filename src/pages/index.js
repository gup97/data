import db from "util/firebase";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
//wirte
import { handleNew, handleEdit, handleDelete, handleQureyDelete } from "util/utils";

export default function Pages() {
  const [colors, setColors] = useState([{ name: "loading", id: "initial" }]);
  useEffect(() => {
    const collectionRef = collection(db, "colors");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);
  //update

  //delete
  return (
    <div className="App">
      <button className="button" onClick={handleNew}>
        New
      </button>
      <button className="button" onClick={handleQureyDelete}>
        QueryDelete
      </button>
      {/* <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <button className="button" onClick={() => handleEdit(color.id)}>
              edit
            </button>
            <button className="button" onClick={() => handleDelete(color.id)}>
              delete
            </button>
            <Dot color={color.value} />
            {color.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
