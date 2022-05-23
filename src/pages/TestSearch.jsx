import React, { useState } from "react";
import { getRegExp } from "korean-regexp";
//https://bluewings.github.io/unobstructed-hangul-regular-expression/
import { mock } from "./mock";
import { useDebounce } from "Hooks/UseDebounce";
function 한글조건(targetText, input) {
  let 정규문자 = getRegExp(input);
  const 검사완료 = targetText.search(정규문자);

  if (검사완료 > -1) return true;
}
function 입력값을만족하는배열(arr, input) {
  return arr.filter((val) => 한글조건(val.name, input));
}

const ResultList = ({ arr, input }) => {
  const filterArray = 입력값을만족하는배열(arr, input);
  return (
    <>
      {filterArray.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};
// 나중에 Component로 떼버리기

const Input = ({ value, handleChange }) => {
  return <input value={value} onChange={(e) => handleChange(e.target.value)} />;
};
//ListListTap
function TestSearch() {
  const [text, setText] = useState("");
  const [arr, setArray] = useState(mock);

  //나중에 이거 활용하되, 숫자가 -1이 아닌거중 낮은숫자로 정렬해서
  //갯수 정해서 뽑아내야할듯?

  return (
    <div>
      <Input value={text} handleChange={setText} />
      <div>
        <ResultList arr={arr} input={text} />
      </div>
    </div>
  );
}

export default TestSearch;
