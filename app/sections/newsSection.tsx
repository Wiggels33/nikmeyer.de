import React from 'react';
import GeneralWrapper from "../ui/generalWrapper";
import {BackgroundPattern} from "../../public/images";
import {Box, Button, Typography} from "@mui/material";
import {NewsSectionData} from "../../data/NewsSectionData";
import theme from "../../theme";

const NewsSection = () => {

    const {title, content, buttonText, buttonLink} = NewsSectionData;
    return (
        <GeneralWrapper
            sx={{
                backgroundImage   : `url(${BackgroundPattern.src})`,
                backgroundSize    : 'cover',
                backgroundPosition: 'center',
                backgroundRepeat  : 'no-repeat',
                flexDirection     : 'column',
            }}>
            <Box
                component={'div'}
                sx={{
                    display       : 'flex',
                    flexDirection : 'column',
                    justifyContent: 'center',
                    alignItems    : 'flex-end',
                    gap           : theme.spacing(4),
                    height        : "100%"
                }}
            >
                <Typography
                    variant={'h2'}
                    color={theme.palette.secondary.light}
                    align={'right'}
                >
                    {title}
                </Typography>
                <Typography
                    variant={'body1'}
                    color={theme.palette.secondary.light}
                    align={'right'}
                >
                    {content}
                </Typography>
                <Button
                    href={buttonLink}
                >
                    {buttonText}
                </Button>

            </Box>

        </GeneralWrapper>

    );
};

export default NewsSection;
