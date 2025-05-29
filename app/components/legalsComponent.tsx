import React from 'react';
import {Box, List, ListItem} from "@mui/material";
import Image from "next/image";
import {Logo} from "../../public/images";
import theme from "../../theme";

const LegalsComponent = () => {
    return (
        <Box>
            <Image src={Logo.src} alt={"Logo"} width={80} height={84}/>
            <List disablePadding={true}
                  sx={{
                      color: '#414353',
                  }}
            >
                <ListItem
                    disablePadding

                >Impressum</ListItem>
                <ListItem
                    disablePadding
                >Datenschutz</ListItem>
                <ListItem
                    disablePadding
                >Cookies</ListItem>
                <ListItem
                    disablePadding
                >Copyright 2025 by nikmeyer</ListItem>
            </List>

        </Box>
    );
};

export default LegalsComponent;
