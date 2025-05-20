import React from 'react';
import GeneralWrapper from "../ui/generalWrapper";
import {Skyline} from "./../../public/images";
import Image from "next/image";
import {Box, Typography} from "@mui/material";
import theme from "../../theme";
import {ibmPlexMonoRegular} from "../../public/fonts";

const FromSection = () => {
    return (
        <GeneralWrapper sx={{
            display       : "flex",
            justifyContent: "flex-start",
            alignItems    : "flex-end",

        }}>

            <Box sx={
                {zIndex: 1,}
            }>
                <Typography
                    sx={{
                        fontFamily: ibmPlexMonoRegular.style.fontFamily,
                        fontSize  : "0.875rem",
                    }}
                    color={theme.palette.common.white}
                >
                    Based in
                </Typography>
                <Typography
                    variant={"h2"}
                    color={theme.palette.common.white}
                >
                    Würzburg
                </Typography>
            </Box>
            <Image src={Skyline} alt={"skyline wuerzburg object-contain"} className={"absolute top-7 right-0 left-0"}/>
        </GeneralWrapper>
    )
        ;
};

export default FromSection;
