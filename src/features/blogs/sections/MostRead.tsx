import Link from 'next/link';

export function MostRead() {
  return (
    <section className="sec" id="most-read">
      <div className="wrapx">
        <div className="sec-head">
          <h2 className="h2">
            Most read <em>guides</em>
          </h2>
        </div>
        <ol className="bl-ml">
          <li>
            <Link href="/blogs/what-is-loan-against-securities-and-how-it-works-in-india-a-complete-guide">
              <span className="bl-n">1</span>
              <span>What is Loan Against Securities and How It Works in India: A Complete Guide</span>
            </Link>
          </li>
          <li>
            <Link href="/blogs/how-loan-against-property-works-in-india-process-interest-rates-eligibility-benefits">
              <span className="bl-n">2</span>
              <span>How Loan Against Property Works in India: Process, Interest Rates, Eligibility & Benefits</span>
            </Link>
          </li>
          <li>
            <Link href="/blogs/what-is-esop-financing-and-why-do-employees-need-it-99f6f">
              <span className="bl-n">3</span>
              <span>What is ESOP Financing and Why Do Employees Need It</span>
            </Link>
          </li>
          <li>
            <Link href="/blogs/loan-against-shares-vs-loan-against-mutual-funds-which-is-right-for-you">
              <span className="bl-n">4</span>
              <span>Loan Against Shares vs Loan Against Mutual Funds: Which Is Right for You?</span>
            </Link>
          </li>
          <li>
            <Link href="/blogs/corporate-real-estate-finance-explained-a-complete-guide-for-developers-70092">
              <span className="bl-n">5</span>
              <span>Corporate Real Estate Finance Explained: A Complete Guide for Developers</span>
            </Link>
          </li>
        </ol>
      </div>
    </section>
  );
}
