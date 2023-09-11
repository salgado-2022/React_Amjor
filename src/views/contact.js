import React from "react";
import Map from '../components/Contactenos/map';
import Social from "../components/Contactenos/social";
import { Footer } from "../components/Footer/footer";

function Contact() {
  return (
    <React.Fragment>
      <div className="site-wrap">
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-7">
                <Map />
              </div>
              <div className="col-md-5">
                <Social />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export { Contact };
