import { Typography } from "@mui/material";

export const MuiTypography = () => {
    return (
        <>
            {/* H1-6 tags */}
            <Typography variant="h1">h1 heading</Typography>
            <Typography variant="h2">h2 heading</Typography>
            <Typography variant="h3">h3 heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>h4 heading</Typography>
            <Typography variant="h5">h5 heading</Typography>
            <Typography variant="h6">h6 heading</Typography>

            {/* H6 tags with small font size */}
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>

            {/* Body text */}
            <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolor nihil exercitationem dolorum molestias! Tempora sint aperiam pariatur quidem saepe.</Typography>
            <Typography variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor tempore ipsa unde rerum, mollitia cum voluptatibus quibusdam quae sit excepturi.</Typography>
        </>
    )
};