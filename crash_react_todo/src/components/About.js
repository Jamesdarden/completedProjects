import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h4>version 1.0.0</h4>
            {/* // stops reloading of the page unlike a tag */}
            <Link to="/">Go back</Link>  
        </div>
    )
}

export default About
