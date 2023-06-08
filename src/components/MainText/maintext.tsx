import Button from "../Button/button";
import CardLink from "../Card/cardLink";
import "./maintext.css";


const Maintext = () => {

    const handleClick = () => {};

    return (
    <div>
        <div className="features">
            <Button text="Features" onClick={handleClick} />
        </div>
        <div className="titre">
            <h1>Why use Atomize React?</h1>
        </div>
        <div className="text">
            <p>
            Atomize React helps you in building fully responsive websites <br /> and products that match your style.
            </p>
        </div>
        <div className="cardDiv">
            <CardLink title="Flexible Grid" description="Change grid variables or give decimal column size." imageUrl="Photo" linkURL="See How" />
            <CardLink title="Style guide" description="Update theme throughout the application easily." imageUrl="Photo" linkURL="See How" />
            <CardLink title="Spacing" description="A better and controlled way of update spacing." imageUrl="Photo" linkURL="See How" />
            <CardLink title="Responsive" description="Better control to make the app responsive." imageUrl="Photo" linkURL="See How" />
        </div>
        

    </div>
    );
};

export default Maintext;