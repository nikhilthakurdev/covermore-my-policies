import type { Policy } from "../../types/policy";
import { getPolicies } from "../policyService";

describe("policyService", () => {
  it("should return policies from API", async () => {
    const policies = await getPolicies();
    expect(Array.isArray(policies)).toBe(true);
    expect(policies.length).toBeGreaterThan(0);
  });

  it("should return policies with required fields", async () => {
    const policies = await getPolicies();
    policies.forEach((policy) => {
      expect(policy).toHaveProperty("policyNumber");
      expect(policy).toHaveProperty("status");
      expect(policy).toHaveProperty("policyStart");
      expect(policy).toHaveProperty("type");
    });
  });

  it("should include both Active and Expired policies", async () => {
    const policies = await getPolicies();
    const statuses = policies.map((p) => p.status);
    expect(statuses).toContain("Active");
    expect(statuses).toContain("Expired");
  });
});

describe("status filtering", () => {
  const mockPolicies: Policy[] = [
    {
      policyNumber: "POL001",
      policyStart: "2026-01-01",
      policyEnd: "2026-12-31",
      primaryTravellerFirstname: "John",
      primaryTravellerLastName: "Doe",
      primaryTravellerPhoneNumber: "1234567890",
      status: "Active",
      destinations: [{ code: "US", name: "United States" }],
      alphaCode: "ABC001",
      iSO3CountryOfResidence: "US",
      underwriterCode: "UW001",
      groupCode: "GRP001",
      type: "Annual",
      excess: 250,
      maxTripDuration: 60,
      planName: "Comprehensive",
    },
    {
      policyNumber: "POL002",
      policyStart: "2025-06-01",
      policyEnd: "2025-12-31",
      primaryTravellerFirstname: "Jane",
      primaryTravellerLastName: "Smith",
      primaryTravellerPhoneNumber: "0987654321",
      status: "Expired",
      destinations: [{ code: "UK", name: "United Kingdom" }],
      alphaCode: "ABC002",
      iSO3CountryOfResidence: "UK",
      underwriterCode: "UW001",
      groupCode: "GRP001",
      type: "Single Trip",
      excess: 100,
      maxTripDuration: 0,
      planName: "Essentials",
    },
  ];

  it("should filter active policies case-insensitively", () => {
    const active = mockPolicies.filter(
      (p) => p.status.toLowerCase() === "active"
    );
    expect(active.length).toBe(1);
    expect(active[0].policyNumber).toBe("POL001");
  });

  it("should work with different status casings", () => {
    const testCases = ["Active", "ACTIVE", "active"];
    testCases.forEach((statusCase) => {
      const policy = { ...mockPolicies[0], status: statusCase as "Active" | "Expired" };
      const isActive = policy.status.toLowerCase() === "active";
      expect(isActive).toBe(true);
    });
  });

  it("should sort policies by policyStart date", () => {
    const sorted = [...mockPolicies].sort(
      (a, b) =>
        new Date(a.policyStart).getTime() -
        new Date(b.policyStart).getTime()
    );
    expect(sorted[0].policyNumber).toBe("POL002");
    expect(sorted[1].policyNumber).toBe("POL001");
  });
});
