import "./Footer.css"
import { Information } from "./components/Information"
import { Subscribe } from "./components/Subscribe"


export function Footer() {
    return (
        <div className="footer">
            <Subscribe />

            <Information />

            <div className="copyright">
                <p>
                    Copyright © <b>Organick</b> | Designed by <b>VictorFlow</b>  Templates - Powered by <b>Webflow</b>

                </p>
            </div>
        </div>
    )
}