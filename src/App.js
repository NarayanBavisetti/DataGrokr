import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function App() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined" type="text" label="First Name" />
        <TextField id="outlined" type="text" label="Last Name" />
      </div>
      <div>
        <TextField id="outlined" type="email" label="Email ID" />{" "}
        <TextField id="outlined" label="Mobile No." />
      </div>
      <div>
        <TextField id="outlined" inputmode="numeric" label="Account No." />{" "}
        <TextField id="outlined" inputmode="numeric" label="IFSC Code" />
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Storage Medium
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Storage Medium"
            // value={age}

            // onChange={handleChange}
          >
            <MenuItem value="LocalStorage">LocalStorage</MenuItem>
            <MenuItem value="Database">Database</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <Button variant="contained" disabled>
          {" "}
          Submit{" "}
        </Button>
      </div>
    </Box>
  );
}
