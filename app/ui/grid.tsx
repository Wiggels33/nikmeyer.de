'use client';
import React, {ReactNode} from "react";
import {Container} from "@mui/material";

interface IGridProps {
    children: ReactNode[];
}

const Grid = ({children}: IGridProps) => {
    const gridAreas = [
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

    return (
        <div className="grid grid-cols-4 grid-rows-[repeat(4,220px)] gap-6 grid-temp-rows-8">
            {React.Children.map(children, (child, index) => (
                <>
                    <Container component={"section"} sx={{gridArea: gridAreas[index], height: '100%'}}>
                        {child}
                    </Container>
                </>
            ))}
        </div>
    );
}

export default Grid;
