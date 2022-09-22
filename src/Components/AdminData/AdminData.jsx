import React from "react";
import "../AdminData/AdminData.css";
import { useState } from "react";

function AdminData() {
  const [state, setState] = useState(true);

  return (
    <div className="admin_data_view">
      <div className="admin_data">


        <div className="data_div">
          <p>
            Simulation-based semi-empirical comparative study of fixed and
            vectored thruster configurations for an underwater
          </p>
          <div className="label_btn_div">
            <p className={state? 'active_label' : 'disabled_label'}>{state ? "Active" : "Disabled"}</p>

            <div className={state ? "disable_button_div" : "disabled_btn"}>
              <button onClick={() => setState(false)} className="disable_btn">
                Disable News
              </button>
            </div>
          </div>
        </div>
        <div className="data_div">
          <p>
            Simulation-based semi-empirical comparative study of fixed and
            vectored thruster configurations for an underwater
          </p>
          <div className="label_btn_div">
            <p className={state? 'active_label' : 'disabled_label'}>{state ? "Active" : "Disabled"}</p>

            <div className={state ? "disable_button_div" : "disabled_btn"}>
              <button onClick={() => setState(false)} className="disable_btn">
                Disable News
              </button>
            </div>
          </div>
        </div>
        <div className="data_div">
          <p>
            Simulation-based semi-empirical comparative study of fixed and
            vectored thruster configurations for an underwater
          </p>
          <div className="label_btn_div">
            <p className={state? 'active_label' : 'disabled_label'}>{state ? "Active" : "Disabled"}</p>

            <div className={state ? "disable_button_div" : "disabled_btn"}>
              <button onClick={() => setState(false)} className="disable_btn">
                Disable News
              </button>
            </div>
          </div>
        </div>
        <div className="data_div">
          <p>
            Simulation-based semi-empirical comparative study of fixed and
            vectored thruster configurations for an underwater
          </p>
          <div className="label_btn_div">
            <p className={state? 'active_label' : 'disabled_label'}>{state ? "Active" : "Disabled"}</p>

            <div className={state ? "disable_button_div" : "disabled_btn"}>
              <button onClick={() => setState(false)} className="disable_btn">
                Disable News
              </button>
            </div>
          </div>
        </div>
        <div className="data_div">
          <p>
            Simulation-based semi-empirical comparative study of fixed and
            vectored thruster configurations for an underwater
          </p>
          <div className="label_btn_div">
            <p className={state? 'active_label' : 'disabled_label'}>{state ? "Active" : "Disabled"}</p>

            <div className={state ? "disable_button_div" : "disabled_btn"}>
              <button onClick={() => setState(false)} className="disable_btn">
                Disable News
              </button>
            </div>
          </div>
        </div>
        <div className="data_div">
          <p>
            Simulation-based semi-empirical comparative study of fixed and
            vectored thruster configurations for an underwater
          </p>
          <div className="label_btn_div">
            <p className={state? 'active_label' : 'disabled_label'}>{state ? "Active" : "Disabled"}</p>

            <div className={state ? "disable_button_div" : "disabled_btn"}>
              <button onClick={() => setState(false)} className="disable_btn">
                Disable News
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default AdminData;
