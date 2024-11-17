const convertToCSV = (data) => {
  const headers = Object.keys(data[0]).join(",") + "\n";
  const rows = data.map((row) => Object.values(row).join(",")).join("\n");
  return headers + rows;
};

export const exportToCSV = (data) => {
  const csvData = convertToCSV(data);
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "bookLists.csv";
  link.click();
};
