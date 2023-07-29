export const ResultComponent = ({ percentage = 0 }) => {
  const title = "Your Result";
  return (
    <section className="result-section">
      <h4 className="result-section__title"> {title} </h4>
      <div className="result-section__circle">
        <div className="result-section__circle__inner">
          <div className="result-section__circle__inner__text">
            {percentage}
          </div>
          <div className="result-section__circle__inner__text__small">
            of 100
          </div>
        </div>
      </div>
      <div className="result-section__below-text">
        <h3> Great </h3>
        <span>
          You scored Higher tgan 65% of the people who have taken these tests.
        </span>
      </div>
    </section>
  );
};
