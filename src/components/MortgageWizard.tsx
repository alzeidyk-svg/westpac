"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle2, Circle, ArrowRight, ArrowLeft, Home, DollarSign, FileText, User, CreditCard } from "lucide-react";

interface FormData {
  // Personal Details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;

  // Employment
  employmentType: string;
  employer: string;
  annualIncome: string;
  employmentLength: string;

  // Property Details
  propertyType: string;
  propertyValue: string;
  loanAmount: string;
  deposit: string;
  purposeOfLoan: string;

  // Financial Details
  existingDebts: string;
  monthlyExpenses: string;
  creditScore: string;

  // Additional Info
  additionalInfo: string;
}

const steps = [
  { id: 1, title: "Personal Details", icon: User, description: "Tell us about yourself" },
  { id: 2, title: "Employment", icon: DollarSign, description: "Your employment information" },
  { id: 3, title: "Property Details", icon: Home, description: "About your property" },
  { id: 4, title: "Financial Details", icon: CreditCard, description: "Your financial situation" },
  { id: 5, title: "Review & Submit", icon: FileText, description: "Review your application" }
];

export function MortgageWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    employmentType: "",
    employer: "",
    annualIncome: "",
    employmentLength: "",
    propertyType: "",
    propertyValue: "",
    loanAmount: "",
    deposit: "",
    purposeOfLoan: "",
    existingDebts: "",
    monthlyExpenses: "",
    creditScore: "",
    additionalInfo: ""
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitApplication = () => {
    setIsSubmitted(true);
  };

  const progress = (currentStep / steps.length) * 100;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="04XX XXX XXX"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="employmentType">Employment Type *</Label>
              <select
                id="employmentType"
                value={formData.employmentType}
                onChange={(e) => updateFormData("employmentType", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#d31d1a] focus:border-[#d31d1a] focus:outline-none"
              >
                <option value="">Select employment type</option>
                <option value="full-time">Full-time Employee</option>
                <option value="part-time">Part-time Employee</option>
                <option value="casual">Casual Employee</option>
                <option value="contractor">Contractor/Freelancer</option>
                <option value="self-employed">Self-employed</option>
                <option value="retired">Retired</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employer">Employer/Company *</Label>
              <Input
                id="employer"
                value={formData.employer}
                onChange={(e) => updateFormData("employer", e.target.value)}
                placeholder="Your employer or company name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="annualIncome">Annual Income *</Label>
                <Input
                  id="annualIncome"
                  value={formData.annualIncome}
                  onChange={(e) => updateFormData("annualIncome", e.target.value)}
                  placeholder="$80,000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employmentLength">Employment Length</Label>
                <select
                  id="employmentLength"
                  value={formData.employmentLength}
                  onChange={(e) => updateFormData("employmentLength", e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#d31d1a] focus:border-[#d31d1a] focus:outline-none"
                >
                  <option value="">Select length</option>
                  <option value="0-6months">0-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="1-2years">1-2 years</option>
                  <option value="2-5years">2-5 years</option>
                  <option value="5+years">5+ years</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type *</Label>
              <select
                id="propertyType"
                value={formData.propertyType}
                onChange={(e) => updateFormData("propertyType", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#d31d1a] focus:border-[#d31d1a] focus:outline-none"
              >
                <option value="">Select property type</option>
                <option value="house">House</option>
                <option value="unit">Unit/Apartment</option>
                <option value="townhouse">Townhouse</option>
                <option value="land">Vacant Land</option>
                <option value="investment">Investment Property</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="propertyValue">Property Value *</Label>
                <Input
                  id="propertyValue"
                  value={formData.propertyValue}
                  onChange={(e) => updateFormData("propertyValue", e.target.value)}
                  placeholder="$650,000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deposit">Deposit Amount *</Label>
                <Input
                  id="deposit"
                  value={formData.deposit}
                  onChange={(e) => updateFormData("deposit", e.target.value)}
                  placeholder="$130,000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="loanAmount">Loan Amount Required *</Label>
              <Input
                id="loanAmount"
                value={formData.loanAmount}
                onChange={(e) => updateFormData("loanAmount", e.target.value)}
                placeholder="$520,000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="purposeOfLoan">Purpose of Loan *</Label>
              <select
                id="purposeOfLoan"
                value={formData.purposeOfLoan}
                onChange={(e) => updateFormData("purposeOfLoan", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#d31d1a] focus:border-[#d31d1a] focus:outline-none"
              >
                <option value="">Select purpose</option>
                <option value="home-purchase">Purchase primary residence</option>
                <option value="investment">Investment property</option>
                <option value="refinance">Refinance existing loan</option>
                <option value="construction">Construction loan</option>
                <option value="renovation">Home renovation</option>
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="existingDebts">Existing Debts</Label>
                <Input
                  id="existingDebts"
                  value={formData.existingDebts}
                  onChange={(e) => updateFormData("existingDebts", e.target.value)}
                  placeholder="$5,000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="monthlyExpenses">Monthly Expenses</Label>
                <Input
                  id="monthlyExpenses"
                  value={formData.monthlyExpenses}
                  onChange={(e) => updateFormData("monthlyExpenses", e.target.value)}
                  placeholder="$3,000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="creditScore">Credit Score (if known)</Label>
              <select
                id="creditScore"
                value={formData.creditScore}
                onChange={(e) => updateFormData("creditScore", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#d31d1a] focus:border-[#d31d1a] focus:outline-none"
              >
                <option value="">Select range</option>
                <option value="excellent">Excellent (800+)</option>
                <option value="very-good">Very Good (740-799)</option>
                <option value="good">Good (670-739)</option>
                <option value="fair">Fair (580-669)</option>
                <option value="poor">Poor (below 580)</option>
                <option value="unknown">I don't know</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                placeholder="Any additional information you'd like to share..."
                rows={4}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Review Your Application</h3>
              <p className="text-gray-600">Please review your information before submitting</p>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Personal Details</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-1">
                  <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Property & Loan</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-1">
                  <p><strong>Property Type:</strong> {formData.propertyType}</p>
                  <p><strong>Property Value:</strong> {formData.propertyValue}</p>
                  <p><strong>Loan Amount:</strong> {formData.loanAmount}</p>
                  <p><strong>Deposit:</strong> {formData.deposit}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Employment</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-1">
                  <p><strong>Employment Type:</strong> {formData.employmentType}</p>
                  <p><strong>Annual Income:</strong> {formData.annualIncome}</p>
                  <p><strong>Employer:</strong> {formData.employer}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#d31d1a] hover:bg-red-700 text-white">
            Apply for Home Loan
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your application. A Westpac lending specialist will contact you within 2 business days.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-sm"><strong>Reference:</strong> WBC-{Date.now().toString().slice(-6)}</p>
            </div>
            <Button onClick={() => setIsOpen(false)} className="bg-[#d31d1a] hover:bg-red-700">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#d31d1a] hover:bg-red-700 text-white">
          Apply for Home Loan
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Home className="h-5 w-5 text-[#d31d1a]" />
            Home Loan Application
          </DialogTitle>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Step {currentStep} of {steps.length}</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        {/* Step Indicators */}
        <div className="flex justify-between mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.id;
            const isCurrent = currentStep === step.id;

            return (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  isCompleted ? "bg-green-500 text-white" :
                  isCurrent ? "bg-[#d31d1a] text-white" :
                  "bg-gray-200 text-gray-400"
                }`}>
                  {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </div>
                <div className="text-center">
                  <div className={`text-xs font-medium ${isCurrent ? "text-[#d31d1a]" : "text-gray-500"}`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-400 hidden sm:block">
                    {step.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>

          {currentStep === steps.length ? (
            <Button
              onClick={submitApplication}
              className="bg-[#d31d1a] hover:bg-red-700 text-white flex items-center gap-2"
            >
              Submit Application
              <CheckCircle2 className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="bg-[#d31d1a] hover:bg-red-700 text-white flex items-center gap-2"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
