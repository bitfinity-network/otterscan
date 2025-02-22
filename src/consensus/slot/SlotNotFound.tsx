import { FC, memo } from "react";
import { commify } from "@ethersproject/units";
import { SlotAwareComponentProps } from "../types";
import SlotLink from "../components/SlotLink";
import { useHeadSlotNumber } from "../../useConsensus";

const SlotNotFound: FC<SlotAwareComponentProps> = ({ slotNumber }) => {
  const headSlotNumber = useHeadSlotNumber();

  return (
    <div className="space-y-2 py-4 text-sm">
      <p>Slot {commify(slotNumber)} data not found.</p>
      {headSlotNumber !== undefined && slotNumber > headSlotNumber ? (
        <p className="flex space-x-2">
          <span>Head slot is:</span>
          <SlotLink slotNumber={headSlotNumber} />
        </p>
      ) : (
        <>
          <p>Possible causes:</p>
          <ul className="list-inside list-disc">
            <li>Missed slot</li>
            <li>CL does not have the slot data</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default memo(SlotNotFound);
