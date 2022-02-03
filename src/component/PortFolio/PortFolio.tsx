import React from "react";
import { fundOjectType } from "../../type/FundsReducer";
import { ProgressBar } from "react-bootstrap";

import "./PortFolio.css";
import Quanity from "../../images/Quanity.jpg";
import threeLine from "../../images/three-horizontal-lines.png";

export default function PortFolio({
  scrip,
  quantity,
  price,
  avgCost,
  investedAmount,
  portfolioValue,
  returnValue,
  unRealizedPL,
}: fundOjectType) {
  console.log(returnValue);
  return (
    <div className="left-sec">
      <div className="left-sec-child-image">
        <img src={threeLine} />
      </div>
      <div className="left-sec-child">
        <div className="left-sec-text">
          <p>{scrip}</p>
          <h2>{price}</h2>
        </div>
      </div>
      <div className="left-sec-child-iShare">
        <div className="left-sec-ishare">
          <h2>iShares</h2>
          <h5>S&P 500 index</h5>
          <h6>US Equity</h6>
        </div>
      </div>
      <div className="left-sec-child">
        <div className="quantity-item">
          <div className="img-icon">
            <img src={Quanity} />
            <p>Quantity</p>
          </div>
          <div className="img-icon">
            <img src={Quanity} />
            <p>Avg. Cost</p>
          </div>
          <div className="img-icon">
            <img src={Quanity} />
            <p>Invested Amty</p>
          </div>
        </div>
      </div>
      <div className="left-sec-child">
        <div className="left-sec-number">
          <h6>{quantity}</h6>
          <h6>{avgCost}</h6>
          <h6>{investedAmount}</h6>
        </div>
      </div>
      <div className="left-sec-progress">
        <div className="progress-bar-item">
          <div className="Market-item">
            <h4>Market Value</h4>
            <h4>$9542.56</h4>
          </div>
          <div className="value-item">
            <p>
              %of portfolio value <span>{portfolioValue}%</span>
            </p>
            <div className="progress_bar">
              <ProgressBar now={portfolioValue} variant="success" />
            </div>
          </div>
        </div>
      </div>
      <div className="left-sec-progress">
        <div className="progress-bar-item">
          <div className="Market-item">
            <h4>Unrealized P/L</h4>
            <h4>{unRealizedPL}</h4>
          </div>
          <div className="value-item">
            <p>
              %Return <span>{returnValue}%</span>
            </p>

            <div className="progress_bar display_flex">
              <ProgressBar
                now={returnValue < 0 ? Math.abs(returnValue) : 0}
                variant="danger"
                className="negative"
              />
              <ProgressBar
                now={returnValue > 0 ? returnValue : 0}
                variant="success"
                className="positive"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="left-sec-child">
        <div className="left-sec-button">
          <button>BUY</button>
          <button>SELL</button>
        </div>
      </div>
    </div>
  );
}
