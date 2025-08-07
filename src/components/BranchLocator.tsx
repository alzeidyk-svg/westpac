"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Navigation, Search, Star, Wifi, ParkingCircle, Accessibility } from "lucide-react";

interface Branch {
  id: number;
  name: string;
  address: string;
  suburb: string;
  postcode: string;
  phone: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  services: string[];
  amenities: string[];
  rating: number;
  distance: number;
  status: "open" | "closed" | "busy";
  waitTime: number;
  coordinates: { lat: number; lng: number };
}

const branches: Branch[] = [
  {
    id: 1,
    name: "Westpac Sydney CBD",
    address: "341 George Street",
    suburb: "Sydney",
    postcode: "2000",
    phone: "(02) 9293 9270",
    hours: {
      weekday: "9:30am - 4:00pm",
      saturday: "9:00am - 12:00pm",
      sunday: "Closed"
    },
    services: ["Home Loans", "Business Banking", "Investment Services", "Foreign Exchange"],
    amenities: ["ATM", "Parking", "WiFi", "Wheelchair Access"],
    rating: 4.2,
    distance: 0.5,
    status: "open",
    waitTime: 5,
    coordinates: { lat: -33.8688, lng: 151.2093 }
  },
  {
    id: 2,
    name: "Westpac Bondi Junction",
    address: "Shop 4019, Level 4, Westfield Bondi Junction",
    suburb: "Bondi Junction",
    postcode: "2022",
    phone: "(02) 9387 8200",
    hours: {
      weekday: "9:30am - 4:00pm",
      saturday: "9:00am - 12:00pm",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Home Loans", "Credit Cards"],
    amenities: ["ATM", "Parking", "WiFi"],
    rating: 4.0,
    distance: 1.2,
    status: "busy",
    waitTime: 15,
    coordinates: { lat: -33.8915, lng: 151.2477 }
  },
  {
    id: 3,
    name: "Westpac Parramatta",
    address: "159-175 Church Street",
    suburb: "Parramatta",
    postcode: "2150",
    phone: "(02) 9633 1234",
    hours: {
      weekday: "9:30am - 4:00pm",
      saturday: "9:00am - 12:00pm",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Business Banking", "Home Loans", "Investment Services"],
    amenities: ["ATM", "Parking", "WiFi", "Wheelchair Access"],
    rating: 4.1,
    distance: 2.8,
    status: "open",
    waitTime: 8,
    coordinates: { lat: -33.8150, lng: 151.0010 }
  },
  {
    id: 4,
    name: "Westpac Chatswood",
    address: "Shop 28-29, Chatswood Chase Shopping Centre",
    suburb: "Chatswood",
    postcode: "2067",
    phone: "(02) 9412 7890",
    hours: {
      weekday: "9:30am - 4:00pm",
      saturday: "9:00am - 12:00pm",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Home Loans", "Foreign Exchange"],
    amenities: ["ATM", "Parking", "WiFi"],
    rating: 3.9,
    distance: 3.5,
    status: "closed",
    waitTime: 0,
    coordinates: { lat: -33.7969, lng: 151.1816 }
  },
  {
    id: 5,
    name: "Westpac Blacktown",
    address: "17 Main Street",
    suburb: "Blacktown",
    postcode: "2148",
    phone: "(02) 9831 5678",
    hours: {
      weekday: "9:30am - 4:00pm",
      saturday: "9:00am - 12:00pm",
      sunday: "Closed"
    },
    services: ["Personal Banking", "Business Banking", "Home Loans"],
    amenities: ["ATM", "Parking", "Wheelchair Access"],
    rating: 4.3,
    distance: 4.1,
    status: "open",
    waitTime: 3,
    coordinates: { lat: -33.7681, lng: 150.9056 }
  }
];

export function BranchLocator() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [filteredBranches, setFilteredBranches] = useState(branches);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setFilteredBranches(branches);
      return;
    }

    const filtered = branches.filter(branch =>
      branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.suburb.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.postcode.includes(searchQuery) ||
      branch.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredBranches(filtered);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "bg-green-100 text-green-800";
      case "busy": return "bg-yellow-100 text-yellow-800";
      case "closed": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "open": return "Open";
      case "busy": return "Busy";
      case "closed": return "Closed";
      default: return "Unknown";
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi": return <Wifi className="h-4 w-4" />;
      case "parking": return <ParkingCircle className="h-4 w-4" />;
      case "wheelchair access": return <Accessibility className="h-4 w-4" />;
      default: return <MapPin className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3d3247] mb-4">Find Your Nearest Branch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Locate Westpac branches near you with real-time availability and service information.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <Card className="mb-8 shadow-lg">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by suburb, postcode, or branch name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    className="text-lg h-12 focus:ring-[#d31d1a] focus:border-[#d31d1a]"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  className="bg-[#d31d1a] hover:bg-red-700 h-12 px-8"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Branch List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  {filteredBranches.length} branches found
                </h3>
                <Button variant="outline" size="sm">
                  <Navigation className="h-4 w-4 mr-2" />
                  Use My Location
                </Button>
              </div>

              {filteredBranches.map((branch) => (
                <Card
                  key={branch.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedBranch?.id === branch.id ? "ring-2 ring-[#d31d1a]" : ""
                  }`}
                  onClick={() => setSelectedBranch(branch)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-[#3d3247] mb-1">
                          {branch.name}
                        </h4>
                        <p className="text-gray-600 mb-2">
                          {branch.address}, {branch.suburb} {branch.postcode}
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-1">
                            {renderStars(branch.rating)}
                          </div>
                          <span className="text-sm text-gray-600">({branch.rating})</span>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-600">{branch.distance}km away</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <Badge className={`mb-2 ${getStatusColor(branch.status)}`}>
                          {getStatusText(branch.status)}
                        </Badge>
                        {branch.status === "open" && (
                          <p className="text-sm text-gray-600">
                            Wait: ~{branch.waitTime} min
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">Hours Today:</span>
                        </div>
                        <p className="text-sm ml-6">{branch.hours.weekday}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Phone className="h-4 w-4" />
                          <span className="font-medium">Phone:</span>
                        </div>
                        <p className="text-sm ml-6">{branch.phone}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {branch.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Amenities:</p>
                      <div className="flex gap-3">
                        {branch.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-1 text-xs text-gray-600">
                            {getAmenityIcon(amenity)}
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-[#d31d1a] hover:bg-red-700">
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Branch
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder & Selected Branch Details */}
            <div className="space-y-6">
              {/* Interactive Map Placeholder */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#d31d1a]" />
                    Branch Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-[#d31d1a] mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Interactive Map</p>
                      <p className="text-sm text-gray-500">
                        Shows {filteredBranches.length} nearby branches
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Selected Branch Details */}
              {selectedBranch && (
                <Card className="shadow-lg border-[#d31d1a] border-t-4">
                  <CardHeader>
                    <CardTitle className="text-[#d31d1a]">Branch Details</CardTitle>
                    <CardDescription>{selectedBranch.name}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">Opening Hours:</h5>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Mon - Fri:</span>
                          <span>{selectedBranch.hours.weekday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>{selectedBranch.hours.saturday}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>{selectedBranch.hours.sunday}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Current Status:</h5>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(selectedBranch.status)}>
                          {getStatusText(selectedBranch.status)}
                        </Badge>
                        {selectedBranch.status === "open" && (
                          <span className="text-sm text-gray-600">
                            ~{selectedBranch.waitTime} min wait
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button className="bg-[#d31d1a] hover:bg-red-700">
                        Book Appointment
                      </Button>
                      <Button variant="outline">
                        View Full Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6">
                  <h5 className="font-medium mb-4">Quick Stats</h5>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#d31d1a]">
                        {filteredBranches.filter(b => b.status === "open").length}
                      </div>
                      <div className="text-sm text-gray-600">Open Now</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#d31d1a]">
                        {Math.round(filteredBranches.reduce((acc, b) => acc + b.rating, 0) / filteredBranches.length * 10) / 10}
                      </div>
                      <div className="text-sm text-gray-600">Avg Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
