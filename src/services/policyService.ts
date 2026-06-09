import type { Policy } from "../types/policy";
import policiesData from "../data/policies.json";

/**
 * Mock API service for policy data
 * Simulates network latency and returns policy data asynchronously
 */

const MOCK_LATENCY_MS = 500; // Simulate network delay

export async function getPolicies(): Promise<Policy[]> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));

  // Return the JSON payload
  return policiesData as Policy[];
}
