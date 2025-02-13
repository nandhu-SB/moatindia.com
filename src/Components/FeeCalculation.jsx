import React, { useState } from "react";

const FeeCalculationTool = () => {
  const [capital, setCapital] = useState("");
  const [managementFee, setManagementFee] = useState("");
  const [performanceFee, setPerformanceFee] = useState("");
  const [hurdleRate, setHurdleRate] = useState("");
  const [brokerage, setBrokerage] = useState("");
  const [years, setYears] = useState(5);
  const [feeTable, setFeeTable] = useState([]);

  const calculateFees = () => {
    const cap = parseFloat(capital) || 0;
    const mgmtFee = parseFloat(managementFee) / 100 || 0;
    const perfFee = parseFloat(performanceFee) / 100 || 0;
    const hurdle = parseFloat(hurdleRate) / 100 || 0;
    const brokerCost = parseFloat(brokerage) || 0;

    let results = [];
    let nav = cap;

    for (let year = 1; year <= years; year++) {
      let mgmtCharge = nav * mgmtFee;
      let hurdleAmount = nav * hurdle;
      let perfCharge = nav > hurdleAmount ? (nav - hurdleAmount) * perfFee : 0;
      let totalFees = mgmtCharge + perfCharge + brokerCost;
      nav = nav - totalFees;

      results.push({
        year,
        mgmtCharge,
        perfCharge,
        brokerCost,
        totalFees,
        nav,
      });
    }

    setFeeTable(results);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Fee calculation</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Capital Contribution (Rs.)
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Management Fee (% per annum)
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={managementFee}
          onChange={(e) => setManagementFee(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Performance Fee (% per annum)
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={performanceFee}
          onChange={(e) => setPerformanceFee(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Hurdle Rate of Return (% per annum)
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={hurdleRate}
          onChange={(e) => setHurdleRate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">
          Brokerage and Transaction Cost
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={brokerage}
          onChange={(e) => setBrokerage(e.target.value)}
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white py-2 rounded"
        onClick={calculateFees}
      >
        Calculate Fees
      </button>
      {feeTable.length > 0 && (
        <table className="mt-4 w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Year</th>
              <th className="border p-2">Mgmt Fee (Rs.)</th>
              <th className="border p-2">Perf Fee (Rs.)</th>
              <th className="border p-2">Broker Cost (Rs.)</th>
              <th className="border p-2">Total Fees (Rs.)</th>
              <th className="border p-2">NAV (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            {feeTable.map((row) => (
              <tr key={row.year}>
                <td className="border p-2">{row.year}</td>
                <td className="border p-2">{row.mgmtCharge.toFixed(2)}</td>
                <td className="border p-2">{row.perfCharge.toFixed(2)}</td>
                <td className="border p-2">{row.brokerCost.toFixed(2)}</td>
                <td className="border p-2">{row.totalFees.toFixed(2)}</td>
                <td className="border p-2">{row.nav.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FeeCalculationTool;
