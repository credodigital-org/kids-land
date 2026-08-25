import "./DataTable.css";

// Generic reusable list table - every admin page (Gallery, Calendar,
// Newspaper, and any future section) uses this same component.
// columns: [{ key, label, render? }]
// rows: array of objects
function DataTable({ columns, rows, onDelete, emptyMessage = "Nothing here yet." }) {
  if (!rows || rows.length === 0) {
    return <p className="data-table-empty">{emptyMessage}</p>;
  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
          {onDelete && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td key={col.key}>{col.render ? col.render(row) : row[col.key]}</td>
            ))}
            {onDelete && (
              <td>
                <button className="data-table-delete-btn" onClick={() => onDelete(row)}>
                  Delete
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
