'use client'
import React, {useState} from "react";
import {Button, FormControl, TextField, Typography} from "@mui/material";
import {useTheme} from "@mui/system";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GeneralWrapper from "../ui/generalWrapper";
import CustomTabPanel from "../ui/customTabPanel";


function a11yProps(index: number) {
    return {
        id             : `simple-tab-${index}`,
        'aria-controls': `simple-tab-panel-${index}`,
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

    const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the form data to your backend
    };
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <GeneralWrapper sx={{
            flexDirection : "column",
            justifyContent: "space-between",

        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="contact tabs"
                centered
                variant={"fullWidth"}
            >
                <Tab label="Email" {...a11yProps(0)} />
                <Tab label="WhatsApp" {...a11yProps(1)} />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <Typography
                    variant={"body1"}
                    color={theme.palette.secondary.light}
                    mb={theme.spacing(3)}
                >
                    You got Any Questions
                </Typography>
                <FormControl
                    onSubmit={(event) => {
                        handleSubmit(event)}}
                    variant="standard"
                    fullWidth
                >

                    <TextField
                        margin="normal"
                        placeholder={"name"}
                        required
                        fullWidth
                        id="name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="normal"
                        placeholder={"email"}
                        required
                        fullWidth
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        margin="normal"
                        placeholder={"message"}
                        required
                        fullWidth
                        name="message"
                        id="message"
                        multiline
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        sx={{
                            color: theme.palette.text.primary,

                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Send
                    </Button>
                </FormControl>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: theme.spacing(2),
            }}>
                <Typography variant={"body1"} color={theme.palette.secondary.light}>
                    Send me a WhatsApp or just give me a call
                </Typography>
                <Button>
                    Copy Number
                </Button>
            </CustomTabPanel>
        </GeneralWrapper>
    )
        ;
}

export default ContactSection;
