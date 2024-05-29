import React from "react";
import { connect } from "react-redux";
import { buy_dosa } from "../Redux";

const DosaContainer = (props) => {
  return (
    <div>
      <h1 className="p-4 font-bold ">Num Of Dosa : {props.numOfdosa}</h1>
      <button onClick={props.buy_dosa} className="btn">Click</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfdosa:state.numOfdosa
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buy_dosa: () => dispatch(buy_dosa()),
  }
};

export default connect(mapStateToProps , mapDispatchToProps) (DosaContainer);
