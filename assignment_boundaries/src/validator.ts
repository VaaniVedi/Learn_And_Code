export function validateLocation(input: string): void {
  if (!input || input.trim().length === 0) {
    throw new Error("Location cannot be empty");
  }
}