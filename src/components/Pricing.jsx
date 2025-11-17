export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Simple, scalable pricing</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Transparent per-employee pricing with volume discounts. Cancel anytime.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{name:'Starter', price:'$4', desc:'Core HR, PTO, basic workflows'}, {name:'Growth', price:'$8', desc:'Adds recruiting, onboarding, performance'}, {name:'Scale', price:'Custom', desc:'Advanced features, SSO, dedicated support'}].map(p => (
            <div key={p.name} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900">{p.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-gray-900">{p.price}</span>
                <span className="text-gray-500">/employee/mo</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.desc}</p>
              <a href="#" className="mt-6 inline-flex px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Choose plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
