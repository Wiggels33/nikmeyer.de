'use client'
import React, {useState} from "react";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {useTheme} from "@mui/system";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id             : `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ContactSection = () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [formData, setFormData] = useState({
        name   : '',
        email  : '',
        message: ''
    });


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the form data to your backend
    };
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container sx={{
            paddingInline: 2,
            paddingBlock: 3,
            background  : theme.palette.background.paper,
            position    : 'relative',
            borderRadius: theme.shape.borderRadius,
            '&::before' : {
                content            : '""',
                position           : 'absolute',
                top                : 0,
                left               : 0,
                right              : 0,
                bottom             : 0,
                borderRadius       : 'inherit',
                padding            : '1px',
                background         : theme.border.main,
                WebkitMask         :
                    'linear-gradient(#fff 0 0) content-box, ' +
                    'linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite      : 'exclude',
            }
        }}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="contact tabs" centered>
                    <Tab label="Email" {...a11yProps(0)} />
                    <Tab label="WhatsApp" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="message"
                        label="Message"
                        id="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Send Message
                    </Button>
                </Box> </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                WhatsApp contact information
            </CustomTabPanel>
        </Container>
    );
}

export default ContactSection;
