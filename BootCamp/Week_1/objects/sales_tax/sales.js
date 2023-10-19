const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateTax = function(province, salesTotal, taxRates) {
  switch (province) {
  case 'AB':
    return salesTotal * taxRates['AB'];
  case 'BC':
    return salesTotal * taxRates['BC'];
  case 'SK':
    return salesTotal * taxRates['SK'];
  }
};

const calculateSalesTax = function(salesData, taxRates) {
  const inspect = require('util').inspect;
  let salesTotal = 0;
  let taxesTotal = 0;
  let companyName, companyProvince = "";
  let outputObject = {};

  for (const company of salesData) {
    companyName = company.name;
    companyProvince = company.province;

    for (const sale of company.sales) {
      salesTotal += sale;
    }

    if (company.name in outputObject) {
      outputObject[company.name].totalTaxes += calculateTax(companyProvince, salesTotal, taxRates);
      outputObject[company.name].totalSales += salesTotal;
    } else {
      taxesTotal = calculateTax(company.province, salesTotal, taxRates);
      outputObject[companyName] = { totalSales: salesTotal, totalTaxes: taxesTotal};
    }
    
    salesTotal = 0;
    taxesTotal = 0;
    companyName, companyProvince = "";
  }
  return `${inspect(outputObject)}`;
};

const results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);