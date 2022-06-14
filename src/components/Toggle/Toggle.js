import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export const Toggle = ({ handleChange, checked }) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Dark Mode"
      />
    </FormGroup>
  );
};
