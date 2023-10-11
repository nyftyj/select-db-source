import Header from "../components/Header";
import Banner from "../components/Banner";
import SelectDB from "../components/SelectDB";

const SelectDBPage = () => {
  return (
    <div className="select-db-page-container">
      <Header />
      <section className="select-db-page-body">
        <Banner
          title="Pro tip!"
          description="Write datasource name in the editor to print the form template."
        />
        <SelectDB />
      </section>
    </div>
  );
};

export default SelectDBPage;
