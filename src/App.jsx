import { useState } from "react";
import Wallet from "./components/Wallet/Wallet";
import Navigation from "./components/Navigation/Navigation";
import DisplayPannel from "./components/Display Pannel/DisplayPannel";
import TokenApproval from "./components/StakeToken/TokenApproval";
import StakeAmount from "./components/StakeToken/StakeAmount";
import WithdrawStakeAmount from "./components/Withdraw/Withdraw";
import { StakingProvider } from "./context/StakingContext";
import "./App.css";
function App() {
  // const [displaySection, setDisplaySection] = useState("stake");

  // const handleButtonClick = (section) => {
  //   setDisplaySection(section);
  // };

  return (
    <div className="main-section">
      <Wallet>
        <Navigation />

        <StakingProvider>
          <DisplayPannel />

          <div className="main-content">
            
            <div className="button-section">
              {/* <button
                onClick={() => handleButtonClick("stake")}
                // className={displaySection === "stake" ? "" : "active"}
              >
                Stake
              </button>
              <button
                onClick={() => handleButtonClick("withdraw")}
                // className={displaySection === "withdraw" ? "" : "active"}
              >
                Withdraw
              </button> */}
              <h2>
                Stake
                <div className="stake-wrapper">
                <TokenApproval />
                <StakeAmount />
              </div>



              </h2>

              

              
              <h2>
                Withdraw

                <div className="stake-wrapper">
                <WithdrawStakeAmount />
              </div>

              </h2>
              
            </div>
            {/* {displaySection === "stake" && ( */}
              
            {/* )} */}
            {/* {displaySection === "withdraw" && ( */}
              
            {/* )} */}
            
          </div>
        </StakingProvider>
        
      </Wallet>
      <h2>Note : You can Stake your STK token and earn reward as a RWD token.</h2>
    </div>
  );
}

export default App;
