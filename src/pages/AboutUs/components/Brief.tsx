import Food from "../../../assets/photo.jpg"
import "./Brief.css"
import Tractor from "../../../assets/Tractor.jpg"
import ChemPlant from "../../../assets/Chemical Plant.jpg"
import { Button } from "../../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import { Routes } from "../../../routes"



export function Brief() {
    const navigate = useNavigate()

    return (
        <div className="container">
            <img className="food" src={Food} />
            <div className="content">
                <h4 className="title">About Us</h4>
                <h3 className="motto">We do Creative Things for Success</h3>
                <p className="text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className="iconText">
                    <div className="tractor">
                        <img src={Tractor} />
                        <b className="icon">Modern Agriculture Equipment</b>
                    </div>
                    <div className="chemPlant">
                        <img src={ChemPlant} />
                        <b className="icon">No growth hormones are used</b>
                    </div>
                </div>
                <Button variant="primary" onClick={() => {
                    navigate(Routes.ABOUT_US);
                }}>
                    Explore More
                </Button>
            </div>

        </div>
    )
}