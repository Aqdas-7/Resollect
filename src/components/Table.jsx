/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TableControls from "./TableControls";
import "./Table.css";
import { tableData, allColumns } from "../constants";

const Table = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleColumns, setVisibleColumns] = useState(allColumns);

  const handleSelectAll = (event) => {
    setSelectedRows(event.target.checked ? tableData.map((row) => row.id) : []);
  };

  const handleRowSelect = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((rowId) => rowId !== id) : [...prevSelected, id]
    );
  };

  const filteredData = tableData.filter((row) =>
    row.loanNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="table-container">
      {/* Search Bar & Buttons */}
      <TableControls onSearch={setSearchQuery} />

      {/* Selected Rows Count */}
      <div className="selected-count">{selectedRows.length} rows selected</div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={handleSelectAll} checked={selectedRows.length === tableData.length} />
            </th>
            {visibleColumns.includes("Loan No") && <th>Loan No.</th>}
            {visibleColumns.includes("Loan Type") && <th>Loan Type</th>}
            {visibleColumns.includes("Borrower") && <th>Borrower</th>}
            {visibleColumns.includes("Borrower Address") && <th>Borrower Address</th>}
            {visibleColumns.includes("Co Borrower Name") && <th>Co Borrower Name</th>}
            {visibleColumns.includes("Co Borrower Address") && <th>Co Borrower Address</th>}
            {visibleColumns.includes("Current DPD") && <th>Current DPD</th>}
            {visibleColumns.includes("Sanction Amount") && <th>Sanction Amount</th>}
            {visibleColumns.includes("Region") && <th>Region</th>}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelect(row.id)}
                  />
                </td>
                {visibleColumns.includes("Loan No") && <td>{row.loanNo}</td>}
                {visibleColumns.includes("Loan Type") && <td>{row.loanType}</td>}
                {visibleColumns.includes("Borrower") && <td>{row.borrower}</td>}
                {visibleColumns.includes("Borrower Address") && <td>{row.borrowerAddress}</td>}
                {visibleColumns.includes("Co Borrower Name") && <td>{row.coBorrowerName}</td>}
                {visibleColumns.includes("Co Borrower Address") && <td>{row.coBorrowerAddress}</td>}
                {visibleColumns.includes("Current DPD") && <td>{row.currentDPD}</td>}
                {visibleColumns.includes("Sanction Amount") && <td>{row.sanctionAmount}</td>}
                {visibleColumns.includes("Region") && <td>{row.region}</td>}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="no-results">
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
