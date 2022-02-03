import React from "react";
import PortFolio from "./PortFolio/PortFolio";
import PortFolioGraph from "./PortFolio/PortFolioGraph";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { fundOjectType } from "../type/FundsReducer";

export default function PortFolioDashboard() {
  const { mutualFund, exchangeTradedFund } = useTypedSelector(
    ({ portFolio }) => portFolio
  );
  return (
    <div className="portfolio">
      <div className="container">
        <div className="row">
          <div className="right_portfolio">
            <span>ETF</span>
            {mutualFund?.length &&
              mutualFund.map((portPolio: fundOjectType, index: number) => {
                return (
                  <div key={index}>
                    <PortFolio
                      scrip={portPolio.scrip}
                      quantity={portPolio.quantity}
                      price={portPolio.price}
                      avgCost={portPolio.avgCost}
                      investedAmount={portPolio.investedAmount}
                      portfolioValue={portPolio.portfolioValue}
                      unRealizedPL={portPolio.unRealizedPL}
                      returnValue={portPolio.returnValue}
                    />
                  </div>
                );
              })}
          </div>
          <div className="left_portfolio_graph">
            <PortFolioGraph />
          </div>
          <span>ETF</span>
          {exchangeTradedFund?.length &&
            exchangeTradedFund.map(
              (portPolio: fundOjectType, index: number) => {
                return (
                  <div className="col-md-10" key={index}>
                    <PortFolio
                      scrip={portPolio.scrip}
                      quantity={portPolio.quantity}
                      price={portPolio.price}
                      avgCost={portPolio.avgCost}
                      investedAmount={portPolio.investedAmount}
                      portfolioValue={portPolio.portfolioValue}
                      unRealizedPL={portPolio.unRealizedPL}
                      returnValue={portPolio.returnValue}
                    />
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}
