import React, { Component } from "react";
import InfoList from "../InfoList/InfoList";

const logoTrtu =
  "https://s8.hostingkartinok.com/uploads/images/2019/12/e75bb074ef0917d6eb94a41370b137fc.jpg";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container mt-3 ">
            <div className="row">
              <div className="block shadow p-3 mb-5 bg-white rounded col-3">
                <img src={logoTrtu} alt="" />
              </div>

              <div className="col-9">
                <InfoList />
              </div>
            </div>
          </div>
      </>
    );
  }
}

export default HomePage;
