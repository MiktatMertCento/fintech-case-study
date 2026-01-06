import React from "react";

import { formatCurrency } from "lib/utils";

interface SummaryCardProps {
  label: string;
  price?: number;
  currency?: string;
  isLoading?: boolean;
  Icon: React.ElementType;
}

function SummaryCard(props: SummaryCardProps) {
  const { label, price, currency, Icon, isLoading } = props;

  if (isLoading) {
    return (
      <div className="w-full h-full justify-center items-center flex flex-row bg-gray2Background px-5 py-6 rounded-lg animate-pulse">
        <div className="bg-gray3Background w-10 h-10 rounded-full mr-4" />
        <div className="flex flex-col flex-1 gap-2">
          <div className="h-4 bg-gray3Background rounded w-1/2" />
          <div className="h-6 bg-gray3Background rounded w-3/4" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full justify-center items-center flex flex-row bg-gray2Background hover:bg-darkGray1Background px-5 py-6 rounded-lg group transition-colors text-nowrap">
      <div className="bg-gray3Background p-3 rounded-full mr-4 group-hover:bg-darkGray2Background transition-colors">
        <Icon className="w-4 h-4 text-darkGray1Background group-hover:text-primaryColor transition-colors" />
      </div>

      <div className="flex flex-col">
        <h3 className="text-text2Color">{label}</h3>
        <h1 className="font-bold text-xl text-text1Color group-hover:text-white transition-colors">
          {formatCurrency(price, currency)}
        </h1>
      </div>
    </div>
  );
}

export default SummaryCard;
