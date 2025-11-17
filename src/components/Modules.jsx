const modules = [
  { name: 'HRIS', items: ['Directory', 'Org chart', 'Docs', 'Job data', 'Locations'] },
  { name: 'Recruiting', items: ['ATS', 'Job board', 'Referrals', 'Interview kits'] },
  { name: 'Onboarding', items: ['Tasks', 'E-sign', 'Provisioning', 'Templates'] },
  { name: 'Time', items: ['PTO', 'Attendance', 'Timesheets', 'Overtime'] },
  { name: 'Payroll', items: ['Gross-to-net', 'Taxes', 'Payslips', 'Integrations'] },
  { name: 'Performance', items: ['Reviews', 'Goals/OKRs', '1:1s', 'Feedback'] },
  { name: 'Engagement', items: ['Surveys', 'eNPS', 'Pulses', 'Analytics'] },
  { name: 'Benefits', items: ['Health', 'Retirement', 'Perks', 'Eligibility'] },
  { name: 'Compliance', items: ['Policies', 'Training', 'Audits', 'ISO/SOC'] },
]

export default function Modules() {
  return (
    <section id="modules" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Modular suite</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Pick-and-choose modules. Everything integrates automatically with your people data.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div key={m.name} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900">{m.name}</h3>
              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                {m.items.map(i => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
