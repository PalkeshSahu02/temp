import React from 'react';
import Totalstock from './Stockchart';

const Stock = ({ stockData, selectedDate }) => {
  // Convert stock data from tons to kilograms and format for the chart
  const formatStockData = (data) => {
    if (!data || !Array.isArray(data)) {
      console.log('Invalid or no stock data provided');
      return [];
    }

    console.log('Selected date in Stock:', selectedDate); // Debug log

    // Find the data entry for the selected date
    const selectedData = data.find((item) => {
      if (!item.datestring) {
        console.log('Missing datestring for item:', item);
        return false;
      }
      console.log('Comparing:', item.datestring, 'with', selectedDate); // Debug log
      return item.datestring === selectedDate;
    });

    if (!selectedData) {
      console.log('No data found for date:', selectedDate);
      return [];
    }

    // Convert tons to kilograms and format
    const formattedData = [
      { name: 'Bhangar', stock: selectedData['Bhangar (in tons)'] * 1000 },
      { name: 'Black Plastic', stock: selectedData['Black Plastic (in tons)'] * 1000 },
      { name: 'Carton', stock: selectedData['Carton (in tons)'] * 1000 },
      { name: 'Duplex', stock: selectedData['Duplex (in tons)'] * 1000 },
      { name: 'Glass', stock: selectedData['Glass (in tons)'] * 1000 },
      { name: 'Grey Board', stock: selectedData['Grey Board (in tons)'] * 1000 },
      { name: 'HD Cloth', stock: selectedData['HD Cloth (in tons)'] * 1000 },
      { name: 'LD', stock: selectedData['LD  (in tons)'] * 1000 },
      { name: 'HM', stock: selectedData['HM (in tons)'] * 1000 },
      { name: 'Record', stock: selectedData['Record (in tons)'] * 1000 },
      { name: 'Sole', stock: selectedData['Sole (in tons)'] * 1000 },
      { name: 'Plastic', stock: selectedData['Plastic (in tons)'] * 1000 },
      { name: 'Aluminium Can', stock: selectedData['Aluminium can (in tons)'] * 1000 },
      { name: 'Pet Bottle', stock: selectedData['Pet Bottle  (in tons)'] * 1000 },
      { name: 'Milk Pouch', stock: selectedData['Milk Pouch  (in tons)'] * 1000 },
    ].filter((item) => item.stock >= 0); // Remove negative values

    console.log('Formatted stock data for', selectedDate, ':', formattedData);
    return formattedData;
  };

  const chartData = formatStockData(stockData);

  return (
    <div className="p-4 sm:p-6 min-h-screen bg-gradient-to-br from-[#9b27b0] via-[#2196f3] to-[#f2c99c]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
          Daily Stock Summary
        </h2>
        <span className="text-xs sm:text-sm text-white mt-2 md:mt-0">
          Report Date: {selectedDate}
        </span>
      </div>

      {chartData.length === 0 && (
        <p className="text-white text-center text-sm sm:text-base">
          No stock data available for {selectedDate}
        </p>
      )}

      <div className="mb-6">
        <Totalstock data={chartData} selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default Stock;