type ServiceOverviewProps = {
  overview: string;
};

export default function ServiceOverview({
  overview,
}: ServiceOverviewProps) {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl">

          <span className="text-yellow-500 font-semibold uppercase tracking-wider">
            About The Service
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6">
            Professional Home Relocation Made Easy
          </h2>

          <p className="text-slate-600 leading-8 text-lg">
            {overview}
          </p>

        </div>

      </div>

    </section>
  );
}