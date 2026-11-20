import { MapPin, Clock, Users, Laptop, Monitor, Coffee, Phone, Mail, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { usePageMeta } from '../hooks/usePageMeta';
import { ShinyText } from '../components/ui/ShinyText';
import { SpotlightCard } from '../components/ui/SpotlightCard';

const facilities = [
  { icon: Laptop,  title: 'Computer Labs',    desc: 'Fully equipped labs with the latest hardware and software.' },
  { icon: Monitor, title: 'Smart Classrooms', desc: 'Air-conditioned smart classrooms with HD projectors.' },
  { icon: Users,   title: 'Small Batches',    desc: 'Limited batch sizes for personalised attention from mentors.' },
  { icon: Coffee,  title: 'Student Lounge',   desc: 'Comfortable break areas and cafeteria facilities.' },
];

export default function ClassroomTrainingPage() {
  usePageMeta({
    title: 'Classroom Training — Chennai',
    description: 'Join hands-on classroom training at Global Minds Technologies, Nookampalayam Road, Perumbakkam, Chennai.',
  });

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="page-hero-premium py-16">
        <div className="container-xl relative z-10">
          <Breadcrumbs items={[{ label: 'Classroom Training' }]} className="mb-4" />
          <div className="page-hero-badge mb-4">
            <MapPin className="w-4 h-4 text-teal-600" />
            <ShinyText text="Chennai Tech Campus" shinyColor="rgba(23, 108, 115, 0.9)" />
          </div>
          <h1 className="page-hero-title display-lg font-extrabold mb-4">
            Classroom{' '}
            <span className="page-hero-highlight">Training</span>
          </h1>
          <p className="page-hero-desc text-lg sm:text-xl max-w-2xl">
            Immersive, hands-on classroom training at our Chennai centre with fully equipped high-performance labs.
          </p>
        </div>
      </div>

      {/* Location + Form */}
      <section className="section bg-surface-50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — Location */}
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-700 mb-2">Our Training Centre</p>
              <h2 className="display-md text-surface-900 mb-6">Visit Us in <span className="text-gradient">Chennai</span></h2>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-surface-200 shadow-sm mb-6">
                <iframe
                  title="Global Minds Technologies Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d80.2!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Address card */}
              <div className="bg-white rounded-2xl border border-surface-200 p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-surface-900 mb-0.5">Address</p>
                    <p className="text-sm text-surface-600 leading-relaxed">
                      Nookampalayam Road, Perumbakkam,<br />
                      Chennai — 600 100,<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-surface-900 mb-0.5">Working Hours</p>
                    <p className="text-sm text-surface-600">Monday – Saturday: 8:00 AM – 8:00 PM</p>
                    <p className="text-sm text-surface-600">Sunday: By appointment</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-surface-900 mb-0.5">Phone</p>
                    <a href="tel:+919597437333" className="text-sm text-brand-700 font-semibold hover:underline">+91 95974 37333</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-surface-900 mb-0.5">Email</p>
                    <a href="mailto:info@globalmindsacademy.in" className="text-sm text-brand-700 font-semibold hover:underline">info@globalmindsacademy.in</a>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Nookampalayam+Road+Perumbakkam+Chennai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800 transition-colors mt-2"
                >
                  Get Directions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-white border border-surface-200 rounded-3xl p-8 shadow-card">
              <EnquiryForm
                title="Enquire About Classroom Training" category="course"
                subtitle="Fill in the form and our team will get back to you within 24 hours."
                compact
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-700 mb-2">What we offer</p>
            <h2 className="display-md text-surface-900">Classroom <span className="text-gradient">Facilities</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map(f => (
              <SpotlightCard key={f.title} className="h-full">
                <div className="text-center p-6 bg-white rounded-2xl border border-surface-200 hover:border-brand-300 hover:shadow-card-md transition-all h-full">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <f.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-surface-900 mb-2">{f.title}</h3>
                  <p className="text-surface-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Visit Our Chennai Training Centre"
        subtitle="Come see the labs, meet the mentors and start your learning journey in person."
        primaryLabel="Enquire Now"
        primaryHref="/contact"
        secondaryLabel="Browse Courses"
        secondaryHref="/courses"
      />
    </div>
  );
}
