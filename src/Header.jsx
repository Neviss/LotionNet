function Header({ hideSide }) {
  return (
    <div className="Header">
      <button className="sidebar-hider" onClick={() => hideSide()}>
        &#9776;
      </button>
      <div className="title">
        <h1>Lotion</h1>
        <div className="desc">Like Notion, but worse.</div>
      </div>
    </div>
  );
}

export default Header;
