import { ArrowRight, Briefcase, Users, Building2, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { CountUp } from '../components/ui/CountUp';
import { usePageMeta } from '../hooks/usePageMeta';
import { useCmsCollection } from '../hooks/useCmsCollection';

interface PlacementRecord {
  id: string;
  title?: string;
  studentName?: string;
  course?: string;
  company?: string;
  role?: string;
  package?: string;
  location?: string;
  summary?: string;
  quote?: string;
}

const stats = [
  { icon: Users,      label: 'Students Placed',  value: 1200, suffix: '+', color: 'bg-brand-50 text-brand-700' },
  { icon: Building2,  label: 'Hiring Partners',  value: 50,   suffix: '+', color: 'bg-accent-50 text-accent-600' },
  { icon: TrendingUp, label: 'Placement Rate',   value: 95,   suffix: '%', color: 'bg-green-50 text-green-700' },
  { icon: Star,       label: 'Avg. Rating',      value: 4.9,  suffix: '★', color: 'bg-amber-50 text-amber-600' },
];

const hiringPartners = [
  'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant', 'HCL',
  'Capgemini', 'IBM', 'Amazon', 'Zoho', 'Freshworks', 'Hexaware',
];

const successStories = [
  { name: 'Priya R.',    role: 'Data Analyst',       company: 'TCS',       course: 'Data Science',          lpa: '6.5 LPA' },
  { name: 'Karthik M.',  role: 'Full Stack Dev',      company: 'Zoho',      course: 'Full Stack Development', lpa: '7.2 LPA' },
  { name: 'Sneha L.',    role: 'Cloud Engineer',      company: 'Infosys',   course: 'AWS / Cloud',            lpa: '8 LPA' },
  { name: 'Rahul S.',    role: 'QA Engineer',         company: 'Capgemini', course: 'Software Testing',       lpa: '5.8 LPA' },
  { name: 'Divya K.',    role: 'ML Engineer',         company: 'IBM',       course: 'AIML',                   lpa: '9 LPA' },
  { name: 'Arun P.',     role: 'DevOps Engineer',     company: 'HCL',       course: 'AWS / Cloud',            lpa: '7.5 LPA' },
];

export default function PlacementPage() {
  const placementRecords = useCmsCollection<PlacementRecord>('placement-records');

  usePageMeta({
    title: 'Placement Records & Career Outcomes',
    description: 'View placement records and career outcomes of Global Minds Technologies students.',
  });

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="page-hero-premium py-12">
        <div className="container-xl relative z-10">
          <Breadcrumbs items={[{ label: 'Placement Records' }]} className="mb-3" />
          <div className="page-hero-badge mb-3">Placement & Career Outcomes</div>
          <h1 className="page-hero-title mb-3">
            Our Students Work at <span className="page-hero-highlight">Top Companies</span>
          </h1>
          <p className="page-hero-desc max-w-xl text-base leading-relaxed mb-6">
            Over 1200 students placed in top IT companies. Here's the proof.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/demo-class" className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3 font-bold text-white hover:bg-teal-800 transition-colors text-sm">
              Book Free Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/courses" className="inline-flex items-center gap-2 rounded-xl border border-teal-600/30 bg-white px-6 py-3 font-bold text-teal-800 hover:bg-teal-50 transition-colors text-sm">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="border-b border-surface-100">
        <div className="container-xl py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            {stats.map(s => (
              <SpotlightCard key={s.label} className={`p-5 rounded-2xl ${s.color}`}>
                <s.icon className="w-5 h-5 mx-auto mb-2" />
                <div className="text-2xl font-black">
                  <CountUp end={s.value} start={true} suffix={s.suffix} />
                </div>
                <div className="text-xs font-bold mt-1 text-surface-800">{s.label}</div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <section className="py-10">
        <div className="container-xl">
          <h2 className="text-xl font-bold text-surface-900 text-center mb-8">Student Success Stories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {successStories.map(s => (
              <SpotlightCard key={s.name}>
                <div className="p-5 rounded-2xl border border-surface-200 bg-white hover:border-brand-300 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {s.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-surface-900 text-sm">{s.name}</p>
                      <p className="text-xs text-brand-700 font-semibold">{s.role} — {s.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-surface-500 border-t border-surface-100 pt-3">
                    <span>{s.course}</span>
                    <span className="font-bold text-green-700">{s.lpa}</span>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-10 bg-surface-50">
        <div className="container-xl">
          <h2 className="text-xl font-bold text-surface-900 text-center mb-6">Our Hiring Partners</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {hiringPartners.map(p => (
              <span key={p} className="px-4 py-2 bg-white border border-surface-200 rounded-xl text-sm font-semibold text-surface-700 shadow-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What we provide */}
      <section className="py-10">
        <div className="container-xl">
          <h2 className="text-xl font-bold text-surface-900 text-center mb-8">Our Placement Support</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: 'Resume Building',       desc: 'Professional resume crafted by our career team.' },
              { title: 'Mock Interviews',        desc: 'Panel mock interviews with real-time feedback.' },
              { title: 'Job Referrals',          desc: 'Direct referrals to 50+ hiring partner companies.' },
              { title: 'LinkedIn Profile Setup', desc: 'Optimised LinkedIn profile to attract recruiters.' },
              { title: 'Interview Coaching',     desc: 'Technical and HR interview preparation sessions.' },
              { title: 'Lifetime Support',       desc: 'Career support continues even after placement.' },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-surface-50 rounded-xl border border-surface-200">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-surface-900 text-sm">{item.title}</p>
                  <p className="text-xs text-surface-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CMS records if available */}
      {placementRecords.length > 0 && (
        <section className="py-10 bg-surface-50">
          <div className="container-xl">
            <h2 className="text-xl font-bold text-surface-900 text-center mb-8">Latest Placement Updates</h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {placementRecords.map(record => (
                <article key={record.id} className="flex flex-col rounded-2xl border border-surface-100 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Briefcase className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-bold text-surface-900 text-sm">{record.title || record.studentName || record.company || 'Placement update'}</h3>
                      {record.course && <p className="text-xs text-surface-500">{record.course}</p>}
                    </div>
                  </div>
                  {(record.role || record.company || record.location || record.package) && (
                    <dl className="grid grid-cols-2 gap-2 text-xs mb-3">
                      {record.role     && <div><dt className="text-surface-400">Role</dt><dd className="font-semibold text-surface-800">{record.role}</dd></div>}
                      {record.company  && <div><dt className="text-surface-400">Company</dt><dd className="font-semibold text-surface-800">{record.company}</dd></div>}
                      {record.location && <div><dt className="text-surface-400">Location</dt><dd className="font-semibold text-surface-800">{record.location}</dd></div>}
                      {record.package  && <div><dt className="text-surface-400">Package</dt><dd className="font-semibold text-surface-800">{record.package}</dd></div>}
                    </dl>
                  )}
                  {(record.summary || record.quote) && (
                    <p className="text-xs leading-relaxed text-surface-500 mt-auto">{record.summary || record.quote}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to Launch Your Career?"
        subtitle="Join Global Minds Technologies and get placed in your dream company."
        primaryLabel="Book Free Demo"
        primaryHref="/demo-class"
        secondaryLabel="Explore Courses"
        secondaryHref="/courses"
        variant="dark"
      />
    </div>
  );
}
