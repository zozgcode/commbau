import TabComponentBillPay from "@/components/accounts/billpay/TabComponentBillPay";
import React from "react";

export default function BillPayPage() {
  return (
    <div className="">
      <div className="w-full min-h-28 p-4 bg-[#e6e6e6]">
        <span className="text-black text-xl font-semibold mb-2">BillPay</span>
      </div>
      <TabComponentBillPay />
    </div>
  );
}
