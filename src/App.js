import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Axios from "axios";

const getDataFromLocalStorage = () => {
  const value = localStorage.getItem("data");
  if (value) {
    return JSON.parse(value);
  }
};

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [ifscCode, setIfscCode] = useState();
  const [mcq, setMcq] = useState();

  const [data, setData] = useState(getDataFromLocalStorage());

  const submitData = (e) => {
    e.preventDefault();
    if (
      (!firstName || !lastName,
      !mobileNumber,
      !email,
      !accountNumber,
      !ifscCode,
      !mcq)
    ) {
      alert("please fill all the details");
    } else {
      if (mcq == "LocalStorage") {
        let givendata = {
          firstName,
          lastName,
          mobileNumber,
          email,
          accountNumber,
          ifscCode,
        };
        setData([...data, givendata]);
      } else {
        Axios.post("http://localhost:5000/api/insert", {
          first_name: firstName,
          last_name: lastName,
          email_id: email,
          mobile_no: mobileNumber,
          account_no: accountNumber,
          ifsc_code: ifscCode,
        }).then(() => {
          alert("successful insert");
        });
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

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
        <TextField
          id="outlined"
          type="text"
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <TextField
          id="outlined"
          type="text"
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </div>
      <div>
        <TextField
          id="outlined"
          type="email"
          label="Email ID"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />{" "}
        <TextField
          id="outlined"
          type="number"
          label="Mobile No."
          onChange={(e) => setMobileNumber(e.target.value)}
          value={mobileNumber}
        />
      </div>
      <div>
        <TextField
          id="outlined"
          type="number"
          inputmode="numeric"
          label="Account No."
          onChange={(e) => setAccountNumber(e.target.value)}
          value={accountNumber}
        />{" "}
        <TextField
          id="outlined"
          type="number"
          inputmode="numeric"
          label="IFSC Code"
          onChange={(e) => setIfscCode(e.target.value)}
          value={ifscCode}
        />
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
            value={mcq}
            onChange={(e) => setMcq(e.target.value)}
          >
            <MenuItem value="LocalStorage">LocalStorage</MenuItem>
            <MenuItem value="Database">Database</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <Button onClick={submitData} variant="contained">
          {" "}
          Submit{" "}
        </Button>
      </div>
    </Box>
  );
}
