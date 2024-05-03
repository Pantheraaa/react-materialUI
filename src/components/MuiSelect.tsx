import { Stack, Box, TextField, MenuItem, Typography, Checkbox, ListItemText } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
    const [country, setCountry] = useState<string>("");
    const [countries, setCountries] = useState<string[]>([]);
    return (
        <Stack spacing={4}>
            <Box width={200}>
                {/* Single Select */}
                <TextField
                    fullWidth
                    label="Select Country"
                    select
                    // defaultValue={""}
                    value={country}
                    onChange={(e) => setCountry(e.target.value as string)}
                >
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="AU">Australia</MenuItem>
                    <MenuItem value="EN">England</MenuItem>
                    <MenuItem value="NZ">New Zealand</MenuItem>
                </TextField>
                <Typography variant="h4">{country}</Typography>
            </Box>
            <Box width={200}>
                {/* Multiple select */}
                <TextField
                    fullWidth
                    label="Select Country"
                    select
                    // defaultValue={""}
                    value={countries}
                    onChange={(e) => setCountries(typeof e.target.value === "string" ? e.target.value.split(",") : e.target.value)}
                    SelectProps={{
                        multiple: true,
                    }}
                    size="small"
                    color="secondary"
                    error={!countries.length}
                    helperText="Please select your country"
                >
                    <MenuItem value="IN">India
                        {/* <Checkbox checked={countries.findIndex(c => c === "India") === 0} />
                        <ListItemText primary="India" /> */}
                    </MenuItem>
                    <MenuItem value="AU">Australia</MenuItem>
                    <MenuItem value="EN">England</MenuItem>
                    <MenuItem value="NZ">New Zealand</MenuItem>
                </TextField>
                <Typography variant="h6">{countries.join(",")}</Typography>
            </Box>
        </Stack>
    )
};