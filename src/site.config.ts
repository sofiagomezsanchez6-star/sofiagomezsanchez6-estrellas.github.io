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
    title: 'Space Ahead',
    description: 'Sitio de Sofía Gómez Sánchez: presentación del proyecto y evidencias de modelado, normalización, SQL y proyecto.',
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
        eyebrowText: 'Galaxy of Adventures',
        title: 'Space Ahead ✨',
        text: "Bienvenido a mi sitio. Aquí encontrarás mi presentación y las evidencias de mi proyecto.",
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
    ]
};

export default siteConfig;
