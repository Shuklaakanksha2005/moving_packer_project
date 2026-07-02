import {
  ClipboardList,
  Package,
  Truck,
  CheckCircle,
} from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      step: "Step 01",
      title: "Request a Quote",
      description:
        "Fill in your moving details and get a clear, competitive quote within minutes — no hidden charges.",
      icon: ClipboardList,
      active: true,
    },
    {
      step: "Step 02",
      title: "Packing & Pickup",
      description:
        "Our verified team arrives on schedule, packs everything with care, and loads it securely.",
      icon: Package,
      active: false,
    },
    {
      step: "Step 03",
      title: "Safe Transportation",
      description:
        "Your belongings travel in GPS-tracked, insured vehicles with real-time status updates.",
      icon: Truck,
      active: false,
    },
    {
      step: "Step 04",
      title: "Delivery & Setup",
      description:
        "We unload, unpack, and help arrange your new space exactly how you want it.",
      icon: CheckCircle,
      active: false,
    },
  ];

  return (
    <section className="bg-slate-100 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}

        <div className="text-center mb-6">
          <span className="bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
            How It Works
          </span>
        </div>

        {/* Heading */}

        <div className="text-center mb-24">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Your Move in 4 Simple Steps
          </h1>

          <p className="text-slate-500 text-xl max-w-3xl mx-auto">
            We've simplified the moving process so you can sit back and
            focus on your new beginning.
          </p>
        </div>

        {/* Steps */}

        <div className="relative">

          {/* Connecting Line */}

          <div className="hidden lg:block absolute top-16 left-0 w-full h-[2px] bg-yellow-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">

            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="text-center"
                >
                  {/* Circle */}

                  <div
                    className={`
                    w-36 h-36 rounded-full mx-auto flex flex-col items-center justify-center border-2 mb-8
                    ${
                      item.active
                        ? "bg-slate-950 border-yellow-400 text-yellow-400"
                        : "bg-white border-slate-200 text-slate-900"
                    }
                  `}
                  >
                    <Icon size={36} />

                    <span
                      className={`mt-2 font-semibold ${
                        item.active
                          ? "text-yellow-400"
                          : "text-slate-400"
                      }`}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}

                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 leading-8">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}