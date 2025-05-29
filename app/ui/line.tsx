import React from 'react';
import {Box} from "@mui/material";
import theme from "../../theme";

interface ILineProps {
    sx: React.CSSProperties;
    vertical?: boolean;
}

const Line = ({sx, vertical = false}: ILineProps) => {
    return (
        <Box sx={{
            position   : 'absolute',
            height     : vertical ? 'calc(100% + ' + theme.spacing(3) + ' * 2)' : '1px',
            width      : vertical ? '1px' : 'calc(100% + ' + theme.spacing(3) + ' * 2)',
            borderTop  : vertical ? 0 : '1px solid',
            borderRight: vertical ? '1px solid' : 0,

            borderColor: theme.palette.divider,
            ...sx,

        }}/>
    );
};

export default Line;
