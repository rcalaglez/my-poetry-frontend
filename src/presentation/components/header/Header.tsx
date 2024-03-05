import "./header.css";

/**
 * @returns Component that display the page header with a typing effect.
 */
const Header = () => {
  return (
    <header className="app-header">
      <div className="wrapper">
        <h1 className="typing">El poemario de Rafa</h1>
      </div>
    </header>
  );
};
export default Header;
