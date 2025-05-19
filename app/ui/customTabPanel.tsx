import React from "react";
import {Box} from "@mui/material";

interface ITabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    sx?: React.CSSProperties;
}

function CustomTabPanel({children, value, index, sx}: ITabPanelProps) {

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tab-panel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: '100%',
                ...sx,
            }}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </Box>
    );
}

export default CustomTabPanel;
