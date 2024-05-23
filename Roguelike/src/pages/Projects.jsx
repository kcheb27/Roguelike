import Header from "../components/header"
import ProjectCard from "../components/card.jsx";

//image imports
import face from "../assets/james.jpg"
import RPS from "../assets/RPS_Thumb.jpg"
import Car from "../assets/car_thumb.jpg"
import OS from "../assets/os_thumb.jpg"
import Footer from "../components/footer.jsx";

import Styles from "./Projects.module.css"
function Projects(){
    return (
        <a>
        <Header title = "Projects"/>
        <div className={Styles.container}>
        <div className={Styles.grid}>
            <ProjectCard  img = {RPS} link = "/Rps"
            name = "Rock Paper Scissor Robot"
            description = "Neural Network controlled robot that beats you at Rock Paper Scissors"/>
            <ProjectCard img = {Car} link = "/Car" 
            name = "AI RC Car" 
            description = "Esp Controlled RC Car using Neural Network for Turning and course correction"/>
            <ProjectCard img = {OS} link = "/OS"
            name = "Basic OS Components" 
            description = "Collection of libraries that emulate componenets of a basic Operating system"/>

        </div>
        
        </div>
        </a>
    );
}
export default Projects