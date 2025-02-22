import { FC, memo } from "react";
import { commify } from "@ethersproject/units";
import { SlotAwareComponentProps } from "../types";
import SlotLink from "../components/SlotLink";
import BlockLink from "../../components/BlockLink";
import SlotTimestamp from "./SlotTimestamp";
import CheckedValidatorLink from "../components/CheckedValidatorLink";
import BlockRoot from "../slot/BlockRoot";
import SlotAttestationsLink from "../components/SlotAttestationsLink";
import AggregationParticipation from "../slot/AggregationParticipation";
import RelevantNumericValue from "../../components/RelevantNumericValue";
import SlashingCount from "../components/SlashingCount";
import { useSlot } from "../../useConsensus";

const StoredSlotItem: FC<SlotAwareComponentProps> = ({ slotNumber }) => {
  const { slot } = useSlot(slotNumber);

  return (
    <tr>
      <td>
        <SlotLink
          slotNumber={slotNumber}
          slashings={
            slot.data.message.body.attester_slashings.length !== 0 ||
            slot.data.message.body.proposer_slashings.length !== 0
          }
        />
      </td>
      <td>Proposed</td>
      <td>
        {slot.data.message.body.execution_payload && (
          <BlockLink
            blockTag={parseInt(
              slot.data.message.body.execution_payload.block_number
            )}
          />
        )}
      </td>
      <td>
        <SlotTimestamp slotNumber={slotNumber} />
      </td>
      <td>
        <CheckedValidatorLink validatorIndex={slot.data.message.proposer_index} />
      </td>
      <td>
        <BlockRoot slotNumber={slotNumber} />
      </td>
      <td>
        <SlotAttestationsLink slotNumber={slotNumber}>
          {commify(slot.data.message.body.attestations.length.toString())}
        </SlotAttestationsLink>
      </td>
      <td className="self-center">
        {slot.data.message.body.sync_aggregate && (
          <AggregationParticipation
            hex={slot.data.message.body.sync_aggregate.sync_committee_bits}
          />
        )}
      </td>
      <td>
        <RelevantNumericValue value={slot.data.message.body.deposits.length} />
      </td>
      <td>
        <SlashingCount slot={slot} />
      </td>
      <td>
        <RelevantNumericValue
          value={slot.data.message.body.voluntary_exits.length}
        />
      </td>
    </tr>
  );
};

export default memo(StoredSlotItem);
