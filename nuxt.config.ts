import { NuxtConfig } from '@nuxt/types'

const conf: NuxtConfig = {
    experimental: {
        payloadExtraction: false
    },
    css: [
        '@/assets/main.scss',
        '@oruga-ui/oruga-next/src/scss/oruga-full-vars.scss'
    ],
    ssr: false,
    target: 'static',
    components: {
        global: true,
        dirs: [
            '~/components/atoms',
            '~/components/molecules',
            '~/components/organisms',
        ]
    },
}

export default conf
