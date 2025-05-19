import React from 'react';
import GeneralWrapper from "../ui/generalWrapper";
import {Typography} from "@mui/material";
import Image from "next/image";
import {Memoji} from "./../../public/images";

const HeroSection = () => {
    return (
            <GeneralWrapper>
                <Image src={Memoji} alt={"Niklas Meyer Memoji"}/>
                <Typography>Hi,</Typography>
            </GeneralWrapper>
    );
};

export default HeroSection;
