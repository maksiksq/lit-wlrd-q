// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    app: {
        head: {
            title: 'Мрії 🎬',
        },
    },

    // ssr is on for now, and I might keep it for the web version, when
    // the time comes I'll prolly just disable it for the Tauri branch
    //

    modules: [
        'floating-vue/nuxt',
        '@vueuse/nuxt',
        '@pinia/nuxt',
    ]
})