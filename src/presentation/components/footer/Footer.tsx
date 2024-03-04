import "./footer.css";

interface Options {
  footerClassName: string;
}

const Footer = ({ footerClassName }: Options) => {
  return (
    <footer className={footerClassName}>
      Pagina diseñada por{" "}
      <a
        target="_blank"
        className="profile"
        href="https://www.linkedin.com/in/rcaglez"
        rel="noopener noreferrer"
      >
        Rafael Cala
      </a>
      <p>
        Aplicacion <strong>MERN</strong>
      </p>
    </footer>
  );
};

export default Footer;
