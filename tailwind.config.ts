import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                sans: ['LXGWWenKai'],
                serif: ['LXGWWenKai'],
                mono: ['LXGWWenKaiMono'],
                display: ['LXGWWenKai'],
                body: ['LXGWWenKai']
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: '#1d4ed8'
            }
        }
    }
}
