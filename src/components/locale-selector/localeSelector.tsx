"use client";

import React, { useContext, useState } from "react";
import Select from "../input-field/select";
import { Context } from "@/app/context/context";
import { useRouter } from "next/navigation";

const LocaleSelector = () => {
  const { locale, setLocale } = useContext(Context);
  const router = useRouter();

  const [value, setValue] = useState(locale);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryCode = event.target.value;
    setValue(selectedCountryCode);
    setLocale(selectedCountryCode);
    router.push(`/${selectedCountryCode}/browse`);
  };

  const locales = [
    { key: "global", locale: null, title: "Global" },
    { key: "gb", locale: "GB", title: "United Kingdom" },
    { key: "us", locale: "US", title: "USA" },
  ];

  return (
    <Select onChange={onChange} value={value}>
      {locales.map((locale, index) => {
        return (
          <option key={index} value={locale.key}>
            {locale.title} {locale.locale && `(${locale.locale})`}
          </option>
        );
      })}
    </Select>
  );
};

export default LocaleSelector;
