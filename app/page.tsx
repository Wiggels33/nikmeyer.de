'use client';
import Grid from "./ui/grid";
import ContactSection from "./sections/contactSection";
import FromSection from "./sections/fromSection";
import ProjectSection from "./sections/projectSection";
import HeroSection from "./sections/heroSection";
import NewsSection from "./sections/newsSection";
import CustomerSection from "./sections/customersSection";
import FooterSection from "./sections/footerSection";
import TechStackSection from "./sections/techStackSection";
import CvSection from "./sections/cvSection";
import {useTheme} from "@mui/system";
import {useMediaQuery} from "@mui/material";

export default function () {



    return (
        <main className={"max-w-[1440px] w-full mx-auto p-6 overflow-x-hidden flex justify-center "}>
            <Grid>
                <ContactSection/>
                <FromSection/>
                <CvSection/>
                <ProjectSection/>
                <HeroSection/>
                <NewsSection/>
                <CustomerSection/>
                <TechStackSection/>
                <FooterSection/>
            </Grid>
        </main>
    )
}
