// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a
          href="https://www.linkedin.com/in/akash-kumar-006579229/"
          target="_blank"
          title="Akash Kumar's Linkedin Profile"
        >
          Akash Kumar
        </a>
        <i className="fa-solid fa-copyright"></i>
          {year}
          <strong>
            Only<span>alakash</span>
          </strong>
      </div>
    );
  };
  
  export default Footer;