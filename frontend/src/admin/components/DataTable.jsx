import { Pencil, Trash2 } from "lucide-react";
import "./DataTable.css";

// Generic reusable list table - every admin page (Gallery, Calendar,
// Newspaper, Guidelines, Testimonials, and any future section) uses
// this same component.
// columns: [{ key, label, render? }]
// rows: array of objects
function DataTable({ columns, rows, onEdit, onDelete, emptyMessage = "Nothing here yet." }) {
  if (!rows || rows.length === 0) {
    return <p className="data-table-empty">{emptyMessage}</p>;
  }

  const showActions = Boolean(onEdit || onDelete);

  return (
    <div className="data-table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            {showActions && <th className="data-table-actions-head">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={col.key} data-label={col.label}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
              {showActions && (
                <td data-label="Actions" className="data-table-actions">
                  {onEdit && (
                    <button
                      type="button"
                      className="data-table-edit-btn"
                      onClick={() => onEdit(row)}
                    >
                      <Pencil size={14} strokeWidth={2.5} />
                      <span>Edit</span>
                    </button>
                  )}
                  {onDelete && (
                    <button
                      type="button"
                      className="data-table-delete-btn"
                      onClick={() => onDelete(row)}
                    >
                      <Trash2 size={14} strokeWidth={2.5} />
                      <span>Delete</span>
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
