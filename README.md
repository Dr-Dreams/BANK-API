# Bank API Server

A simple API server built with Node.js and Express.js that provides information about bank branches in India.

## Getting Started

Install my-project with npm

```bash
  https://github.com/Dr-Dreams/BANK-API.git
```
Navigate to the project directory:

```bash
  cd BANK-API
```
Install the required dependencies:
```bash
  npm install
```
Start the API server:
```bash
  npm index.js
```
# API Endpoints
The API has the following endpoints:

- GET /banks: Returns all the bank branch data
- GET /bank/branch/:branch: Returns data for branches with the specified branch name
- GET /bank/ifsc/:ifsc: Returns data for the branch with the specified IFSC code
- GET /bank/bank_id/:bank_id: Returns data for the branch with the specified bank ID
- GET /bank/bank_name/:bank_name: Returns data for the branches with the specified bank name

# Data
The API uses a JSON file bank_branches.json containing information about bank branches in India. The file includes the following properties for each branch:

- bank_id: ID of the bank
- bank_name: Name of the bank
- branch: Name of the branch
- ifsc: Indian Financial System Code of the branch
# License

This project is licensed under the MIT License - see the LICENSE file for details.


