import { Building2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function PhysicalOfficeThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-heading font-bold text-slate-900">Elevate Your Business</span>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
              Thank You for Your Interest!
            </h1>
            <p className="text-xl text-slate-600 font-light mb-2">
              We've received your inquiry about our Private Office space
            </p>
            <p className="text-lg text-slate-500">
              Our team will contact you shortly to schedule a tour and discuss your office needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="aspect-video w-full">
              <iframe
                src="YOUR_VIMEO_VIDEO_URL_HERE?autoplay=1&muted=1&loop=1&autopause=0"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Private Office Tour"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">We'll Review Your Request</h3>
                  <p className="text-slate-600">Our team will carefully review your information and office requirements.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Schedule Your Office Tour</h3>
                  <p className="text-slate-600">We'll contact you within 24 hours to schedule an in-person tour of our available offices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Move Into Your New Office</h3>
                  <p className="text-slate-600">Once you've selected your office, we'll get you set up with 24/7 access right away!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

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

export default PhysicalOfficeThankYou;
