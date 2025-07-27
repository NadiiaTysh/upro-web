"use client";

import React, { JSX, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useUpdateUProBalance } from "@/hooks/usePurchaseUProGold";
import { useAuth } from "@/contexts/AuthContext";

type GoldPackage = {
  id: number;
  gold: number;
  price: number;
};

const goldPackages: GoldPackage[] = [
  { id: 1, gold: 500, price: 4.99 },
  { id: 2, gold: 1200, price: 9.99 },
  { id: 3, gold: 2500, price: 19.99 },
  { id: 4, gold: 7000, price: 49.99 },
  { id: 5, gold: 15000, price: 99.99 },
];

export default function PurchaseUproGoldPage(): JSX.Element {
  const [selectedPackage, setSelectedPackage] = useState<GoldPackage>(goldPackages[0]);
  const { user } = useAuth();
  const { updateBalance } = useUpdateUProBalance();

  const handlePurchase = (): void => {
    updateBalance(selectedPackage?.gold, user!.id);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Buy UPRO Gold</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {goldPackages.map((pkg) => (
          <Card
            key={pkg.id}
            onClick={() => setSelectedPackage(pkg)}
            className={`cursor-pointer transition border-2 ${
              selectedPackage === pkg
                ? "border-yellow-500 shadow-lg"
                : "border-gray-200"
            }`}
          >
            <CardContent className="p-6 text-center space-y-2">
              <h2 className="text-xl font-semibold">
                {pkg.gold.toLocaleString()} Gold
              </h2>
              <p className="text-gray-600">${pkg.price.toFixed(2)}</p>
              {selectedPackage === pkg && (
                <div className="flex justify-center mt-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedPackage && <div className="mt-8 text-center">
        <Button
          onClick={() => handlePurchase()}
          className="px-6 py-3 text-lg rounded-xl"
        >
          Purchase
        </Button>
      </div>}
    </div>
  );
}
