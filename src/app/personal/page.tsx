import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, DollarSign, Home, CreditCard, Shield, TrendingUp, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { InteractiveCalculators } from "@/components/Calculator";
import { ChatWidget } from "@/components/ChatWidget";

export default function PersonalBanking() {
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
              <Link href="/personal" className="text-[#d31d1a] font-medium border-b-2 border-[#d31d1a]">Personal</Link>
              <Link href="/business" className="text-gray-700 hover:text-[#d31d1a] font-medium transition-colors duration-200">Business</Link>
              <a href="#" className="text-gray-700 hover:text-[#d31d1a] font-medium transition-colors duration-200">Corporate</a>
              <a href="#" className="text-gray-700 hover:text-[#d31d1a] font-medium transition-colors duration-200">About us</a>
            </nav>

            <Button className="bg-[#d31d1a] hover:bg-red-700 text-white transition-all duration-200">
              Sign in
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#d31d1a] to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 animate-in slide-in-from-left-8 duration-700">
              Personal Banking Solutions
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-in slide-in-from-left-8 duration-700 delay-200">
              From everyday banking to home loans and investments, we're here to help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left-8 duration-700 delay-400">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#d31d1a] transition-all duration-300">
                Open an Account
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#d31d1a] transition-all duration-300">
                Apply for Home Loan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3d3247]">What would you like to do?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#d31d1a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors duration-300">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Open a Bank Account</CardTitle>
                <CardDescription>Get started with our range of transaction and savings accounts</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#d31d1a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors duration-300">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Apply for Home Loan</CardTitle>
                <CardDescription>Find the right home loan for your dream property</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#d31d1a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors duration-300">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Get a Credit Card</CardTitle>
                <CardDescription>Choose from our range of credit cards with great rewards</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#3d3247]">Our Personal Banking Products</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Banking Products */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Banking & Cards</h3>
              <div className="space-y-4">
                {[
                  { name: "Choice Account", desc: "Our everyday transaction account with no monthly fees", icon: "💳" },
                  { name: "Life Account", desc: "Premium account with exclusive benefits", icon: "⭐" },
                  { name: "eSaver Account", desc: "High interest savings account", icon: "💰" },
                  { name: "Term Deposits", desc: "Secure your money with guaranteed returns", icon: "🏦" },
                  { name: "Credit Cards", desc: "Rewards, low rate and premium options", icon: "💎" }
                ].map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-[#d31d1a] cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{product.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg group-hover:text-[#d31d1a] transition-colors duration-200">{product.name}</h4>
                          <p className="text-gray-600">{product.desc}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#d31d1a] group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Lending & Investment */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Lending & Investment</h3>
              <div className="space-y-4">
                {[
                  { name: "Home Loans", desc: "Variable and fixed rate home loans", icon: "🏠" },
                  { name: "Personal Loans", desc: "For cars, holidays, renovations and more", icon: "🚗" },
                  { name: "Investment Property", desc: "Finance for your investment property", icon: "🏘️" },
                  { name: "Margin Lending", desc: "Leverage your investments", icon: "📈" },
                  { name: "Share Trading", desc: "Online trading platform", icon: "💹" }
                ].map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-[#d31d1a] cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{product.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg group-hover:text-[#d31d1a] transition-colors duration-200">{product.name}</h4>
                          <p className="text-gray-600">{product.desc}</p>
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

      {/* Account Opening Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#3d3247]">Open Your Account Today</h2>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-center">Quick Account Application</CardTitle>
                <CardDescription className="text-center">Get started in just a few minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" className="focus:ring-[#d31d1a] focus:border-[#d31d1a]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" className="focus:ring-[#d31d1a] focus:border-[#d31d1a]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="focus:ring-[#d31d1a] focus:border-[#d31d1a]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" className="focus:ring-[#d31d1a] focus:border-[#d31d1a]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountType">Account Type</Label>
                  <select id="accountType" className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#d31d1a] focus:border-[#d31d1a] focus:outline-none">
                    <option>Choice Account</option>
                    <option>Life Account</option>
                    <option>eSaver Account</option>
                  </select>
                </div>

                <Button className="w-full bg-[#d31d1a] hover:bg-red-700 text-white text-lg py-3 transition-all duration-200 hover:shadow-lg">
                  Start Application
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By continuing, you agree to our terms and conditions. This is a secure application process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Westpac */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3d3247]">Why Choose Westpac?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#d31d1a] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Security First</h3>
              <p className="text-gray-600">Advanced security features to protect your money and personal information</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#d31d1a] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Competitive Rates</h3>
              <p className="text-gray-600">Great interest rates on savings and competitive home loan rates</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#d31d1a] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service and online banking support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculators */}
      <InteractiveCalculators />

      {/* Contact Section */}
      <section className="py-16 bg-[#3d3247] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
              <p className="text-lg mb-6 text-gray-300">
                Our banking specialists are here to help you choose the right products for your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#d31d1a]" />
                  <span>132 032 (24/7)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#d31d1a]" />
                  <span>Visit any Westpac branch</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#3d3247] text-lg px-8 py-3">
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Home</Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Personal Banking</span>
            </div>
            <div className="bg-[#d31d1a] text-white font-bold text-xl p-3 rounded">W</div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
