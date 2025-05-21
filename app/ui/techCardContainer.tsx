import React from 'react';
import {Box} from "@mui/material";
import theme from "../../theme";
import TechCard from "./techCard";
import {ITechProps} from "../../data/techStackSectionData";

interface ITechCardContainerProps {
    techStack: ITechProps[];
}

const TechCardContainer: React.FC<ITechCardContainerProps> = ({techStack}) => {
    // Map the Tech stacks into two piles not by primary just by index
    const TechStackPile1 = techStack.filter((_, index) => index % 2 === 0);
    const TechStackPile2 = techStack.filter((_, index) => index % 2 !== 0);

    return (
        <Box sx={{
            display       : "flex",
            justifyContent: "center",
            alignItems    : "center",
            gap: theme.spacing(1),
            position: "absolute",
            right: theme.spacing(-2),
            top: "50%",
            transform: "translateY(-50%)",
        }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing(1),
                }}
            >
                {TechStackPile1.map(({tech, primary}: ITechProps, index) => (
                    <TechCard tech={tech} primary={primary} key={index}/>
                ))
                }
            </Box>
            <Box sx={{
                paddingTop: theme.spacing(4),
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(1),
            }}>
                {TechStackPile2.map(({tech, primary}: ITechProps, index) => (
                    <TechCard tech={tech} primary={primary} key={index}/>
                ))
                }
            </Box>
        </Box>
    );
};

export default TechCardContainer;
