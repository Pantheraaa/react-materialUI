import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";

export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)

    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats);
    }
    console.log("Formats>>>>>>>", formats);

    return (
        <Stack spacing={4}>
            {/* Default variants of Button */}
            <Stack spacing={2} direction={"row"}>
                {/* 3 types of buttons in MUI */}
                <Button variant="text" href="https://www.google.com">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

            {/* Coloured variants of Text Button */}
            <Stack spacing={2} direction={"row"}>
                <Button variant="text" color="primary">Primary</Button>
                <Button variant="text" color="secondary">Secondary</Button>
                <Button variant="text" color="error">Error</Button>
                <Button variant="text" color="warning">Warning</Button>
                <Button variant="text" color="info">Info</Button>
                <Button variant="text" color="success">Success</Button>
            </Stack>

            {/* Coloured variants of Contained Button */}
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="success">Success</Button>
            </Stack>

            {/* Coloured variants of Outlined Button */}
            <Stack spacing={2} direction={"row"}>
                <Button variant="outlined" color="primary">Primary</Button>
                <Button variant="outlined" color="secondary">Secondary</Button>
                <Button variant="outlined" color="error">Error</Button>
                <Button variant="outlined" color="warning">Warning</Button>
                <Button variant="outlined" color="info">Info</Button>
                <Button variant="outlined" color="success">Success</Button>
            </Stack>

            <Stack display={"block"} spacing={2} direction={"row"}>
                {/* <Button variant="contained" fullWidth>Full Width</Button> */}
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>


            {/* MUI - Icons */}
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" startIcon={<SendIcon />} disableRipple onClick={() => alert("Clicked")}>Send</Button>
                <Button variant="contained" endIcon={<SendIcon />} disableElevation>Send</Button>
                <IconButton aria-label="send" color="success" size="small">
                    <SendIcon />
                </IconButton>
            </Stack>

            {/* Button group */}
            <Stack direction={"row"}>
                <ButtonGroup
                    variant="contained"
                    orientation="vertical"
                    color="secondary"
                    size="medium"
                    aria-label="alignment button group">
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            {/* Toggle Button & Group */}
            <Stack direction={"row"}>
                <ToggleButtonGroup
                    aria-label="text formatting"
                    value={formats}
                    onChange={handleFormatChange}
                    size="small"
                    color="success"
                    exclusive
                    orientation="vertical">
                    <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined"><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
};