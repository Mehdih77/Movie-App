import Header from './Header/Header';
import Footer from "./Footer/Footer";

export default function Layout({children}) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}
