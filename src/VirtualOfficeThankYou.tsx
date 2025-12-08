import { CheckCircle, Building2, Mail, Users, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function VirtualOfficeThankYou() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-heading font-bold text-slate-900">Elevate Your Business</span>
        </div>
      </nav>

      <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMlYxNEgzNnYxMjB6bS00OCAwaDEyVjE0SDEydjEyMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4 drop-shadow-lg">
            Thank You for Your Interest!
          </h1>
          <p className="text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto font-light drop-shadow">
            We're excited to help you establish a professional business presence with our Virtual Office solution.
          </p>
        </div>
      </div>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-slate-600 font-light">
              We'll review your inquiry and reach out to you shortly to discuss your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-cyan-600">1</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">We'll Contact You</h3>
              <p className="text-slate-600">Our team will reach out within 24 hours to discuss your specific requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">Tour Our Facility</h3>
              <p className="text-slate-600">Schedule a visit to see our office space and meeting rooms in person.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">Get Started</h3>
              <p className="text-slate-600">Complete a simple onboarding process and start using your professional business address.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
              Your Virtual Office Benefits
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Everything you need to project a professional image
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-3">Professional Business Address</h3>
              <p className="text-slate-600 mb-4">
                Use our prestigious Bartlett, TN address on your business cards, website, and marketing materials. Give your business instant credibility and a professional image.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">List on Google My Business and directories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Separate business from personal address</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Located in the safest area in the midsouth</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-3">Mail Handling & Forwarding</h3>
              <p className="text-slate-600 mb-4">
                Never miss important business mail. We'll receive, sort, and forward your mail according to your preferences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Secure mail receiving and storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Regular forwarding on your schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Package acceptance and notification</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-3">Meeting Room Access</h3>
              <p className="text-slate-600 mb-4">
                Enjoy 10 hours per week of professional meeting room access for client meetings and presentations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Professional conference rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Advance booking available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Impress clients with professional space</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-3">Cost-Effective Solution</h3>
              <p className="text-slate-600 mb-4">
                Get all the benefits of a physical office at a fraction of the cost. Perfect for startups, remote teams, and entrepreneurs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">No long-term lease commitments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Save on office overhead costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Flexible 6 or 12 month terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
              See Our Space
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Take a virtual tour of our professional office facility
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 max-w-2xl mx-auto">
            <video
              className="w-full aspect-[9/16]"
              controls
              preload="metadata"
            >
              <source src="/virtual_office_space_ai.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Return to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

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

export default VirtualOfficeThankYou;
