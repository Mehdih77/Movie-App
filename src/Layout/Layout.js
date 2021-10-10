import Header from './Header/Header';
import Footer from "./Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Layout({children}) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}
