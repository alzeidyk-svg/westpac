import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, Search, MapPin, MessageSquare, Heart, ChevronRight } from "lucide-react";
import Link from "next/link";
import { InteractiveCalculators } from "@/components/Calculator";
import { CustomerTestimonials } from "@/components/Testimonials";
import { ChatWidget } from "@/components/ChatWidget";
import { MortgageWizard } from "@/components/MortgageWizard";
import { BranchLocator } from "@/components/BranchLocator";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Red Navigation Bar */}
      <div className="bg-[#d31d1a] text-white text-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end space-x-6">
            <a href="#" className="hover:underline transition-all duration-200 hover:text-red-200">Contact us</a>
            <a href="#" className="hover:underline transition-all duration-200 hover:text-red-200">Locate us</a>
            <a href="#" className="hover:underline transition-all duration-200 hover:text-red-200">Lost or stolen cards</a>
            <a href="#" className="hover:underline transition-all duration-200 hover:text-red-200">Register</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-gray-100 transition-colors duration-200">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="space-y-6 mt-8">
                  <Link href="/personal" className="block text-lg font-medium text-gray-800 hover:text-[#d31d1a] transition-colors duration-200 py-3 border-b border-gray-100">Personal</Link>
                  <Link href="/business" className="block text-lg font-medium text-gray-800 hover:text-[#d31d1a] transition-colors duration-200 py-3 border-b border-gray-100">Business</Link>
                  <a href="#" className="block text-lg font-medium text-gray-800 hover:text-[#d31d1a] transition-colors duration-200 py-3 border-b border-gray-100">Corporate</a>
                  <a href="#" className="block text-lg font-medium text-gray-800 hover:text-[#d31d1a] transition-colors duration-200 py-3 border-b border-gray-100">About us</a>
                  <a href="#" className="block text-lg font-medium text-gray-800 hover:text-[#d31d1a] transition-colors duration-200 py-3 border-b border-gray-100">Help</a>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-[#d31d1a] text-white font-bold text-2xl p-3 rounded-md hover:bg-red-700 transition-colors duration-200 cursor-pointer">W</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/personal" className="text-gray-700 hover:text-[#d31d1a] font-medium transition-colors duration-200 relative group">
                Personal
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d31d1a] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/business" className="text-gray-700 hover:text-[#d31d1a] font-medium transition-colors duration-200 relative group">
                Business
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d31d1a] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <a href="#" className="text-gray-700 hover:text-[#d31d1a] font-medium transition-colors duration-200 relative group">
                Corporate
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d31d1a] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-[#d31d1a] font-medium transition-colors duration-200 relative group">
                About us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d31d1a] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-[#d31d1a] font-medium transition-colors duration-200 relative group">
                Help
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d31d1a] group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden md:flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200">
                    Online Banking - Personal
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="animate-in slide-in-from-top-2 duration-200">
                  <DropdownMenuItem className="hover:bg-gray-50">Personal Banking</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-50">Business Banking</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-50">Corporate Online</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button className="bg-[#d31d1a] hover:bg-red-700 text-white transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                Sign in
              </Button>

              <Button variant="ghost" size="icon" className="hover:bg-gray-100 transition-colors duration-200">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-[400px]">
          {/* Red Section */}
          <div className="bg-[#d31d1a] text-white flex-1 flex items-center hover:bg-red-700 transition-colors duration-500">
            <div className="container mx-auto px-8 py-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-in slide-in-from-left-8 duration-700">
                LAYERS AND LAYERS OF SCAM<br />
                AND FRAUD DEFENCE
              </h1>
              <p className="text-xl mb-8 opacity-90 animate-in slide-in-from-left-8 duration-700 delay-200">
                We take your security seriously. That's why we protect you and your money with our layers of scam and fraud defence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left-8 duration-700 delay-400">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#d31d1a] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  Find out more
                </Button>
                <MortgageWizard />
              </div>
            </div>
          </div>

          {/* Purple Section with Image */}
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 flex-1 flex items-center justify-center relative overflow-hidden">
            <div className="p-8 animate-in slide-in-from-right-8 duration-700">
              <img
                src="https://ext.same-assets.com/1875604555/4164415537.jpeg"
                alt="Person using mobile banking"
                className="w-full h-auto max-w-md rounded-lg hover:scale-105 transition-transform duration-500 shadow-2xl"
              />
            </div>
            {/* Floating elements for visual interest */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Personal Banking Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3d3247] mb-8 animate-in slide-in-from-bottom-4 duration-500">Personal</h2>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-12">
            {[
              "Bank accounts", "Home loans", "Credit cards",
              "Personal loans", "Share Trading", "Investments",
              "Insurance", "International & Travel", "Superannuation"
            ].map((service, index) => (
              <a
                key={service}
                href="#"
                className="flex items-center space-x-2 text-[#d31d1a] hover:underline hover:text-red-700 transition-all duration-200 hover:translate-x-1 group animate-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                <span>{service}</span>
              </a>
            ))}
          </div>

          {/* Latest Articles */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 animate-in slide-in-from-bottom-4 duration-500">Latest articles for you</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Investment property strategies", desc: "Tips to invest smarter.", bg: "from-purple-400 to-purple-500" },
                { title: "Calculating rental yield", desc: "Learn if a property is worth investing in and how much you could earn.", bg: "bg-white" },
                { title: "Home equity for investment", desc: "Explore how to use your home's equity to buy an investment property.", bg: "bg-[#d31d1a]", textColor: "text-white" },
                { title: "Investment property costs", desc: "Get a clear view of the fees and expenses involved in property investment.", bg: "bg-[#9437c7]", textColor: "text-white" }
              ].map((article, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-in slide-in-from-bottom-4 duration-500 ${article.bg}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {article.bg.includes('gradient') && (
                    <div className={`h-48 bg-gradient-to-br ${article.bg} group-hover:scale-105 transition-transform duration-300`}></div>
                  )}
                  <CardHeader className={article.textColor || ""}>
                    <CardTitle className={`text-lg group-hover:text-[#d31d1a] transition-colors duration-200 ${article.textColor || ""}`}>
                      {article.title}
                    </CardTitle>
                    <CardDescription className={article.textColor ? (article.textColor === "text-white" ? "text-red-100" : "text-purple-100") : ""}>
                      {article.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="flex justify-end mt-6">
              <a href="#" className="flex items-center text-[#d31d1a] hover:underline hover:text-red-700 transition-all duration-200 group">
                More articles
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculators */}
      <InteractiveCalculators />

      {/* Business Banking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3d3247] mb-8 animate-in slide-in-from-bottom-4 duration-500">Business</h2>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-12">
            {[
              "Bank accounts", "Savings accounts", "Credit cards",
              "FX & international", "Business loans", "EFTPOS & eCommerce",
              "Superannuation", "Invoicing", "Insurance for business",
              "Help for your business"
            ].map((service, index) => (
              <a
                key={service}
                href="#"
                className="flex items-center space-x-2 text-[#d31d1a] hover:underline hover:text-red-700 transition-all duration-200 hover:translate-x-1 group animate-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                <span>{service}</span>
              </a>
            ))}
          </div>

          {/* Help for Business */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 animate-in slide-in-from-bottom-4 duration-500">Help for your business</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "A simple guide to business finance", desc: "Learn what's involved in getting a business loan and how to prepare if you're considering applying.", bg: "from-blue-400 to-blue-500" },
                { title: "Business banking 101", desc: "4 reasons to keep personal and business separate.", bg: "from-green-400 to-green-500" },
                { title: "International payments", desc: "What you need to receive money from overseas, including our SWIFT code.", bg: "bg-[#d31d1a]", textColor: "text-white" },
                { title: "Industry insights", desc: "Explore resources designed to help you improve your business.", bg: "bg-[#9437c7]", textColor: "text-white" }
              ].map((article, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-in slide-in-from-bottom-4 duration-500 ${article.bg}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {article.bg.includes('gradient') && (
                    <div className={`h-48 bg-gradient-to-br ${article.bg} group-hover:scale-105 transition-transform duration-300`}></div>
                  )}
                  <CardHeader className={article.textColor || ""}>
                    <CardTitle className={`text-lg group-hover:text-[#d31d1a] transition-colors duration-200 ${article.textColor || ""}`}>
                      {article.title}
                    </CardTitle>
                    <CardDescription className={article.textColor ? (article.textColor === "text-white" ? "text-red-100" : "text-purple-100") : ""}>
                      {article.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="flex justify-end mt-6">
              <a href="#" className="flex items-center text-[#d31d1a] hover:underline hover:text-red-700 transition-all duration-200 group">
                More help for your business
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <CustomerTestimonials />

      {/* Branch Locator */}
      <BranchLocator />

      {/* Footer Utilities Section */}
      <section className="bg-[#3d3247] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <h4 className="font-semibold mb-4">Branches & ATMs</h4>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Suburb / postcode"
                  className="flex-1 p-3 text-black rounded-l focus:outline-none focus:ring-2 focus:ring-[#d31d1a] transition-all duration-200"
                />
                <Button className="bg-[#d31d1a] hover:bg-red-700 rounded-l-none px-4 transition-all duration-200 hover:shadow-lg">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "150ms" }}>
              <h4 className="font-semibold mb-4">Overseas ATMs</h4>
              <p className="text-sm text-gray-300">
                Use the <a href="#" className="text-[#d31d1a] underline hover:text-red-400 transition-colors duration-200">Global ATM finder</a> to search our Global ATM Alliance network.
              </p>
            </div>

            <div className="animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "300ms" }}>
              <h4 className="font-semibold mb-4">Have your say</h4>
              <p className="text-sm text-gray-300">
                We welcome your feedback whether it's a compliment, suggestion or a complaint. <a href="#" className="text-[#d31d1a] underline hover:text-red-400 transition-colors duration-200">Find out more</a>.
              </p>
            </div>

            <div className="animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "450ms" }}>
              <h4 className="font-semibold mb-4">Westpac Assist</h4>
              <p className="text-sm text-gray-300">
                Experiencing financial hardship? <a href="#" className="text-[#d31d1a] underline hover:text-red-400 transition-colors duration-200">We are here to help</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Indigenous Acknowledgment */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-start space-x-6 animate-in slide-in-from-bottom-4 duration-500">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src="https://japingkaaboriginalart.com/wp-content/uploads/Lanita-Jap-013840.jpg"
                alt="Aboriginal dot painting artwork"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                Westpac acknowledges the Traditional Owners as the custodians of this land, recognising their connection to land, waters and community. We pay our respects to Australia's First Peoples, and to their Elders past and present. View our <a href="#" className="text-[#d31d1a] underline hover:text-red-700 transition-colors duration-200">Indigenous Hub</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Complaints and compliments</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Contact us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Careers</a></li>
              </ul>
            </div>

            <div className="animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "150ms" }}>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Access and Inclusion</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Investor centre</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Westpac Group</a></li>
              </ul>
            </div>

            <div className="animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "300ms" }}>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">FAQs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Privacy</a></li>
              </ul>
            </div>

            <div className="animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "450ms" }}>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Website terms and conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Terms and conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Site index</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#d31d1a] transition-colors duration-200">Modern Slavery Statement</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media and Logo */}
          <div className="flex items-center justify-between border-t pt-8 animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "600ms" }}>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">Westpac</span>
              <div className="flex space-x-3">
                {/* Facebook */}
                <a href="#" className="hover:scale-110 transition-transform duration-200">
                  <div className="w-8 h-8 bg-[#1877F2] rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/>
                    </svg>
                  </div>
                </a>

                {/* Twitter/X */}
                <a href="#" className="hover:scale-110 transition-transform duration-200">
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15.751 2.75h2.877L12.236 8.8l6.764 8.45h-5.787L9.42 12.88l-3.85 4.37H.787l6.809-7.78L1.25 2.75h5.937l3.47 4.59 3.594-4.59zm-1.009 14.717h1.593L5.717 4.408H4.02l10.722 13.059z"/>
                    </svg>
                  </div>
                </a>

                {/* YouTube */}
                <a href="#" className="hover:scale-110 transition-transform duration-200">
                  <div className="w-8 h-8 bg-[#FF0000] rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M19.582 4.617A2.5 2.5 0 0 0 17.825 2.86C16.25 2.5 10 2.5 10 2.5s-6.25 0-7.825.36A2.5 2.5 0 0 0 .418 4.617C0 6.192 0 10 0 10s0 3.808.418 5.383a2.5 2.5 0 0 0 1.757 1.757C3.75 17.5 10 17.5 10 17.5s6.25 0 7.825-.36a2.5 2.5 0 0 0 1.757-1.757C20 13.808 20 10 20 10s0-3.808-.418-5.383zM8 13V7l5.196 3L8 13z"/>
                    </svg>
                  </div>
                </a>

                {/* LinkedIn */}
                <a href="#" className="hover:scale-110 transition-transform duration-200">
                  <div className="w-8 h-8 bg-[#0A66C2] rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18.333 0H1.667C.746 0 0 .746 0 1.667v16.666C0 19.254.746 20 1.667 20h16.666C19.254 20 20 19.254 20 18.333V1.667C20 .746 19.254 0 18.333 0zM6 17H3V8h3v9zM4.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM17 17h-3v-4.396c0-1.117-.02-2.551-1.554-2.551-1.556 0-1.796 1.215-1.796 2.469V17h-3V8h2.88v1.23h.041c.4-.759 1.379-1.56 2.84-1.56 3.037 0 3.598 2 3.598 4.59V17h-.009z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[#d31d1a] text-white font-bold text-xl p-3 rounded hover:bg-red-700 transition-colors duration-200 cursor-pointer hover:shadow-lg">W</div>
          </div>
        </div>
      </footer>

      {/* Chat Widget - Fixed Position */}
      <ChatWidget />
    </div>
  );
}
