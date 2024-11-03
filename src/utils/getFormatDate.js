// Function to format a date string based on provided expressions
export function formatDate(date, expressions) {
  if (date === "Permanent") return expressions.offerTypes.permanent;
  if (date === "Present") return expressions.months.present;
  const [year, month, day] = date.split("-").map(Number);
  return [day ? day : "", month ? expressions.months[month] : "", year]
    .join(" ")
    .trim();
}

// Function to get the formatted date range
export function getFormatDate(date, expressions) {
  const formattedStartDate = formatDate(date.startDate, expressions);
  const formattedEndDate = formatDate(date.endDate, expressions);

  return formattedStartDate === "0"
    ? ""
    : `${formattedStartDate} - ${formattedEndDate}`;
}

// Function to check if the expiration date has passed
export function isExpirationDatePassed(expirationDate) {
  const today = new Date();
  const expiration = new Date(expirationDate);

  return expiration < today;
}