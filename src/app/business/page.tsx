import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, Building, Users, Globe, Calculator, Shield, Award, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { InteractiveCalculators } from "@/components/Calculator";
import { ChatWidget } from "@/components/ChatWidget";

export default function BusinessBanking() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="bg-[#d31d1a] text-white font-bold text-2xl p-3 rounded-md hover:bg-red-700 transition-colors duration-200">W</div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/personal" className="text-gray-700 hover:text-[#d31d1a] font-medium transition-colors duration-200">Personal</Link>
              <Link href="/business" className="text-[#d31d1a] font-medium border-b-2 border-[#d31d1a]">Business</Link>
              <a href="#" className="text-gray-700 hover:text-[#d31d1a] font-medium transition-colors duration-200">Corporate</a>
              <a href="#" className="text-gray-700 hover:text-[#d31d1a] font-medium transition-colors duration-200">About us</a>
            </nav>

            <Button className="bg-[#d31d1a] hover:bg-red-700 text-white transition-all duration-200">
              Business Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3d3247] to-gray-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 animate-in slide-in-from-left-8 duration-700">
              Business Banking Solutions
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-in slide-in-from-left-8 duration-700 delay-200">
              From start-ups to large enterprises, we provide tailored banking solutions to help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left-8 duration-700 delay-400">
              <Button className="bg-[#d31d1a] hover:bg-red-700 text-white transition-all duration-300">
                Open Business Account
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#3d3247] transition-all duration-300">
                Apply for Business Loan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Size Selection */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3d3247]">Banking for Every Business Size</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 hover:border-[#d31d1a]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Small Business</CardTitle>
                <CardDescription>1-19 employees</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Simple business accounts</li>
                  <li>• Equipment finance</li>
                  <li>• Business credit cards</li>
                  <li>• EFTPOS solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 hover:border-[#d31d1a]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Medium Business</CardTitle>
                <CardDescription>20-199 employees</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Business banking packages</li>
                  <li>• Commercial property loans</li>
                  <li>• Trade finance</li>
                  <li>• Cash management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-2 hover:border-[#d31d1a]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Large Business</CardTitle>
                <CardDescription>200+ employees</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Corporate banking</li>
                  <li>• International trade</li>
                  <li>• Treasury services</li>
                  <li>• Dedicated relationship manager</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Business Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#3d3247]">Popular Business Products</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Banking & Payments */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Banking & Payments</h3>
              <div className="space-y-4">
                {[
                  { name: "Business One Account", desc: "All-in-one business banking solution", icon: "🏛️", rate: "No monthly fees" },
                  { name: "Business Cheque Account", desc: "Traditional business transaction account", icon: "💼", rate: "From $6/month" },
                  { name: "Business Online Saver", desc: "High interest business savings", icon: "💰", rate: "Competitive rates" },
                  { name: "EFTPOS & Payments", desc: "Accept payments in-store and online", icon: "💳", rate: "Low transaction fees" },
                  { name: "Foreign Exchange", desc: "International payment solutions", icon: "🌍", rate: "Competitive rates" }
                ].map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-[#d31d1a] cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{product.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg group-hover:text-[#d31d1a] transition-colors duration-200">{product.name}</h4>
                          <p className="text-gray-600">{product.desc}</p>
                          <p className="text-sm text-[#d31d1a] font-medium">{product.rate}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#d31d1a] group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Lending & Finance */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Lending & Finance</h3>
              <div className="space-y-4">
                {[
                  { name: "Business Loans", desc: "Flexible finance for growth", icon: "🏢", rate: "From 5.99% p.a." },
                  { name: "Equipment Finance", desc: "Finance for vehicles and equipment", icon: "🚛", rate: "Competitive rates" },
                  { name: "Commercial Property", desc: "Finance for business premises", icon: "🏭", rate: "Variable rates available" },
                  { name: "Business Overdraft", desc: "Short-term working capital", icon: "📊", rate: "Flexible access" },
                  { name: "Invoice Finance", desc: "Unlock cash from unpaid invoices", icon: "📋", rate: "Quick approval" }
                ].map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-[#d31d1a] cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{product.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg group-hover:text-[#d31d1a] transition-colors duration-200">{product.name}</h4>
                          <p className="text-gray-600">{product.desc}</p>
                          <p className="text-sm text-[#d31d1a] font-medium">{product.rate}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#d31d1a] group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Account Application */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#3d3247]">Apply for Business Banking</h2>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-center">Business Account Application</CardTitle>
                <CardDescription className="text-center">Get your business banking started today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" placeholder="Enter business name" className="focus:ring-[#d31d1a] focus:border-[#d31d1a]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="abn">ABN</Label>
                    <Input id="abn" placeholder="Enter ABN" className="focus:ring-[#d31d1a] focus:border-[#d31d1a]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <select id="businessType" className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#d31d1a] focus:border-[#d31d1a] focus:outline-none">
                    <option>Sole Trader</option>
                    <option>Partnership</option>
                    <option>Company</option>
                    <option>Trust</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <select id="industry" className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#d31d1a] focus:border-[#d31d1a] focus:outline-none">
                      <option>Retail</option>
                      <option>Professional Services</option>
                      <option>Manufacturing</option>
                      <option>Construction</option>
                      <option>Technology</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees">Number of Employees</Label>
                    <select id="employees" className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#d31d1a] focus:border-[#d31d1a] focus:outline-none">
                      <option>1-4</option>
                      <option>5-19</option>
                      <option>20-99</option>
                      <option>100+</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name</Label>
                    <Input id="contactName" placeholder="Full name" className="focus:ring-[#d31d1a] focus:border-[#d31d1a]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Phone Number</Label>
                    <Input id="contactPhone" type="tel" placeholder="Phone number" className="focus:ring-[#d31d1a] focus:border-[#d31d1a]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email Address</Label>
                  <Input id="contactEmail" type="email" placeholder="Business email" className="focus:ring-[#d31d1a] focus:border-[#d31d1a]" />
                </div>

                <Button className="w-full bg-[#d31d1a] hover:bg-red-700 text-white text-lg py-3 transition-all duration-200 hover:shadow-lg">
                  Submit Application
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  A business banking specialist will contact you within 2 business days to complete your application.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Tools & Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3d3247]">Business Tools & Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#d31d1a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors duration-300">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Business Calculators</CardTitle>
                <CardDescription>Loan repayment, cash flow and budget calculators</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#d31d1a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Business Security</CardTitle>
                <CardDescription>Fraud protection and security tips for businesses</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#d31d1a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Industry Insights</CardTitle>
                <CardDescription>Market reports and business growth strategies</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Westpac Business */}
      <section className="py-16 bg-[#3d3247] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Westpac for Business?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d31d1a] mb-2">200+</div>
              <p className="text-lg">Years of banking experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d31d1a] mb-2">1M+</div>
              <p className="text-lg">Business customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d31d1a] mb-2">24/7</div>
              <p className="text-lg">Business banking support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#d31d1a] mb-2">$50B+</div>
              <p className="text-lg">In business lending</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#3d3247]">Speak to a Business Specialist</h2>
              <p className="text-lg mb-6 text-gray-600">
                Our experienced business banking team can help you find the right solutions for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#d31d1a]" />
                  <span className="text-gray-700">132 142 (Business)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#d31d1a]" />
                  <span className="text-gray-700">business@westpac.com.au</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-[#d31d1a] hover:bg-red-700 text-white text-lg px-8 py-3 mb-4">
                Book a Meeting
              </Button>
              <p className="text-sm text-gray-600">
                Available in branch or over the phone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Home</Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Business Banking</span>
            </div>
            <div className="bg-[#d31d1a] text-white font-bold text-xl p-3 rounded">W</div>
          </div>
        </div>
      </footer>
      {/* Interactive Calculators */}
      <InteractiveCalculators />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
