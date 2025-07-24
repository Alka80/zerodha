import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportid">
      
        <div className=" mt-5" id="supportwrapper">
          <h4>Support Portal</h4>

          <a href="" className="fs-5.5">
            Track tickets
          </a>
        </div>
        <div className="row mt-5" id="support">
          <div className="col-7" style={{ lineHeight: "2.5" }}>
            <h4>
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input
              className="p-2 mt-4"
              style={{ width: "100%", borderRadius: "10px", border: "none" }}
              placeholder="E.g How do I Activate F&O"
            />
            <br />
            <a href=" " style={{ marginRight: "5%" }}>
              Track account opening{" "}
            </a>
            <a href=" " style={{ marginRight: "5%" }}>
              Track segment activation{" "}
            </a>
            <a href=" " style={{ marginRight: "5%" }}>
              Intraday margins{" "}
            </a>
            <a href=" " className="" style={{ marginRight: "5%" }}>
              Kite user manual
            </a>
          </div>
          <div className="col-1"></div>
          <div className="col-4" style={{ lineHeight: "2.5" }}>
            <h4 className="mb-4">Featured</h4>
            <a href=" ">1. Quarterly Settlement of Funds - July 2025 </a>
            <br />
            <a href=" ">
              2. Exclusion of F&O contracts on 8 securities from August 29, 2025
            </a>
          </div>
        </div>
      
    </div>
  );
}

export default Hero;
