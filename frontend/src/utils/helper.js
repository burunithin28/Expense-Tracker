import moment from "moment";

export const ValidateEmail = (email) => {
  const Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return Regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";
  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }
  return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";
  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  const chartData = data.map((item) => ({
    category: item?.source,
    amount: item?.amount,
  }));

  return chartData;
};

export const prepareIncomeBarChartData = (data) => {
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return [];
  }
  const sortedData = [...data].sort( (a, b) => new Date(a.date) - new Date(b.date));
  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    source: item?.source,
  }));
  return chartData;
};

export const prepareExpenseLineChartData = (data) => {
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return [];
  }
  const sortedData = [...data].sort( (a, b) => new Date(a.date) - new Date(b.date));
  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    category: item?.source,
  }));
  return chartData;
};
