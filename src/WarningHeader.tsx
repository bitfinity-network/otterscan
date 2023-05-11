import React, { useContext } from "react";
import { RuntimeContext } from "./useRuntime";

const WarningHeader: React.FC = () => {
  const { provider } = useContext(RuntimeContext);
  const chainId = provider?.network.chainId;
  if (chainId === 1) {
    return <></>;
  }

  let chainMsg = `ChainID: ${chainId}`;
  if (chainId === 3) {
    chainMsg = "Ropsten Testnet";
  } else if (chainId === 4) {
    chainMsg = "Rinkeby Testnet";
  } else if (chainId === 5) {
    chainMsg = "Görli Testnet";
  } else if (chainId === 42) {
    chainMsg = "Kovan Testnet";
  } else if (chainId === 11155111) {
    chainMsg = "Sepolia Testnet";
  }
  return (
    <div className="w-full bg-orange-400 text-white text-center font-bold px-2 py-1">
      <div className="absolute left-8 flex flex-row items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6">
          <circle cx="3" cy="3" r="3" fill="#80d6a1"></circle>
        </svg>
        <span className="ml-2">Testnet</span>
      </div>
      <div>You are on {chainMsg}</div>
    </div>
  );
};

export default React.memo(WarningHeader);
