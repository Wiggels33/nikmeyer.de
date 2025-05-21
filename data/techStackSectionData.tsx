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
