"use client";

import React, { useContext, useState } from "react";
import Select from "../input-field/select";
import { Context } from "@/app/context/context";
import { useRouter } from "next/navigation";

const CountrySelector = () => {
  const { countryCode, setCountryCode } = useContext(Context);
  const router = useRouter();

  const [value, setValue] = useState(countryCode);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryCode = event.target.value;
    setValue(selectedCountryCode);
    setCountryCode(selectedCountryCode);
    router.push(`/${selectedCountryCode}/browse`);
  };

  const countries = [
    { key: "global", locale: null, title: "Global" },
    { key: "gb", locale: "GB", title: "United Kingdom" },
    { key: "us", locale: "US", title: "USA" },
  ];

  return (
    <Select onChange={onChange} value={value}>
      {countries.map((country, index) => {
        return (
          <option key={index} value={country.key}>
            {country.title} {country.locale && `(${country.locale})`}
          </option>
        );
      })}
    </Select>
  );
};

export default CountrySelector;
