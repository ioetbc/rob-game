import '../styles/global.scss';
import { AnimatePresence } from 'framer-motion'
export default function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />        
        </AnimatePresence>
    )
}