import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export const MuiTextFields = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [mobile, setMobile] = useState<string>("");

    // const handleSetMobile = (e) => {
    //     setMobile(e.target.value);
    // }
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="Name" variant="outlined" />
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="standard" />
            </Stack>

            <Stack direction={"row"} spacing={2}>
                <TextField label="Small secondary" color="secondary" size="small" />
            </Stack>

            <Stack direction={"row"} spacing={2}>
                <TextField label="Form Input" required />
                <TextField
                    label="Password"
                    type={!showPassword ? "password" : "text"}
                    helperText="Do not share your password with anyone"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }}
                // disabled
                />
                <TextField label="Read Only" InputProps={{ readOnly: true }} value={"Pantheraaa"} />
            </Stack>

            {/* Prefix & Suffix to Input fields */}
            <Stack direction={"row"} spacing={2}>
                <TextField
                    label="Mobile"
                    type="number"
                    required
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                        // maxLength: "10"
                    }}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    error={!mobile}
                    helperText={!mobile ? "Required" : "Enter valid whatsApp number"}
                />
                <TextField label="Amount" InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
                <TextField label="Weight" InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment> }} />
            </Stack>
        </Stack>
    )
};