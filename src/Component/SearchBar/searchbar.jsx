import { Stack, TextField, Button } from "@mui/material";
import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from './searchbar.module.css';

export default function SearchBar({ list, filterList }) {
  const [inputText, setInputText] = useState("");

  // Memoizing the filtered list
  const filteredList = useMemo(() => {
    if (!inputText.trim()) return list;
    return list.filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(inputText.trim().toLowerCase())
    );
  }, [inputText, list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterList(filteredList);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Stack direction="row" spacing={2} className={styles.stack}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{ maxLength: 100 }} // Limiting input to 100 characters
          className={styles.textField}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
          disableElevation
          className={styles.button}
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}
