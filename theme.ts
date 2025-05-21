import {createTheme, ThemeOptions} from '@mui/material/styles';
import React from "react";

import {
    ibmPlexMonoRegular,
    ibmPlexMonoItalic,
    ibmPlexMonoLight,
    ibmPlexMonoLightItalic,
    ibmPlexMonoMedium,
    ibmPlexMonoMediumItalic,
    ibmPlexMonoSemiBold,
    ibmPlexMonoSemiBoldItalic,
    ibmPlexMonoBold,
    ibmPlexMonoBoldItalic,
    ibmPlexMonoExtraLight,
    ibmPlexMonoExtraLightItalic,
    ibmPlexMonoThin,
    ibmPlexMonoThinItalic
} from './public/fonts';

// Erweitern Sie den Theme-Typ
declare module '@mui/material/styles' {
    interface Theme {
        text: {
            large: {
                light: React.CSSProperties;
            }

        }
    }

    interface ThemeOptions {
        text?: {
            large?: {
                light?: React.CSSProperties;
            }
        }
    }


}

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 372,
            md: 743,
            lg: 1084,
            xl: 1400,
        },
    },
    components : {

        MuiContainer: {
            styleOverrides: {
                root: {},
            },
        },
        // Name of the component
        MuiButton   : {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize       : '1rem',
                    fontWeight     : "bold",
                    lineHeight     : 1,
                    letterSpacing  : "20%",
                    backgroundColor: '#BE16CF',
                    color          : '#fff',
                    borderRadius   : "80px",
                    width          : 'fit-content',
                    padding        : '12px 32px',

                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset'            : {
                            borderColor: '#363749',
                            borderWidth: "1px",
                        },
                        '&:hover fieldset'      : {
                            borderColor: '#363749',
                            borderWidth: "1px"
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#363749',
                            borderWidth: "1px"

                        },
                    },
                    '& .MuiInputLabel-root'   : {
                        color: '#655E7B',
                    },
                    '& .MuiInputBase-input'   : {
                        color  : '#655E7B',
                        padding: '12px 8px',
                    },

                    '& .MuiInputBase-root': {
                        padding: 0,

                    },
                    backgroundColor       : 'rgba(4, 7, 29, 0.49)',
                    borderRadius          : '4px',
                    fontSize              : '1rem',
                    marginBlock           : '4px',
                },
            },
        },
        MuiTabs     : {
            styleOverrides: {
                root     : {
                    fontSize     : '1.125rem',
                    fontWeight   : "light",
                    color        : "#414353",
                    lineHeight   : 1,
                    textTransform: 'none',

                    '&.Mui-selected': {
                        fontWeight: 600,
                        color     : '#E4ECFF',
                    }
                },
                indicator: {
                    backgroundColor: '#414353',
                },
            },
        },
        MuiTab      : {
            styleOverrides: {
                root     : {
                    padding      : '0 16px',
                    fontSize     : '1.125rem',
                    fontWeight   : "light",
                    width        : "100%",
                    color        : "#414353",
                    lineHeight   : 1,
                    textTransform: 'none',

                    '&.Mui-selected': {
                        fontWeight: "light",
                        color     : '#E4ECFF',
                    }
                },
                indicator: {
                    backgroundColor: '#414353',
                },
            },
        }
    },
    palette    : {
        primary   : {
            main: '#BE16CF',
        },
        secondary : {
            main : '#dc004e',
            light: "#E4ECFF",
        },
        background: {
            default: '#000319',
            paper  : 'linear-gradient(135deg,rgba(4, 7, 29, 0.49) 0%, rgba(12, 14, 35, 1) 100%)',
        },
        divider   : '#363749'
    },
    typography : {
        fontFamily: ibmPlexMonoRegular.style.fontFamily,
        h1        : {
            fontFamily   : ibmPlexMonoBold.style.fontFamily,
            fontSize     : '8rem',
            letterSpacing: "6%",
        },
        h2        : {
            fontFamily: ibmPlexMonoBold.style.fontFamily,
            fontSize  : '2.5rem',
            letterSpacing: "6",
        },
        h3        : {
            fontFamily: ibmPlexMonoBold.style.fontFamily,
            fontSize  : "2rem",
        },
        h4        : {
            fontFamily: ibmPlexMonoBold.style.fontFamily,
            fontSize  : '1.25rem',
        },
        body1     : {
            fontSize  : '1rem',
            fontWeight: 'light',
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
    }
} as ThemeOptions);

export default theme;
