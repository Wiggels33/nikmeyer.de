import React from 'react';
import GeneralWrapper from "../ui/generalWrapper";
import {Box, Typography} from "@mui/material";
import {techStackSectionData} from "../../data/techStackSectionData";
import TechCard from "../ui/techCard";
import TechCardContainer from "../ui/techCardContainer";
import theme from "../../theme";

const TechStackSection = () => {

    const {Headline, subheadline, techStack} = techStackSectionData;

    return (
        <GeneralWrapper sx={{
            overflow: "hidden",
        }}>
            <Box sx={{
                zIndex: 1,
                maxWidth: "160px",
                display: "flex",
                paddingTop: theme.spacing(2),
                flexDirection: "column",
                gap: theme.spacing(1),

            }}>
                <Typography variant="body1" color={theme.palette.common.white} sx={{

                }}>{subheadline}</Typography>
                <Typography variant="h4" color={theme.palette.common.white}>{Headline}</Typography>
            </Box>
            <TechCardContainer techStack={techStack}/>
        </GeneralWrapper>
    );
};

export default TechStackSection;
