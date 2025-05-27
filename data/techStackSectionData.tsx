import {companyImage} from "../public/images";

export interface ITechProps {
    tech: string;
    primary: boolean;
}


interface ITechStackSectionData {
    Headline: string;
    subheadline: string;
    techStack: ITechProps[];
}


export const techStackSectionData: ITechStackSectionData = {
    Headline   : 'My Tech Stack',
    subheadline: 'I constantly try to improve',
    techStack  : [
        {tech: 'Wordpress', primary: true},
        {tech: 'Webflow', primary: false},
        {tech: 'Next.js', primary: true},
        {tech: 'MUI', primary: false},
        {tech: 'Figma', primary: true},
        {tech: 'Typescript', primary: true},
        {tech: 'Shopware', primary: false},
        {tech: 'PHP', primary: true}
    ],
}


export interface ITestimonialDataProps {
    name: string;
    company: string;
    content: string;
    image: string;
}


export const testimonialsData: ITestimonialDataProps[] = [
    {
        name   : 'Martina Mustermann',
        company: 'Company 1',
        content: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        image  : companyImage.src,
    },
    {
        name   : 'John Doe',
        company: 'Company 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tristique mauris, id lobortis tortor.',
        image  : companyImage.src,
    }

]
