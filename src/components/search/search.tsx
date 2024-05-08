import { useState } from "react";
import InputField from "../input-field/inputField";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    router.push(`/search?q=${event.target.value}`);
  };

  return (
    <InputField
      placeholder="Search"
      id="search"
      icon={"faSearch"}
      value={searchValue}
      onChange={handleChange}
    />
  );
};

export default Search;
