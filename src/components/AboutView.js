import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Blandit aliquam etiam erat velit scelerisque in dictum non
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
