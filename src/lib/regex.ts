export function removeHyphens(str: string) {
  return str.replace(/-/g, " ");
}

export function removeAlphabetsAndWords(inputString : string) {
  // Remove whole words consisting of alphabets
  let cleanedString = inputString.replace(/\b[a-zA-Z]+\b/g, "");

  // Remove any remaining alphabetic characters
  cleanedString = cleanedString.replace(/[a-zA-Z]/g, "");

  // Remove extra whitespace
  cleanedString = cleanedString.replace(/\s+/g, " ").trim();

  return cleanedString;
}