'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Mail, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex-1 max-w-6xl mx-auto px-4 py-8">
      <Link href="/" className="flex items-center text-green-600 hover:text-green-700 mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-green-800 mb-12">
        About DURFAM
      </h1>

      <div className="space-y-16">
        {/* Our Mission Section */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-6">Our Mission</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At <span className="text-green-800 font-semibold">DURFAM</span>, our mission is to empower agricultural businesses with <span className="text-green-800">innovative</span> technology solutions that <span className="text-green-800">streamline</span> operations, <span className="text-green-800">increase</span> productivity, and promote <span className="text-green-800">sustainable</span> farming practices.
              </p>
              <p>
                We believe that modern agriculture requires modern tools, and we're dedicated to providing farmers and agricultural businesses with the software they need to thrive in today's competitive landscape.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-green-800 mt-12 mb-6">Our Values</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">Innovation:</h3>
                <p className="text-gray-700">Constantly improving our solutions to meet evolving needs</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Sustainability:</h3>
                <p className="text-gray-700">Supporting environmentally responsible farming practices</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Reliability:</h3>
                <p className="text-gray-700">Building dependable systems farmers can count on</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Accessibility:</h3>
                <p className="text-gray-700">Making advanced technology available to farms of all sizes</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/image/agric.webp"
              alt="Agricultural field"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Our Story Section */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Founded in 2015, DURFAM began with a simple idea: agricultural management should be as advanced as the farming techniques themselves. Our founder, having grown up on a family farm, recognized the gap between available technology and the needs of modern farmers.
            </p>
            <p>
              What started as a simple inventory tracking tool has evolved into a comprehensive agricultural management system used by thousands of farms across the country. Our team has grown from three passionate developers to a diverse group of agricultural experts, software engineers, and customer support specialists all dedicated to one goal: making agricultural management simpler and more efficient.
            </p>
            <p>
              Today, DURFAM continues to innovate and expand our offerings, always with an ear to the ground for the real needs of farmers and agricultural businesses. We're proud to be part of the agricultural community and to contribute to the future of farming.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold text-green-800 mb-4">Visit Us</h3>
            <div className="text-gray-600">
              <p>123 Farming Lane</p>
              <p>Agricultural District</p>
              <p>Harvest City, HC 12345</p>
            </div>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold text-green-800 mb-4">Email Us</h3>
            <div className="text-gray-600">
              <p>info@durfam.com</p>
              <p>support@durfam.com</p>
              <p>sales@durfam.com</p>
            </div>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-bold text-green-800 mb-4">Call Us</h3>
            <div className="text-gray-600">
              <p>Main: (555) 123-4567</p>
              <p>Support: (555) 765-4321</p>
              <p>Fax: (555) 987-6543</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 