import { Button } from "../../components/Button/Button";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Layout } from "../../Layout/Layout";
import Img from "../../assets/background-img-1.svg"
import React from "react";
import { Brief } from "./components/Brief";
import { WhyChooseUs } from "./components/WhyChoose";
import "./AboutUs.css"
import { Team } from "./components/Team";
import { Offers } from "./components/Offers";

type AboutProps = {
    text?: string
}
export function About({ }: AboutProps) {

    const [isLoading, setIsLoading] = React.useState(false);

    return (
        <Layout>
            <div>
                <PageHeader text="About Us" bgImage={Img} />
                <Brief />
                <WhyChooseUs />
                <Team />
                <Offers />
                {/* <Button
                    variant="primary"
                    onClick={() => setIsLoading(!isLoading)}
                >
                    {isLoading ? "Loading" : "Submit"}
                </Button> */}
            </div>
        </Layout>
    )
}