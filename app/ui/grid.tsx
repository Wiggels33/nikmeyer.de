'use client';
import React, {ReactNode, useEffect, useState} from "react";
import {Box, Container, useMediaQuery} from "@mui/material";
import theme from "../../theme";
import {useTheme} from "@mui/system";

interface IGridProps {
    children: ReactNode[];
}

const Grid = ({children}: IGridProps) => {

    const theme = useTheme();
    const [gridAreas, setGridAreas] = useState<string[]>([]);


    const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));
    const isTablet = useMediaQuery(theme.breakpoints.between('lg', 'xl'));

    const getGridAreas = () => {
        if (isDesktop) {
            return [
                "1 / 1 / 3 / 2",
                "1 / 2 / 2 / 3",
                "1 / 3 / 2 / 4",
                "1 / 4 / 3 / 5",
                "2 / 2 / 4 / 4",
                "3 / 1 / 5 / 2",
                "4 / 2 / 5 / 3",
                "3 / 4 / 4 / 5",
                "4 / 3 / 5 / 5"
            ];
        } else if (isTablet) {
            return [
                "1 / 1 / 3 / 2", // ContactSection
                "1 / 2 / 2 / 3", // FromSection
                "1 / 3 / 2 / 4", // CvSection
                "4 / 1 / 6 / 2", // ProjectSection
                "2 / 2 / 4 / 4", // HeroSection
                "4 / 2 / 5 / 4",
                "3 / 1 / 4 / 2", // CvSection
                "5 / 2 / 6 / 4", // TechStackSection
            ]
        } else {
            return [
                "4 / 1 / 6 / 2", //ContactSection
                "1 / 1 / 2 / 2", //Contact
                "1 / 2 / 2 / 3", //CV
                "5 / 2 / 7 / 3", // ProjectSection
                "2 / 1 / 4 / 3", //HersoSection
                "6 / 1 / 8 / 2",
                "7 / 2 / 8 / 3",
                "4 / 2 / 5 / 3", //ProjectSection
                "8 / 1 / 9 / 3",
            ]
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setGridAreas(getGridAreas());
        };

        // Set initial grid areas
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, [isDesktop, isTablet]); //

    return (
        <Box

             sx={{
                 display                       : "grid",
                 gridColumn                    : 4,
                 gridRow                       : "repeat(4, 220px)",
                 gap                           : theme.spacing(4),
                 gridTemplateRows              : "repeat(8, 220px)",
                 minWidth                      : "324px",
                 padding                       : 0,
                 [theme.breakpoints.down('xl')]: {
                     gridTemplateColumns: 'repeat(3, 324px)',
                     gridTemplateRows   : 'repeat(5, 220px)',
                 },
                 [theme.breakpoints.down('lg')]: {
                     gridTemplateColumns: 'repeat(2, 324px)',
                     gridTemplateRows   : 'repeat(8, 220px)',
                 }
             }}
        >
            {React.Children.map(children, (child, index) => (
                <>
                    <Container
                        disableGutters
                        component={"section"}
                        sx={{
                            gridArea: gridAreas[index],
                            height  : '100%',
                            minWidth: '324px',
                            padding : 0
                        }}>
                        {child}
                    </Container>
                </>
            ))}
        </Box>
    );
}

export default Grid;
