import React from "react";
import Header from "../Comman/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-info m-2 p-4">This is About page</div>
      <div className="card mb-3" style={{ maxWidth: 800 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://t3.ftcdn.net/jpg/01/28/95/86/360_F_128958691_XesV1Q1x10WOuIGLq1PolnEaYHdM08rO.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Hii, I am Dharmik Modi from India. I am a Frontend Web
                Developer. I have completed my IMSCIT in Computer Application
                from Silver Oak University. I have 1 year of experience in web
                development. I have worked on various projects and have gained a
                lot of experience in this field. I am a quick learner and I am
                always looking for new challenges.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
