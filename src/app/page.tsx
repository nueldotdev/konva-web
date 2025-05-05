'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { 
  ArrowRight, 
  CheckCircle, 
  Smartphone, 
  Share2, 
  QrCode, 
  Mail, 
  Zap, 
  Users 
} from "lucide-react";

// interface Feature {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

interface Plan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular: boolean;
}

export default function Page() {
  const [selectedPlan, setSelectedPlan] = useState<Plan['name']>("Pro");

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 sm:pb-16">
        {/* Hero Section */}
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Connect. Share. Network.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  {" "}
                  Effortlessly.
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-400 text-xl">
               { "Scan, store, and manage business cards effortlessly. Never lose a contact again with Konva's smart contact management system."}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-600/10 transition-colors">
                See How It Works
              </button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[280px] lg:max-w-none aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-red-500/10 to-red-700/10 p-2 lg:aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[280px] h-[560px] rounded-[40px] border-8 border-gray-800 overflow-hidden shadow-2xl">
                <div className="absolute top-0 w-full h-[32px] bg-gray-800 z-10"></div>
                <div className="absolute bottom-0 w-full h-[32px] bg-gray-800 z-10"></div>
                <Image
                  src="/placeholder.svg"
                  width={280}
                  height={560}
                  alt="Konva mobile app preview"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-red-500 to-red-700 blur-2xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-red-500 to-red-700 blur-2xl opacity-60"></div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 sm:py-20">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <div className="inline-block rounded-lg bg-red-500/10 px-3 py-1 text-sm text-red-500">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Everything you need to network smarter
            </h2>
            <p className="max-w-[900px] mx-auto text-gray-400 md:text-xl">
              Konva combines the best of digital and physical networking in one seamless experience.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Share2 />,
                title: "Instant Sharing",
                description: "Share your profile instantly via QR code, custom link, or NFC tap.",
              },
              {
                icon: <Users />,
                title: "Connection Management",
                description: "Keep track of all your professional connections in one organized place.",
              },
              {
                icon: <Smartphone />,
                title: "Mobile First",
                description: "Access your network on the go with our mobile app (coming soon).",
              },
              {
                icon: <Mail />,
                title: "Email Integrations",
                description: "Send personalized follow-ups directly from the platform.",
              },
              {
                icon: <QrCode />,
                title: "Custom QR codes",
                description: "Generate branded QR codes that match your personal style.",
              },
              {
                icon: <Zap />,
                title: "Contact  Exchange",
                description: "Exchange contact details with a single tap or scan.",
              }
            ].map((feature, index) => (
              <div key={index} 
                className="group relative overflow-hidden rounded-lg border border-gray-800 bg-black/50 p-6 transition-all hover:border-red-600"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="mb-2 text-red-500">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works Section */}
        <div className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12 sm:mb-16">
              <div className="inline-block rounded-lg bg-red-500/10 px-3 py-1 text-sm text-red-500">How It Works</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple. Seamless. Social.</h2>
              <p className="max-w-[900px] mx-auto text-gray-400 md:text-xl">
                Konva makes networking effortless in just a few simple steps.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/placeholder.svg"
                  width={500}
                  height={400}
                  alt="Konva app demonstration"
                  className="rounded-xl shadow-lg w-full max-w-[400px] mx-auto"
                />
              </div>
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
                      {step}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Step {step}</h3>
                      <p className="text-gray-400">Description for step {step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-12 sm:py-20" id="pricing">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <div className="inline-block rounded-lg bg-red-500/10 px-3 py-1 text-sm text-red-500">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, transparent pricing</h2>
            <p className="max-w-[900px] mx-auto text-gray-400 md:text-xl">
              {"Choose the plan that's right for you"}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                description: "Perfect for getting started",
                features: [
                  "Up to 50 cards per month",
                  "Basic card scanning",
                  "Standard support",
                  "Export to CSV"
                ],
                popular: false
              },
              {
                name: "Pro",
                price: "$9",
                period: "/month",
                description: "For growing professionals",
                features: [
                  "Unlimited card scanning",
                  "Advanced organization",
                  "Priority support",
                  "CRM integrations",
                  "Custom QR codes",
                  "Team sharing"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large teams",
                features: [
                  "Everything in Pro",
                  "Custom branding",
                  "API access",
                  "Dedicated support",
                  "SSO & advanced security",
                  "Custom integrations"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedPlan(plan.name)}
                className={`relative rounded-xl border cursor-pointer transition-all duration-300 ${
                  selectedPlan === plan.name 
                    ? 'border-red-600 bg-red-600/5 transform scale-105' 
                    : 'border-gray-800 bg-black/50 hover:border-red-600/50'
                } p-6`}
              >
                {plan.popular && (
                  <span className="absolute text-center -top-3 left-0 right-0 mx-auto w-fit bg-gradient-to-r from-red-600 to-red-700 text-white text-sm px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    {selectedPlan === plan.name && (
                      <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-400">{plan.period}</span>}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                  <ul className="space-y-3 pt-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-red-500" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-8 px-6 py-3 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800' 
                      : 'border border-red-600 text-red-600 hover:bg-red-600/10'
                  }`}>
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mx-4 sm:mx-8 my-12 sm:my-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-800">
          <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Your Networking?</h2>
            <p className="text-xl mb-8">
              Join thousands of professionals who are already using Konva to manage their business contacts.
            </p>
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg">
              Start Your Free Trial Today
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 sm:py-12">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-4">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-red-500 to-red-600" />
                <span className="font-bold text-xl">Konva</span>
              </Link>
              <p className="text-sm text-gray-400">
                Modern networking for the digital age. Connect, share, and grow your network effortlessly.
              </p>
            </div>
            <div className="hidden md:grid gap-8 col-span-2 lg:col-span-3 grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Product",
                  links: ["Features", "Pricing", "Mobile App", "Support"]
                },
                {
                  title: "Company",
                  links: ["About", "Blog", "Careers", "Contact"]
                },
                {
                  title: "Legal",
                  links: ["Privacy", "Terms", "Security"]
                }
              ].map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Konva. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}