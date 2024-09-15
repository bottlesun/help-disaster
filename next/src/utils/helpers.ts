export const slugify = function (str: string) {
  // slugify 는 문자열을 URL에 쓸 수 있는 형태로 변환해주는 함수입니다.
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  const to = "aaaaaeeeeeiiiiooooouuuunc------";
  for (let i = 0, l = from.length; i < l; i++) {
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
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
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

/*
 * @name saveTokenToLocalStorage
 * @description 로컬 스토리지에 토큰을 저장합니다.
 * @param {string} token
 * */
export function saveTokenToLocalStorage(token: string) {
  const expirationTimeInMillis = 60 * 60 * 1000; // 분을 밀리초로 변환
  const expirationDate = new Date().getTime() + expirationTimeInMillis; // 현재 시간에 유효 기간을 더한 값

  localStorage.setItem("access-token", token);
  localStorage.setItem("tokenExpiration", expirationDate.toString());
}

/*
 * @name removeTokenFromLocalStorage
 * @description 로컬 스토리지에서 토큰을 삭제합니다.
 * */
function removeTokenFromLocalStorage() {
  localStorage.removeItem("access-token");
  localStorage.removeItem("tokenExpiration");
}

/*
 * @name checkTokenExpiration
 * @description 토큰이 만료되었는지 확인하고, 만료되었다면 삭제합니다.
 * @returns {void}
 * */
export function checkTokenExpiration() {
  // console.log('checkTokenExpiration 실행')
  const tokenExpiration = localStorage.getItem("tokenExpiration");

  if (tokenExpiration) {
    const currentTime = new Date().getTime();
    const expirationTime = parseInt(tokenExpiration);

    if (currentTime > expirationTime) {
      // 토큰이 만료되었으므로 삭제
      removeTokenFromLocalStorage();
    }
  }
}
