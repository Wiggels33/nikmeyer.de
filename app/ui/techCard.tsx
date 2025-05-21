import React from 'react';
import {Box, Typography} from "@mui/material";
import theme from "../../theme";
import {ibmPlexMonoBold, ibmPlexMonoRegular} from "../../public/fonts";
import {ITechProps} from "../../data/techStackSectionData";


const TechCard = ({tech, primary}:ITechProps) => {
    return (
        <Box sx={{
            padding: "16px 12px",
            background: "#10132E",
            borderRadius: theme.spacing(1),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        }}>
            <Typography variant="body2"
                        sx={{
                            fontFamily: primary ? ibmPlexMonoBold : ibmPlexMonoRegular,
            }}
            color={theme.palette.secondary.light}>{tech}</Typography>
        </Box>
    );
};

export default TechCard;
