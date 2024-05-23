// Home.jsx
import Header from "../components/header";
import ProjectCard from "../components/card.jsx";
import Styles from "./Home.module.css";
import profileImg from "../assets/profile_pic.png";

function Home() {
    return (
        <div>
            <Header title="Home" />
            <div className={Styles.container}>
                <div className={Styles.content}>
                    <div className={Styles.textContainer}>
                        <h2 className={Styles.heading}>Welcome to My Website</h2>
                        <p className={Styles.description}>
                            Hello and welcome! By using the nav bar, you can explore my personal projects. I hope you enjoy!
                        </p>
                        <div className={Styles.contact}>
                            <p>
                                <i className={`${Styles.icon} fas fa-envelope`}></i>
                                Kcheb@bu.edu
                            </p>
                            <p>
                                <i className={`${Styles.icon} fas fa-phone`}></i>
                                267-773-0858
                            </p>
                        </div>
                    </div>
                    <div className={Styles.imageContainer}>
                        <img
                            src={profileImg}
                            className={Styles.profile}
                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;