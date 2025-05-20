import React from 'react';
import GeneralWrapper from "../ui/generalWrapper";
import {CvBg} from "./../../public/images";
import {Box, Typography} from "@mui/material";
import {ibmPlexMonoRegular} from "../../public/fonts";
import theme from "../../theme";

const CvSection = () => {
    return (
        <GeneralWrapper sx={{
            display       : "flex",
            justifyContent: "flex-end",
            alignItems    : "flex-end",
            background: `url(${CvBg.src})`,
        }}>
            <Box sx={{
                zIndex: 1,
                textAlign: "end",

            }
            }>
                <Typography
                    variant={"h2"}
                    color={theme.palette.common.white}
                >
                    CV
                </Typography>
                <Typography
                    sx={{
                        fontFamily: ibmPlexMonoRegular.style.fontFamily,
                        fontSize  : "0.875rem",
                    }}
                    color={theme.palette.common.white}
                >
                    Who I am & What I do
                </Typography>
            </Box>


        </GeneralWrapper>
    );
};

export default CvSection;
