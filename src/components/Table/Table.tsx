import React from "react";
import clsx from "clsx";
import styles from "./Table.module.css";

type TableCell = string | { value: string; rowSpan?: number };

interface ITableProps {
  headers: string[];
  rows: TableCell[][];
  className?: string;
}

export const Table = function Table({
  headers,
  rows,
  className,
}: ITableProps) {
  return (
    <div className={clsx(styles.tableWrapper, className)}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => {
                if (cell === null) return null;
                const isObject = typeof cell === "object";
                const value = isObject ? cell.value : cell;
                const rowSpan = isObject ? cell.rowSpan : undefined;
                const spansToLastRow = rowSpan && rowIndex + rowSpan >= rows.length;
                return (
                  <td
                    key={cellIndex}
                    rowSpan={rowSpan}
                    className={spansToLastRow ? styles.noBorder : undefined}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
