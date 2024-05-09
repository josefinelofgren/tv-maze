export const getLocaleFromPathname = (pathname: string): string => {
  const UK = ["gb", "uk"];
  const US = ["us"];

  const lowerCasedPathname = pathname.toLowerCase();

  if (UK.some((code) => lowerCasedPathname.includes(code.toLowerCase()))) {
    return "gb";
  } else if (
    US.some((code) => lowerCasedPathname.includes(code.toLowerCase()))
  ) {
    return "us";
  } else {
    return "global";
  }
};
