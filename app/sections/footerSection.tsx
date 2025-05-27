'use client'
import React from 'react';
import GeneralWrapper from "../ui/generalWrapper";
import TestimonialComponent from "../components/testimonalComponent";
import {testimonialsData} from "../../data/techStackSectionData";
import Carousel from "react-material-ui-carousel";
import {Box} from "@mui/material";

const FooterSection = () => {
    return (
        <GeneralWrapper>

            <Box>
                <Carousel sx={{
                    width: "100%"
                }}>
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialComponent key={index} testimonial={testimonial}/>

                    ))}

                </Carousel>
            </Box>
            <Legals/>
        </GeneralWrapper>
    );
};

export default FooterSection;
