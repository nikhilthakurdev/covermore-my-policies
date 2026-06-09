/**
 * Utility function to check if a policy is active
 * Handles various API status formats and casing variations
 *
 * Supports:
 * - "Active", "ACTIVE", "active", "AcTiVe"
 * - " Active " (with leading/trailing spaces)
 * - "Active Policy", "ACTIVE POLICY" (partial matches)
 *
 * @param status - The status value from the API
 * @returns boolean - True if the policy is active
 */
export function isActivePolicy(status: string): boolean {
  if (!status || typeof status !== "string") {
    return false;
  }

  // Normalize: trim whitespace and convert to lowercase
  const normalized = status.trim().toLowerCase();

  // Check if status starts with "active" to handle partial matches
  // e.g., "Active Policy", "ACTIVE POLICY"
  return normalized.startsWith("active");
}
