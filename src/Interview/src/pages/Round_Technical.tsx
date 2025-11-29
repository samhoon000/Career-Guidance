import { Link } from 'react-router-dom';
import { MCQGroup } from '../components/MCQGroup';
import { CompletionButton } from '../components/CompletionButton';

export default function Round_Technical() {
  const mcqs = [
    {
      question: 'Which statement best describes an INNER JOIN?',
      options: [
        { label: 'A) Returns all rows from both tables, matching or not', value: 'A' },
        {
          label: 'B) Returns only rows where the join condition matches in both tables',
          value: 'B',
          isCorrect: true,
        },
        { label: 'C) Returns only rows from the left table', value: 'C' },
      ],
    },
    {
      question: 'SQL window functions are commonly used for:',
      options: [
        { label: 'A) Designing database schemas', value: 'A' },
        { label: 'B) Moving averages via window functions', value: 'B', isCorrect: true },
        { label: 'C) Creating backup tables only', value: 'C' },
      ],
    },
    {
      question: 'Which is a reasonable way to handle missing values in a numeric column?',
      options: [
        { label: 'A) Imputation methods like mean or median', value: 'A', isCorrect: true },
        { label: 'B) Randomly replacing with extreme values', value: 'B' },
        { label: 'C) Always dropping the entire table', value: 'C' },
      ],
    },
    {
      question: 'Which method is typically used for outlier detection?',
      options: [
        { label: 'A) Sorting alphabetically', value: 'A' },
        { label: 'B) Z-score or IQR based detection', value: 'B', isCorrect: true },
        { label: 'C) Counting NULL values only', value: 'C' },
      ],
    },
    {
      question: 'How should you interpret a small p-value (e.g., < 0.05) in an A/B test?',
      options: [
        {
          label: 'A) The observed difference is unlikely due to random chance under the null hypothesis',
          value: 'A',
          isCorrect: true,
        },
        { label: 'B) The experiment must be wrong', value: 'B' },
        { label: 'C) The null hypothesis is definitely true', value: 'C' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-pastel py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/interview"
          className="inline-flex items-center gap-2 text-lg px-5 py-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors mb-8 font-medium"
        >
          ← Back to Home
        </Link>

        <div className="bg-white rounded-card shadow-sm p-8 sm:p-10 mb-8">
          {/* Page Header */}
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              ROUND 2 — Technical (SQL, Data Cleaning, Statistics)
            </h1>
            <p className="text-lg sm:text-xl text-text/80 leading-relaxed">
              This round is a deep dive into how you work with real data. You will write SQL to
              query and aggregate tables, clean messy datasets to make them analysis-ready, and
              apply core statistics concepts to interpret results. Expect a mix of live problem
              solving, whiteboard-style questions, and follow-up “why” questions to test your
              reasoning.
            </p>
          </header>

          {/* SQL Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text mb-4">SQL Examples</h2>
            <p className="text-lg text-text/80 mb-6 leading-relaxed">
              Most interview SQL questions simulate a simple business table and ask you to compute
              aggregates, rankings, or trends. Practice reading the table carefully before jumping
              into code.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold text-text mb-3">Sample Sales Table</h3>
            <p className="text-text/80 mb-3 text-lg">
              Consider a simplified `sales` table used in many interviews:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 text-left text-sm sm:text-base">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      date
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      customer_id
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      product
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-2">2025-01-01</td>
                    <td className="border-b border-gray-200 px-4 py-2">101</td>
                    <td className="border-b border-gray-200 px-4 py-2">Laptop</td>
                    <td className="border-b border-gray-200 px-4 py-2">1200</td>
                  </tr>
                  <tr className="bg-gray-50/60">
                    <td className="border-b border-gray-200 px-4 py-2">2025-01-01</td>
                    <td className="border-b border-gray-200 px-4 py-2">102</td>
                    <td className="border-b border-gray-200 px-4 py-2">Mouse</td>
                    <td className="border-b border-gray-200 px-4 py-2">25</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-2">2025-01-02</td>
                    <td className="border-b border-gray-200 px-4 py-2">101</td>
                    <td className="border-b border-gray-200 px-4 py-2">Headphones</td>
                    <td className="border-b border-gray-200 px-4 py-2">80</td>
                  </tr>
                  <tr className="bg-gray-50/60">
                    <td className="border-b border-gray-200 px-4 py-2">2025-01-03</td>
                    <td className="border-b border-gray-200 px-4 py-2">103</td>
                    <td className="border-b border-gray-200 px-4 py-2">Laptop</td>
                    <td className="border-b border-gray-200 px-4 py-2">1300</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">2025-01-03</td>
                    <td className="px-4 py-2">101</td>
                    <td className="px-4 py-2">Mouse</td>
                    <td className="px-4 py-2">25</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg sm:text-xl font-semibold text-text mb-2">
              Example 1: Total revenue and number of orders per customer
            </h4>
            <p className="text-text/80 mb-3 text-lg">
              This checks if you are comfortable with `GROUP BY`, `SUM`, and `COUNT`:
            </p>

            <div className="bg-slate-900 text-slate-100 text-sm sm:text-base font-mono rounded-lg p-4 mb-4 overflow-x-auto">
              <pre>
                <code>{`SELECT
  customer_id,
  SUM(amount)   AS total_revenue,
  COUNT(*)      AS order_count
FROM sales
GROUP BY customer_id
ORDER BY total_revenue DESC;`}</code>
              </pre>
            </div>

            <p className="text-text/80 mb-3 text-lg">Expected output on the sample data:</p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-200 text-left text-sm sm:text-base">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      customer_id
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      total_revenue
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      order_count
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-2">101</td>
                    <td className="border-b border-gray-200 px-4 py-2">1305</td>
                    <td className="border-b border-gray-200 px-4 py-2">3</td>
                  </tr>
                  <tr className="bg-gray-50/60">
                    <td className="border-b border-gray-200 px-4 py-2">103</td>
                    <td className="border-b border-gray-200 px-4 py-2">1300</td>
                    <td className="border-b border-gray-200 px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">102</td>
                    <td className="px-4 py-2">25</td>
                    <td className="px-4 py-2">1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg sm:text-xl font-semibold text-text mb-2">
              Example 2: 3-day moving average revenue (window function)
            </h4>
            <p className="text-text/80 mb-3 text-lg">
              Interviewers often test your understanding of window functions like `AVG(...) OVER`:
            </p>

            <div className="bg-slate-900 text-slate-100 text-sm sm:text-base font-mono rounded-lg p-4 mb-4 overflow-x-auto">
              <pre>
                <code>{`SELECT
  date,
  SUM(amount) AS daily_revenue,
  AVG(SUM(amount)) OVER (
    ORDER BY date
    ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
  ) AS moving_avg_3d
FROM sales
GROUP BY date
ORDER BY date;`}</code>
              </pre>
            </div>

            <p className="text-text/80 text-lg">
              Here we first aggregate by date, then use a window to compute the average revenue of
              the current day plus the previous two days — a common pattern for trend analysis
              questions.
            </p>
          </section>

          {/* Data Cleaning Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text mb-4">
              Data Cleaning Examples
            </h2>
            <p className="text-lg text-text/80 mb-6 leading-relaxed">
              In this round, companies want to see how you think about data quality. You should be
              able to spot issues quickly and explain trade-offs when choosing a cleaning strategy.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold text-text mb-3">Messy Dataset</h3>
            <p className="text-text/80 mb-3 text-lg">
              Imagine a raw customer transactions extract that looks like this:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-gray-200 text-left text-sm sm:text-base">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      customer_id
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      signup_date
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      country
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      monthly_spend
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-2">101</td>
                    <td className="border-b border-gray-200 px-4 py-2">2025/01/01</td>
                    <td className="border-b border-gray-200 px-4 py-2">us</td>
                    <td className="border-b border-gray-200 px-4 py-2">50</td>
                  </tr>
                  <tr className="bg-gray-50/60">
                    <td className="border-b border-gray-200 px-4 py-2">102</td>
                    <td className="border-b border-gray-200 px-4 py-2">01-02-2025</td>
                    <td className="border-b border-gray-200 px-4 py-2">USA</td>
                    <td className="border-b border-gray-200 px-4 py-2">NULL</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-2">103</td>
                    <td className="border-b border-gray-200 px-4 py-2"></td>
                    <td className="border-b border-gray-200 px-4 py-2">United States</td>
                    <td className="border-b border-gray-200 px-4 py-2">-10</td>
                  </tr>
                  <tr className="bg-gray-50/60">
                    <td className="border-b border-gray-200 px-4 py-2">102</td>
                    <td className="border-b border-gray-200 px-4 py-2">2025-02-01</td>
                    <td className="border-b border-gray-200 px-4 py-2">usa</td>
                    <td className="border-b border-gray-200 px-4 py-2">80</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg sm:text-xl font-semibold text-text mb-2">Issues identified</h4>
            <ul className="list-disc list-inside space-y-2 text-text/80 text-lg mb-6">
              <li>Missing values (empty signup date, `NULL` monthly spend).</li>
              <li>Duplicates (customer `102` appears twice).</li>
              <li>Inconsistent formats (different date formats, country naming variations).</li>
              <li>Invalid values (negative monthly spend).</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold text-text mb-3">Cleaned Dataset</h3>
            <p className="text-text/80 mb-3 text-lg">
              After cleaning, we might standardize formats, remove duplicates, and impute or fix
              incorrect values:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-gray-200 text-left text-sm sm:text-base">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      customer_id
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      signup_date
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      country
                    </th>
                    <th className="border-b border-gray-200 px-4 py-2 font-semibold text-text">
                      monthly_spend
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-2">101</td>
                    <td className="border-b border-gray-200 px-4 py-2">2025-01-01</td>
                    <td className="border-b border-gray-200 px-4 py-2">USA</td>
                    <td className="border-b border-gray-200 px-4 py-2">50</td>
                  </tr>
                  <tr className="bg-gray-50/60">
                    <td className="border-b border-gray-200 px-4 py-2">102</td>
                    <td className="border-b border-gray-200 px-4 py-2">2025-02-01</td>
                    <td className="border-b border-gray-200 px-4 py-2">USA</td>
                    <td className="border-b border-gray-200 px-4 py-2">80</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">103</td>
                    <td className="px-4 py-2">2025-01-15</td>
                    <td className="px-4 py-2">USA</td>
                    <td className="px-4 py-2">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-text/80 text-lg leading-relaxed">
              A strong Data Analyst explains the reasoning behind each cleaning step: when to drop
              rows versus impute values, how to standardize categories without losing information,
              and how cleaning choices might bias downstream metrics. Always tie your decisions
              back to the business question.
            </p>
          </section>

          {/* Statistics Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text mb-4">
              Statistics Fundamentals
            </h2>
            <p className="text-lg text-text/80 mb-6 leading-relaxed">
              Interviewers expect you to use statistics to interpret data, not just define terms.
              Keep explanations intuitive and connect them to simple, real-world examples.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-text mb-1">Mean</h3>
                <p className="text-text/80 text-lg">
                  The mean is the average value: sum of all observations divided by the count. For
                  example, if monthly spends are 40, 60, and 100, the mean is (40 + 60 + 100) / 3 =
                  66.7.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text mb-1">Median</h3>
                <p className="text-text/80 text-lg">
                  The median is the middle value when data is sorted. It is more robust to skew: if
                  most customers spend 20–50 but one spends 10,000, the median better represents a
                  “typical” customer than the mean.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text mb-1">Mode</h3>
                <p className="text-text/80 text-lg">
                  The mode is the most frequent value. For categorical data like device type or
                  country, the mode tells you the most common category (e.g., most users are on
                  “Mobile”).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text mb-1">Standard deviation &amp; variance</h3>
                <p className="text-text/80 text-lg">
                  Variance and standard deviation measure how spread out the data is. A low standard
                  deviation means most values are close to the mean; a high one means customer
                  spends are very uneven across the user base.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text mb-1">Correlation</h3>
                <p className="text-text/80 text-lg">
                  Correlation describes how two variables move together. For example, hours studied
                  and exam score usually have a positive correlation, while price and demand often
                  have a negative correlation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text mb-1">p-value</h3>
                <p className="text-text/80 text-lg">
                  A p-value tells you how likely your observed difference (or more extreme) is if
                  there were actually no real effect. In A/B tests, a small p-value (e.g., &lt; 0.05)
                  suggests the uplift is unlikely due to random chance alone.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-text mb-2">
              Topics commonly asked in interviews
            </h3>
            <ul className="list-disc list-inside space-y-2 text-text/80 text-lg">
              <li>Choosing between mean, median, and percentile for reporting.</li>
              <li>Interpreting standard deviation and detecting outliers.</li>
              <li>Explaining correlation vs. causation with examples.</li>
              <li>Reading A/B test results, confidence intervals, and p-values.</li>
              <li>Understanding sampling, bias, and how they affect conclusions.</li>
            </ul>
          </section>

          {/* MCQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text mb-4">MCQs</h2>
            <MCQGroup questions={mcqs} />
          </section>

          {/* Completion Button */}
          <div className="mt-10">
            <CompletionButton roundId="technical" />
          </div>
        </div>
      </div>
    </div>
  );
};

