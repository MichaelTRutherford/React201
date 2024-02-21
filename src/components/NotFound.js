import Hero from "./Hero";

const NotFound = () => {
  return (
    <>
      <Hero text="Page not Found" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              404 Page NotFound
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
