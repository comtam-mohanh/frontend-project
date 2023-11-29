import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

interface LayoutProps extends React.PropsWithChildren {
}
export const Layout = ({ children }: LayoutProps) => {

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
