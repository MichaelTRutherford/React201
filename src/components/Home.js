import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero text="Welcome to React 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Labore velit officia ad consequat magna mollit sint id excepteur
              sit est. Officia ad in velit reprehenderit aliquip consectetur
              eiusmod et. Labore amet mollit eiusmod labore velit est nisi
              labore. Tempor magna aliquip velit id ad aliqua officia ad amet
              reprehenderit. Esse veniam pariatur ea ad cillum aute nulla enim
              ut est aliquip aliqua cupidatat. Aliquip ex voluptate eu anim
              magna in velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
