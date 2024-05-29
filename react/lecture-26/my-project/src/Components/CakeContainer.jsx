import React from "react";
import { connect } from "react-redux";
import {buy_cake} from '../Redux'

const CakeContainer = (props) => {
  return (
    <div>
      <h1 className="p-4 font-bold ">Num Of Cakes : {props.numOfCakes}</h1>
      <button onClick={props.buy_cake} className="btn">Click</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCakes:state.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buy_cake: () => dispatch(buy_cake()),
  }
};

export default connect(mapStateToProps , mapDispatchToProps) (CakeContainer);
