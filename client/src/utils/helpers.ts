export const slugify = function (str: string) {
  // slugify 는 문자열을 URL에 쓸 수 있는 형태로 변환해주는 함수입니다.
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
};

export function makeId(length: number) {
  // makeId 는 랜덤한 문자열을 생성해주는 함수입니다.
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/*
 * @name arraysHaveSameContent
 * @description 두 배열이 같은 요소를 가지고 있는지 확인합니다.
 * @param {any[]} array1
 * @param {any[]} array2
 * @returns {boolean}
 * */
export function arraysHaveSameContent(array1: any[], array2: any[]) {
  const sortedArray1 = array1.slice().sort();
  const sortedArray2 = array2.slice().sort();

  return JSON.stringify(sortedArray1) === JSON.stringify(sortedArray2);
}
