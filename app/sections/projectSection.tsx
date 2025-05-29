import React from 'react';
import GeneralWrapper from "../ui/generalWrapper";
import {Box, Button, Typography} from "@mui/material";
import theme from "../../theme";
import Image from "next/image";
import {PastProjects} from "../../public/images";

const ProjectSection = () => {
    return (
        <GeneralWrapper>
            <Box
                sx={{
                    position: 'absolute',
                    top     : 0,
                    right   : 0,
                    left    : 0,
                    height  : '240px',
                    overflow: 'hidden',
                    borderRadius : theme.shape.borderRadius,

                    zIndex: 1,
                }}>
                <Box
                    sx={{
                        display       : 'flex',
                        justifyContent: 'flex-start',
                        flexDirection : 'column',
                        alignItems    : 'flex-start',
                        height        : '100%',
                        width         : '100%',

                        position: 'absolute',
                        top     : '-32px',
                        right   : '-16px',
                        left    : '-16px',
                        bottom  : 0,
                    }}>
                    <Typography
                        variant={'h1'}
                        color={theme.palette.primary.main}
                        sx={{
                            transform    : 'scaleX(-1)',
                            textTransform: 'uppercase',
                            lineHeight   : 1,
                            paddingInlineEnd: theme.spacing(6),
                        }}>
                        Past
                    </Typography>
                    <Typography
                        variant={'h1'}
                        color={theme.palette.primary.main}
                        sx={{
                            textTransform: 'uppercase',
                            lineHeight   : 1,
                        }}>
                        Projects
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                position: 'absolute',
                bottom  : 0,
                borderTopLeftRadius: theme.spacing(2),
                borderTopRightRadius: theme.spacing(2),
                overflow: 'hidden',
                right: theme.spacing(2),
                left : theme.spacing(2),
                display: 'flex',
                height: '280px',
                justifyContent: 'center',
            }}>
                <Image src={PastProjects.src} alt={"past projects"} width={300} height={300} className={"object-cover object-top w-full"}/>

            </Box>
            <Button
            sx={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                Discover
            </Button>
        </GeneralWrapper>
    );
};

export default ProjectSection;
