import React from 'react';
import {Container} from "@mui/material";
import theme from "../../theme";

interface IGeneralWrapperProps {
    sx?: React.CSSProperties;
    children: React.ReactNode;
    gridArea?: string;
}

const GeneralWrapper = ({sx, children, gridArea}: IGeneralWrapperProps) => {
    return (
        <Container
            disableGutters
            component={"section"}
            sx={{
                gridArea: gridArea,
                height  : '100%',
                minWidth: '324px',
                padding : 0
            }}>
            <Container sx={{
                position     : 'relative',
                paddingInline: 2,
                paddingBlock : 3,
                background   : theme.palette.background.paper,
                borderRadius : theme.shape.borderRadius,
                border       : 1,
                borderColor  : theme.palette.divider,
                borderStyle  : "solid",
                height       : "100%",
                display      : "flex",
                ...sx,
            }}>
                {children}

            </Container>
        </Container>
    );
};

export default GeneralWrapper;
