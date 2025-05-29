'use client'
import React from 'react';
import GeneralWrapper from "../ui/generalWrapper";
import TestimonialComponent from "../components/testimonalComponent";
import {testimonialsData} from "../../data/techStackSectionData";
import Carousel from "react-material-ui-carousel";
import {Box} from "@mui/material";
import LegalsComponent from "../components/legalsComponent";
import Line from "../ui/line";
import theme from "../../theme";
import Image from "next/image";
import {Quote} from "../../public/images";

const FooterSection = () => {
    return (
        <GeneralWrapper
        sx={{
            gap: theme.spacing(3),
            overflow: "hidden",
        }}
        >

            <Box sx={{
                position: 'relative'
            }}>
                <Carousel sx={{
                    width: "380px"
                }}>
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialComponent key={index} testimonial={testimonial}/>

                    ))}

                </Carousel>
                <Line sx={{
                    top : 0,
                    left: theme.spacing(-5),

                }}/>
                <Line
                    sx={{
                        left: 0,
                        top: theme.spacing(-3),
                    }}
                    vertical={true}
                />
                <Line
                    sx={{
                        bottom: 0,
                        left: theme.spacing(-4),
                    }}
                    vertical={false}
                />
                <Line
                    sx={{
                        right: 0,
                        top: theme.spacing(-3),
                    }}
                    vertical={true}
                />
                <Image src={Quote.src} alt={"Quote-icon"} width={133} height={122} className={"absolute top-[100%] right-0 -translate-y-full"}/>
            </Box>
            <LegalsComponent/>
        </GeneralWrapper>
    );
};

export default FooterSection;
