"use client";

import { useEffect, useState } from "react";
import Hero from "./templates/components/Hero/Hero";
import Information from "./templates/elements/Information/Information";
import { fetchCars } from "@/utils";
import Card from "./templates/elements/Card/Card";

import { CarProps } from "./types";
import Filters from "./templates/components/Filter/Filter";
import CustomButton from "./templates/elements/Button/Button";
import { useSearchParams } from "next/navigation";

const Home: React.FC = () => {
  const make = useSearchParams().get("make");

  console.log(make);

  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [filters, setFilters] = useState({
    make: "",
    year: 2022,
    fuel: "",
    transmission: "",
  });

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };

  useEffect(() => {
    setLoading(true);
    fetchCars({
      manufacturer: make || "",
      year: filters.year,
      fuel: filters.fuel,
      transmission: filters.transmission,
      limit: limit,
      model: "",
    }).then((data) => {
      setCars(data);
      setLoading(false);
    });
  }, [filters, make, limit]);

  // useEffect(() => {
  //   setLoading(true);
  //   fetchCars({
  //     manufacturer: "",
  //     year: 2022,
  //     fuel: "",
  //     transmission: "",
  //     limit: 10,
  //     model: "",
  //   }).then((data) => {
  //     setCars(data);
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <main className="px-20">
      <Hero />
      <div className="pt-20">
        <Information
          title="Cars Catalogue"
          titleStyle="text-4xl font-semibold pb-3"
          subtitle="Explore the cars you might like"
          subtitleStyle="font-light pb-10"
        />
        <Filters filters={filters} setFilters={setFilters} />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : cars.length === 0 ? (
        <div>No cars found.</div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
            {cars.map((car, index) => (
              <Card key={index} car={car} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <CustomButton buttonType="primary" buttonText="Load More" handleClick={handleLoadMore} paddingX="px-[1.5rem]" paddingY="py-[0.75rem]" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
