import Styles from "./Text.module.css"

function Text(props){
    return(
        <div className={Styles.TextBody}>
            <h2>{props.title}</h2>
            <p>{props.content} </p>

        </div>
    );
}
export default Text