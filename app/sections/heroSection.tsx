import React from 'react';
import GeneralWrapper from "../ui/generalWrapper";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {Memoji} from "./../../public/images";
import theme from "../../theme";

const HeroSection = () => {
    return (
        <GeneralWrapper>
            <Image
                src={Memoji}
                alt={"Niklas Meyer Memoji"}
                width={740}
                height={740}
                className={"object-contain absolute -top-50 left-0 right-0"}/>
            <Typography
                variant={"h1"}
                color={"white"}
                sx={{
                    position: "absolute",
                    top     : 0,
                    left    : theme.spacing(-4),
                }}
            >Hi,</Typography>
            <Box sx={{
                position: "absolute",
                    bottom : theme.spacing(-2),
                left    : 0,
                right: 0,
                display : "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems   : "center",
                width     : "100%",
            }}>
                <Typography
                    variant={"h2"}
                    color={"white"}
                >I'm Niklas</Typography>
                <Typography
                    variant={"h3"}
                    color={"white"}
                >UX-Engineer & Developer</Typography>
            </Box>

        </GeneralWrapper>
    );
};

export default HeroSection;
