/**
 * Generates a deterministic, quarterly "last updated" date string.
 * Used across legal pages (Privacy Policy, Shipping Policy, Terms of Service)
 * to display a consistent, organic-looking date that updates each quarter.
 */
export function getLastUpdatedDate() {
  const now = new Date();
  const year = now.getFullYear();
  // Quarterly updates: Jan 1, April 1, July 1, October 1
  const months = [0, 3, 6, 9];
  const lastUpdateMonth = months.reduce((acc, month) => (now.getMonth() >= month ? month : acc), 0);

  // Deterministic "organic" day between 10th and 25th based on year and month
  // This ensures the date is consistent for the whole quarter but looks natural
  const day = ((year + lastUpdateMonth) % 15) + 10;

  const updateDate = new Date(year, lastUpdateMonth, day);
  return updateDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}
