import { Briefcase, CheckCircle, Users, Star, MapPin, Phone, Mail, Target, Award, BookOpen, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ShinyText } from '../components/ui/ShinyText';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { CountUp } from '../components/ui/CountUp';
import { CTASection } from '../components/home/CTASection';
import { siteConfig } from '../data/siteConfig';
import { usePageMeta } from '../hooks/usePageMeta';

const stats = [
  { icon: Briefcase,   label: 'Hiring Partners',  value: 50,   suffix: '+', color: 'bg-accent-50 text-accent-600' },
  { icon: Users,       label: 'Students Trained', value: 5000, suffix: '+', color: 'bg-brand-50 text-brand-700' },
  { icon: CheckCircle, label: 'Placement Rate',   value: 95,   suffix: '%', color: 'bg-green-50 text-green-700' },
  { icon: Star,        label: 'Google Rating',    value: 4.9,  suffix: '★', color: 'bg-amber-50 text-amber-600' },
];

const whyUs = [
  { icon: BookOpen, title: 'Practical Training',    desc: 'Hands-on sessions with real tools, live projects and industry scenarios from day one.' },
  { icon: Target,   title: 'Career-First Approach', desc: 'Placement support, resume prep and mock interviews built into every program.' },
  { icon: Award,    title: 'Certified Courses',     desc: 'Industry-recognised certificates backed by 50+ hiring partners.' },
  { icon: Zap,      title: 'Expert Mentors',        desc: 'Learn directly from working professionals with real industry experience.' },
];

const values = [
  { title: 'Practical Learning',   desc: 'Real tools, real projects, real-world scenarios from day one.' },
  { title: 'Industry Excellence',  desc: 'Curriculum built and reviewed by working professionals.' },
  { title: 'Career First',         desc: 'Placement support built into every program.' },
  { title: 'Continuous Growth',    desc: 'Alumni get lifetime access to updated course content.' },
];

export default function AboutPage() {
  usePageMeta({
    title: 'About Us',
    description: 'Global Minds Technologies — specialized IT training with 100% placement support in Chennai and online.',
  });

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="page-hero-premium py-12">
        <div className="container-xl relative z-10">
          <Breadcrumbs items={[{ label: 'About Us' }]} className="mb-3" />
          <div className="page-hero-badge mb-3">
            <ShinyText text="Empowering IT Careers • Chennai & Global" shinyColor="rgba(23, 108, 115, 0.9)" />
          </div>
          <h1 className="page-hero-title mb-3">
            Building Skills for <span className="page-hero-highlight">Tomorrow's Leaders</span>
          </h1>
          <p className="page-hero-desc max-w-2xl text-base leading-relaxed">
            Global Minds Technologies offers industry-oriented IT training programs — practical, certification-backed and designed with 100% placement support.
          </p>
        </div>
      </div>

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

      {/* Who we are */}
      <section className="py-10">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-700 mb-2">Who We Are</p>
              <h2 className="text-2xl font-bold text-surface-900 mb-4">Designed for Real-World Growth</h2>
              <p className="text-surface-600 text-sm leading-relaxed mb-4">
                Founded in Chennai, Global Minds Technologies has helped thousands of students and professionals transition into successful IT careers. We combine industry expertise, hands-on training and dedicated placement support.
              </p>
              <p className="text-surface-600 text-sm leading-relaxed mb-6">
                Our programs cover AWS / Cloud, Data Science, Full Stack Development, AI/ML, Cyber Security, Software Testing, Digital Marketing and more — all built to meet current industry demands.
              </p>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-sm text-surface-700 font-medium">
                  <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                  Nookampalayam Road, Perumbakkam, Chennai — 600 100
                </div>
                <div className="flex items-center gap-2.5 text-sm text-surface-700 font-medium">
                  <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                  <a href="tel:+919597437333" className="hover:text-brand-700">+91 95974 37333</a>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-surface-700 font-medium">
                  <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                  <a href="mailto:info@globalmindsacademy.in" className="hover:text-brand-700">info@globalmindsacademy.in</a>
                </div>
              </div>
            </div>
            <div className="bg-surface-50 rounded-2xl border border-surface-200 p-8 text-center">
              <img src={siteConfig.logoUrl} alt="Global Minds Technologies" className="brand-logo mx-auto mb-4 h-24 w-24 object-contain" />
              <h3 className="text-xl font-black tracking-wide text-surface-900">GLOBAL MINDS TECHNOLOGIES</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-brand-700">Build Skills | Own the Future</p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                {['Live Online Classes', 'Classroom — Chennai', 'One-to-One Training', '50+ Hiring Partners', 'Industry Certificates', '100% Placement Support'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-xs text-surface-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-10 bg-surface-50">
        <div className="container-xl">
          <h2 className="text-xl font-bold text-surface-900 text-center mb-8">Why Choose Global Minds Technologies?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map(w => (
              <SpotlightCard key={w.title}>
                <div className="p-5 rounded-2xl border border-surface-200 bg-white hover:border-brand-300 transition-all">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center mb-3">
                    <w.icon className="w-4 h-4 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-surface-900 text-sm mb-1">{w.title}</h3>
                  <p className="text-surface-500 text-xs leading-relaxed">{w.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10">
        <div className="container-xl">
          <h2 className="text-xl font-bold text-surface-900 text-center mb-8">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(v => (
              <SpotlightCard key={v.title}>
                <div className="bg-white rounded-2xl p-5 border border-surface-100 text-center hover:shadow-card-md transition-shadow">
                  <CheckCircle className="w-6 h-6 text-brand-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-surface-900 text-sm mb-1">{v.title}</h3>
                  <p className="text-surface-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Courses offered */}
      <section className="py-10 bg-surface-50">
        <div className="container-xl">
          <h2 className="text-xl font-bold text-surface-900 text-center mb-6">Courses We Offer</h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-6">
            {['AWS / Cloud', 'Data Science', 'Data Analytics', 'Python', 'Gen AI / Agent AI', 'AIML', 'Full Stack Development', 'Cyber Security', 'Software Testing', 'AI Automation Testing', 'Digital Marketing', 'DevOps'].map(course => (
              <span key={course} className="px-3 py-1.5 bg-white border border-surface-200 rounded-full text-xs font-semibold text-surface-700 hover:border-brand-400 hover:text-brand-700 transition-colors">
                {course}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800">
              View all courses →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your IT Career Today"
        subtitle="Join thousands of students who built their careers with Global Minds Technologies."
        primaryLabel="Book Free Demo Class"
        primaryHref="/demo-class"
        secondaryLabel="View All Courses"
        secondaryHref="/courses"
      />
    </div>
  );
}
