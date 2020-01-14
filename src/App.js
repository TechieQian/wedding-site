import React from "react";
import "./styles.css";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function App() {
  return (
    <div className="App">
      <h1>Qian & Jessica</h1>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We won't sell your email :^)
          </FormHelperText>
        </FormControl>

        <Autocomplete
          autoComplete={true}
          options={[{ title: "qian", year: 100 }]}
          getOptionLabel={option => option.title}
          style={{ width: 300 }}
          disableOpenOnFocus={true}
          renderInput={params => (
            <TextField {...params} label="Name" fullWidth />
          )}
        />

        <RadioGroup
          name="position"
          value={"radioValue"}
          onChange={() => {}}
          row
        >
          <FormControlLabel
            value={"AC"}
            control={<Radio color="primary" />}
            label={"Yes"}
            labelPlacement="start"
          />
          <FormControlLabel
            value={"AB"}
            control={<Radio color="primary" />}
            label={"No"}
            labelPlacement="start"
          />
        </RadioGroup>
      </form>
    </div>
  );
}
