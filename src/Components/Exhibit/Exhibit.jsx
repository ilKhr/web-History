import React, { Component } from 'react';
import InfoList from "../InfoList/InfoList";

const logoTrtu =
    "https://s8.hostingkartinok.com/uploads/images/2019/12/e75bb074ef0917d6eb94a41370b137fc.jpg";
class Exhibit extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="m-3">
                    <div className="row ">
                        <div className="col-12 ">
                            <InfoList />
                        </div>
                    </div>
                </div>
                </>
        );
    }
}

export default Exhibit;