import countries from "@/constants/countries.json";

export const useCountries = () => {
  return countries;
};

export const useCountry = (countryCode: string) => {
  return countries.find((country) => country.code === countryCode);
};
