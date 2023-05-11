import React from "react";
import ExplorerLogo from "./logo_block_explorer.webp";

const Logo: React.FC = () => (
  <div className="text-4xl text-link-blue font-title font-bold cursor-default flex items-center justify-center space-x-4">
    <img
      src={ExplorerLogo}
      width={96}
      height={96}
      alt="An otter scanning"
      title="An otter scanning"
    />
    <span>Bitfinity Block Explorer</span>
  </div>
);

export default React.memo(Logo);
