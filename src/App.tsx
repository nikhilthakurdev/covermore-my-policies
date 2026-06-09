import { useState, useEffect } from "react";
import type { Policy } from "./types/policy";
import PolicyCard from "./components/PolicyCard";
import { getPolicies } from "./services/policyService";

function App() {
  const [page, setPage] = useState(1);
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const ITEMS_PER_PAGE = 3;

  // Fetch policies on component mount
  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPolicies();
        setPolicies(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load policies"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPolicies();
  }, []);

  const activePolicies = policies
    .filter((policy) => policy.status.toLowerCase() === "active")
    .sort(
      (a, b) =>
        new Date(a.policyStart).getTime() -
        new Date(b.policyStart).getTime()
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

      {loading && (
        <div style={{ textAlign: "center", padding: "32px" }}>
          <p>Loading policies...</p>
        </div>
      )}

      {error && (
        <div
          style={{
            textAlign: "center",
            padding: "32px",
            color: "red",
          }}
        >
          <p>Error: {error}</p>
        </div>
      )}

      {!loading && !error && paginatedPolicies.length === 0 && (
        <div style={{ textAlign: "center", padding: "32px" }}>
          <p>No active policies found.</p>
        </div>
      )}

      {!loading &&
        !error &&
        paginatedPolicies.map((policy) => (
          <PolicyCard
            key={policy.policyNumber}
            policy={policy}
          />
        ))}

      {!loading && !error && paginatedPolicies.length > 0 && (
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
      )}
    </div>
  );
}

export default App;
