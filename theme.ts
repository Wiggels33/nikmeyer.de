import {createTheme, ThemeOptions} from '@mui/material/styles';
import React from "react";


// Erweitern Sie den Theme-Typ
declare module '@mui/material/styles' {
    interface Theme {
        text: {
            large: {
                light: React.CSSProperties;
            }

        }
        border: {
            main: string,
        }
    }

    interface ThemeOptions {
        text?: {
            large?: {
                light?: React.CSSProperties;
            }
        }
        border?: {
            main?: string;
        }
    }


}

const theme = createTheme({
    palette   : {
        primary   : {
            main: '#1976d2',
        },
        secondary : {
            main: '#dc004e',
        },
        background: {
            default: '#000319',
            paper  : 'linear-gradient(135deg,rgba(4, 7, 29, 0.49) 0%, rgba(12, 14, 35, 1) 100%)',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1        : {
            fontSize  : '2.5rem',
            fontWeight: 500,
        },
        h2        : {
            fontSize  : '2rem',
            fontWeight: 500,
        },
        body1     : {
            fontSize: '1rem',
        },

    },

    shape: {
        borderRadius: 4,
},

    text: {
        large: {
            light: {
                fontSize  : '1.25rem',
                fontWeight: 300,
            }
        }
    },

    border: {
        main: 'linear-gradient(176deg,rgba(54, 55, 73, 0.43) 0%, rgba(54, 55, 73, 0.49) 100%)',
    }
} as ThemeOptions);

export default theme;
