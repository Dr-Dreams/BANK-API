const fs = require("fs");
const csv = require("csvtojson");

// Reading the CSV file
fs.readFile("./bank_branches.csv", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    // Converting the CSV data to JSON
    csv()
      .fromString(data)
      .then((jsonData) => {
        // Writing the JSON data to a file
        fs.writeFile(
          "./bank_branches.json",
          JSON.stringify(jsonData),
          (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("CSV data converted to JSON successfully");
            }
          }
        );
      });
  }
});
