import { Building2, MapPin, DollarSign, Wifi, Coffee, Users, Phone, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    officeType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.officeType || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          office_type: formData.officeType,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', officeType: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header
        className="relative text-white bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(15, 23, 42, 0.65), rgba(51, 65, 85, 0.60)), url('/office1.jpg')`
        }}
      >
        <nav className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-heading font-bold">Elevate Your Business</span>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Premium Office Space in Bartlett, TN
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-4 font-light">
              Give your business a professional image and boost your credibility with premium office solutions starting at just $150/month.
            </p>
            <p className="text-lg text-slate-300 mb-8 font-light">
              Virtual offices and physical workspaces designed to elevate your business presence and drive success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
              >
                Get Started Today
              </a>
              <a
                href="#pricing"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm text-center"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Modern amenities and flexible solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-200 transition-all duration-300">
                <Building2 className="w-6 h-6 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">Private Offices</h3>
              <p className="text-slate-600 transition-colors duration-300">
                Private offices perfect for focused work and client meetings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                <Wifi className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Virtual Offices</h3>
              <p className="text-slate-600 transition-colors duration-300">
                Professional business address with mail handling.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-slate-200 transition-all duration-300">
                <Coffee className="w-6 h-6 text-slate-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors duration-300">Modern Amenities</h3>
              <p className="text-slate-600 transition-colors duration-300">
                High-speed internet and comfortable common areas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-200 transition-all duration-300">
                <MapPin className="w-6 h-6 text-cyan-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">Prime Location</h3>
              <p className="text-slate-600 transition-colors duration-300">
                Located in Bartlett, TN - the safest area in the midsouth with easy access to major highways.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                <Users className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Meeting Rooms</h3>
              <p className="text-slate-600 transition-colors duration-300">
                Professional conference rooms available for client presentations and team meetings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-slate-200 transition-all duration-300">
                <DollarSign className="w-6 h-6 text-slate-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors duration-300">Flexible Terms</h3>
              <p className="text-slate-600 transition-colors duration-300">
                6 or 12 month terms available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
              Affordable & Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Choose the plan that works best for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-green-500 rounded-2xl p-8 relative bg-green-50/50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Virtual Office</h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl font-heading font-bold text-slate-900">$150</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <p className="text-slate-600 font-light">Perfect for remote teams and startups</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-slate-700">Professional business address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-slate-700">Mail handling & forwarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-slate-700">10 hours per week meeting room access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-slate-700">Access to common areas</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="border-2 border-slate-200 rounded-2xl p-8 hover:border-cyan-500 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Private Office</h3>
                <div className="flex flex-col items-center mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg text-slate-600 font-light">starting at</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-heading font-bold text-slate-900">$450</span>
                    <span className="text-slate-600">/month</span>
                  </div>
                </div>
                <p className="text-slate-600 font-light">Ideal for growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span className="text-slate-700">Everything in Virtual Office</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span className="text-slate-700">Dedicated private office space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span className="text-slate-700">24/7 access to your office</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span className="text-slate-700">High-speed WiFi included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">✓</span>
                  <span className="text-slate-700">Access to common areas</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full bg-slate-900 hover:bg-slate-800 text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMlYxNEgzNnYxMjB6bS00OCAwaDEyVjE0SDEydjEyMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-white drop-shadow-lg">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/95 font-light drop-shadow">
                Contact us today to schedule a tour or learn more about our office solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1">
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">Get in Touch</h3>
                <div className="space-y-5">
                  <a
                    href="tel:+19012960393"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-slate-900">Phone</p>
                      <p className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">
                        (901) 296-0393
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@meadowlandllc.com"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-slate-900">Email</p>
                      <p className="text-slate-600 hover:text-cyan-600 transition-colors font-medium break-all">
                        info@meadowlandllc.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3189+Kirby+Whitten+Rd+Bartlett+Tennessee+38134"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-slate-900">Location</p>
                      <p className="text-slate-600 hover:text-cyan-600 transition-colors font-medium">3189 Kirby Whitten Rd Bartlett, Tennessee 38134</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all">
                <h3 className="text-2xl font-heading font-bold mb-6 text-slate-900">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                    disabled={isSubmitting}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                    disabled={isSubmitting}
                  />
                  <select
                    value={formData.officeType}
                    onChange={(e) => setFormData({ ...formData, officeType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-900 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>Select Office Type</option>
                    <option value="Virtual Office - $150 per month">Virtual Office - $150 per month</option>
                    <option value="Physical Office - $450 per month">Physical Office - $450 per month</option>
                    <option value="I'm not sure, I want to discuss">I'm not sure, I want to discuss</option>
                  </select>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all resize-none"
                    disabled={isSubmitting}
                  ></textarea>

                  {submitStatus.type && (
                    <div className={`p-4 rounded-xl font-medium ${
                      submitStatus.type === 'success'
                        ? 'bg-green-100 text-green-800 border-2 border-green-300'
                        : 'bg-red-100 text-red-800 border-2 border-red-300'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 py-12 border-t-4 border-cyan-500">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-slate-900">Your New Office Space Awaits</span>
            </div>
            <p className="text-sm font-medium text-slate-600">
              © 2025 Meadowland LLC All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
