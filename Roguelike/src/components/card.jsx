import PropTypes from 'prop-types'
import Styles from './Card.module.css'
import face from '../assets/james.jpg'
import {Link} from 'react-router-dom'
function projectCard(props){

    return(
        <Link to = {props.link} className={Styles.link}>
        <div className={Styles.Card} >
            <img src = {props.img} className={Styles.Image}></img>
            <h4 className={Styles.Title}>{props.name}</h4>
            <div className={Styles.border}>
            <p className={Styles.Text}>{props.description}</p>
            </div>
            <p className={Styles.subText}><i>(click for more)</i></p>
        </div>

        </Link>

    );

}
projectCard.defaultProps = {
    img: face,
    name: "Project",
    description: "blah blah blah",
    link: "/home"
}
export default projectCard
