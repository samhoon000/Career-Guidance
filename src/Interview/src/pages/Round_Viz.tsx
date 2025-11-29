import { Link } from 'react-router-dom';
import { MCQGroup } from '../components/MCQGroup';
import { CompletionButton } from '../components/CompletionButton';

export default function Round_Viz() {
  const mcqs = [
    {
      question: 'You want to show how website traffic changed over the last 12 weeks. Which chart is most appropriate?',
      options: [
        { label: 'A) Line chart by week', value: 'A', isCorrect: true },
        { label: 'B) Pie chart of total traffic by week', value: 'B' },
        { label: 'C) Scatterplot of week vs. traffic', value: 'C' },
      ],
    },
    {
      question: 'You need to compare average order value across 6 product categories. Which visualization works best?',
      options: [
        { label: 'A) Vertical bar chart with one bar per category', value: 'A', isCorrect: true },
        { label: 'B) Line chart with one point per category (alphabetical)', value: 'B' },
        { label: 'C) Pie chart with one slice per user', value: 'C' },
      ],
    },
    {
      question: 'You want to check if higher traffic days usually lead to more purchases. Which chart should you use?',
      options: [
        { label: 'A) Scatterplot with visitors on x‑axis and purchases on y‑axis', value: 'A', isCorrect: true },
        { label: 'B) Stacked bar chart of visitors and purchases by month', value: 'B' },
        { label: 'C) Donut chart of visitors by device type', value: 'C' },
      ],
    },
    {
      question: 'Which option BEST represents a distribution of delivery times (in days) for 5,000 orders?',
      options: [
        { label: 'A) Histogram with delivery time buckets on the x‑axis', value: 'A', isCorrect: true },
        { label: 'B) Pie chart with one slice per delivery time', value: 'B' },
        { label: 'C) Line chart with delivery time sorted randomly', value: 'C' },
      ],
    },
    {
      question:
        'A line chart of daily revenue is mostly flat between $45k–$55k, but one day suddenly drops to $10k. How should you describe this?',
      options: [
        {
          label: 'A) “There is a clear one‑day anomaly that we should investigate for outages or data issues.”',
          value: 'A',
          isCorrect: true,
        },
        {
          label: 'B) “The whole trend is meaningless; we should ignore the chart.”',
          value: 'B',
        },
        {
          label: 'C) “This proves our new campaign completely failed.”',
          value: 'C',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-pastel py-12 px-4 sm:px-6 lg:px-8 text-lg leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/interview"
          className="inline-flex items-center gap-2 text-lg px-5 py-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors mb-6 font-medium"
        >
          ← Back to Home
        </Link>

        <div className="bg-white rounded-card shadow-sm p-10 sm:p-12 mb-6">
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6">
              ROUND 4 — Data Visualization &amp; Insights
            </h1>
            <p className="text-text/80 leading-relaxed text-lg mb-4">
              This round evaluates how you select the right chart for a question, interpret trends and
              patterns, and communicate what you see in a clear, business‑friendly way. Rather than
              building dashboards live, you will be given charts or tables and asked to explain what
              they mean.
            </p>
            <p className="text-text/80 leading-relaxed text-lg">
              Interviewers are looking for your ability to spot trends, seasonality, and anomalies,
              connect changes in the data to possible real‑world causes, and tell a coherent story that
              non‑technical stakeholders can understand.
            </p>
          </header>

          {/* 2. Visual concepts */}
          <section className="mb-12" aria-labelledby="visual-concepts-heading">
            <h2
              id="visual-concepts-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Core visual concepts &amp; example charts
            </h2>

            {/* Trend analysis */}
            <article className="mb-10">
              <h3 className="text-2xl font-semibold text-text mb-3">Trend analysis — line charts</h3>
              <p className="text-text/80 mb-4">
                Use line charts when you want to show how a metric changes over time (days, weeks,
                months). Good candidates describe the overall direction (up, down, flat), any clear
                spikes or drops, and whether there is a repeating seasonal pattern.
              </p>
              <div className="bg-white rounded-card shadow-sm p-6 sm:p-8 flex flex-col items-center">
                <div className="w-full max-w-md">
                  <svg
                    viewBox="0 0 320 160"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Line chart of daily sales over a week with a peak on Saturday"
                  >
                    <defs>
                      <linearGradient id="trendLineGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <rect x="0" y="0" width="320" height="160" rx="12" fill="#f8fafc" />
                    {/* baseline */}
                    <line x1="32" y1="130" x2="304" y2="130" stroke="#e5e7eb" strokeWidth="2" />
                    {/* area under line */}
                    <path
                      d="M32 112 L74 106 L116 96 L158 84 L200 70 L242 90 L284 78 L284 130 L32 130 Z"
                      fill="url(#trendLineGradient)"
                    />
                    {/* main line */}
                    <polyline
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      strokeLinecap="round"
                      points="32,112 74,106 116,96 158,84 200,70 242,90 284,78"
                    />
                    {/* points */}
                    {[112, 106, 96, 84, 70, 90, 78].map((y, index) => {
                      const x = 32 + index * 42;
                      const isPeak = index === 4;
                      return (
                        <circle
                          key={index}
                          cx={x}
                          cy={y}
                          r={isPeak ? 5 : 4}
                          fill={isPeak ? '#f97316' : '#3b82f6'}
                          stroke="#ffffff"
                          strokeWidth="2"
                        />
                      );
                    })}
                    {/* day labels */}
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((label, index) => {
                      const x = 32 + index * 42;
                      return (
                        <text
                          key={label}
                          x={x}
                          y={146}
                          textAnchor="middle"
                          fontSize="10"
                          fill="#6b7280"
                        >
                          {label}
                        </text>
                      );
                    })}
                    <text x="32" y="24" fontSize="12" fontWeight="600" fill="#0f172a">
                      Daily sales (k$)
                    </text>
                  </svg>
                </div>
                <p className="mt-4 text-text/70 text-base text-center">
                  <span className="font-semibold">Visual insight:</span> Sales rise steadily from Monday
                  through Friday, peak on Saturday (highlighted point), then ease slightly on Sunday — a
                  clear weekly seasonality pattern.
                </p>
              </div>
              <p className="mt-3 text-text/70 text-base">
                In an interview, you might say: “Sales gradually increase from Monday to Friday, peak
                on Saturday, then dip on Sunday — a weekly seasonality pattern typical for retail.”
              </p>
            </article>

            {/* Comparison */}
            <article className="mb-10">
              <h3 className="text-2xl font-semibold text-text mb-3">Comparison — bar charts</h3>
              <p className="text-text/80 mb-4">
                Bar charts are ideal when you want to compare values across discrete categories (for
                example, regions, channels, or product types). Focus on the rank order, big gaps
                between bars, and any category that over‑ or under‑performs expectations.
              </p>
              <div className="bg-white rounded-card shadow-sm p-6 sm:p-8 flex flex-col items-center">
                <div className="w-full max-w-md">
                  <svg
                    viewBox="0 0 320 180"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Bar chart comparing monthly revenue by channel"
                  >
                    <rect x="0" y="0" width="320" height="180" rx="12" fill="#f8fafc" />
                    {/* baseline */}
                    <line x1="40" y1="140" x2="300" y2="140" stroke="#e5e7eb" strokeWidth="2" />
                    {/* bars */}
                    {[
                      { label: 'Paid', height: 90, color: '#bfdbfe' },
                      { label: 'Organic', height: 60, color: '#bbf7d0' },
                      { label: 'Email', height: 40, color: '#fed7aa' },
                      { label: 'Direct', height: 55, color: '#e9d5ff' },
                    ].map((bar, index) => {
                      const barWidth = 40;
                      const gap = 22;
                      const x = 54 + index * (barWidth + gap);
                      const y = 140 - bar.height;
                      return (
                        <g key={bar.label}>
                          <rect
                            x={x}
                            y={y}
                            width={barWidth}
                            height={bar.height}
                            rx={8}
                            fill={bar.color}
                          />
                          <text
                            x={x + barWidth / 2}
                            y={152}
                            textAnchor="middle"
                            fontSize="10"
                            fill="#6b7280"
                          >
                            {bar.label}
                          </text>
                        </g>
                      );
                    })}
                    <text x="40" y="26" fontSize="12" fontWeight="600" fill="#0f172a">
                      Monthly revenue by channel
                    </text>
                  </svg>
                </div>
                <p className="mt-4 text-text/70 text-base text-center">
                  <span className="font-semibold">Visual insight:</span> Paid clearly leads, with Organic
                  and Direct forming a middle tier and Email contributing the smallest share — a mix that
                  highlights dependence on Paid traffic.
                </p>
              </div>
              <p className="mt-3 text-text/70 text-base">
                Example explanation: “Paid is clearly the largest revenue driver, almost 2× Organic,
                while Email is smaller but still meaningful. Direct traffic sits between Organic and
                Email, suggesting there is room to grow non‑paid channels.”
              </p>
            </article>

            {/* Distribution */}
            <article className="mb-10">
              <h3 className="text-2xl font-semibold text-text mb-3">Distribution — histograms</h3>
              <p className="text-text/80 mb-4">
                Histograms show how a numeric variable is distributed — for example, delivery times or
                order values. They help you see the shape: is the data centered around one value,
                skewed, or are there long tails and outliers?
              </p>
              <div className="bg-white rounded-card shadow-sm p-6 sm:p-8 flex flex-col items-center">
                <div className="w-full max-w-md">
                  <svg
                    viewBox="0 0 320 180"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Histogram of delivery times in days"
                  >
                    <rect x="0" y="0" width="320" height="180" rx="12" fill="#f8fafc" />
                    <line x1="32" y1="140" x2="300" y2="140" stroke="#e5e7eb" strokeWidth="2" />
                    {[
                      { label: '0–1', height: 40 },
                      { label: '1–2', height: 80 },
                      { label: '2–3', height: 95 },
                      { label: '3–4', height: 65 },
                      { label: '4–5', height: 35 },
                      { label: '5–6', height: 20 },
                    ].map((bucket, index) => {
                      const barWidth = 28;
                      const gap = 14;
                      const x = 40 + index * (barWidth + gap);
                      const y = 140 - bucket.height;
                      return (
                        <g key={bucket.label}>
                          <rect
                            x={x}
                            y={y}
                            width={barWidth}
                            height={bucket.height}
                            rx={6}
                            fill="#93c5fd"
                          />
                          <text
                            x={x + barWidth / 2}
                            y={152}
                            textAnchor="middle"
                            fontSize="9"
                            fill="#6b7280"
                          >
                            {bucket.label}
                          </text>
                        </g>
                      );
                    })}
                    <text x="32" y="26" fontSize="12" fontWeight="600" fill="#0f172a">
                      Delivery time (days)
                    </text>
                  </svg>
                </div>
                <p className="mt-4 text-text/70 text-base text-center">
                  <span className="font-semibold">Visual insight:</span> Most orders arrive within 1–3
                  days, with only a small tail beyond 4 days — so the distribution is concentrated in the
                  fast‑delivery buckets.
                </p>
              </div>
              <p className="mt-3 text-text/70 text-base">
                Example explanation: “Most orders are delivered in 1–3 days, with very few taking more
                than 5 days — so overall delivery is fast, but we should still understand why a small
                tail of orders is delayed.”
              </p>
            </article>

            {/* Correlation */}
            <article className="mb-10">
              <h3 className="text-2xl font-semibold text-text mb-3">Correlation — scatterplots</h3>
              <p className="text-text/80 mb-4">
                Scatterplots are used to see how two numeric variables move together (for example,
                visitors vs. purchases, price vs. conversion). You are looking for patterns: upward
                sloping, downward sloping, or “clouds” with no clear relationship.
              </p>
              <div className="bg-white rounded-card shadow-sm p-6 sm:p-8 flex flex-col items-center">
                <div className="w-full max-w-md">
                  <svg
                    viewBox="0 0 320 180"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Scatterplot showing positive correlation between visitors and purchases"
                  >
                    <rect x="0" y="0" width="320" height="180" rx="12" fill="#f8fafc" />
                    {/* axes */}
                    <line x1="48" y1="32" x2="48" y2="140" stroke="#e5e7eb" strokeWidth="2" />
                    <line x1="48" y1="140" x2="300" y2="140" stroke="#e5e7eb" strokeWidth="2" />
                    {/* points trending upward */}
                    {[
                      { x: 70, y: 120 },
                      { x: 110, y: 110 },
                      { x: 150, y: 98 },
                      { x: 190, y: 86 },
                      { x: 230, y: 74 },
                      { x: 270, y: 64 },
                    ].map((point, index) => (
                      <circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r={5}
                        fill="#22c55e"
                        fillOpacity="0.9"
                      />
                    ))}
                    {/* subtle trend line */}
                    <line
                      x1="60"
                      y1="126"
                      x2="290"
                      y2="60"
                      stroke="#4ade80"
                      strokeDasharray="4 4"
                      strokeWidth="2"
                    />
                    <text x="54" y="26" fontSize="12" fontWeight="600" fill="#0f172a">
                      Purchases vs. visitors
                    </text>
                  </svg>
                </div>
                <p className="mt-4 text-text/70 text-base text-center">
                  <span className="font-semibold">Visual insight:</span> Points line up along an upward
                  diagonal — higher visitor counts tend to pair with higher purchases, showing a clear
                  positive correlation.
                </p>
              </div>
              <p className="mt-3 text-text/70 text-base">
                Example explanation: “As visitors increase, purchases also rise, forming an upward
                trend — this suggests a positive correlation between traffic and orders.”
              </p>
            </article>

            {/* Composition */}
            <article>
              <h3 className="text-2xl font-semibold text-text mb-3">Composition — pie / donut charts</h3>
              <p className="text-text/80 mb-4">
                Pie or donut charts show how a whole is split into parts at a single point in time
                (for example, share of revenue by channel). They are best used when you have only a
                few categories and care about relative shares, not exact precision.
              </p>
              <div className="bg-white rounded-card shadow-sm p-6 sm:p-8 flex flex-col items-center">
                <div className="w-full max-w-xs">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-auto mx-auto"
                    role="img"
                    aria-label="Donut chart showing revenue share by channel"
                  >
                    <defs>
                      <circle id="donutRing" cx="100" cy="100" r="60" fill="none" strokeWidth="24" />
                    </defs>
                    <rect x="0" y="0" width="200" height="200" rx="20" fill="#f8fafc" />
                    {/* Paid 50% */}
                    <use
                      href="#donutRing"
                      stroke="#bfdbfe"
                      strokeDasharray={`${Math.PI * 120} ${Math.PI * 240}`}
                      strokeDashoffset={0}
                    />
                    {/* Organic 30% */}
                    <use
                      href="#donutRing"
                      stroke="#bbf7d0"
                      strokeDasharray={`${Math.PI * 72} ${Math.PI * 288}`}
                      strokeDashoffset={-Math.PI * 120}
                    />
                    {/* Email 15% */}
                    <use
                      href="#donutRing"
                      stroke="#fed7aa"
                      strokeDasharray={`${Math.PI * 36} ${Math.PI * 324}`}
                      strokeDashoffset={-Math.PI * 192}
                    />
                    {/* Other 5% */}
                    <use
                      href="#donutRing"
                      stroke="#e5e7eb"
                      strokeDasharray={`${Math.PI * 12} ${Math.PI * 348}`}
                      strokeDashoffset={-Math.PI * 228}
                    />
                    <circle cx="100" cy="100" r="40" fill="#ffffff" />
                    <text
                      x="100"
                      y="104"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="600"
                      fill="#0f172a"
                    >
                      Revenue
                    </text>
                  </svg>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-text/70">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-200" />
                    <span>Paid 50%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-200" />
                    <span>Organic 30%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-orange-200" />
                    <span>Email 15%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-slate-200" />
                    <span>Other 5%</span>
                  </div>
                </div>
                <p className="mt-4 text-text/70 text-base text-center">
                  <span className="font-semibold">Visual insight:</span> Half of revenue comes from Paid,
                  with Organic as the next largest slice and Email and Other much smaller — making the
                  heavy reliance on Paid immediately visible.
                </p>
              </div>
              <p className="mt-3 text-text/70 text-base">
                Example explanation: “Half of revenue comes from Paid channels, while Organic
                contributes ~30%. That mix suggests we rely heavily on Paid and may want to strengthen
                Organic over time.”
              </p>
            </article>
          </section>

          {/* 3. Sample dataset + interpretations */}
          <section className="mb-12" aria-labelledby="sample-dataset-heading">
            <h2
              id="sample-dataset-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Sample dataset &amp; how to talk about charts
            </h2>
            <p className="text-text/80 mb-6">
              Imagine you receive the following simplified dataset showing website performance over
              two months. In this round, you might be given a table like this and asked to describe
              what different charts would show.
            </p>

            <div className="overflow-x-auto rounded-card border border-slate-100">
              <table
                className="min-w-full divide-y divide-slate-200 text-lg"
                aria-label="Sample visitors and purchases dataset"
              >
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      date
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      visitors
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      purchases
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      conversion_rate
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-01-01</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">10,000</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">300</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">3.0%</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-01-08</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">11,500</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">360</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">3.1%</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-01-15</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">12,000</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">390</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">3.3%</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-01-22</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">13,000</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">410</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">3.2%</td>
                  </tr>
                  <tr className="bg-red-50/60">
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-01-29</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">9,000</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">220</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2.4%</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-02-05</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">14,000</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">450</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">3.2%</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-02-12</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">15,500</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">480</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">3.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-text/60 mt-3">
              The highlighted row shows a one‑week dip in both visitors and conversion rate — a pattern
              you would be expected to notice and explain.
            </p>

            <div className="mt-8 space-y-8">
              {/* Line chart interpretation */}
              <div>
                <h3 className="text-2xl font-semibold text-text mb-3">
                  1. Line chart — visitors over time
                </h3>
                <div className="bg-white rounded-card shadow-sm p-6 sm:p-8 flex flex-col items-center">
                  <div className="w-full max-w-xl">
                    <svg
                      viewBox="0 0 400 200"
                      className="w-full h-auto"
                      role="img"
                      aria-label="Line chart showing visitors over time with a dip near January 29"
                    >
                      <rect x="0" y="0" width="400" height="200" rx="16" fill="#f8fafc" />
                      <line x1="48" y1="150" x2="372" y2="150" stroke="#e5e7eb" strokeWidth="2" />
                      {/* line path with anomaly dip */}
                      <polyline
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeLinecap="round"
                        points="48,135 92,128 136,118 180,110 224,122 268,90 312,80"
                      />
                      {/* points including highlighted anomaly at Jan29 index 4 */}
                      {[135, 128, 118, 110, 122, 90, 80].map((y, index) => {
                        const x = 48 + index * 44;
                        const isDip = index === 4;
                        return (
                          <circle
                            key={index}
                            cx={x}
                            cy={y}
                            r={isDip ? 6 : 5}
                            fill={isDip ? '#ef4444' : '#3b82f6'}
                            stroke="#ffffff"
                            strokeWidth="2"
                          />
                        );
                      })}
                      {['Jan1', 'Jan8', 'Jan15', 'Jan22', 'Jan29', 'Feb5', 'Feb12'].map(
                        (label, index) => {
                          const x = 48 + index * 44;
                          return (
                            <text
                              key={label}
                              x={x}
                              y={168}
                              textAnchor="middle"
                              fontSize="10"
                              fill="#6b7280"
                            >
                              {label}
                            </text>
                          );
                        },
                      )}
                      <text x="48" y="26" fontSize="12" fontWeight="600" fill="#0f172a">
                        Weekly visitors
                      </text>
                    </svg>
                  </div>
                  <p className="mt-4 text-text/70 text-base text-center">
                    <span className="font-semibold">Visual insight:</span> Visitors generally climb week
                    over week, with a single highlighted dip around Jan&nbsp;29 that quickly recovers
                    into February.
                  </p>
                </div>
                <p className="mt-3 text-text/80">
                  <span className="font-semibold">What this shows:</span> Visitors generally trend
                  upward over time, with one clear dip around Jan 29 before recovering in early
                  February.
                </p>
                <p className="mt-2 text-text/80">
                  <span className="font-semibold">In an interview, you might say:</span> “Traffic is
                  growing week over week, but there is a noticeable one‑week drop at the end of
                  January. I would ask if there were marketing pauses, tracking issues, or outages that
                  week.”
                </p>
              </div>

              {/* Bar chart interpretation */}
              <div>
                <h3 className="text-2xl font-semibold text-text mb-3">
                  2. Bar chart — purchases per week
                </h3>
                <div className="bg-white rounded-card shadow-sm p-6 sm:p-8 flex flex-col items-center">
                  <div className="w-full max-w-xl">
                    <svg
                      viewBox="0 0 400 200"
                      className="w-full h-auto"
                      role="img"
                      aria-label="Bar chart of purchases per week with a sharp dip"
                    >
                      <rect x="0" y="0" width="400" height="200" rx="16" fill="#f8fafc" />
                      <line x1="48" y1="150" x2="372" y2="150" stroke="#e5e7eb" strokeWidth="2" />
                      {[
                        { label: 'Jan01', height: 70 },
                        { label: 'Jan08', height: 90 },
                        { label: 'Jan15', height: 100 },
                        { label: 'Jan22', height: 110 },
                        { label: 'Jan29', height: 45, anomaly: true },
                        { label: 'Feb05', height: 120 },
                        { label: 'Feb12', height: 130 },
                      ].map((bar, index) => {
                        const barWidth = 28;
                        const gap = 16;
                        const x = 52 + index * (barWidth + gap);
                        const y = 150 - bar.height;
                        return (
                          <g key={bar.label}>
                            <rect
                              x={x}
                              y={y}
                              width={barWidth}
                              height={bar.height}
                              rx={8}
                              fill={bar.anomaly ? '#fecaca' : '#bfdbfe'}
                            />
                            <text
                              x={x + barWidth / 2}
                              y={168}
                              textAnchor="middle"
                              fontSize="9"
                              fill="#6b7280"
                            >
                              {bar.label}
                            </text>
                          </g>
                        );
                      })}
                      <text x="48" y="26" fontSize="12" fontWeight="600" fill="#0f172a">
                        Purchases per week
                      </text>
                    </svg>
                  </div>
                  <p className="mt-4 text-text/70 text-base text-center">
                    <span className="font-semibold">Visual insight:</span> Bars generally climb over
                    time, with a noticeably shorter, softly highlighted bar for Jan&nbsp;29 that breaks
                    the pattern.
                  </p>
                </div>
                <p className="mt-3 text-text/80">
                  <span className="font-semibold">What this shows:</span> Purchases grow steadily, drop
                  sharply in the week of Jan 29, and then rebound to new highs in February.
                </p>
                <p className="mt-2 text-text/80">
                  <span className="font-semibold">Candidate should mention:</span> “There is a single
                  week where purchases fall well below the trend, which could signal a campaign pause,
                  site issue, or seasonality. I would quantify revenue impact and check logs for that
                  week.”
                </p>
              </div>

              {/* Scatterplot interpretation */}
              <div>
                <h3 className="text-2xl font-semibold text-text mb-3">
                  3. Scatterplot — visitors vs. purchases
                </h3>
                <div className="bg-white rounded-card shadow-sm p-6 sm:p-8 flex flex-col items-center">
                  <div className="w-full max-w-xl">
                    <svg
                      viewBox="0 0 400 200"
                      className="w-full h-auto"
                      role="img"
                      aria-label="Scatterplot of visitors versus purchases for each week"
                    >
                      <rect x="0" y="0" width="400" height="200" rx="16" fill="#f8fafc" />
                      <line x1="60" y1="36" x2="60" y2="160" stroke="#e5e7eb" strokeWidth="2" />
                      <line x1="60" y1="160" x2="360" y2="160" stroke="#e5e7eb" strokeWidth="2" />
                      {[
                        { x: 80, y: 140 },
                        { x: 120, y: 130 },
                        { x: 160, y: 124 },
                        { x: 200, y: 118 },
                        { x: 240, y: 150 }, // dip week
                        { x: 280, y: 110 },
                        { x: 320, y: 104 },
                      ].map((point, index) => {
                        const isDip = index === 4;
                        return (
                          <circle
                            key={index}
                            cx={point.x}
                            cy={point.y}
                            r={isDip ? 6 : 5}
                            fill={isDip ? '#ef4444' : '#22c55e'}
                            fillOpacity={0.95}
                          />
                        );
                      })}
                      <line
                        x1="70"
                        y1="148"
                        x2="340"
                        y2="92"
                        stroke="#4ade80"
                        strokeDasharray="4 4"
                        strokeWidth="2"
                      />
                      <text x="64" y="30" fontSize="12" fontWeight="600" fill="#0f172a">
                        Purchases vs. visitors
                      </text>
                    </svg>
                  </div>
                  <p className="mt-4 text-text/70 text-base text-center">
                    <span className="font-semibold">Visual insight:</span> Most points fall along an
                    upward diagonal, with one slightly low point for the Jan&nbsp;29 week — again
                    emphasizing a positive relationship plus a single under‑performing week.
                  </p>
                </div>
                <p className="mt-3 text-text/80">
                  <span className="font-semibold">What this shows:</span> As visitors increase,
                  purchases also increase in a roughly linear fashion, indicating a strong positive
                  relationship.
                </p>
                <p className="mt-2 text-text/80">
                  <span className="font-semibold">Candidate should mention:</span> “Higher traffic
                  weeks tend to have more purchases, so growth in visitors is translating into orders.
                  I would still check whether conversion rate is stable or if efficiency is changing
                  over time.”
                </p>
              </div>
            </div>
          </section>

          {/* 4. How analysts should describe insights */}
          <section className="mb-12" aria-labelledby="describe-insights-heading">
            <h2
              id="describe-insights-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              How analysts should describe insights
            </h2>
            <p className="text-text/80 mb-4">
              Strong data visualization answers sound simple, structured, and focused on business
              impact. Use the chart as a tool to tell a story, not as an excuse to recite every number
              on the screen.
            </p>
            <ul className="list-disc list-inside space-y-3 text-text/80">
              <li>
                <span className="font-semibold">Start with the high‑level pattern:</span> up vs. down,
                volatile vs. stable, any clear seasonality.
              </li>
              <li>
                <span className="font-semibold">Call out spikes and drops:</span> mention when they
                happen and suggest 1–2 plausible reasons or checks.
              </li>
              <li>
                <span className="font-semibold">Connect to business outcomes:</span> tie movements in
                the chart to revenue, users, or cost.
              </li>
              <li>
                <span className="font-semibold">Avoid unnecessary jargon:</span> prefer “sales dipped
                for one week” over “the series exhibits a negative residual.”
              </li>
              <li>
                <span className="font-semibold">Keep it accessible:</span> imagine you are talking to a
                smart non‑analyst stakeholder who wants decisions, not formulas.
              </li>
            </ul>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-semibold text-text mb-2">
                Examples of strong chart explanations
              </h3>
              <div className="bg-slate-50 rounded-card p-4 sm:p-5 border border-slate-100 space-y-3 text-text/80">
                <p>
                  <span className="font-semibold">Example 1 (trend line):</span> “Over the last two
                  months, weekly visitors grew by ~50%, with one short‑lived dip at the end of January
                  that quickly recovered. I would confirm whether this dip was caused by a marketing
                  pause or tracking issue, but overall the trend is strongly positive.”
                </p>
                <p>
                  <span className="font-semibold">Example 2 (channel comparison bar chart):</span>{' '}
                  “Paid brings in about half of our revenue, with Organic and Email making up most of
                  the rest. This dependency on Paid suggests a risk: if Paid costs rise, our growth
                  slows, so I would invest in improving Organic performance over time.”
                </p>
                <p>
                  <span className="font-semibold">Example 3 (conversion funnel):</span> “Traffic is
                  stable, but the conversion rate drops from 3.2% to 2.4% in one week, which explains
                  most of the revenue decline. That points to an on‑site or checkout issue rather than
                  a demand problem.”
                </p>
              </div>
            </div>
          </section>

          {/* 5. Anomaly detection */}
          <section className="mb-12" aria-labelledby="anomaly-heading">
            <h2
              id="anomaly-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Anomaly detection &amp; seasonality
            </h2>
            <p className="text-text/80 mb-4">
              Interviewers often show you charts with one or two “weird” points and check whether you
              notice them and respond calmly. Your job is to spot anomalies, not panic or immediately
              jump to conclusions.
            </p>
            <ul className="list-disc list-inside space-y-3 text-text/80 mb-6">
              <li>
                <span className="font-semibold">Line charts:</span> look for sudden jumps or drops
                that break the typical pattern.
              </li>
              <li>
                <span className="font-semibold">Seasonality:</span> repeated peaks and troughs (for
                example, weekends vs. weekdays, end‑of‑month spikes).
              </li>
              <li>
                <span className="font-semibold">Abrupt drops:</span> may indicate outages, tracking
                problems, or big campaign changes.
              </li>
              <li>
                <span className="font-semibold">Scatterplot outliers:</span> individual points far
                away from the general cloud may signal special cases or data issues.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-text mb-4">Worked example</h3>
            <p className="text-text/80 mb-4">
              Consider the following revenue series. One date behaves very differently from the rest:
            </p>
            <div className="overflow-x-auto rounded-card border border-slate-100 mb-4">
              <table
                className="min-w-full divide-y divide-slate-200 text-lg"
                aria-label="Revenue anomaly example"
              >
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      date
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      revenue
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-03-01</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">$52,000</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-03-02</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">$48,500</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-03-03</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">$50,300</td>
                  </tr>
                  <tr className="bg-red-50/60">
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-03-04</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">$12,000</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-03-05</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">$51,800</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-03-06</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">$53,200</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white rounded-card shadow-sm p-6 sm:p-8 flex flex-col items-center mb-4">
              <div className="w-full max-w-xl">
                <svg
                  viewBox="0 0 400 200"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Revenue line chart with one clear anomalous drop"
                >
                  <rect x="0" y="0" width="400" height="200" rx="16" fill="#f8fafc" />
                  <line x1="48" y1="150" x2="372" y2="150" stroke="#e5e7eb" strokeWidth="2" />
                  {/* smooth line with one deep drop on March 4 */}
                  <polyline
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    points="48,90 96,98 144,94 192,150 240,92 288,86"
                  />
                  {[90, 98, 94, 150, 92, 86].map((y, index) => {
                    const x = 48 + index * 48;
                    const isAnomaly = index === 3;
                    return (
                      <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r={isAnomaly ? 6 : 5}
                        fill={isAnomaly ? '#ef4444' : '#0ea5e9'}
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                    );
                  })}
                  {/* label the anomalous point */}
                  <text
                    x={48 + 3 * 48}
                    y={166}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#b91c1c"
                  >
                    March 4 (drop)
                  </text>
                  <text x="48" y="26" fontSize="12" fontWeight="600" fill="#0f172a">
                    Daily revenue (k$)
                  </text>
                </svg>
              </div>
              <p className="mt-4 text-text/70 text-base text-center">
                <span className="font-semibold">Visual insight:</span> Revenue clusters tightly around
                the low‑50k range, with one sharply lower point on March&nbsp;4 that stands out as a
                clear anomaly relative to the surrounding days.
              </p>
            </div>
            <p className="text-text/80 mb-2">
              A good interview answer might be: “Revenue is consistently around $50k per day, except
              for March 4th, which drops to ~$12k. That looks like a one‑day anomaly. I would check
              for site outages, payment failures, or tracking problems on that date before assuming a
              real demand issue.”
            </p>
            <p className="text-text/70 text-base">
              Notice the structure: you first describe the pattern, then the anomaly, then suggest
              possible checks — without over‑stating the root cause.
            </p>
          </section>

          {/* 6. Storytelling framework */}
          <section className="mb-12" aria-labelledby="storytelling-heading">
            <h2
              id="storytelling-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Storytelling framework for explaining visuals
            </h2>
            <p className="text-text/80 mb-4">
              A simple way to stay structured in this round is to follow a consistent template every
              time you speak to a chart:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-text/80 mb-6">
              <li>
                <span className="font-semibold">Overview:</span> one sentence on the overall trend or
                pattern.
              </li>
              <li>
                <span className="font-semibold">Key insight:</span> what matters most for the business
                in this chart.
              </li>
              <li>
                <span className="font-semibold">Reason:</span> 1–2 plausible drivers or hypotheses.
              </li>
              <li>
                <span className="font-semibold">Recommendation:</span> what you would do or investigate
                next.
              </li>
            </ol>

            <div className="bg-slate-50 rounded-card p-4 sm:p-5 border border-slate-100">
              <h3 className="text-2xl font-semibold text-text mb-3">
                Applied to our sample visitors dataset
              </h3>
              <p className="text-text/80 mb-2">
                <span className="font-semibold">Overview:</span> “Weekly visitors and purchases grow
                steadily over the two‑month period, with a single dip in late January.”
              </p>
              <p className="text-text/80 mb-2">
                <span className="font-semibold">Key insight:</span> “That one‑week drop in both
                traffic and conversion likely explains most of the revenue risk in this timeframe.”
              </p>
              <p className="text-text/80 mb-2">
                <span className="font-semibold">Reason:</span> “This could be due to a paused
                marketing campaign, a tracking issue, or a temporary product/checkout problem during
                that week.”
              </p>
              <p className="text-text/80">
                <span className="font-semibold">Recommendation:</span> “I would first validate whether
                the data is correct, then check change logs and incident reports for that week, and if
                confirmed, estimate the lost revenue and propose guardrails to prevent similar issues.”
              </p>
            </div>
          </section>

          {/* 7. MCQs */}
          <section className="mb-12" aria-labelledby="mcq-heading">
            <h2
              id="mcq-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Quick check — visualization MCQs
            </h2>
            <MCQGroup questions={mcqs} />
          </section>

          <div className="mt-12">
            <CompletionButton roundId="viz" />
          </div>
        </div>
      </div>
    </div>
  );
};

