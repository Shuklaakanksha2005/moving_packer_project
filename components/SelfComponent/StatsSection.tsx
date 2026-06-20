
export default function StatsSection() {
  const stats = [
    {
      value: "10,000+",
      label: "Happy Customers",
      color: "text-yellow-400",
    },
    {
      value: "5,000+",
      label: "Moves Completed",
      color: "text-white",
    },
    {
      value: "50+",
      label: "Cities Covered",
      color: "text-yellow-400",
    },
    {
      value: "98%",
      label: "Customer Satisfaction",
      color: "text-white",
    },
  ];

  return (
    <section className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <h2
                className={`text-5xl lg:text-7xl font-bold ${stat.color}`}
              >
                {stat.value}
              </h2>

              <p className="mt-4 text-slate-400 text-lg">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}