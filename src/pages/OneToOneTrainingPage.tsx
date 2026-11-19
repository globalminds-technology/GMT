import { User, Clock, Target, Zap, Shield, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { EnquiryForm } from '../components/ui/EnquiryForm';
import { CTASection } from '../components/home/CTASection';
import { usePageMeta } from '../hooks/usePageMeta';
import { SpotlightCard } from '../components/ui/SpotlightCard';

const features = [
  { icon: Target,   title: 'Custom Curriculum',     desc: 'Training plan built around your skill level and career goals.' },
  { icon: Clock,    title: 'Flexible Scheduling',   desc: 'Pick any time slot — morning, evening or weekends.' },
  { icon: User,     title: 'Dedicated Mentor',      desc: 'One-on-one with an industry expert focused on your progress.' },
  { icon: Zap,      title: 'Faster Progress',       desc: 'Learn 3× faster than group classes — no waiting, no distractions.' },
  { icon: BookOpen, title: 'Interview Preparation', desc: 'Mock interviews, resume reviews and job-ready coaching included.' },
  { icon: Shield,   title: 'Certificate',           desc: 'Earn a Global Minds Technologies certificate on completion.' },
];

export default function OneToOneTrainingPage() {
  usePageMeta({
    title: 'One-to-One Training — Personalised Learning',
    description: 'Get dedicated one-to-one training at Global Minds Technologies.',
  });

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="page-hero-premium py-10">
        <div className="container-xl relative z-10">
          <Breadcrumbs items={[{ label: 'One-to-One Training' }]} className="mb-3" />
          <h1 className="text-3xl font-extrabold text-surface-900 mb-2">
            One-to-One <span className="page-hero-highlight">Training</span>
          </h1>
          <p className="text-surface-600 text-sm max-w-xl">
            Learn at your own pace with a dedicated mentor who designs every session around your goals and schedule.
          </p>
        </div>
      </div>

      {/* Features + Form side by side */}
      <section className="py-10">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left — features */}
            <div>
              <h2 className="text-lg font-bold text-surface-900 mb-5">Why One-to-One Training?</h2>
              <div className="grid grid-cols-2 gap-3">
                {features.map(f => (
                  <SpotlightCard key={f.title}>
                    <div className="p-4 rounded-xl border border-surface-200 bg-white hover:border-brand-300 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center mb-2">
                        <f.icon className="w-4 h-4 text-brand-600" />
                      </div>
                      <h3 className="font-semibold text-surface-900 text-xs mb-1">{f.title}</h3>
                      <p className="text-surface-500 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>

              <div className="mt-6 p-4 bg-surface-50 rounded-xl border border-surface-200">
                <p className="text-sm font-semibold text-surface-800 mb-3">What you get:</p>
                <ul className="space-y-2">
                  {['One mentor dedicated to you', 'Sessions at your preferred time', 'Progress tracked every week', 'Direct access to mentor on WhatsApp'].map(point => (
                    <li key={point} className="flex items-center gap-2 text-xs font-medium text-surface-700">
                      <ArrowRight className="w-3 h-3 text-brand-600 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link to="/courses" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-800">
                  Browse Courses <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
              <EnquiryForm title="Enquire About One-to-One Training" compact />
            </div>

          </div>
        </div>
      </section>

      <CTASection title="Start Your Personalised Learning Today" subtitle="One mentor. One plan. Built entirely for you." />
    </div>
  );
}
