import React from 'react';
import Select from 'react-select';
import Image from 'next/image';
import { fuelOptions, makeOptions, transmissionOptions, yearOptions } from '@/app/data';
import { useRouter } from 'next/navigation';

const Filters = ({ filters, setFilters }: any) => {

  const router = useRouter()

  return (
    <div className="flex flex-wrap justify-between space-y-4 md:space-y-0">
      <div className="w-full md:w-auto flex items-center space-x-2 mb-3">
        <Image src="/caricon.png" alt="Car Icon" width={24} height={24} className="mr-2" />
        <Select
          isSearchable
          options={makeOptions}
          placeholder="Enter Make"
          onChange={(selectedOption) => selectedOption.value === "" ? router.push("/") : router.push(`/?make=${selectedOption?.value}`)}
          className="w-full md:w-80"
        />
      </div>
      <div className="flex flex-wrap w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-40">
          <Select
            options={yearOptions}
            placeholder="Select Year"
            onChange={(selectedOption) => setFilters({ ...filters, year: selectedOption?.value || '' })}
          />
        </div>
        <div className="w-full md:w-40">
          <Select
            options={fuelOptions}
            placeholder="Select Fuel"
            onChange={(selectedOption) => setFilters({ ...filters, fuel: selectedOption?.value || '' })}
          />
        </div>
        <div className="w-full md:w-[14rem]">
          <Select
            options={transmissionOptions}
            placeholder="Select Transmission"
            onChange={(selectedOption) => setFilters({ ...filters, transmission: selectedOption?.value || '' })}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;