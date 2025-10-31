"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000"
export function BuyerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [countries, setCountries] = useState([])
  const [formData, setFormData] = useState({
    buyer_name: '',
    buyer_contact_detail: '',
    buyer_email: '',
    country_code: '',
    country_name: '',
    company_name: '',
    products: ''
  })

  // Fetch countries from django-countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/countries/`)
        if (response.ok) {
          const countriesData = await response.json()
          setCountries(countriesData)
        }
      } catch (error) {
        console.error('Error fetching countries:', error)
      }
    }
    
    fetchCountries()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(country => country.country_code === e.target.value)
    setFormData(prev => ({
      ...prev,
      country_code: e.target.value,
      country_name: selectedCountry ? selectedCountry.country_name : ''
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_BASE}/api/buyers/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        const errorData = await response.json()
        console.error('Submission error:', errorData)
        alert('There was an error submitting your inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Network error:', error)
      alert('There was a network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground">We've received your buyer inquiry and will get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="buyer_name">Buyer Name *</Label>
        <Input 
          id="buyer_name" 
          name="buyer_name" 
          value={formData.buyer_name}
          onChange={handleInputChange}
          required 
          placeholder="Your Name or Company Name" 
        />
      </div>

      <div>
        <Label htmlFor="buyer_contact_detail">Contact Details *</Label>
        <Input 
          id="buyer_contact_detail" 
          name="buyer_contact_detail" 
          value={formData.buyer_contact_detail}
          onChange={handleInputChange}
          required 
          placeholder="Phone number or contact information" 
        />
      </div>

      <div>
        <Label htmlFor="buyer_email">Email Address *</Label>
        <Input 
          id="buyer_email" 
          name="buyer_email" 
          type="email" 
          value={formData.buyer_email}
          onChange={handleInputChange}
          required 
          placeholder="contact@yourcompany.com" 
        />
      </div>

      <div>
        <Label htmlFor="country_code">Country *</Label>
        <select
          id="country_code"
          name="country_code"
          value={formData.country_code}
          onChange={handleCountryChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.country_code} value={country.country_code}>
              {country.country_name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="company_name">Company Name *</Label>
        <Input 
          id="company_name" 
          name="company_name" 
          value={formData.company_name}
          onChange={handleInputChange}
          required 
          placeholder="Enter your company name" 
        />
      </div>

      <div>
        <Label htmlFor="products">Products You Need *</Label>
        <Input 
          id="products" 
          name="products" 
          value={formData.products}
          onChange={handleInputChange}
          required 
          placeholder="Enter products separated by commas (e.g., Maple Syrup, Lumber, Furniture)" 
        />
        <p className="text-sm text-gray-500 mt-1">
          Separate multiple products with commas
        </p>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </Button>
    </form>
  )
}
