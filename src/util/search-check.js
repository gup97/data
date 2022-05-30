import { getRegExp } from "korean-regexp";

function 한글조건(targetText, input) {
  let 정규문자 = getRegExp(input, {
    initialSearch: true,
    fuzzy: true,
  });
  const 검사완료 = targetText.search(정규문자);
  if (검사완료 > -1) return true;
}
export default function 입력값을만족하는배열(arr, input, filterCondition) {
  return arr.filter((val) => 한글조건(val[`${filterCondition}`], input));
}
