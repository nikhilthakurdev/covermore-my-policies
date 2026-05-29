import policies from "./data/policies.json";
import type { Policy } from "./types/policy";
import PolicyCard from "./components/PolicyCard";

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
      <PolicyCard
        key={policy.id}
        policy={policy}
      />
    ))}
    </div>
  );
}

export default App;