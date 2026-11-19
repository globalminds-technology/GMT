import { useState, useRef } from 'react';
import { User, Clock, Calendar, Star, CheckCircle, ArrowRight, Loader2, BookOpen, Target, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';
import { ShinyText } from '../components/ui/ShinyText';
import { DecryptedText } from '../components/ui/DecryptedText';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { enquiryService } from '../services/enquiryService';

const benefits = [
  { icon: Target, title: 'Custom Curriculum', desc: 'Training plan built entirely around your current skill level and career goals.' },
  { icon: Clock, title: 'Flexible Scheduling', desc: 'Pick any time slot that suits you — morning, evening or weekends.' },
  { icon: User, title: 'Dedicated Mentor', desc: 'Work one-on-one with an industry expert who focuses solely on your progress.' },
  { icon: Zap, title: 'Faster Progress', desc: 'Learn 3× faster compared to group classes — no waiting, no distractions.' },
  { icon: BookOpen, title: 'Interview Preparation', desc: 'Mock interviews, resume reviews and job-ready coaching included.' },
  { icon: Shield, title: 'Certificate on Completion', desc: 'Earn a Global Minds Technologies certificate recognised by 50+ hiring partners.' },
];

const steps = [
  { step: '01', title: 'Fill the Application', desc: 'Share your background, goals and preferred schedule in the form below.' },
  { step: '02', title: 'Free Consultation Call', desc: 'A counsellor will call you within 24 hours to understand your needs.' },
  { step: '03', title: 'Custom Plan Created', desc: 'Your mentor designs a personalised syllabus and timetable just for you.' },
  { step: '04', title: 'Start Learning', desc: 'Begin your one-to-one sessions and track your progress every week.' },
];

const courses = [
  'Data Science', 'Data Analytics', 'Python', 'Gen AI / Agent AI', 'AIML',
  'AWS / Cloud', 'Full Stack Development', 'Cyber Security', 'Software Testing',
  'AI Automation Testing', 'Digital Marketing', 'DevOps', 'Other',
];

const testimonials = [
  { name: 'Priya R.', role: 'Data Analyst at TCS', text: 'The one-to-one sessions helped me crack my first data analytics role in just 3 months. My mentor was incredibly patient and tailored every class to my weak areas.' },
  { name: 'Karthik M.', role: 'Full Stack Developer', text: 'I had tried group classes before but never got enough attention. With personal training at Global Minds, my progress was night and day.' },
  { name: 'Sneha L.', role: 'Cloud Engineer at Infosys', text: 'Flexible timing was a lifesaver for me as a working professional. I completed my AWS training without disturbing my job schedule.' },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  experience: string;
  preferredTime: string;
  goals: string;
}

export default function OneToOneTrainingPage() {
  usePageMeta({
    title: 'One-to-One Training — Personalised Learning',
    description: 'Get dedicated one-to-one training at Global Minds Technologies. Custom curriculum, flexible timing and personal mentor support.',
  });

  const formRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', course: '', experience: '', preferredTime: '', goals: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.course) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      await enquiryService.submit({
        fullName: form.name,
        email: form.email,
        phone: form.phone,
        country: 'India',
        course: form.course,
        mode: 'One-to-One',
        message: `Experience: ${form.experience}. Preferred time: ${form.preferredTime}. Goals: ${form.goals}`,
        consent: true,
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="page-hero-premium py-16">
        <div className="container-xl relative z-10">
          <Breadcrumbs items={[{ label: 'One-to-One Training' }]} className="mb-4" />
          <div className="page-hero-badge mb-4">
            <User className="w-4 h-4 text-teal-600" />
            <ShinyText text="Personalised Learning Experience" shinyColor="rgba(23, 108, 115, 0.9)" />
          </div>
          <h1 className="page-hero-title display-lg font-extrabold mb-4">
            One-to-One{' '}
            <DecryptedText text="Training" speed={30} maxIterations={10} className="page-hero-highlight" />
          </h1>
          <p className="page-hero-desc text-lg sm:text-xl max-w-2xl mb-8">
            Learn at your own pace with a dedicated mentor who designs every session around your goals, schedule and skill level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={scrollToForm} className="btn-primary btn flex items-center gap-2 w-fit">
              Apply for One-to-One Training <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/courses" className="btn btn-secondary flex items-center gap-2 w-fit">
              Browse Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="section">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-700 mb-2">Why choose personal training</p>
            <h2 className="display-md text-surface-900">Everything Focused on <span className="text-gradient">You</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <SpotlightCard key={b.title} className="h-full">
                <div className="p-6 rounded-2xl border border-surface-200 bg-white hover:border-brand-300 hover:shadow-card-md transition-all h-full">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center mb-4">
                    <b.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-surface-900 mb-2">{b.title}</h3>
                  <p className="text-surface-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-surface-50">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-700 mb-2">Simple process</p>
            <h2 className="display-md text-surface-900">How It <span className="text-gradient">Works</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-surface-200 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-brand-700 text-white flex items-center justify-center font-extrabold text-lg mb-4">
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-0.5 bg-brand-200 -translate-x-3" />
                )}
                <h3 className="font-bold text-surface-900 mb-2">{s.title}</h3>
                <p className="text-sm text-surface-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-700 mb-2">Student success stories</p>
            <h2 className="display-md text-surface-900">What Our Students <span className="text-gradient">Say</span></h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <SpotlightCard key={t.name} className="h-full">
                <div className="p-6 rounded-2xl border border-surface-200 bg-white h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-surface-700 text-sm leading-relaxed mb-4 flex-1">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-surface-900 text-sm">{t.name}</p>
                    <p className="text-xs text-brand-700 font-medium">{t.role}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section bg-surface-50" ref={formRef} id="apply">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-700 mb-2">Get started today</p>
              <h2 className="display-md text-surface-900">Apply for <span className="text-gradient">One-to-One Training</span></h2>
              <p className="mt-3 text-surface-600 leading-relaxed">Fill in the form below and our team will reach out within 24 hours to set up your personalised plan.</p>
            </div>

            {submitted ? (
              <div className="bg-white rounded-3xl border border-green-200 p-10 text-center shadow-card">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-surface-900 mb-2">Application Submitted!</h3>
                <p className="text-surface-600 mb-6">Thank you, <strong>{form.name}</strong>! Our team will contact you at <strong>{form.phone}</strong> within 24 hours.</p>
                <Link to="/courses" className="btn-primary btn inline-flex items-center gap-2">
                  Browse Courses <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-surface-200 p-8 shadow-card space-y-5">

                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-surface-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input
                      name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm text-surface-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-surface-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      name="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="+91 99999 00000"
                      className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm text-surface-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-surface-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm text-surface-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>

                {/* Course */}
                <div>
                  <label className="block text-sm font-semibold text-surface-700 mb-1.5">Course Interested In <span className="text-red-500">*</span></label>
                  <select
                    name="course" value={form.course} onChange={handleChange}
                    className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm text-surface-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 bg-white"
                  >
                    <option value="">Select a course</option>
                    {courses.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Experience + Preferred Time */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-surface-700 mb-1.5">Your Experience Level</label>
                    <select
                      name="experience" value={form.experience} onChange={handleChange}
                      className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm text-surface-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 bg-white"
                    >
                      <option value="">Select level</option>
                      <option value="Beginner">Beginner — no prior knowledge</option>
                      <option value="Intermediate">Intermediate — some basics</option>
                      <option value="Advanced">Advanced — want to upskill</option>
                      <option value="Working Professional">Working Professional</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-surface-700 mb-1.5">Preferred Session Time</label>
                    <select
                      name="preferredTime" value={form.preferredTime} onChange={handleChange}
                      className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm text-surface-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 bg-white"
                    >
                      <option value="">Select time</option>
                      <option value="Morning (6am–10am)">Morning (6am–10am)</option>
                      <option value="Daytime (10am–4pm)">Daytime (10am–4pm)</option>
                      <option value="Evening (4pm–8pm)">Evening (4pm–8pm)</option>
                      <option value="Night (8pm–11pm)">Night (8pm–11pm)</option>
                      <option value="Weekends only">Weekends only</option>
                    </select>
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <label className="block text-sm font-semibold text-surface-700 mb-1.5">Your Learning Goals</label>
                  <textarea
                    name="goals" value={form.goals} onChange={handleChange}
                    rows={3}
                    placeholder="Tell us what you want to achieve — e.g. get a job, switch career, upskill for a promotion..."
                    className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm text-surface-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                )}

                <button
                  type="submit" disabled={submitting}
                  className="w-full rounded-xl bg-brand-700 py-3 text-sm font-bold text-white hover:bg-brand-800 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <>Apply Now <ArrowRight className="w-4 h-4" /></>}
                </button>

                <p className="text-center text-xs text-surface-500">By submitting you agree to our Privacy Policy. We won't spam you.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection title="Ready for Personalised Learning?" subtitle="One mentor. One plan. Built entirely for you." />
    </div>
  );
}
