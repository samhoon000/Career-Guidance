import { Link } from 'react-router-dom';
import { MCQGroup } from '../components/MCQGroup';
import { CompletionButton } from '../components/CompletionButton';

export default function Round_Case() {
  const mcqs = [
    {
      question:
        'You notice a 12% drop in weekly active buyers (WAB). What is the very first thing you should do?',
      options: [
        {
          label: 'A) Immediately launch a promotion to all users',
          value: 'A',
        },
        {
          label: 'B) Validate the data and confirm the time window of the drop',
          value: 'B',
          isCorrect: true,
        },
        {
          label: 'C) Assume it is seasonality and ignore it for now',
          value: 'C',
        },
      ],
    },
    {
      question:
        'Which metric is BEST for checking whether fewer users are buying versus fewer users visiting the site?',
      options: [
        {
          label: 'A) Average order value (AOV)',
          value: 'A',
        },
        {
          label: 'B) Conversion rate (visitors → buyers)',
          value: 'B',
          isCorrect: true,
        },
        {
          label: 'C) Revenue per region only',
          value: 'C',
        },
      ],
    },
    {
      question:
        'Sample analysis shows WAB dropped mainly in the Organic channel, while Paid and Email stayed flat. What is the MOST reasonable next step?',
      options: [
        {
          label: 'A) Conclude that product quality has declined',
          value: 'A',
        },
        {
          label: 'B) Investigate recent SEO / site traffic changes and any organic acquisition issues',
          value: 'B',
          isCorrect: true,
        },
        {
          label: 'C) Reduce prices for all products globally',
          value: 'C',
        },
      ],
    },
    {
      question:
        'Which of the following best illustrates a good hypothesis for this case?',
      options: [
        {
          label:
            'A) “Revenue is down because users do not like the brand anymore.”',
          value: 'A',
        },
        {
          label:
            'B) “A recent change to organic landing pages reduced Organic traffic quality, leading to fewer Organic buyers.”',
          value: 'B',
          isCorrect: true,
        },
        {
          label:
            'C) “If we send more emails, something good might happen eventually.”',
          value: 'C',
        },
      ],
    },
    {
      question:
        'In the scoring rubric, which behavior MOST contributes to “Approach & structure”?',
      options: [
        {
          label:
            'A) Jumping straight to solutions without segmenting or validating the data',
          value: 'A',
        },
        {
          label:
            'B) Clearly restating the problem, asking clarifying questions, and outlining a step-by-step investigation plan',
          value: 'B',
          isCorrect: true,
        },
        {
          label:
            'C) Focusing exclusively on cosmetic dashboard changes',
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
              ROUND 3 — Case Study / Business Problem
            </h1>
            <p className="text-text/80 leading-relaxed text-lg mb-6">
              Case rounds assess how you structure ambiguous problems, select and interpret
              metrics, generate and test hypotheses, and translate analysis into clear business
              recommendations. Use this page to walk through a realistic e-commerce case, mirroring
              how you would think out loud in an interview.
            </p>
          </header>

          <section className="mb-12" aria-labelledby="case-prompt-heading">
            <h2
              id="case-prompt-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Case Prompt
            </h2>
            <p className="text-text/80 leading-relaxed text-lg mb-6">
              <span className="font-semibold">Business problem:</span> An e-commerce company
              reports a 12% drop in weekly active buyers (users who made at least one purchase) in
              the last month. Revenue also fell by 8%. You are given recent sales data and asked to
              investigate potential causes and recommend actions to recover growth.
            </p>
            <div className="bg-slate-50 rounded-card p-4 sm:p-5 border border-slate-100">
              <h3 className="text-2xl font-semibold text-text mb-4">
                Clarifying questions you might ask
              </h3>
              <ul className="list-disc list-inside space-y-3 text-text/80 text-lg">
                <li>
                  Over what exact time window is the 12% WAB drop measured, and how does it compare
                  to the prior comparable period (e.g., last month vs. previous month, vs. same
                  month last year)?
                </li>
                <li>
                  Have there been any major changes in marketing campaigns, channels, or budgets
                  (e.g., SEO, paid ads, email) during this period?
                </li>
                <li>
                  Were there any notable product, pricing, or inventory changes (e.g., stock-outs,
                  price increases, new catalog strategy) that could impact buyer behavior?
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12" aria-labelledby="sample-dataset-heading">
            <h2
              id="sample-dataset-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Sample Dataset (simplified view)
            </h2>
            <p className="text-text/80 leading-relaxed text-lg mb-6">
              Below is a compact sample of the transactional data you might receive. It is
              intentionally small but structured to highlight where the drop could be concentrated.
            </p>
            <div className="overflow-x-auto rounded-card border border-slate-100">
              <table className="min-w-full divide-y divide-slate-200 text-lg" aria-label="Sample sales dataset">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      date
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      user_id
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      region
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      channel
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      product_category
                    </th>
                    <th scope="col" className="px-5 py-4 text-right font-bold text-text">
                      revenue
                    </th>
                    <th scope="col" className="px-5 py-4 text-left font-bold text-text">
                      order_id
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-10-01</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">U001</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">North</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Organic</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Electronics</td>
                    <td className="px-5 py-4 whitespace-nowrap text-right text-text/80">$120</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">O-1001</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-10-01</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">U002</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">North</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Paid</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Home</td>
                    <td className="px-5 py-4 whitespace-nowrap text-right text-text/80">$80</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">O-1002</td>
                  </tr>
                  <tr className="bg-red-50/60">
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-10-08</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">U003</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">South</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Organic</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Electronics</td>
                    <td className="px-5 py-4 whitespace-nowrap text-right text-text/80">$60</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">O-1003</td>
                  </tr>
                  <tr className="bg-red-50/60">
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-10-15</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">U004</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">South</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Organic</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Electronics</td>
                    <td className="px-5 py-4 whitespace-nowrap text-right text-text/80">$55</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">O-1004</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-10-15</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">U005</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">West</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Email</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Fashion</td>
                    <td className="px-5 py-4 whitespace-nowrap text-right text-text/80">$45</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">O-1005</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">2025-10-22</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">U006</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">South</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Organic</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">Electronics</td>
                    <td className="px-5 py-4 whitespace-nowrap text-right text-text/80">$50</td>
                    <td className="px-5 py-4 whitespace-nowrap text-text/80">O-1006</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-text/60 mt-3">
              Highlighted rows suggest a pattern: buyers in the <span className="font-semibold">South</span>{' '}
              region, <span className="font-semibold">Organic</span> channel, and{' '}
              <span className="font-semibold">Electronics</span> category may be disproportionately affected.
            </p>
          </section>

          <section className="mb-12" aria-labelledby="metrics-heading">
            <h2
              id="metrics-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              What to measure — key metrics
            </h2>
            <div className="bg-slate-50 rounded-card p-4 sm:p-5 border border-slate-100">
              <ul className="list-disc list-inside space-y-4 text-text/80 text-lg">
                <li>
                  <span className="font-semibold">Weekly active buyers (WAB):</span> measures user
                  engagement and buying activity over time.
                </li>
                <li>
                  <span className="font-semibold">Conversion rate (visitors → buyers):</span> shows
                  whether the funnel is breaking between visits and purchases.
                </li>
                <li>
                  <span className="font-semibold">Average order value (AOV):</span> checks if ticket
                  size has changed and how much each buyer spends.
                </li>
                <li>
                  <span className="font-semibold">Repeat purchase rate:</span> signals retention and
                  how often buyers come back to buy again.
                </li>
                <li>
                  <span className="font-semibold">Revenue by region / channel / product:</span>{' '}
                  helps you segment the drop to localize where performance is deteriorating.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12" aria-labelledby="plan-heading">
            <h2
              id="plan-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Step-by-step investigation plan
            </h2>
            <ol className="space-y-6 text-text/80 text-lg">
              <li>
                <p className="font-semibold text-text mb-4">
                  1. Validate the drop and time window
                </p>
                <p className="mb-4">
                  Confirm that the 12% WAB and 8% revenue drops are computed correctly and compare
                  against a clean baseline (e.g., previous month or same month last year).
                </p>
                <p className="text-base text-text/70 mb-4">
                  <span className="font-semibold">Example:</span> Plot weekly WAB for the last 8–12
                  weeks to ensure the drop is not an artifact of partial weeks or tracking issues.
                </p>
              </li>
              <li>
                <p className="font-semibold text-text mb-4">
                  2. Segment by region, channel, and product
                </p>
                <p className="mb-4">
                  Break WAB and revenue down by key dimensions to see where the drop is
                  concentrated (e.g., specific regions or channels).
                </p>
                <div className="mt-4 bg-slate-50 rounded-card p-4 border border-slate-100">
                  <p className="text-base font-semibold text-text mb-3">
                    Example: weekly buyers by channel
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-lg divide-y divide-slate-200" aria-label="Weekly buyers by channel">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-bold text-text">week</th>
                          <th className="px-4 py-3 text-left font-bold text-text">channel</th>
                          <th className="px-4 py-3 text-right font-bold text-text">weekly_buyers</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 text-text/80">2025-W38</td>
                          <td className="px-4 py-3 text-text/80">Organic</td>
                          <td className="px-4 py-3 text-right text-text/80">4,000</td>
                        </tr>
                        <tr className="bg-red-50/70">
                          <td className="px-4 py-3 text-text/80">2025-W42</td>
                          <td className="px-4 py-3 text-text/80">Organic</td>
                          <td className="px-4 py-3 text-right text-text/80">2,800</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-text/80">2025-W42</td>
                          <td className="px-4 py-3 text-text/80">Paid</td>
                          <td className="px-4 py-3 text-right text-text/80">4,100</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-base text-text/70">
                    Organic WAB drops by ~30% while Paid remains stable — suggesting a traffic or
                    acquisition issue specific to the Organic channel.
                  </p>
                </div>
              </li>
              <li>
                <p className="font-semibold text-text mb-4">
                  3. Compare cohorts: new vs. returning users
                </p>
                <p className="mb-4">
                  Check whether the drop is driven by fewer new buyers, fewer returning buyers, or
                  both. This helps distinguish acquisition vs. retention problems.
                </p>
                <p className="text-base text-text/70 mb-4">
                  <span className="font-semibold">Example:</span> If returning buyers in South /
                  Organic / Electronics drop sharply while new buyers are stable, this suggests an
                  experience or value issue for existing customers.
                </p>
              </li>
              <li>
                <p className="font-semibold text-text mb-4">
                  4. Check marketing activity and attribution
                </p>
                <p className="mb-4">
                  Review campaign spend, bids, messaging, and landing pages for the affected
                  channels. Look for budget cuts, targeting changes, or SEO ranking drops.
                </p>
                <p className="text-base text-text/70 mb-4">
                  <span className="font-semibold">Example:</span> Organic impressions and clicks
                  fell after a site re-architecture, suggesting search visibility loss.
                </p>
              </li>
              <li>
                <p className="font-semibold text-text mb-4">
                  5. Analyze product availability and price changes
                </p>
                <p className="mb-4">
                  Investigate whether key SKUs in the Electronics category (especially in the South
                  region) went out of stock, became slower to ship, or saw material price changes.
                </p>
                <p className="text-base text-text/70 mb-4">
                  <span className="font-semibold">Example:</span> A top-selling Electronics bundle
                  went out of stock for 2 weeks in South, correlated with a local WAB drop.
                </p>
              </li>
              <li>
                <p className="font-semibold text-text mb-4">
                  6. Run quick hypothesis tests and significance checks
                </p>
                <p className="mb-4">
                  For the main hypotheses (e.g., Organic traffic drop, inventory issues), quantify
                  their impact on WAB and revenue and check whether the changes are statistically
                  meaningful versus noise.
                </p>
                <p className="text-base text-text/70 mb-4">
                  <span className="font-semibold">Example:</span> Estimate how many buyers were lost
                  during the outage period and compare with the observed WAB decline.
                </p>
              </li>
              <li>
                <p className="font-semibold text-text mb-4">
                  7. Prioritize root causes and propose short- vs. long-term actions
                </p>
                <p className="mb-4">
                  Synthesize findings into a narrative: which 1–2 drivers explain most of the drop,
                  what can be fixed quickly, and what requires structural changes.
                </p>
                <p className="text-base text-text/70 mb-4">
                  <span className="font-semibold">Example:</span> "Primary driver is Organic WAB
                  decline in South Electronics after SEO and pricing changes; secondary driver is
                  lower repeat purchase rate in returning buyers."
                </p>
              </li>
            </ol>
          </section>

          <section className="mb-12" aria-labelledby="queries-heading">
            <h2
              id="queries-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Example queries & expected outputs (read‑only)
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-text mb-4">
                  1. Total weekly buyers by region
                </h3>
                <pre
                  tabIndex={0}
                  className="text-base sm:text-lg bg-slate-900 text-slate-50 rounded-card p-4 overflow-auto"
                >
                  <code>
{`SELECT
  DATE_TRUNC('week', date) AS week_start,
  region,
  COUNT(DISTINCT user_id) AS weekly_buyers
FROM sales
WHERE date >= '2025-09-01'
GROUP BY 1, 2
ORDER BY week_start, region;`}
                  </code>
                </pre>
                <div className="mt-4 overflow-x-auto rounded-card border border-slate-100">
                  <table className="min-w-full text-lg divide-y divide-slate-200" aria-label="Weekly buyers by region output">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-text">week_start</th>
                        <th className="px-4 py-3 text-left font-bold text-text">region</th>
                        <th className="px-4 py-3 text-right font-bold text-text">weekly_buyers</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 text-text/80">2025-09-29</td>
                        <td className="px-4 py-3 text-text/80">South</td>
                        <td className="px-4 py-3 text-right text-text/80">1,500</td>
                      </tr>
                      <tr className="bg-red-50/70">
                        <td className="px-4 py-3 text-text/80">2025-10-20</td>
                        <td className="px-4 py-3 text-text/80">South</td>
                        <td className="px-4 py-3 text-right text-text/80">1,050</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-text/80">2025-10-20</td>
                        <td className="px-4 py-3 text-text/80">North</td>
                        <td className="px-4 py-3 text-right text-text/80">1,900</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-base text-text/70 mb-4">
                  South region weekly buyers fall ~30% while North remains stable — the drop is
                  localized, not global.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-text mb-4">
                  2. Conversion rate by channel
                </h3>
                <pre
                  tabIndex={0}
                  className="text-base sm:text-lg bg-slate-900 text-slate-50 rounded-card p-4 overflow-auto"
                >
                  <code>
{`WITH sessions AS (
  SELECT date, channel, COUNT(DISTINCT session_id) AS sessions
  FROM web_traffic
  WHERE date >= '2025-09-01'
  GROUP BY 1, 2
),
buyers AS (
  SELECT date, channel, COUNT(DISTINCT user_id) AS buyers
  FROM sales
  WHERE date >= '2025-09-01'
  GROUP BY 1, 2
)
SELECT
  DATE_TRUNC('week', s.date) AS week_start,
  s.channel,
  SUM(b.buyers) AS weekly_buyers,
  SUM(s.sessions) AS weekly_sessions,
  ROUND(SUM(b.buyers)::DECIMAL / NULLIF(SUM(s.sessions), 0), 4) AS conversion_rate
FROM sessions s
LEFT JOIN buyers b
  ON s.date = b.date
  AND s.channel = b.channel
GROUP BY 1, 2
ORDER BY week_start, channel;`}
                  </code>
                </pre>
                <div className="mt-4 overflow-x-auto rounded-card border border-slate-100">
                  <table className="min-w-full text-lg divide-y divide-slate-200" aria-label="Conversion rate by channel output">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-text">week_start</th>
                        <th className="px-4 py-3 text-left font-bold text-text">channel</th>
                        <th className="px-4 py-3 text-right font-bold text-text">conversion_rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 text-text/80">2025-09-29</td>
                        <td className="px-4 py-3 text-text/80">Organic</td>
                        <td className="px-4 py-3 text-right text-text/80">3.2%</td>
                      </tr>
                      <tr className="bg-red-50/70">
                        <td className="px-4 py-3 text-text/80">2025-10-20</td>
                        <td className="px-4 py-3 text-text/80">Organic</td>
                        <td className="px-4 py-3 text-right text-text/80">2.0%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-text/80">2025-10-20</td>
                        <td className="px-4 py-3 text-text/80">Paid</td>
                        <td className="px-4 py-3 text-right text-text/80">3.1%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-base text-text/70 mb-4">
                  Organic conversion rate drops meaningfully, while Paid remains stable — evidence
                  that the Organic funnel has degraded.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-text mb-4">
                  3. Revenue change by product category
                </h3>
                <pre
                  tabIndex={0}
                  className="text-base sm:text-lg bg-slate-900 text-slate-50 rounded-card p-4 overflow-auto"
                >
                  <code>
{`SELECT
  DATE_TRUNC('week', date) AS week_start,
  product_category,
  SUM(revenue) AS weekly_revenue
FROM sales
WHERE date >= '2025-09-01'
GROUP BY 1, 2
ORDER BY week_start, product_category;`}
                  </code>
                </pre>
                <div className="mt-4 overflow-x-auto rounded-card border border-slate-100">
                  <table className="min-w-full text-lg divide-y divide-slate-200" aria-label="Revenue by product category output">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-text">week_start</th>
                        <th className="px-4 py-3 text-left font-bold text-text">product_category</th>
                        <th className="px-4 py-3 text-right font-bold text-text">weekly_revenue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 text-text/80">2025-09-29</td>
                        <td className="px-4 py-3 text-text/80">Electronics</td>
                        <td className="px-4 py-3 text-right text-text/80">$480,000</td>
                      </tr>
                      <tr className="bg-red-50/70">
                        <td className="px-4 py-3 text-text/80">2025-10-20</td>
                        <td className="px-4 py-3 text-text/80">Electronics</td>
                        <td className="px-4 py-3 text-right text-text/80">$360,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-text/80">2025-10-20</td>
                        <td className="px-4 py-3 text-text/80">Fashion</td>
                        <td className="px-4 py-3 text-right text-text/80">$150,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-base text-text/70 mb-4">
                  Revenue decline is concentrated in <span className="font-semibold">Electronics</span>,
                  aligning with the South / Organic / Electronics pattern from earlier cuts.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12" aria-labelledby="interpretation-heading">
            <h2
              id="interpretation-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Interpretation & candidate reasoning example
            </h2>
            <p className="text-text/80 leading-relaxed text-lg mb-6">
              A strong candidate connects the segmented findings into a clear story. Here, the data
              suggests that the WAB and revenue drop are not uniform: they are driven mainly by the{' '}
              <span className="font-semibold">South</span> region,{' '}
              <span className="font-semibold">Organic</span> channel, and{' '}
              <span className="font-semibold">Electronics</span> category. The sharp decline in
              Organic conversion and buyers, alongside relatively stable Paid and Email channels,
              points to a channel-specific issue such as SEO or landing-page changes.
            </p>
            <p className="text-text/80 leading-relaxed text-lg mb-6">
              An ideal answer would hypothesize that a combination of Organic traffic quality loss
              (from SEO or site changes) and possible Electronics stock or pricing issues in South
              reduced the number of active buyers. The candidate would propose targeted analyses to
              validate each hypothesis, quantify impact, and then recommend quick experiments (e.g.,
              revert risky changes, adjust bids, feature alternative products) while planning
              longer-term structural fixes.
            </p>
            <p className="text-text/80 leading-relaxed text-lg">
              Throughout, they explicitly communicate trade‑offs (e.g., short‑term promos vs.
              margin, traffic vs. conversion) and design small, fast experiments to test whether
              proposed actions actually recover WAB and revenue.
            </p>
          </section>

          <section className="mb-12" aria-labelledby="recommendations-heading">
            <h2
              id="recommendations-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Prioritized recommendations
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="bg-slate-50 rounded-card p-5 border border-slate-100">
                <h3 className="text-xl font-semibold text-text mb-3">Quick win</h3>
                <p className="text-lg text-text/80 mb-4">
                  Run a targeted email or push campaign to recent South Electronics buyers with a
                  tailored offer or reminder to re‑engage.
                </p>
                <p className="mt-3 text-base text-text/70">
                  <span className="font-semibold">Impact:</span> Medium ·{' '}
                  <span className="font-semibold">Effort:</span> Low
                </p>
              </div>
              <div className="bg-slate-50 rounded-card p-5 border border-slate-100">
                <h3 className="text-xl font-semibold text-text mb-3">Medium term</h3>
                <p className="text-lg text-text/80 mb-4">
                  Audit recent Organic landing-page, SEO, and pricing changes for Electronics and
                  roll back or adjust any changes correlated with the drop.
                </p>
                <p className="mt-3 text-base text-text/70">
                  <span className="font-semibold">Impact:</span> High ·{' '}
                  <span className="font-semibold">Effort:</span> Medium
                </p>
              </div>
              <div className="bg-slate-50 rounded-card p-5 border border-slate-100">
                <h3 className="text-xl font-semibold text-text mb-3">Long term</h3>
                <p className="text-lg text-text/80 mb-4">
                  Strengthen channel diversification and SEO resilience (e.g., content strategy,
                  technical SEO, broader channel mix) to reduce dependency on a single Organic
                  segment.
                </p>
                <p className="mt-3 text-base text-text/70">
                  <span className="font-semibold">Impact:</span> High ·{' '}
                  <span className="font-semibold">Effort:</span> High
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12" aria-labelledby="rubric-heading">
            <h2
              id="rubric-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Scoring rubric / interviewer checklist
            </h2>
            <div className="overflow-x-auto rounded-card border border-slate-100 mb-6">
              <table className="min-w-full text-lg divide-y divide-slate-200" aria-label="Case scoring rubric">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-left font-bold text-text">Dimension</th>
                    <th className="px-5 py-4 text-right font-bold text-text">Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-5 py-4 text-text/80">Approach &amp; structure</td>
                    <td className="px-5 py-4 text-right text-text/80">30%</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-text/80">Metric selection &amp; accuracy</td>
                    <td className="px-5 py-4 text-right text-text/80">25%</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-text/80">Hypothesis &amp; validation</td>
                    <td className="px-5 py-4 text-right text-text/80">25%</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-text/80">Recommendations &amp; business sense</td>
                    <td className="px-5 py-4 text-right text-text/80">20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="list-disc list-inside space-y-4 text-text/80 text-lg">
              <li>
                <span className="font-semibold">Approach &amp; structure (30%):</span> clearly
                restates the problem, asks relevant clarifying questions, and outlines a logical,
                step‑by‑step plan before diving into numbers.
              </li>
              <li>
                <span className="font-semibold">Metric selection &amp; accuracy (25%):</span> picks
                appropriate metrics (WAB, conversion rate, AOV, repeat rate, segmented revenue) and
                uses them correctly without mixing definitions.
              </li>
              <li>
                <span className="font-semibold">Hypothesis &amp; validation (25%):</span> forms
                concrete, testable hypotheses and uses cuts of data to validate or reject them
                instead of guessing.
              </li>
              <li>
                <span className="font-semibold">Recommendations &amp; business sense (20%):</span>{' '}
                prioritizes actions by impact and effort, considers trade‑offs (e.g., margin vs.
                growth), and proposes realistic experiments and follow‑ups.
              </li>
            </ul>
          </section>

          <section className="mb-12" aria-labelledby="model-answer-heading">
            <h2
              id="model-answer-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Model answer (concise)
            </h2>
            <p className="text-text/80 leading-relaxed text-lg">
              "Over the last month we see a 12% drop in weekly active buyers and an 8% revenue
              decline, but the impact is not uniform: it is concentrated in the South region, the
              Organic channel, and the Electronics category. Organic conversion and buyers in this
              segment have fallen by roughly 30%, while Paid and Email remain stable, suggesting a
              channel‑specific issue rather than a platform‑wide problem. My leading hypotheses are
              that recent SEO or landing‑page changes reduced Organic traffic quality, and that
              Electronics availability or pricing in South made it harder for buyers to complete
              purchases. I would validate these hypotheses by reviewing traffic and inventory logs,
              quantifying the impact, and then prioritize quick fixes like rolling back risky
              changes and running targeted campaigns to affected users, while planning longer‑term
              work on channel diversification and SEO resilience."
            </p>
          </section>

          <section className="mb-12" aria-labelledby="mcq-heading">
            <h2
              id="mcq-heading"
              className="text-3xl font-semibold text-text mb-6"
            >
              Quick check — MCQs on this case
            </h2>
            <MCQGroup questions={mcqs} />
          </section>

          <div className="mt-12">
            <CompletionButton roundId="case" />
          </div>
        </div>
      </div>
    </div>
  );
};

