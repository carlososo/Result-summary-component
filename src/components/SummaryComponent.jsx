export const SummaryComponent = ({ items = [] }) => {
  return (
    <section className="summary-section__container">
      <h4> Summary </h4>
      {items.map((item) => (
        <div key={item.category} className="summary-section__container__item">
          <div className="summary-section__container__item__left">
            <img src={item.icon} alt={item.category} />
            <strong>{item.category}</strong>
          </div>
          <div className="summary-section__container__item__right">
            <span> {item.score} </span>
            <span className="opaque"> / 100</span>
          </div>
        </div>
      ))}
      <button className="summary-section__dark-button">Continue</button>
    </section>
  );
};
