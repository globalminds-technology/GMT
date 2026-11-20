import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Building2, Users, Target, Clock, Award, CheckCircle, Loader2, Send, Briefcase } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTASection } from '../components/home/CTASection';
import { enquiryService } from '../services/enquiryService';
import { cn } from '../utils/cn';
import { ShinyText } from '../components/ui/ShinyText';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { usePageMeta } from '../hooks/usePageMeta';

const schema = z.object({
  companyName: z.string().min(2, 'Company name required'),
  contactName: z.string().min(2, 'Contact name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(7, 'Valid phone required'),
  country: z.string().min(1, 'Country required'),
  teamSize: z.string().min(1, 'Team size required'),
  trainingMode: z.string().min(1, 'Training mode required'),
  timeline: z.string().optional(),
  message: z.string().optional(),
  technologies: z.array(z.string()).optional(),
});

type FormData = z.infer<typeof schema>;

const techOptions = ['AWS', 'Azure', 'GCP', 'DevOps', 'Kubernetes', 'Docker', 'AI/ML', 'Data Science', 'Python', 'Full Stack', 'Software Testing', 'Cyber Security', 'Power BI', 'Other'];

const benefits = [
  { icon: Target,   title: 'Custom Curriculum',    desc: 'Built around your team\'s tech stack and goals.' },
  { icon: Clock,    title: 'Flexible Scheduling',  desc: 'Training around your team\'s working hours.' },
  { icon: Award,    title: 'Certification Support',desc: 'Guidance for vendor certification exams.' },
  { icon: Building2,title: 'On-site or Online',    desc: 'At your premises or online globally.' },
  { icon: CheckCircle, title: 'Progress Reporting',desc: 'Detailed progress reports and skill assessments.' },
  { icon: Users,    title: 'Group or 1-on-1',      desc: 'Batch training or individual mentoring sessions.' },
];

export default function CorporateTrainingPage() {
  usePageMeta({ title: 'Corporate Training', description: 'Enterprise-grade technology training for your teams.' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError('');
    const result = await enquiryService.submitCorporateEnquiry({
      ...data,
      timeline: data.timeline ?? '',
      message: data.message ?? '',
      technologies: data.technologies ?? [],
    });
    if (result.success) { setSuccess(true); reset(); }
    else setError(result.message);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="page-hero-premium py-10">
        <div className="container-xl relative z-10">
          <Breadcrumbs items={[{ label: 'Corporate Training' }]} className="mb-3" />
          <div className="page-hero-badge mb-3">
            <Briefcase className="w-4 h-4 text-teal-600" />
            <ShinyText text="Enterprise Upskilling Solutions" shinyColor="rgba(23, 108, 115, 0.9)" />
          </div>
          <h1 className="page-hero-title text-3xl font-extrabold mb-2">
            Corporate <span className="page-hero-highlight">Training</span>
          </h1>
          <p className="page-hero-desc text-base max-w-xl">
            Customised technology training for your teams — cloud, DevOps, AI, data science and software development.
          </p>
        </div>
      </div>

      {/* Benefits + Form */}
      <section className="py-10 bg-surface-50" id="corporate-enquiry">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left — benefits */}
            <div>
              <h2 className="text-lg font-bold text-surface-900 mb-5">Why Global Minds Technologies?</h2>
              <div className="grid grid-cols-2 gap-3 mb-0">
                {benefits.map(b => (
                  <SpotlightCard key={b.title}>
                    <div className="p-4 rounded-xl border border-surface-200 bg-white hover:border-brand-300 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center mb-2">
                        <b.icon className="w-4 h-4 text-brand-600" />
                      </div>
                      <h3 className="font-semibold text-surface-900 text-xs mb-1">{b.title}</h3>
                      <p className="text-surface-500 text-xs leading-relaxed">{b.desc}</p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-surface-900 mb-1">Request Corporate Training</h2>
              <p className="text-surface-500 text-xs mb-4">Our team will respond within 1 business day.</p>

              {success ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-surface-900 mb-1">Enquiry Received!</h3>
                  <p className="text-surface-600 text-sm">Our corporate training team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                  {error && <p role="alert" className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="form-label">Company Name *</label>
                      <input type="text" placeholder="Your company" className={cn('form-input', errors.companyName && 'border-red-400')} {...register('companyName')} />
                      {errors.companyName && <p className="form-error">{errors.companyName.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Contact Person *</label>
                      <input type="text" placeholder="Your name" className={cn('form-input', errors.contactName && 'border-red-400')} {...register('contactName')} />
                      {errors.contactName && <p className="form-error">{errors.contactName.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="form-label">Work Email *</label>
                      <input type="email" placeholder="you@company.com" className={cn('form-input', errors.email && 'border-red-400')} {...register('email')} />
                      {errors.email && <p className="form-error">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Phone *</label>
                      <input type="tel" placeholder="+91 99999 00000" className={cn('form-input', errors.phone && 'border-red-400')} {...register('phone')} />
                      {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="form-label">Country *</label>
                      <input type="text" placeholder="India / USA / UAE" className={cn('form-input', errors.country && 'border-red-400')} {...register('country')} />
                      {errors.country && <p className="form-error">{errors.country.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Team Size *</label>
                      <select className={cn('form-select', errors.teamSize && 'border-red-400')} {...register('teamSize')}>
                        <option value="">Select size</option>
                        <option value="5-10">5–10</option>
                        <option value="11-25">11–25</option>
                        <option value="26-50">26–50</option>
                        <option value="51-100">51–100</option>
                        <option value="100+">100+</option>
                      </select>
                      {errors.teamSize && <p className="form-error">{errors.teamSize.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Training Mode *</label>
                    <select className={cn('form-select', errors.trainingMode && 'border-red-400')} {...register('trainingMode')}>
                      <option value="">Select mode</option>
                      <option value="Online">Online</option>
                      <option value="On-site">On-site at our premises</option>
                      <option value="At Training Centre">At Global Minds Technologies centre</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                    {errors.trainingMode && <p className="form-error">{errors.trainingMode.message}</p>}
                  </div>

                  <div>
                    <label className="form-label">Technologies / Topics</label>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      {techOptions.map(tech => (
                        <label key={tech} className="flex items-center gap-1.5 cursor-pointer">
                          <input type="checkbox" value={tech} className="w-3 h-3 text-brand-600 rounded border-surface-300" {...register('technologies')} />
                          <span className="text-xs text-surface-700">{tech}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Message / Requirements</label>
                    <textarea rows={2} placeholder="Describe your training needs..." className="form-input resize-none" {...register('message')} />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn-primary btn w-full text-sm">
                    {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Submit Enquiry</>}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <CTASection
        title="Upskill Your Entire Team"
        subtitle="Customised corporate training for cloud, DevOps, AI, data and software development."
        primaryLabel="Request Training"
        primaryHref="#corporate-enquiry"
        secondaryLabel="View All Courses"
        secondaryHref="/courses"
      />
    </div>
  );
}
