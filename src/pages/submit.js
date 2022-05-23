import db from "util/firebase";
import React from "react";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { handleNew } from "util/utils";

const dormitorys = [
  "아마레관", //0
  "예지관", //1
  "세르비레관", //2
  "효성관", //3
  "성김대건관", //4
  "다솜관", //5
  "참인재관", //6
  "주소미입력", //7
];
const SubmitTap = () => {
  const [userStore, setUserStore] = useState([{ name: "loading", id: "initial" }]);

  useEffect(() => {
    const collectionRef = collection(db, "userStore");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      setUserStore(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const [form, setForm] = useState({
    name: "", //input
    darm: "아마레관", //option
    room: "", //input
    size: "", //input
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const showData = () => {
    console.log(form);
  };

  const onSubmit = (e) => {
    console.log("제출");

    //초기화
    setForm({
      name: "", //input
      darm: "아마레관", //option
      room: "", //input
      size: "", //input
    });

    // firebase 값 전송 (성공)
    handleNew(form);
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        name
        <input onChange={onChange} name="name" value={form.name} />
      </label>
      <br />
      <label>
        darm
        <select onChange={onChange} name="darm" value={form.darm}>
          {dormitorys.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label>
        room
        <input onChange={onChange} name="room" value={form.room} />
      </label>
      <br />
      <label>
        size
        <input onChange={onChange} name="size" value={form.size} />
      </label>
      <div>
        <button onClick={showData}>Submit</button>
      </div>
    </form>
  );
};
export default SubmitTap;
