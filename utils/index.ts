import { CarProps, FilterProps } from "@/app/types";
const keyImaginStudio = "hrjavascript-mastery";

export async function fetchCars(filters: FilterProps) {
  const { fuel, limit, manufacturer, transmission, year } = filters;

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&transmission=${transmission}&limit=${limit}&fuel_type=${fuel}`;
  const headers = {
    "X-RapidAPI-Key": "fad77145f6mshced00da007709eep14e47djsn9c0f18fb1c72",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(`${url}`, {
    headers: headers,
  });

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", keyImaginStudio);
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName
};

//   export const updateSearchParams = (type: string, value: string) => {
//     // Get the current URL search params
//     const searchParams = new URLSearchParams(window.location.search);

//     // Set the specified search parameter to the given value
//     searchParams.set(type, value);

//     // Set the specified search parameter to the given value
//     const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

//     return newPathname;
//   };

//   export const deleteSearchParams = (type: string) => {
//     // Set the specified search parameter to the given value
//     const newSearchParams = new URLSearchParams(window.location.search);

//     // Delete the specified search parameter
//     newSearchParams.delete(type.toLocaleLowerCase());

//     // Construct the updated URL pathname with the deleted search parameter
//     const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

//     return newPathname;
//   };

//   export async function fetchCars(filters: FilterProps) {
//     const { manufacturer, year, model, limit, fuel } = filters;

//     // Set the required headers for the API request
//     const headers: HeadersInit = {
//       "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
//       "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//     };

//     // Set the required headers for the API request
//     const response = await fetch(
//       `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
//       {
//         headers: headers,
//       }
//     );

//     // Parse the response as JSON
//     const result = await response.json();

//     return result;
//   }

//   export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//     const url = new URL("https://cdn.imagin.studio/getimage");
//     const { make, model, year } = car;

//     url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
//     url.searchParams.append('make', make);
//     url.searchParams.append('modelFamily', model.split(" ")[0]);
//     url.searchParams.append('zoomType', 'fullscreen');
//     url.searchParams.append('modelYear', `${year}`);
//     // url.searchParams.append('zoomLevel', zoomLevel);
//     url.searchParams.append('angle', `${angle}`);

//     return `${url}`;
//   }