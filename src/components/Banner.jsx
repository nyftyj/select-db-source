import LightBulbIcon from '../assets/icons/light-bulb.svg';

const Banner = () => {
    return (
      <article role='contentinfo' aria-label='Pro tip article'>
        <section>
          <div
            style={{
              display: "flex",
              backgroundColor: "#FAFAFA",
              padding: "8px",
              border: "1px solid #E4E4E7",
              borderRadius: "8px",
            }}
          >
            <div>
              <img
                style={{ padding: "0 4px" }}
                src={LightBulbIcon}
                alt="Pro tip light bulb"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "0 4px",
              }}
            >
              <h4 style={{ margin: 0, padding: 0 }}>Pro Tip!</h4>
              <p style={{ margin: 0, padding: 0 }}>
                Write datasource name in the editor to print the form template.
              </p>
            </div>
          </div>
        </section>
      </article>
    );
}

export default Banner;