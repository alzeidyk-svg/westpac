"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, DollarSign, TrendingUp } from "lucide-react";

export function InteractiveCalculators() {
  const [loanAmount, setLoanAmount] = useState([500000]);
  const [loanTerm, setLoanTerm] = useState([30]);
  const [interestRate, setInterestRate] = useState([6.5]);

  const [savingsGoal, setSavingsGoal] = useState([50000]);
  const [monthlyDeposit, setMonthlyDeposit] = useState([500]);
  const [savingsRate, setSavingsRate] = useState([3.5]);

  const calculateLoanRepayment = () => {
    const principal = loanAmount[0];
    const monthlyRate = interestRate[0] / 100 / 12;
    const numberOfPayments = loanTerm[0] * 12;

    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }

    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return monthlyPayment;
  };

  const calculateSavingsTime = () => {
    const goal = savingsGoal[0];
    const monthly = monthlyDeposit[0];
    const rate = savingsRate[0] / 100 / 12;

    if (rate === 0) {
      return goal / monthly;
    }

    const months = Math.log(1 + (goal * rate) / monthly) / Math.log(1 + rate);
    return months;
  };

  const monthlyPayment = calculateLoanRepayment();
  const totalInterest = (monthlyPayment * loanTerm[0] * 12) - loanAmount[0];
  const savingsMonths = calculateSavingsTime();
  const savingsYears = Math.floor(savingsMonths / 12);
  const remainingMonths = Math.floor(savingsMonths % 12);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#d31d1a] rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#3d3247] mb-4">Financial Calculators</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plan your financial future with our interactive calculators. Get instant estimates for loans and savings goals.
          </p>
        </div>

        <Tabs defaultValue="loan" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="loan" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Loan Calculator
            </TabsTrigger>
            <TabsTrigger value="savings" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Savings Calculator
            </TabsTrigger>
          </TabsList>

          <TabsContent value="loan" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-[#d31d1a]" />
                    Loan Repayment Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate your monthly home loan repayments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Loan Amount: ${loanAmount[0].toLocaleString()}</Label>
                    <Slider
                      value={loanAmount}
                      onValueChange={setLoanAmount}
                      max={2000000}
                      min={100000}
                      step={10000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$100K</span>
                      <span>$2M</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Loan Term: {loanTerm[0]} years</Label>
                    <Slider
                      value={loanTerm}
                      onValueChange={setLoanTerm}
                      max={40}
                      min={5}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>5 years</span>
                      <span>40 years</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Interest Rate: {interestRate[0]}% p.a.</Label>
                    <Slider
                      value={interestRate}
                      onValueChange={setInterestRate}
                      max={12}
                      min={2}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>2%</span>
                      <span>12%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-br from-[#d31d1a] to-red-600 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Your Results</CardTitle>
                  <CardDescription className="text-red-100">
                    Based on your loan parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                      ${Math.round(monthlyPayment).toLocaleString()}
                    </div>
                    <p className="text-red-100">Monthly Repayment</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-semibold">
                        ${Math.round(totalInterest).toLocaleString()}
                      </div>
                      <p className="text-sm text-red-100">Total Interest</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold">
                        ${Math.round(monthlyPayment * loanTerm[0] * 12).toLocaleString()}
                      </div>
                      <p className="text-sm text-red-100">Total Amount</p>
                    </div>
                  </div>

                  <Button className="w-full bg-white text-[#d31d1a] hover:bg-gray-100 transition-colors duration-200">
                    Apply for This Loan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="savings" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#d31d1a]" />
                    Savings Goal Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate how long to reach your savings goal
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Savings Goal: ${savingsGoal[0].toLocaleString()}</Label>
                    <Slider
                      value={savingsGoal}
                      onValueChange={setSavingsGoal}
                      max={500000}
                      min={5000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$5K</span>
                      <span>$500K</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Monthly Deposit: ${monthlyDeposit[0]}</Label>
                    <Slider
                      value={monthlyDeposit}
                      onValueChange={setMonthlyDeposit}
                      max={5000}
                      min={50}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$50</span>
                      <span>$5K</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Interest Rate: {savingsRate[0]}% p.a.</Label>
                    <Slider
                      value={savingsRate}
                      onValueChange={setSavingsRate}
                      max={8}
                      min={0.5}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>0.5%</span>
                      <span>8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Time to Goal</CardTitle>
                  <CardDescription className="text-green-100">
                    Based on your savings plan
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                      {savingsYears}y {remainingMonths}m
                    </div>
                    <p className="text-green-100">To reach your goal</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-semibold">
                        ${Math.round(savingsMonths * monthlyDeposit[0]).toLocaleString()}
                      </div>
                      <p className="text-sm text-green-100">Total Deposits</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold">
                        ${Math.round(savingsGoal[0] - (savingsMonths * monthlyDeposit[0])).toLocaleString()}
                      </div>
                      <p className="text-sm text-green-100">Interest Earned</p>
                    </div>
                  </div>

                  <Button className="w-full bg-white text-green-600 hover:bg-gray-100 transition-colors duration-200">
                    Open Savings Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
