import type { Policy } from "../types/policy";

/**
 * Mock API service for policy data
 * Fetches policies via HTTP fetch (simulating real API behavior)
 * Simulates network latency and handles errors like production APIs
 */

const MOCK_LATENCY_MS = 500; // Simulate network delay

export async function getPolicies(): Promise<Policy[]> {
  try {
    // Fetch from public folder like a real API would
    const response = await fetch("/policies.json");

    if (!response.ok) {
      throw new Error(`Failed to fetch policies: ${response.statusText}`);
    }

    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));

    // Parse and return the JSON payload
    const data = await response.json();
    return data as Policy[];
  } catch (error) {
    console.error("Error fetching policies:", error);
    throw error;
  }
}
