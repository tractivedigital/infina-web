import Link from 'next/link';

export function Content() {
  return (
    <section className="sec" style={{ paddingTop: '8px', background: 'transparent' }}>
      <div className="wrapx">
        <div className="lg-grid">
          <aside className="lg-side">
            <details className="lg-toc" id="lg-toc">
              <summary>Contents</summary>
              <ol>
                <li>
                  <a href="#1-introduction">1. Introduction</a>
                </li>
                <li>
                  <a href="#2-what-are-cookies">2. What are Cookies?</a>
                </li>
                <li>
                  <a href="#3-how-ifpl-uses-cookies">3. How IFPL Uses Cookies</a>
                </li>
                <li>
                  <a href="#4-types-of-cookies-we-use">4. Types of Cookies We Use</a>
                </li>
                <li>
                  <a href="#5-third-party-services-and-tools">5. Third-Party Services and Tools</a>
                </li>
                <li>
                  <a href="#6-how-to-manage-or-withdraw-your-consent">6. How to Manage or Withdraw Your Consent</a>
                </li>
                <li>
                  <a href="#7-grievances-and-contact-information">7. Grievances and Contact Information</a>
                </li>
                <li>
                  <a href="#8-review-and-updates-to-this-cookie-policy">8. Review and Updates to This Cookie Policy</a>
                </li>
              </ol>
            </details>
          </aside>
          <div className="lg-b">
            <h2 id="1-introduction">1. Introduction</h2>
            <p>
              This Cookie Policy (&quot;Policy&quot;) explains how Infina Finance Private Limited (&quot;IFPL&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies when you visit
              or interact with our website located at{' '}
              <Link href="/" rel="noopener">
                https://www.infina.co.in/
              </Link>{' '}
              (&quot;Website&quot;). Cookies help us improve our Website&apos;s performance, enhance user experience,
              and analyse traffic patterns. This Policy provides detailed information about the types of cookies we use,
              their purposes, your rights regarding their use, and how you can manage your preferences or withdraw
              consent. To the extent that information collected through cookies and similar technologies constitutes
              personal data under applicable law, including the Digital Personal Data Protection Act, 2023, IFPL
              processes such information in accordance with this Cookie Policy, our Privacy Policy, and applicable laws.
            </p>
            <h2 id="2-what-are-cookies">2. What are Cookies?</h2>
            <p>
              Cookies are small text files that a website places on your device when you visit it. These files store
              information about your browsing activities and preferences, enabling features such as secure logins,
              personalised settings, and analytical insights. In addition to cookies, we may deploy similar technologies
              such as web beacons or pixel tags in limited circumstances. However, the primary technologies utilised on
              our Website are cookies and local Storage-based authentication mechanisms, as described in this Policy.
            </p>
            <h2 id="3-how-ifpl-uses-cookies">3. How IFPL Uses Cookies</h2>
            <p>IFPL uses cookies and similar technologies to:</p>
            <ul>
              <li>Enable core site functionality (e.g., secure sessions, bot protection, and security controls);</li>
              <li>Understand user behaviour through analytics and usage statistics; and</li>
              <li>
                Optimise site performance and measure engagement. These technologies enable us to understand how users
                navigate our Website and interact with its features, allowing us to make informed decisions to improve
                our services. We engage third-party service providers, such as Google Analytics and Cloudflare, to
                analyse website usage and provide security services on our behalf. These third parties may collect
                aggregated data about Website visits. Such tracking cookies are only activated upon receiving explicit
                user consent, except where strictly necessary for security purposes. Our use of cookies is categorised
                into different types as elaborated in the ‘Types of Cookies We Use’ section below.
              </li>
            </ul>
            <p>
              We ensure that personal information collected via cookies is processed with user consent. Users are
              provided with clear options to manage their cookie preferences and may opt in or out of specific
              categories of cookies at any time. Our systems maintain a record of the cookie categories authorised by
              each user to ensure adherence to their stated preferences. First-party cookies and technologies are those
              set directly by IFPL when you visit or interact with our Website and platform. For our Website,
              authentication is handled via localStorage and JWT Bearer headers. Because these originate from the domain
              you are actively visiting, they help us provide a consistent, secure, and reliable experience across your
              interactions with our platform. Third-party cookies are set by domains other than IFPL — typically through
              integrations with external service providers such as analytics platforms (e.g., Google Analytics) and
              security services (e.g., Cloudflare). These cookies are used to:
            </p>
            <ul>
              <li>Analyse user engagement and website usage statistics;</li>
              <li>Measure site performance and track user interactions; and</li>
              <li>
                Provide bot protection, traffic management, and security controls. IFPL only deploys third-party cookies
                after obtaining your explicit consent, in accordance with applicable laws, except for strictly necessary
                security cookies (such as those set by Cloudflare). You are always given the choice to accept, reject,
                or manage the use of non-essential cookies through the cookie banner when you visit the Website, our
                cookie preference settings or your browser configuration.
              </li>
            </ul>
            <h2 id="4-types-of-cookies-we-use">4. Types of Cookies We Use</h2>
            <h3>A. Strictly Necessary / Security Cookies</h3>
            <p>
              These cookies and technologies are essential for the Website and platform to function properly. They
              enable basic features such as secure sessions, bot protection, traffic management, rate limiting, and
              security controls. These are required to deliver the requested service or resource. If these cookies are
              not enabled, the functionality and security of our Website may be impacted. The strictly necessary cookies
              that we deploy are listed below.
            </p>
            <div className="lg-tw">
              <table>
                <thead>
                  <tr>
                    <th>Cookie Key</th>
                    <th>Domain</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_cfuvid</td>
                    <td>infina.co.in (Cloudflare)</td>
                    <td>
                      Bot protection, traffic management, rate limiting, and security controls. This is a third-party
                      cookie set by Cloudflare. Retention: Session-based. Traffic/security information is shared with
                      Cloudflare.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>B. Analytics Cookies (Third-Party)</h3>
            <p>
              These cookies help us understand how users interact with the Website by collecting information on user
              visits, page performance, and usage statistics. The information collected is used to improve functionality
              and user experience. These cookies are set by Google Analytics and help us measure website traffic,
              understand user behaviour, and track interactions for our GA4 property. Analytics data is transmitted to
              Google Analytics. All Analytics Cookies are activated only after obtaining your consent. If you choose to
              disable or disallow these cookies, we may not be able to monitor and improve the performance of our
              Website effectively.
            </p>
            <div className="lg-tw">
              <table>
                <thead>
                  <tr>
                    <th>Cookie Key</th>
                    <th>Domain</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga</td>
                    <td>infina.co.in (Google Analytics)</td>
                    <td>
                      Distinguishes unique users by assigning a randomly generated number and generates website usage
                      statistics. Retention: Approximately 2 years. Analytics data is transmitted to Google Analytics.
                    </td>
                  </tr>
                  <tr>
                    <td>_ga_ZCNWJ76FCQ</td>
                    <td>infina.co.in (Google Analytics)</td>
                    <td>
                      Maintains session information and tracks user interactions for the GA4 property. Retention:
                      Approximately 2 years. Analytics and event data is transmitted to Google Analytics.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 id="5-third-party-services-and-tools">5. Third-Party Services and Tools</h2>
            <p>
              In addition to the cookies listed above, the following third-party services are integrated with our
              Website and may receive certain user data through the platform:
            </p>
            <ul>
              <li>Google Analytics 4 – Analytics and performance measurement;</li>
              <li>Google Tag Manager – Management of tracking and analytics tags;</li>
              <li>Cloudflare – Security, CDN, and DDoS protection;</li>
              <li>Webflow – Website hosting and CMS; and</li>
              <li>Google Fonts – Web font delivery (limited technical request data only).</li>
            </ul>
            <h2 id="6-how-to-manage-or-withdraw-your-consent">6. How to Manage or Withdraw Your Consent</h2>
            <p>
              You have the right to accept or decline cookies when visiting our Website. You may also withdraw your
              consent at any time by changing your browser settings or by using our cookie management tool. Below are
              guides to managing cookies in popular browsers:
            </p>
            <ul>
              <li>Chrome;</li>
              <li>Safari (Desktop) or Safari (Mobile);</li>
              <li>Internet Explorer: and</li>
              <li>
                Microsoft Edge. Additionally, you can opt out of third-party tracking by visiting: Google Analytics
                Opt-out (
                <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">
                  https://tools.google.com/dlpage/gaoptout
                </a>
                ). Note: Disabling some cookies may affect website performance or prevent certain features from
                functioning correctly.
              </li>
            </ul>
            <p>
              Note: Your cookie preferences and consent choices may be retained for our records/logs. Withdrawal of
              consent shall not affect the lawfulness of any processing undertaken prior to such withdrawal.
            </p>
            <h2 id="7-grievances-and-contact-information">7. Grievances and Contact Information</h2>
            <p>
              If you have any questions, grievances, or concerns regarding our use of cookies or this policy, you may
              contact the designated Grievance Officer.
            </p>
            <p>
              Email: <a href="mailto:grievanceredressal@infina.in">grievanceredressal@infina.in</a> Address: 7th Floor,
              Sheil Estate, Dani Corporate Park, 158, C.S.T Road, Kalina, Santacruz (East), Mumbai-400098, India.
            </p>
            <h2 id="8-review-and-updates-to-this-cookie-policy">8. Review and Updates to This Cookie Policy</h2>
            <p>
              We may update this Policy periodically to reflect changes in legal, technological, or operational
              practices. We will notify you of significant changes, where required, and will update the &quot;Last
              Updated&quot; date at the top of this Policy. Changes to this Policy shall be effective when they are
              posted on the Website. The latest version of this Policy will always be available on our Website link -
              infina.co.in The latest version of <a href="/terms-of-use">Terms of Use</a> The latest version of{' '}
              <a href="/privacy-policy">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
