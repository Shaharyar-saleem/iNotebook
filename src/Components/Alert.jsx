import React from "react";

export default function Alert(props) {
    let alert = {
        marginTop: '20px',
    }
  return (
    <div className={`alert alert-${props.alertContent.type}`} role="alert" style={alert}>
       {props.alertContent.msg}
    </div>
  );
}
