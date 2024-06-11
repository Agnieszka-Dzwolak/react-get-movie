import SearchContext from "../context/SearchContext";

import { useState, useContext } from "react";

import { Box, TextField, Button } from "@mui/material";

const Search = () => {
  const [value, setValue] = useState("");

  const { setSearchText } = useContext(SearchContext);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      return;
    } else {
      setSearchText(value);

      setValue("");
    }
  };
  return (
    <Box
      component="form"
      onSubmit={(e) => submitHandler(e)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 4, // margin-top
      }}
    >
      <TextField
        value={value}
        onChange={(e) => changeHandler(e)}
        label="Search"
        variant="outlined"
        sx={{ mr: 2, width: "500px" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ height: "56px" }}
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
