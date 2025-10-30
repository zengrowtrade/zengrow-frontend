"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000"
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_contact: '',
    user_company: '',
    inquiry_text: '',
    products: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // First create the contact user
      const userResponse = await fetch(`${API_BASE}/api/contact-users/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: formData.user_name,
          user_email: formData.user_email,
          user_contact: formData.user_contact,
          user_company: formData.user_company
        })
      })

      if (userResponse.ok) {
        const userData = await userResponse.json()
        
        // Then create the inquiry
        const inquiryResponse = await fetch(`${API_BASE}/api/contact-users/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: userData.data.user_id,
            inquiry_text: formData.inquiry_text,
            products: formData.products
          })
        })

        if (inquiryResponse.ok) {
          setSubmitted(true)
        } else {
          const errorData = await inquiryResponse.json()
          console.error('Inquiry submission error:', errorData)
          alert('There was an error submitting your inquiry. Please try again.')
        }
      } else {
        const errorData = await userResponse.json()
        console.error('User creation error:', errorData)
        alert('There was an error creating your contact information. Please try again.')
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
        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for contacting us. We'll respond to your message within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="user_name">Full Name *</Label>
          <Input 
            id="user_name" 
            name="user_name" 
            value={formData.user_name}
            onChange={handleInputChange}
            required 
            placeholder="Your name" 
          />
        </div>

        <div>
          <Label htmlFor="user_email">Email Address *</Label>
          <Input 
            id="user_email" 
            name="user_email" 
            type="email" 
            value={formData.user_email}
            onChange={handleInputChange}
            required 
            placeholder="your@email.com" 
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="user_company">Company Name *</Label>
          <Input 
            id="user_company" 
            name="user_company" 
            value={formData.user_company}
            onChange={handleInputChange}
            required
            placeholder="Your company name" 
          />
        </div>

        <div>
          <Label htmlFor="user_contact">Phone Number</Label>
          <Input 
            id="user_contact" 
            name="user_contact" 
            type="tel" 
            value={formData.user_contact}
            onChange={handleInputChange}
            placeholder="+1 (555) 123-4567" 
          />
        </div>
      </div>

      <div>
        <Label htmlFor="products">Products of Interest (Optional)</Label>
        <Input 
          id="products" 
          name="products" 
          value={formData.products}
          onChange={handleInputChange}
          placeholder="Enter products separated by commas (e.g., Maple Syrup, Lumber, Furniture)" 
        />
        <p className="text-sm text-gray-500 mt-1">
          Separate multiple products with commas
        </p>
      </div>

      <div>
        <Label htmlFor="inquiry_text">Message *</Label>
        <Textarea
          id="inquiry_text"
          name="inquiry_text"
          value={formData.inquiry_text}
          onChange={handleInputChange}
          required
          placeholder="Tell us more about your inquiry..."
          rows={6}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}

