import "./PolicyCard.css";
import type { Policy } from "../types/policy";
import { format } from "date-fns";

type Props = {
  policy: Policy;
};

function PolicyCard({ policy }: Props) {
  return (
    <div className="policy-card">
      <div className="card-header">
        <h2>Policy number: {policy.policyNumber}</h2>

        <button className="claim-btn"  aria-label="Make a claim">
          Make a claim
        </button>
      </div>

      <div className="card-details">
        <div>
          <p>
            <strong>Destination:</strong>{" "}
            {policy.destinations.map((d) => d.name).join(", ")}
          </p>

          {policy.type === "Annual" ? (
            <>
              <p>
                <strong>Policy Start Date:</strong>{" "}
                {format(new Date(policy.policyStart), "dd MMM yyyy")}              
             </p>

              <p>
                <strong>Maximum Trip Duration:</strong>{" "}
                {policy.maxTripDuration} days
              </p>
            </>
          ) : (
            <p>
              <strong>Travel Date:</strong>{" "}
            {format(new Date(policy.policyStart), "dd MMM yyyy")}
              {" - "}
            {format(new Date(policy.policyEnd), "dd MMM yyyy")}
            </p>
          )}
        </div>

        <div>
          <p>
            <strong>Plan:</strong>{" "}
            {policy.planName}
          </p>

          <p>
            <strong>Excess:</strong> $
            {policy.excess}
          </p>
        </div>
      </div>

      <div className="card-footer">
        <div className="links">
          <a href="#" aria-label="View PDS">
            View PDS
          </a>

          <a href="#" aria-label="Certificate of Insurance">
            Certificate of Insurance
          </a>
        </div>

        <div className="action-buttons">
          <button className="manage-btn" aria-label="Manage my policy">
            Manage my policy
          </button>
        </div>
      </div>
    </div>
  );
}

export default PolicyCard;