"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "./templates/components/Hero/Hero";
import Information from "./templates/elements/Information/Information";
import { fetchCars } from "@/utils";
import Card from "./templates/elements/Card/Card";
import { CarProps } from "./types";
import Filters from "./templates/components/Filter/Filter";
import CustomButton from "./templates/elements/Button/Button";

const Home: React.FC = () => {
  const searchParams = useSearchParams();

  const params = {
    make: searchParams.get("make") || "",
    year: Number(searchParams.get("year")) || 2022,
    fuel: searchParams.get("fuel") || "",
    transmission: searchParams.get("transmission") || "",
    limit: 10,
  };

  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };

  useEffect(() => {
    const fetchParams = { ...params, limit };
    setLoading(true);
    fetchCars(fetchParams).then((data) => {
      setCars(data);
      setLoading(false);
    });
  }, [params.make, params.year, params.fuel, params.transmission, limit]);

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
        <Filters />
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
          <div className="flex justify-center mt-9">
            <CustomButton
              buttonType="primary"
              buttonText="Load More"
              handleClick={handleLoadMore}
              paddingX="px-[1.5rem]"
              paddingY="py-[0.75rem]"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
