import { CheckCircle, Building2, Lock, Clock, Wifi, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function PrivateOfficeThankYou() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-heading font-bold text-slate-900">Elevate Your Business</span>
        </div>
      </nav>

      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMlYxNEgzNnYxMjB6bS00OCAwaDEyVjE0SDEydjEyMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4 drop-shadow-lg">
            Excellent Choice!
          </h1>
          <p className="text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto font-light drop-shadow">
            Thank you for your interest in our Private Office solution. We're excited to provide you with a dedicated workspace.
          </p>
        </div>
      </div>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
              What's Next?
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Here's what to expect in the coming days
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">Personal Consultation</h3>
              <p className="text-slate-600">We'll contact you within 24 hours to understand your specific office needs and preferences.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">Schedule Your Tour</h3>
              <p className="text-slate-600">Visit our facility to see available offices and experience our professional environment firsthand.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">Move In</h3>
              <p className="text-slate-600">Complete the simple setup process and start working in your new private office space.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
              Your Private Office Features
            </h2>
            <p className="text-xl text-slate-600 font-light">
              A dedicated workspace designed for productivity and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-3">Dedicated Private Space</h3>
              <p className="text-slate-600 mb-4">
                Your own private office that's yours alone. No sharing, no distractions. Create a workspace that reflects your business and supports your productivity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Fully furnished and ready to use</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Professional and quiet environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Customizable to your needs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-3">24/7 Access</h3>
              <p className="text-slate-600 mb-4">
                Work on your schedule, not ours. Access your private office any time of day or night, seven days a week.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Secure keycard entry system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Work early mornings or late nights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Weekend access included</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-3">Premium Amenities</h3>
              <p className="text-slate-600 mb-4">
                Everything you need to run your business efficiently, all included in your monthly rate.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">High-speed fiber WiFi included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Professional business address</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Mail handling and forwarding</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-3">Shared Spaces & Meeting Rooms</h3>
              <p className="text-slate-600 mb-4">
                Beyond your private office, enjoy access to professional common areas and meeting rooms for client presentations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Conference rooms for meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Comfortable common areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Impress clients with professional space</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-3">Privacy & Security</h3>
              <p className="text-slate-600 mb-4">
                Work with confidence knowing your space and belongings are secure. Your privacy is our priority.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Secure access control system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Private locked office space</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Professional building security</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-3">Flexible Terms</h3>
              <p className="text-slate-600 mb-4">
                No long-term commitments required. Choose the lease term that works best for your business.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">6 or 12 month lease options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">All-inclusive pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Move-in ready offices</span>
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
              Tour Our Office Space
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Get a glimpse of your future workspace
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="aspect-video bg-slate-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-10 h-10 text-slate-500" />
                </div>
                <p className="text-slate-600 text-lg">
                  Video embed placeholder
                </p>
                <p className="text-slate-500 text-sm mt-2">
                  Replace this section with your video embed code
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
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

export default PrivateOfficeThankYou;
