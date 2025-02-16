import * as React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useBookStore } from "../../hooks/bookStore";
import debounce from "lodash.debounce";

const SearchBar = () => {
  const { search, setSearch } = useBookStore((state) => state);

  const [text, setText] = React.useState("");

  // Create a debounced version of setSearch that delays execution by 3000ms (3 seconds)
  const debouncedSearch = React.useMemo(
    () =>
      debounce((query) => {
        setSearch(query);
      }, 500),
    [setSearch]
  );

  // Update local state immediately and trigger the debounced API call
  const handleChangeText = (query: string) => {
    setText(query);
    debouncedSearch(query);
  };

  // Cleanup the debounce on component unmount to avoid memory leaks
  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <Searchbar
      style={{ marginTop: 10 }}
      placeholder="Search"
      onChangeText={handleChangeText}
      value={text}
    />
  );
};

export default SearchBar;
