import { User, Clock, Target, Zap, Shield, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { CTASection } from '../components/home/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';
import { ShinyText } from '../components/ui/ShinyText';
import { DecryptedText } from '../components/ui/DecryptedText';
import { SpotlightCard } from '../components/ui/SpotlightCard';

const features = [
  { icon: Target,   title: 'Custom Curriculum',    desc: 'Training plan built entirely around your skill level and career goals.' },
  { icon: Clock,    title: 'Flexible Scheduling',  desc: 'Pick any time slot that suits you — morning, evening or weekends.' },
  { icon: User,     title: 'Dedicated Mentor',     desc: 'Work one-on-one with an industry expert focused solely on your progress.' },
  { icon: Zap,      title: 'Faster Progress',      desc: 'Learn 3× faster compared to group classes — no waiting, no distractions.' },
  { icon: BookOpen, title: 'Interview Preparation',desc: 'Mock interviews, resume reviews and job-ready coaching included.' },
  { icon: Shield,   title: 'Certificate',          desc: 'Earn a Global Minds Technologies certificate on successful completion.' },
];

export default function OneToOneTrainingPage() {
  usePageMeta({
    title: 'One-to-One Training — Personalised Learning',
    description: 'Get dedicated one-to-one training at Global Minds Technologies. Custom curriculum, flexible timing and personal mentor support.',
  });

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
          <p className="page-hero-desc text-lg sm:text-xl max-w-2xl">
            Learn at your own pace with a dedicated mentor who designs every session around your goals, schedule and skill level.
          </p>
        </div>
      </div>

      {/* Features */}
      <section className="section">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="display-md mb-4">Why One-to-One Training at Global Minds Technologies?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <SpotlightCard key={f.title} className="h-full">
                <div className="p-6 rounded-2xl border border-surface-200 bg-white hover:border-brand-300 hover:shadow-card-md transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center mb-4">
                      <f.icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <h3 className="font-semibold text-surface-900 mb-2">{f.title}</h3>
                    <p className="text-surface-600 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section bg-surface-50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="display-md mb-4">Your Personal Learning Plan</h2>
              <p className="text-surface-600 mb-6 font-medium leading-relaxed">
                Every learner is different. Our mentors craft a session plan built around your pace, goals and schedule — no cookie-cutter syllabus.
              </p>
              <ul className="space-y-3 mb-8">
                {['One mentor dedicated to you', 'Sessions at your preferred time', 'Progress tracked every week', 'Direct access to mentor on WhatsApp'].map(point => (
                  <li key={point} className="flex items-center gap-3 text-sm font-medium text-surface-700">
                    <ArrowRight className="w-4 h-4 text-brand-600 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/courses">
                <button className="btn-primary btn flex items-center gap-2">
                  Browse Courses <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="bg-white border border-surface-200 rounded-3xl p-8 shadow-card">
              <EnquiryForm title="Enquire About One-to-One Training" compact />
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Start Your Personalised Learning Today" subtitle="One mentor. One plan. Built entirely for you." />
    </div>
  );
}
