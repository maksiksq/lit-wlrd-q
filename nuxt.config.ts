// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    app: {
        head: {
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/@figmania/loader/build/index.umd.js",
                    async: true,
                },
            ],
        },
    },

    modules: [
        'floating-vue/nuxt',
        '@vueuse/nuxt',
        '@pinia/nuxt',
    ]
})