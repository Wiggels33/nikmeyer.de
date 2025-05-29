import React from 'react';
import {ITestimonialDataProps} from "../../data/techStackSectionData";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import theme from "../../theme";

interface ITestimonialComponentProps {
    testimonial: ITestimonialDataProps
}

const TestimonialComponent = ({testimonial}: ITestimonialComponentProps) => {
    return (
        <Box sx={{
            padding: theme.spacing(1),
            width  : "100%",
        }}>
            <Box sx={{
                display       : "flex",
                justifyContent: "flex-start",
                alignItems    : "flex-start",
                gap           : theme.spacing(1),
            }}>
                <Image src={testimonial.image} alt={testimonial.name} width={40} height={40}
                       className={'object-cover rounded-[50%] aspect-square'}/>
                <Box sx={{
                    display      : "flex",
                    flexDirection: "column",
                }}>
                    <Typography variant={"body1"} color={theme.palette.common.white}>{testimonial.name}</Typography>
                    <Typography variant={"body2"} color={'#414353'}>
                        {testimonial.company}
                    </Typography>
                </Box>
            </Box>
            <Typography variant={"body1"} color={theme.palette.secondary.light}>"{testimonial.content}"</Typography>

        </Box>
    );
};

export default TestimonialComponent;
