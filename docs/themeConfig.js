export default {
    siteTitle: 'CoralliaJS',
    socialLinks: [
        { icon: 'github', link: 'https://github.com/inforgdev/corallia-js' },
    ],
    footer: {
        copyright: "By Inforg",
    },
    nav: [
        { text: 'Get Started', link: '/intro/about' },
    ],
    sidebar: [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'About', link: '/intro/about' },
                { text: 'Install', link: '/intro/install' },
                { text: 'Usage', link: '/intro/usage' },
                { text: 'Example', link: '/intro/example' },
            ],
        },
        {
            text: 'API',
            collapsible: true,
            items: [
                { text: 'Core', link: '/api/core' },
                { text: 'CSS', link: '/api/css' },
                { text: 'Files', link: '/api/files' },
            ],
        },
    ],
};