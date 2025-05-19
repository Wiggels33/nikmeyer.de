import React from 'react';
import {Container} from "@mui/material";
import theme from "../../theme";

interface IGeneralWrapperProps {
    sx?: React.CSSProperties;
    children: React.ReactNode;
}

const GeneralWrapper = ({sx, children}: IGeneralWrapperProps) => {
    return (
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
    );
};

export default GeneralWrapper;
