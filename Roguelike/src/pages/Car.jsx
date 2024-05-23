import Styles from "./Car.module.css"
import Header from "../components/header";
import Footer from "../components/footer";


function Car(){


    return(
        <>
            <Header title = "Neural Network Controlled Car"/>
            <div className={Styles.container}>
                <div className={Styles.description}>
                    <h3 >Description:</h3>
                    <p>Utilized a Neural Network to supervise turning and cruise control for a RC Car controlled by an ESP board</p>
                    <li>Hooked Up an Esp32 to a RC car to actuate the servos allowing for turning and speed control.</li>
                    <li>Established a node.js server to control RC over a local network from laptop</li>
                    <li>Collected training data via Raspberry Pi Camera and Lidar Sensor, and used data to train a Neural Network using Tensor flow</li>
                    <li>Loaded Neural Network on a python script and used TCP to send and recieve information between the model and the car.</li>
                </div>
                    <div className={Styles.video1}>
                        <h3 className={Styles.descriptionHeader}>Demo Video</h3>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lfNoCjfIg10?si=QykmFNsZIEYXnPlk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        
                    </div>
                    <div className={Styles.video2}>
                        <h3 className={Styles.descriptionHeader}>Technical Video</h3>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wVeeY9LFZSo?si=_SqSdSg-V2DYa8QM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    
            </div>
            <Footer/>
        </>
        );
}
export default Car