import React, { useEffect, useState } from "react";
import Select from "react-select";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  fuelOptions,
  makeOptions,
  transmissionOptions,
  yearOptions,
} from "@/app/data";

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [params, setParams] = useState({});
  const [currentMakeParams, setcurrentMakeParams] = useState({});
  const [currentYearParams, setcurrentYearParams] = useState({});
  const [currentFuelParams, setcurrentFuelParams] = useState({});
  const [currentTransmissionParams, setcurrentTransmissionParams] = useState({});

  useEffect(() => {
    const make = searchParams.get("make") || "";
    const year = Number(searchParams.get("year")) || null;
    const fuel = searchParams.get("fuel") || "";
    const transmission = searchParams.get("transmission") || "";

    const updatedParams = {
      ...(make && { make }),
      ...(year !== null && { year }),
      ...(fuel && { fuel }),
      ...(transmission && { transmission }),
    };

    setParams(updatedParams);

    setcurrentMakeParams(
      makeOptions.find((option) => option.value === updatedParams.make) ||
        makeOptions[0]
    );
    setcurrentYearParams(
      yearOptions.find((option) => option.value === updatedParams.year) ||
        yearOptions[0]
    );
    setcurrentFuelParams(
      fuelOptions.find((option) => option.value === updatedParams.fuel) ||
        fuelOptions[0]
    );
    setcurrentTransmissionParams(
      transmissionOptions.find(
        (option) => option.value === updatedParams.transmission
      ) || transmissionOptions[0]
    );
  }, [searchParams]);

  const handleSelectChange = (type, selectedOption) => {
    const updatedParams = {
      ...params,
      [type]: selectedOption ? selectedOption.value : "",
    };

    setParams(updatedParams);

    const queryString = Object.keys(updatedParams)
      .filter((key) => updatedParams[key])
      .map((key) => `${key}=${updatedParams[key]}`)
      .join("&");

    router.push(queryString ? `/?${queryString}` : "/");
  };

  return (
    <div className="flex flex-wrap justify-between space-y-4 md:space-y-0">
      <div className="w-full md:w-auto flex items-center space-x-2 mb-3">
        <Image
          src="/caricon.png"
          alt="Car Icon"
          width={24}
          height={24}
          className="mr-2"
        />
        <Select
          isSearchable
          options={makeOptions}
          value={currentMakeParams}
          onChange={(selectedOption) =>
            handleSelectChange("make", selectedOption)
          }
          className="w-full md:w-80"
        />
      </div>
      <div className="flex flex-wrap w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-40">
          <Select
            options={yearOptions}
            value={currentYearParams}
            onChange={(selectedOption) =>
              handleSelectChange("year", selectedOption)
            }
          />
        </div>
        <div className="w-full md:w-40">
          <Select
            options={fuelOptions}
            value={currentFuelParams}
            onChange={(selectedOption) =>
              handleSelectChange("fuel", selectedOption)
            }
          />
        </div>
        <div className="w-full md:w-[14rem]">
          <Select
            options={transmissionOptions}
            value={currentTransmissionParams}
            onChange={(selectedOption) =>
              handleSelectChange("transmission", selectedOption)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;