import { Layout } from "../../Layout/Layout";
import { HomeAbout } from "./components/HomeAbout";
import { Top } from "./components/Top";
import { Categories } from "./components/Categories"
import { Testimonial } from "./components/Testimonial"
import { ProductOffer } from "./components/ProductOffer";
import { Eco } from "./components/Eco";
import { PicOption } from "./components/PicOption";
import { News } from "./components/News";
import { useEffect } from 'react';

export function Home() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

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