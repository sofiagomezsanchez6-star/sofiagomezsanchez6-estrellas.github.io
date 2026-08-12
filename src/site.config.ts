import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type Presentation = {
    title?: string;
    text?: string;
    videoUrl?: string;
    avatar?: Image;
};

export type EvidenceItem = {
    text: string;
    href: string;
    description?: string;
};

export type Blog = {
    description?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    presentation?: Presentation;
    evidencias?: EvidenceItem[];
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    blog?: Blog;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://sofiagomezsanchez6-estrellas.github.io',
    title: 'Sofía Gómez Sánchez',
    description: 'Sitio personal de Sofía Gómez Sánchez con la presentación del proyecto y las evidencias de modelado, normalización, SQL y proyecto.',
    image: {
        src: '/space-ahead-preview.jpeg',
        alt: 'Space Ahead ✨ - A minimal space-inspired personal blog template, created by Siddhesh Thadeshwar.'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: withBase('/')
        },
        {
            text: 'Presentación',
            href: withBase('/presentacion')
        },
        {
            text: 'Evidencias',
            href: withBase('/evidencias')
        },
        {
            text: 'Blog',
            href: withBase('/blog')
        },
        {
            text: 'Tags',
            href: withBase('/tags')
        },
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        }
    ],
    footerNavLinks: [
        {
            text: 'Presentación',
            href: withBase('/presentacion')
        },
        {
            text: 'Evidencias',
            href: withBase('/evidencias')
        },
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        },
        {
            text: 'RSS Feed',
            href: withBase('/rss.xml')
        },
                {
            text: 'Sitemap',
            href: withBase('/sitemap-index.xml')
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        eyebrowText: 'Proyecto de Base de Datos',
        title: 'Sofía Gómez Sánchez ✨',
        text: "Bienvenido a mi sitio. Aquí encontrarás mi presentación y las evidencias de mi proyecto de base de datos.",
        image: {
            src: '/assets/images/pixeltrue-space-discovery.svg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Ver Presentación',
                href: withBase('/presentacion')
            },
            {
                text: 'Ver Evidencias',
                href: withBase('/evidencias')
            }
        ]
    },
    about: {
        title: 'About',
        text: 'Soy Sofía Gómez Sánchez. Este sitio reúne la presentación y las evidencias de mi proyecto de base de datos: modelado, normalización, SQL y el proyecto final. Reemplaza este texto en src/site.config.ts con tu propia biografía. 🚀',
    },
    presentation: {
        title: 'Presentación',
        text: 'Hola, soy Sofía Gómez Sánchez. En este video te cuento quién soy y en qué consiste este proyecto. Reemplaza este texto, el video y la foto con tu propio contenido en src/site.config.ts.',
        // Reemplaza esta URL por el enlace "embed" de tu video (YouTube, Drive, etc.)
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        avatar: {
            src: '/assets/images/avatar-placeholder.svg',
            alt: 'Foto de perfil de Sofía Gómez Sánchez'
        }
    },
    evidencias: [
        {
            text: 'Modelado',
            href: withBase('/evidencias/modelado'),
            description: 'Diagramas y evidencias del modelado de datos (entidad-relación, modelo lógico, etc.)'
        },
        {
            text: 'Normalización',
            href: withBase('/evidencias/normalizacion'),
            description: 'Proceso de normalización de la base de datos (1FN, 2FN, 3FN...)'
        },
        {
            text: 'SQL',
            href: withBase('/evidencias/sql'),
            description: 'Scripts y consultas SQL desarrolladas para el proyecto.'
        },
        {
            text: 'Proyecto',
            href: withBase('/evidencias/proyecto'),
            description: 'Entregable final y documentación general del proyecto.'
        }
    ],
    contactInfo: {
        title: 'Contact',
        text: "Hi! Whether you have a question, a suggestion, or just want to share your thoughts, I'm all ears. Feel free to get in touch through any of the methods below:",
        email: {
            text: "Drop me an email and I’ll do my best to respond as soon as possible.",
            href: "mailto:example@example.com",
            email: "example@example.com"
        },
        socialProfiles: [
            {
                text: "LinkedIn",
                href: "https://www.linkedin.com/"
            },
            {
                text: "Peerlist",
                href: "https://www.peerlist.io/"
            },
            {
                text: "GitHub",
                href: "https://github.com/"
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Space Ahead',
        text: 'One update per week. All the latest stories in your inbox.',
        formUrl: '#'
    },
    blog: {
        description: "Read about my space adventures, explorations and the aliens I've met on my journeys."
    },
    postsPerPage: 2,
    recentPostLimit: 3
};

export default siteConfig;
