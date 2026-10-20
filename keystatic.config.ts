import { config, fields, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: process.env.NODE_ENV === 'development' ? 'local' : 'github',
        repo: 'DanielSenespleda/Portfolio'
    },
    singletons: {
        sobreMi: singleton({
            label: 'Sección: Sobre Mí',
            path: 'src/content/sobre-mi',
            format: { contentField: 'content' },
            schema: {
                content: fields.document({
                    label: 'Contenido del texto',
                    formatting: true,
                    links: true,
                }),
            },
        }),
    },
});