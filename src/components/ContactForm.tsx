import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2, Clock, Copy, Check } from 'lucide-react';
import { LeadFormData, ServiceOption } from '../types';

interface ContactFormProps {
  initialService: ServiceOption;
  onServiceChange: (service: ServiceOption) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService,
  onServiceChange,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: initialService,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync if prop changes externally
  React.useEffect(() => {
    setFormData((prev) => ({ ...prev, service: initialService }));
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'service') {
      onServiceChange(value as ServiceOption);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleCopySummary = () => {
    const text = `DesigntightMedia LLC Consultation Request:\nRecipient: Sammie Robinson (samuel@designtightMedia.com)\nAddress: 2501 NE 23rd Street, Ste A136, Oklahoma City, OK 73111\nPhone: (405) 458-9771\n\nClient Details:\nName: ${formData.name}\nBusiness: ${formData.business || 'N/A'}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nService Needed: ${formData.service}\nGoals: ${formData.message || 'Growth review'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      business: '',
      email: '',
      phone: '',
      service: 'Not sure yet',
    message: '',
    });
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-white border-b border-neutral-200">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
              Let's talk
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.08] mb-4">
              Tell us what you want to improve.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              Request a free initial growth review. We'll audit your online presence, discuss the right scope, and recommend a practical, high-ROI next step.
            </p>

            <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-xs space-y-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                  Company & Contact
                </span>
                <strong className="text-lg text-black font-extrabold block">
                  DesigntightMedia LLC
                </strong>
                <span className="text-sm font-semibold text-neutral-700 block mt-0.5">
                  Sammie Robinson
                </span>
              </div>

              <div className="flex items-start gap-3 text-sm text-neutral-700">
                <MapPin className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  2501 NE 23rd Street<br />
                  Ste A136<br />
                  Oklahoma City, OK 73111
                </address>
              </div>

              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <Phone className="w-4 h-4 text-neutral-800 shrink-0" />
                <a
                  href="tel:+14054589771"
                  className="font-bold text-black hover:underline"
                >
                  (405) 458-9771
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <Mail className="w-4 h-4 text-neutral-800 shrink-0" />
                <a
                  href="mailto:samuel@designtightMedia.com"
                  className="text-neutral-700 hover:text-black hover:underline font-medium"
                >
                  samuel@designtightMedia.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-neutral-500 leading-relaxed">
              <Clock className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
              <span>
                <strong>Prompt Response Guarantee:</strong> We review all local Oklahoma City inquiries within 1 business day.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Box */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-300 p-7 sm:p-10 rounded-xs shadow-md">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
                    Request a Consultation
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    No high-pressure sales pitch—just clear recommendations for your business.
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-neutral-50 border border-neutral-200 p-6 sm:p-8 rounded-xs text-center animate-in fade-in duration-200">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">
                    Consultation Request Prepared!
                  </h4>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-black">{formData.name}</strong>. Your growth review request for <strong className="text-black">{formData.service}</strong> has been recorded.
                  </p>

                  <div className="bg-white border border-neutral-200 p-4 rounded-xs text-left text-xs space-y-1.5 mb-6 text-neutral-700">
                    <div><strong>Business:</strong> {formData.business || 'Local Business'}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    {formData.phone && <div><strong>Phone:</strong> {formData.phone}</div>}
                    <div><strong>Selected Service:</strong> {formData.service}</div>
                    {formData.message && <div><strong>Notes:</strong> {formData.message}</div>}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleCopySummary}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider bg-white border border-neutral-300 hover:border-black text-black rounded-xs transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied to Clipboard' : 'Copy Inquiry Summary'}</span>
                    </button>
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 rounded-xs transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>

                  <p className="text-xs text-neutral-500 mt-6 pt-4 border-t border-neutral-200">
                    Direct inquiries: Contact Sammie Robinson at{' '}
                    <a href="tel:+14054589771" className="text-black font-bold hover:underline">
                      (405) 458-9771
                    </a>{' '}
                    or{' '}
                    <a href="mailto:samuel@designtightMedia.com" className="text-black font-bold hover:underline">
                      samuel@designtightMedia.com
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Samuel Robinson"
                        className="w-full px-3.5 py-3 border border-neutral-300 rounded-xs text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-black focus:ring-1 focus:ring-black bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="business" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Business Name
                      </label>
                      <input
                        id="business"
                        name="business"
                        type="text"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="e.g. Robinson Contracting"
                        className="w-full px-3.5 py-3 border border-neutral-300 rounded-xs text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-black focus:ring-1 focus:ring-black bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-3 border border-neutral-300 rounded-xs text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-black focus:ring-1 focus:ring-black bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(405) 000-0000"
                        className="w-full px-3.5 py-3 border border-neutral-300 rounded-xs text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-black focus:ring-1 focus:ring-black bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      What do you need help with?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 border border-neutral-300 rounded-xs text-sm text-neutral-900 focus:outline-hidden focus:border-black focus:ring-1 focus:ring-black bg-white cursor-pointer"
                    >
                      <option value="Website design">Website design & lead funnels</option>
                      <option value="Social media management">Social media management</option>
                      <option value="AI assistant / receptionist">AI assistant & voice receptionist</option>
                      <option value="Marketing and automation package">Full marketing & automation package</option>
                      <option value="Local Presence ($299/mo)">Package: Local Presence ($299/mo)</option>
                      <option value="Growth Engine ($599/mo)">Package: Growth Engine ($599/mo) — Most Popular</option>
                      <option value="AI Business Suite ($999/mo)">Package: AI Business Suite ($999/mo)</option>
                      <option value="Not sure yet">Not sure yet (Help me evaluate)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Tell us a little about your goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What would you like to improve? (e.g., getting more qualified local calls, refreshing our 5-year-old site, automating weekend inquiries...)"
                      className="w-full px-3.5 py-3 border border-neutral-300 rounded-xs text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-hidden focus:border-black focus:ring-1 focus:ring-black bg-white resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-4 px-6 bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-widest transition-colors rounded-xs cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-black disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Preparing Request...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center pt-2">
                    Submissions are kept strictly confidential. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
