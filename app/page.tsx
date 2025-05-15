'use client';
import Grid from "./ui/grid";
import ContactSection from "./sections/contactSection";
import FromSection from "./sections/footerSection";
import AboutSection from "./sections/aboutSection";
import ProjectSection from "./sections/projectSection";
import HeroSection from "./sections/heroSection";
import NewsSection from "./sections/newsSection";
import CustomerSection from "./sections/customersSection";
import FooterSection from "./sections/footerSection";
import TechStackSection from "./sections/techStackSection";

export default function () {
    return (
        <main className={"max-w-[1440px] mx-auto p-6 "}>
            <Grid>
                <ContactSection/>
                <FromSection/>
                <AboutSection/>
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
