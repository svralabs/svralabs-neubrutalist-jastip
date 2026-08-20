import React, { useState } from 'react';

const DataTable = ({ data, columns, title, searchPlaceholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const filteredData = data.filter(item =>
    columns.some(column =>
      item[column.accessor].toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-lg">
        <h3 className="font-headline-md text-headline-md">{title}</h3>
        <div className="relative">
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="neubrutalist-border bg-surface-container-low p-sm pl-8 rounded-lg w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="material-symbols-outlined absolute left-2 top-1/2 transform -translate-y-1/2 text-text-secondary">search</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full neubrutalist-border bg-surface-container-low rounded-lg">
          <thead>
            <tr className="neubrutalist-border bg-surface-container-high">
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  className="p-md text-left font-headline-sm text-headline-sm cursor-pointer"
                  onClick={() => requestSort(column.accessor)}
                >
                  <div className="flex items-center gap-1">
                    {column.header}
                    {sortConfig.key === column.accessor && (
                      <span className="material-symbols-outlined text-xs">
                        {sortConfig.direction === 'asc' ? 'arrow_upward' : 'arrow_downward'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item) => (
              <tr key={item.id} className="neubrutalist-border bg-surface-container-low">
                {columns.map((column) => (
                  <td key={column.accessor} className="p-md font-body-md text-text-primary">
                    {item[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
