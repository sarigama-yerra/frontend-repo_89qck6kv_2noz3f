export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(ellipse_at_top_left,rgba(79,70,229,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.15),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              All-in-one HR platform to run people operations at scale
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Automate onboarding, payroll, PTO, recruiting, performance, and compliance in one modern workspace. Built for global teams and growing startups.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
                Start free trial
              </a>
              <a href="#modules" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-200 hover:border-gray-300">
                Explore modules
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              No credit card. 14-day free trial. SSO-ready.
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-white shadow-xl ring-1 ring-gray-100 p-4">
              <div className="h-full w-full rounded-lg bg-gradient-to-br from-indigo-50 to-sky-50 grid place-items-center text-gray-600">
                Live demo preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
