import Button from "../Buttons/SimpleButton/button";

const Title = () => {
    const handleClick = () => {};

  return (
    <div>
        <div>
            <h1>Design System for React JS</h1>
        </div>
        <div className="desc">
            <p>
                Atomize React is a UI framework that helps developers collaborate with
                <br />
                designers and build consistent user interfaces effortlessly.
            </p>
        </div>
        <div className="buttonsT">
            <Button text="Get Starded Now" onClick={handleClick} />
            <Button text="Watch Video" onClick={handleClick} />
        </div>

    </div>
  );
};

export default Title;