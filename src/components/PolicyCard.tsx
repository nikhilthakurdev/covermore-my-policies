import type { Policy } from "../types/policy";

type PolicyCardProps = {
  policy: Policy;
};

function PolicyCard({ policy }: PolicyCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "20px",
        backgroundColor: "#fff",
      }}
    >
      <h2>Policy number: {policy.policyNumber}</h2>

      <p>
        <strong>Destination:</strong> {policy.destination}
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
        <>
          <p>
            <strong>Travel Date:</strong>{" "}
            {policy.startDate} - {policy.endDate}
          </p>
        </>
      )}

      <p>
        <strong>Excess:</strong> ${policy.excess}
      </p>
    </div>
  );
}

export default PolicyCard;