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

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    hero?: Hero;
    presentation?: Presentation;
    evidencias?: EvidenceItem[];
};

const siteConfig: SiteConfig = {
    website: 'https://sofiagomezsanchez6-estrellas.github.io',
    title: 'Portafolio DB1',
    description: 'Sitio de Melany Gómez: presentación del proyecto y evidencias de modelado, normalización, SQL y proyecto.',
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
        }
    ],
    footerNavLinks: [
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
        }
    ],
    hero: {
        eyebrowText: 'Portafolio Melany Gómez',
        title: 'Portafolio ✨',
        text: "Bienvenido a mi sitio. Aquí encontrarás mi presentación y las evidencias de la clase Base de Datos 1.",
        image: {
            src: '/assets/images/pixeltrue-space-discovery.svg',
            alt: ''
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
    presentation: {
        title: 'Presentación',
        text: 'Hola, soy Melany Gómez. En este video encontraras una breve presentación sobre mi. ',
        // Reemplaza esta URL por el enlace "embed" de tu video (YouTube, Drive, etc.)
        videoUrl: 'https://youtube.com/shorts/fk6bZp2jXLY?feature=share',
        avatar: {
            src: '/assets/images/sofia.jpg',
            alt: 'Foto de perfil de Melany Gómez'
        }
    },
    evidencias: [
        {
            text: 'Modelado',
            href: withBase('/evidencias/modelado'),
            description: 'Diagramas y evidencias del modelado de datos'
        },
        {
            text: 'Normalización',
            href: withBase('/evidencias/normalizacion'),
            description: 'Proceso de normalización de la base de datos'
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
    ]
};

export default siteConfig;
