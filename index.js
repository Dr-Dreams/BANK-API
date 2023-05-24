const express = require("express");
const fs = require("fs");
const bankData = require("./BankData/bank_branches.json");

const app = express();

// by branch_name

app.get("/bank/branch/:branch", (req, res) => {
  const branch = decodeURIComponent(
    req.params.branch.toUpperCase().replace(/ /g, "")
  );
  const bank = bankData.filter((bank) => bank.branch.includes(branch));

  if (!bank) {
    res.status(404).send({ error: "Not Found" });
  } else {
    let modifiedBankData = [];

    bank.forEach((item) => {
      modifiedBankData.push({
        bank_name: item.bank_name,
        branch: item.branch,
      });
    });
    res.send(modifiedBankData);
  }
});

// all data
app.get("/banks", (req, res) => {
  if (bankData.length == 0) {
    res.status(404).send({ error: "Something went wrong" });
  } else {
    res.send(bankData);
  }
});

// by using ifsc code
app.get("/bank/ifsc/:ifsc", (req, res) => {
  const ifsc = req.params.ifsc;

  const bank = bankData.find((bank) => bank.ifsc === ifsc);
  if (!bank) {
    res.status(404).send({ error: "Invalid IFSC code" });
  } else {
    res.send(bank);
  }
});

// by bank_id

app.get("/bank/bank_id/:bank_id", (req, res) => {
  const bank_id = req.params.bank_id;
  const bank = bankData.filter(
    (bank) => parseInt(bank.bank_id) === parseInt(bank_id)
  );

  if (!bank) {
    res.status(404).send({ error: `Invalid bank id ${bank_id}` });
  } else {
    res.send(bank);
  }
});

// by bank_name

app.get("/bank/bank_name/:bank_name", (req, res) => {
  const bank_name = decodeURIComponent(req.params.bank_name);
  console.log(typeof bank_name);
  const bank = bankData.filter((bank) => bank.bank_name == bank_name);

  if (!bank) {
    res.status(404).send({ error: `This ${bank_name} is not found` });
  } else {
    res.send(bank);
  }
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
