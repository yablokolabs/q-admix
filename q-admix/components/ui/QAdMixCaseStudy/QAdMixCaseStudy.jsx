import GradientWrapper from "@/components/GradientWrapper";
import LayoutEffect from "@/components/LayoutEffect";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Button from "../Button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const QAdMixCaseStudy = () => {
  const [budget, setBudget] = useState(100000);
  const [channels, setChannels] = useState(4);
  const [audience, setAudience] = useState(50);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const runSimulation = () => {
    setIsLoading(true);

    // Simulate processing time
    setTimeout(() => {
      // Calculate realistic metrics based on inputs
      const baseROAS = (budget / 10000) * (channels * 0.6) + (audience / 20);
      const classical_roas = baseROAS * (0.8 + Math.random() * 0.2); // 80-100% of base

      // Quantum improvement: 15-25% better ROAS
      const improvement = Math.floor(Math.random() * 11) + 15;
      const quantum_roas = classical_roas * (1 + improvement / 100);

      // Calculate waste reduction
      const classical_waste_percent = 35 + Math.random() * 10; // 35-45% waste
      const quantum_waste_percent = classical_waste_percent * (1 - improvement / 100);

      const wasted_spend = Math.round(budget * (classical_waste_percent / 100));
      const reduced_waste = Math.round(budget * (quantum_waste_percent / 100));
      const savings = wasted_spend - reduced_waste;

      setResult({
        classical: classical_roas.toFixed(1),
        quantum: quantum_roas.toFixed(1),
        improvement,
        wasted_spend,
        reduced_waste,
        savings,
        classical_waste_percent: classical_waste_percent.toFixed(1),
        quantum_waste_percent: quantum_waste_percent.toFixed(1),
      });
      setIsLoading(false);
    }, 1500);
  };

  const chartData = result
    ? {
      labels: ["Classical Planning", "Q-AdMix™ Quantum Planning"],
      datasets: [
        {
          label: "ROAS (Return on Ad Spend)",
          data: [result.classical, result.quantum],
          backgroundColor: [
            "rgba(248, 113, 113, 0.8)", // red-400
            "rgba(52, 211, 153, 0.8)", // green-400
          ],
          borderColor: [
            "rgba(248, 113, 113, 1)",
            "rgba(52, 211, 153, 1)",
          ],
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    }
    : null;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "ROAS Comparison",
        font: {
          size: isMobile ? 14 : 16,
          weight: "bold",
        },
        padding: {
          bottom: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(156, 163, 175, 0.2)",
        },
        ticks: {
          font: { size: isMobile ? 10 : 12 },
          callback: function(value) {
            return value + "x";
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: isMobile ? 10 : 12 },
          maxRotation: isMobile ? 45 : 0,
          minRotation: 0,
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-blue-50/30 to-white"></div>
      <div className="relative">
        <div className="custom-screen">
          <LayoutEffect
            className="duration-1000 delay-300"
            isInviewState={{
              trueState: "opacity-1 translate-y-0",
              falseState: "opacity-0 translate-y-6",
            }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-5 max-w-4xl mx-auto mb-16">
                <h2 className="text-4xl font-extrabold mx-auto sm:text-5xl lg:text-6xl text-gray-800">
                  📢 Case Study: Smarter Ad Spend with Q-AdMix™
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  Marketers waste up to 40% of digital ad spend on poor targeting and overlapping audiences. Q-AdMix™
                  uses Hybrid Quantum + AI optimization to reduce waste and maximize ROAS across channels.
                </p>
              </div>

              <GradientWrapper className="w-full" wrapperClassName="max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="p-6 sm:p-8 lg:p-12">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
                      🚀 Try an Interactive Simulation
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Ad Budget (USD)
                        </label>
                        <input
                          type="number"
                          min="10000"
                          max="1000000"
                          step="10000"
                          value={budget}
                          onChange={(e) => setBudget(Number(e.target.value))}
                          className="w-full border-2 border-gray-200 rounded-xl p-3 text-base sm:text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                          placeholder="100000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Ad Channels
                        </label>
                        <input
                          type="number"
                          min="2"
                          max="8"
                          value={channels}
                          onChange={(e) => setChannels(Number(e.target.value))}
                          className="w-full border-2 border-gray-200 rounded-xl p-3 text-base sm:text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                          placeholder="4"
                        />
                        <p className="text-xs text-gray-500">Google, Meta, YouTube, LinkedIn, etc.</p>
                      </div>
                      <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                        <label className="block text-sm font-semibold text-gray-700">
                          Target Audience (K)
                        </label>
                        <input
                          type="number"
                          min="10"
                          max="500"
                          value={audience}
                          onChange={(e) => setAudience(Number(e.target.value))}
                          className="w-full border-2 border-gray-200 rounded-xl p-3 text-base sm:text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                          placeholder="50"
                        />
                        <p className="text-xs text-gray-500">Thousands of potential customers</p>
                      </div>
                    </div>

                    <div className="flex justify-center mb-8">
                      <Button
                        onClick={runSimulation}
                        disabled={isLoading}
                        className={`px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                          isLoading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
                        }`}
                      >
                        {isLoading
                          ? (
                            <div className="flex items-center space-x-2">
                              <div className="animate-spin h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent rounded-full">
                              </div>
                              <span className="text-sm sm:text-base">Processing...</span>
                            </div>
                          )
                          : <span className="text-sm sm:text-base">🔬 Run Quantum Simulation</span>}
                      </Button>
                    </div>

                    {result && (
                      <div className="space-y-6 sm:space-y-8 animate-fadeIn">
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-4 sm:p-6 border-2 border-green-200">
                          <div className="relative w-full" style={{ height: "clamp(250px, 50vw, 400px)" }}>
                            <Bar data={chartData} options={chartOptions} />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 sm:p-6 border border-green-200">
                            <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                              +{result.improvement}%
                            </div>
                            <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">ROAS Improvement</div>
                            <div className="text-xs text-gray-500">
                              {result.classical}x → {result.quantum}x
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 sm:p-6 border border-blue-200">
                            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                              ${result.savings.toLocaleString()}
                            </div>
                            <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">Money Saved</div>
                            <div className="text-xs text-gray-500">
                              Reduced wasted spend
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 sm:p-6 border border-purple-200">
                            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">
                              -{(parseFloat(result.classical_waste_percent) - parseFloat(result.quantum_waste_percent))
                                .toFixed(1)}%
                            </div>
                            <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-1">Waste Reduction</div>
                            <div className="text-xs text-gray-500">
                              {result.classical_waste_percent}% → {result.quantum_waste_percent}%
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-4 sm:p-6 text-white text-center">
                          <h4 className="text-lg sm:text-xl font-bold mb-2">
                            ✅ Q-AdMix™ Quantum Advantage
                          </h4>
                          <p className="text-base sm:text-lg">
                            <strong>{result.improvement}% higher ROAS</strong> with waste reduced from{" "}
                            <strong>${result.wasted_spend.toLocaleString()}</strong> to{" "}
                            <strong>${result.reduced_waste.toLocaleString()}</strong>
                          </p>
                          <p className="text-sm mt-2 opacity-90">
                            Saving <strong>${result.savings.toLocaleString()}</strong> in your next campaign
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </GradientWrapper>

              <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
                <LayoutEffect
                  className="duration-1000 delay-500"
                  isInviewState={{
                    trueState: "opacity-1 translate-y-0",
                    falseState: "opacity-0 translate-y-6",
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl sm:text-4xl mb-4">📈</div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Maximized ROAS</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Every dollar of ad spend goes further with quantum-optimized targeting and budget allocation.
                    </p>
                  </div>
                </LayoutEffect>
                <LayoutEffect
                  className="duration-1000 delay-700"
                  isInviewState={{
                    trueState: "opacity-1 translate-y-0",
                    falseState: "opacity-0 translate-y-6",
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl sm:text-4xl mb-4">🎯</div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Reduced Waste</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Stop spending on overlapping audiences across channels with intelligent de-duplication.
                    </p>
                  </div>
                </LayoutEffect>
                <LayoutEffect
                  className="duration-1000 delay-900"
                  isInviewState={{
                    trueState: "opacity-1 translate-y-0",
                    falseState: "opacity-0 translate-y-6",
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                    <div className="text-3xl sm:text-4xl mb-4">🧠</div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Smarter Mix</h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Finds the optimal allocation across Google, Meta, YouTube, LinkedIn, and emerging platforms.
                    </p>
                  </div>
                </LayoutEffect>
              </div>
            </div>
          </LayoutEffect>
        </div>
      </div>
    </section>
  );
};

export default QAdMixCaseStudy;
