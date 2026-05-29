import policies from "./data/policies.json";
import type { Policy } from "./types/policy";

function App() {
  const activePolicies = (policies as Policy[])
    .filter((policy) => policy.status === "ACTIVE")
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() -
        new Date(b.startDate).getTime()
    );

  return (
    <div>
      <h1>My Policies</h1>

      {activePolicies.map((policy) => (
        <div key={policy.id}>
          <h3>{policy.policyNumber}</h3>
          <p>{policy.destination}</p>
        </div>
      ))}
    </div>
  );
}

export default App;