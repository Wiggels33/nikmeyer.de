import React from 'react';
import GeneralWrapper from "../ui/generalWrapper";
import {Box, Typography} from "@mui/material";
import {ibmPlexMonoRegular} from "../../public/fonts";
import theme from "../../theme";

const CustomerSection = () => {
    return (
        <GeneralWrapper>
            <Box sx={{
                zIndex        : 1,
                display       : 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems    : 'flex-start',


            }}>
                <Typography
                    variant={"h2"}
                    color={theme.palette.common.white}
                >
                    20+
                </Typography>
                <Typography
                    sx={{
                        fontFamily: ibmPlexMonoRegular.style.fontFamily,
                        fontSize  : "0.875rem",
                    }}
                    color={theme.palette.common.white}
                >
                    Happy Customers Worldwide
                </Typography>
            </Box>
        </GeneralWrapper>
    );
};

export default CustomerSection;
