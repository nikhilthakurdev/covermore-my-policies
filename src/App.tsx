import { useState } from "react";
import policies from "./data/policies.json";
import type { Policy } from "./types/policy";
import PolicyCard from "./components/PolicyCard";

function App() {
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 3;

  const activePolicies = (policies as Policy[])
    .filter((policy) => policy.status === "ACTIVE")
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() -
        new Date(b.startDate).getTime()
    );

  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  const paginatedPolicies = activePolicies.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(
    activePolicies.length / ITEMS_PER_PAGE
  );

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        My Policies
      </h1>

      {paginatedPolicies.map((policy) => (
        <PolicyCard
          key={policy.id}
          policy={policy}
        />
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginTop: "24px",
          marginBottom: "24px",
        }}
      >
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ←
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default App;