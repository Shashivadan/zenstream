export function encodeParam(param: string | number) {
  return btoa(encodeURIComponent(param))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// Decoding function
export function decodeParam(encoded: string) {
  return decodeURIComponent(
    atob(encoded.replace(/-/g, "+").replace(/_/g, "/")),
  );
}
