'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col space-y-4">
          <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full inline-block w-fit">
            Agricultural Excellence
          </span>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-green-800">
                Streamline Your Agricultural Management
              </h1>
              
              <p className="text-gray-600 text-lg">
                DURFAM provides a comprehensive solution for managing your agricultural products, inventory, and orders with ease and efficiency.
              </p>
              
              <div className="flex gap-4">
                <Link href="/dashboard">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Go to Dashboard
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline">
                    Explore Products
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
              <Image
                src="/image/agric1.webp"
                alt="Agricultural field"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 px-4 py-1 rounded-full mb-4">
              <span className="text-green-600">Powerful Features</span>
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">Everything You Need to Grow</h2>
            <p className="text-gray-600">
              Our comprehensive suite of tools helps you manage every aspect of your agricultural business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Product Management</h3>
                <p className="text-gray-600 mb-4">Easily organize and track all your agricultural products in one place.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Categorize products efficiently
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Track product performance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Manage product details
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Order Management</h3>
                <p className="text-gray-600 mb-4">Process and track orders from placement to fulfillment.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Real-time order tracking
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Automated order processing
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Customer order history
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Inventory Tracking</h3>
                <p className="text-gray-600 mb-4">Monitor stock levels and manage inventory efficiently.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Low stock alerts
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Inventory forecasting
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Warehouse management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-green-600">10K+</h3>
              <p className="text-gray-600">Products Managed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-600">5K+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-600">98%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-600">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 px-4 py-1 rounded-full mb-4">
              <span className="text-green-600">Trusted by Farmers</span>
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">
              Hear from agricultural businesses that have transformed their operations with DURFAM.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="italic text-gray-600 mb-4">
                  "DURFAM has revolutionized how we manage our agricultural products. The inventory tracking alone has saved us countless hours and prevented stockouts."
                </p>
                <div>
                  <p className="font-semibold">John Farmer</p>
                  <p className="text-gray-600">Green Fields LLC</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="italic text-gray-600 mb-4">
                  "The order management system is intuitive and powerful. We've reduced order processing time by 75%"
                </p>
                <div>
                  <p className="font-semibold">Sarah Grower</p>
                  <p className="text-gray-600">Organic Harvests Co.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="italic text-gray-600 mb-4">
                  "We've seen a significant improvement in our overall efficiency since implementing DURFAM. It's an indispensable tool for modern agriculture."
                </p>
                <div>
                  <p className="font-semibold">Emily Cultivator</p>
                  <p className="text-gray-600">Sustainable Farms Ltd.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Agricultural Management?
          </h2>
          <p className="text-green-50 mb-8 max-w-2xl mx-auto">
            Join thousands of agricultural businesses that trust DURFAM for their product management needs.
          </p>
          <Link href="/dashboard">
            <Button className="bg-white text-green-600 hover:bg-green-100">
              Get Started Now →
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-bold text-lg mb-4">About DURFAM</h3>
              <p className="text-green-100">
                DURFAM is dedicated to providing innovative solutions for agricultural product management, helping businesses thrive in the modern market.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2 text-green-100">
                <li>Email: support@durfam.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Main St, Anytown USA</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/dashboard" className="text-green-100 hover:text-white">Dashboard</Link></li>
                <li><Link href="/products" className="text-green-100 hover:text-white">Products</Link></li>
                <li><Link href="/inventory" className="text-green-100 hover:text-white">Inventory</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">More Links</h3>
              <ul className="space-y-2">
                <li><Link href="/orders" className="text-green-100 hover:text-white">Orders</Link></li>
                <li><Link href="/blog" className="text-green-100 hover:text-white">Blog</Link></li>
                <li><Link href="/about" className="text-green-100 hover:text-white">About Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-100">
            © 2025 DURFAM. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
} 