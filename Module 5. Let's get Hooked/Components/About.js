import food from "../images/food.png";
const About = () => {
    return (
        <div className="about-container">
        <div className="about-left">
        <img src={food} alt="Food Image" />        
      </div>
      <div className="about-right">
      <h1>
          Welcome <br />
          </h1>
          <p>
          we bring delicious meals from your favorite local restaurants straight to your doorstep. <br />
          Our mission is to make dining easy, enjoyable, and accessible, no matter where you are. <br /> 
          </p>
          <h2>
          <span>Tasty & Fresh Food</span>
          </h2>
        <h4>
          "Better you will feel if you eat a Only<span>Food</span> healthy meal"
        </h4>
      </div>
        </div>
        
    );
};

export default About;