/*
 * @name handelRemoveSubstring
 * @param msg: string | undefined
 * @param subString: string
 * @return string
 * @description
 * msg 에 특정 문자를 제거 한다.
 * */
export function handelRemoveSubstring(msg: string | undefined, subString: string) {
  if (msg === undefined) return "";

  return msg.replace(subString, "");
}

/*
 * @name handleRemoveAfterBracket
 * @param text: string
 * @param removeText: string
 * @return string
 * @description
 * text 에서 removeText 를 찾아서 removeText 뒤의 문자열을 제거 한다.
 * */
export function handleRemoveAfterBracket(text: string, removeText: string) {
  if (text === undefined) return "";
  let endIndex = text.indexOf(removeText);

  if (endIndex !== -1) {
    let result = text.substring(0, endIndex + 1);
    return result;
  }

  return text;
}

/*
 * @name handleRemoveBeforeBracket
 * @param text: string
 * @param removeText: string
 * @return string
 * @description
 * text 에서 removeText 를 찾아서 removeText 앞의 문자열을 제거 한다.
 * */

export function handleRemoveBeforeBracket(text: string, removeText: string, subString: string) {
  if (!text) return "";

  let startIndex = text.indexOf(removeText);

  if (startIndex !== -1) {
    let result = text.substring(startIndex + 1);
    const index = result.indexOf(subString);
    if (index !== -1) {
      return result.substring(0, index);
    }
    return result.replace(subString, "");
  }

  return text.replace(subString, "");
}

export function removeTrailingValues(input?: string) {
  if (!input) return "";
  const index = input.indexOf("vo.la");
  if (index !== -1) {
    return input.substring(0, index);
  }
  return input;
}

export function removeTrailingLastValues(input?: string) {
  if (!input) return "";

  const index = input.indexOf("[");
  if (index !== -1) {
    return input.substring(index, input.length);
  }
  return input;
}
