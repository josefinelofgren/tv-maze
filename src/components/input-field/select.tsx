"use client";

import React, { ReactNode } from "react";

export interface Props {
  value: any;
  children: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ value, children, onChange }: Props) => {
  return (
    <select
      onChange={onChange}
      value={value}
      className="input-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      {children}
    </select>
  );
};

export default Select;
