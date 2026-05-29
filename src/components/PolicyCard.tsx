import "./PolicyCard.css";
import type { Policy } from "../types/policy";

type Props = {
  policy: Policy;
};

function PolicyCard({ policy }: Props) {
  return (
    <div className="policy-card">
      <div className="card-header">
        <h2>Policy number: {policy.policyNumber}</h2>

        <button className="claim-btn">
          Make a claim
        </button>
      </div>

      <div className="card-details">
        <div>
          <p>
            <strong>Destination:</strong>{" "}
            {policy.destination}
          </p>

          {policy.type === "ANNUAL" ? (
            <>
              <p>
                <strong>Policy Start Date:</strong>{" "}
                {policy.startDate}
              </p>

              <p>
                <strong>Maximum Trip Duration:</strong>{" "}
                {policy.maxTripDuration} days
              </p>
            </>
          ) : (
            <p>
              <strong>Travel Date:</strong>{" "}
              {policy.startDate} - {policy.endDate}
            </p>
          )}
        </div>

        <div>
          <p>
            <strong>Plan:</strong>{" "}
            {policy.plan}
          </p>

          <p>
            <strong>Excess:</strong> $
            {policy.excess}
          </p>
        </div>
      </div>

      <div className="card-footer">
        <div className="links">
          <a href="#">
            View PDS
          </a>

          <a href="#">
            Certificate of Insurance
          </a>
        </div>

        <div className="action-buttons">
          <button className="manage-btn">
            Manage my policy
          </button>
        </div>
      </div>
    </div>
  );
}

export default PolicyCard;