import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    wasteType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);

      if (response.data.success) {
        toast({
          title: "Request Submitted Successfully!",
          description: "Our team will contact you within 24 hours.",
        });

        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          wasteType: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Submission Failed",
        description: error.response?.data?.message || "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your waste management? Request a consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600">Telangana, India</p>
                    <p className="text-sm text-slate-500 mt-1">Serving South India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600">+91 (XXX) XXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">info@greenearth.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Industries We Serve
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  FMCG & Manufacturing
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  Hospitality & Food Services
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  Municipal Corporations
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  Industrial Facilities
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company Name *
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your Company"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Type of Waste
                </label>
                <Input
                  type="text"
                  name="wasteType"
                  value={formData.wasteType}
                  onChange={handleChange}
                  placeholder="Organic, Plastic, Mixed, etc."
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your waste management needs..."
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;