import { Layout } from "../../Layout/Layout";
import { HomeAbout } from "./components/HomeAbout";
import { Top } from "./components/Top";
import { Categories } from "./components/Categories"
import { Testimonial } from "./components/Testimonial"
import { ProductOffer } from "./components/ProductOffer";
import { Eco } from "./components/Eco";
import { PicOption } from "./components/PicOption";
import { News } from "./components/News";

export function Home() {
    return (
        <Layout>
            <div className="home">
                <Top />
                <HomeAbout />
                <Categories />
                <Testimonial />
                <ProductOffer />
                <Eco />
                <PicOption />
                <News />
            </div>
        </Layout>
    )
}