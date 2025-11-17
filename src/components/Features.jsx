const features = [
  { title: 'Core HRIS', desc: 'Employee directory, org chart, documents, locations, job data, and lifecycle changes.' },
  { title: 'Time & PTO', desc: 'Time-off policies, approvals, accruals, holidays, and attendance tracking.' },
  { title: 'Payroll', desc: 'Gross-to-net, multi-country support, tax filings, and payslips.' },
  { title: 'Recruiting ATS', desc: 'Jobs, applications, interview plans, scorecards, and offer letters.' },
  { title: 'Onboarding', desc: 'Checklists, e-sign, provisioning, and new hire tasks.' },
  { title: 'Performance', desc: 'Reviews, 1:1s, goals/OKRs, feedback, and calibration.' },
  { title: 'Engagement', desc: 'Surveys, eNPS, pulses, and analytics.' },
  { title: 'Benefits', desc: 'Health, retirement, and perks administration with eligibility rules.' },
  { title: 'Compliance', desc: 'Policies, trainings, and audit-ready logs.' },
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Everything HR, one platform</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Modular by design—adopt what you need today and scale seamlessly as your team grows.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
