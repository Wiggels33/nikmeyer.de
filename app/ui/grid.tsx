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
                "5 / 2 / 6 / 4", // TechStackSection
                "3 / 1 / 4 / 2", // ProjectSection
                "4 / 2 / 5 / 4",
            ]
        } else {
            return [
                "1 / 1 / 2 / 2",
                "2 / 1 / 3 / 2",
                "1 / 2 / 3 / 3",
                "2 / 2 / 3 / 3",
                "3 / 1 / 4 / 2",
                "4 / 1 / 5 / 2",
                "1 / 2 / 4 / 3",
                "2 / 2 / 4 / 3",
                "3 / 2 / 4 / 3",
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
        <Box className={"" +
            "grid grid-cols-4 grid-rows-[repeat(4,220px)]  gap-6 grid-temp-rows-8 xl:min-w-[100%]"}

             sx={{
                 display: "grid",
                 gridColumn: 4,
                 gridRow: "repeat(4, 220px)",
                 gap      : theme.spacing(6),
                 gridTemplateRows: "repeat(8, 220px)",
                 minWidth      : "324px",
                 padding       : 0,
                 [theme.breakpoints.up('xl')]: {
                     gridTemplateColumns: 'repeat(3, 1fr)',
                     gridTemplateRows:'repeat(5, 1fr)',
                 }

             }}
        >
            {React.Children.map(children, (child, index) => (
                <>

                        {child}
                </>
            ))}
        </Box>
    );
}

export default Grid;
