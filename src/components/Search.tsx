import { SearchOff } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";

interface SearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setActiveSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function Search(props: SearchProps) {
  const { setValue, value, setActiveSearch, setPage } = props;

  const handleSearch = () => {
    setActiveSearch((prev) => !prev);
    setPage(1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <TextField
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        size="small"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button size="small" onClick={handleSearch}>
        <SearchOff />
      </Button>
    </div>
  );
}

export default Search;
