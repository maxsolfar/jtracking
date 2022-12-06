const StatsItem = ({ count, title, icon, color, bcg }) => {
  return (
    <>
      <header>
        <span className="count">{count}</span>
        <div className="icon">{icon}</div>
      </header>
      <h5 className="title">{title}</h5>
    </>
  );
};

export default StatsItem;
