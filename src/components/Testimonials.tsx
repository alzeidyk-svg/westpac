"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Sydney, NSW",
    rating: 5,
    review: "Westpac made buying our first home incredibly smooth. The mobile app is fantastic and the customer service team went above and beyond to help us understand every step of the process.",
    service: "Home Loan",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Melbourne, VIC",
    rating: 5,
    review: "As a small business owner, I needed a bank that understood my needs. Westpac's business banking solutions have helped me grow my company from a startup to 15 employees.",
    service: "Business Banking",
    avatar: "👨‍💻"
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Brisbane, QLD",
    rating: 4,
    review: "The investment advice I received helped me plan for retirement with confidence. The online platform is easy to use and the fees are very reasonable compared to other banks.",
    service: "Investment Services",
    avatar: "👩‍🦳"
  },
  {
    id: 4,
    name: "David Rodriguez",
    location: "Perth, WA",
    rating: 5,
    review: "Excellent fraud protection! When someone tried to use my card overseas, Westpac caught it immediately and called me within minutes. I felt completely secure.",
    service: "Credit Card",
    avatar: "👨‍🔧"
  },
  {
    id: 5,
    name: "Lisa Wang",
    location: "Adelaide, SA",
    rating: 5,
    review: "The personal loan process was so quick and transparent. I got approved online in minutes and had the funds the next day. Perfect for my home renovation project!",
    service: "Personal Loan",
    avatar: "👩‍🎨"
  },
  {
    id: 6,
    name: "James O'Connor",
    location: "Hobart, TAS",
    rating: 4,
    review: "Great savings rates and the automatic savings features help me reach my goals faster. The financial planning tools in the app are genuinely useful for budgeting.",
    service: "Savings Account",
    avatar: "👨‍🎓"
  }
];

export function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3d3247] mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real Westpac customers have to say about their banking experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-r from-[#d31d1a] to-red-600 p-8 text-white">
                  <Quote className="absolute top-4 right-4 h-12 w-12 text-white/20" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{currentTestimonial.avatar}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{currentTestimonial.name}</h3>
                      <p className="text-red-100">{currentTestimonial.location}</p>
                      <div className="flex gap-1 mt-1">
                        {renderStars(currentTestimonial.rating)}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-lg leading-relaxed mb-4">
                    "{currentTestimonial.review}"
                  </blockquote>

                  <div className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm">
                    {currentTestimonial.service}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-lg"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-lg"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#d31d1a] w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>

          {/* Mini Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  index === currentIndex % 3 ? "ring-2 ring-[#d31d1a]" : ""
                }`}
                onClick={() => goToTestimonial(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{testimonial.avatar}</span>
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                      <div className="flex gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    "{testimonial.review.slice(0, 120)}..."
                  </p>
                  <div className="inline-block bg-[#d31d1a]/10 text-[#d31d1a] rounded-full px-3 py-1 text-xs mt-3">
                    {testimonial.service}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold text-[#d31d1a] mb-2">4.8/5</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#d31d1a] mb-2">50K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#d31d1a] mb-2">99.9%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
