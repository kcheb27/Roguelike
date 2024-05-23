import Styles from "./Rps.module.css"
import Header from "../components/header"
import Footer from "../components/footer";
function Rps(){ 
    return(
    <>
        <Header title = "RPS"/>
        <div className={Styles.container}>
            <div className={Styles.description}>
                <h3 >Description:</h3>
                <p>Utilized TensorFlow to train a machine learning model aimed at outperforming human opponents in the game of Rock Paper Scissors.</p>
                <ul>
                    <li>Collected and curated training data, merging it with an online dataset to enrich the model's learning capabilities.</li>
                    <li>Designed and implemented a model architecture featuring two ReLU activation layers and convolutional layers.</li>
                    <li>Fine-tuned model parameters to achieve a minimum of 98% accuracy on both training and validation sets.</li>
                    <li>Integrated the Python-based model with a Node.js server via TCP connections for real-time predictions and action logging.</li>
                    <li>Engineered hardware integration using an ESP unit over a local network to control three servos, indicating the AI's response to user actions.</li>
                </ul>
                <p>This project showcased a fusion of machine learning, networking, and hardware control, demonstrating proficiency in model development, optimization, and real-world application.</p>
                
            </div>
                <div className={Styles.video1}>
                    <h3 className={Styles.descriptionHeader}>Demo Video</h3>
                    <iframe  width = "100%" height = "100%" src="https://www.youtube.com/embed/a7bO4mtawac?si=IUZaaGESZNZOLvD9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
                </div>
                <div className={Styles.video2}>
                    <h3 className={Styles.descriptionHeader}>Technical Video</h3>
                    <iframe width= "100%" height= "100%" src="https://www.youtube.com/embed/oRFYfuodzg4?si=AUccSKVPjlNKA4AH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                
        </div>
        <Footer/>
    </>
    );
}
export default Rps