import { useState } from "react";
import InputField from "../input-field/inputField";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(searchValue);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
    router.push(`/search?q=${searchValue}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <InputField
        placeholder="Search"
        id="search"
        icon={"faSearch"}
        value={searchValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
