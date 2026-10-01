import React from "react";

export default function HostingGuide() {
  return (
    <div className="hosting-guide">
      <div className="guide-header">
        <span className="guide-badge">EXPERIMENT 9 LAB GUIDE</span>
        <h2>Website Hosting & Domain Registration</h2>
        <p>Complete documentation for hosting this React application on GitHub Pages with Custom Domain DNS.</p>
      </div>

      <div className="guide-steps-grid">
        {/* Step 1 */}
        <div className="guide-card">
          <div className="step-num">Part A</div>
          <h3>Push to GitHub Repository</h3>
          <p>Initialize the Git repository and push source code to GitHub:</p>
          <pre className="code-block">
{`git init
git add .
git commit -m "Experiment 9: React registration website"
git branch -M main
git remote add origin https://github.com/nayanshii-ops/EVENTHUB.git
git push -u origin main`}
          </pre>
        </div>

        {/* Step 2 */}
        <div className="guide-card">
          <div className="step-num">Part B</div>
          <h3>Deploy to GitHub Pages</h3>
          <p>Automate build & push of the distribution folder using <code>gh-pages</code>:</p>
          <pre className="code-block">
{`# 1. Install deployment package
npm install gh-pages --save-dev

# 2. Build and publish to gh-pages branch
npm run deploy`}
          </pre>
          <div className="info-box">
            <strong>Vite Base URL:</strong> In <code>vite.config.js</code>, <code>base: "./"</code> ensures assets resolve correctly on GitHub Pages (<code>nayanshii-ops.github.io/EVENTHUB/</code>).
          </div>
        </div>

        {/* Step 3 */}
        <div className="guide-card">
          <div className="step-num">Part C</div>
          <h3>Custom Domain & DNS Setup</h3>
          <p>Point your custom purchased domain (e.g., <code>eventhub-college.com</code>) in DNS manager:</p>
          <div className="dns-table-wrapper">
            <table className="dns-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Name / Host</th>
                  <th>Points to / Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>A</code></td>
                  <td><code>@</code></td>
                  <td><code>185.199.108.153</code></td>
                </tr>
                <tr>
                  <td><code>A</code></td>
                  <td><code>@</code></td>
                  <td><code>185.199.109.153</code></td>
                </tr>
                <tr>
                  <td><code>A</code></td>
                  <td><code>@</code></td>
                  <td><code>185.199.110.153</code></td>
                </tr>
                <tr>
                  <td><code>A</code></td>
                  <td><code>@</code></td>
                  <td><code>185.199.111.153</code></td>
                </tr>
                <tr>
                  <td><code>CNAME</code></td>
                  <td><code>www</code></td>
                  <td><code>nayanshii-ops.github.io</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Step 4 */}
        <div className="guide-card">
          <div className="step-num">Part D</div>
          <h3>SSL Certificate & HTTPS</h3>
          <p>
            In your GitHub repository settings under <strong>Settings &gt; Pages</strong>:
          </p>
          <ul className="guide-checklist">
            <li>✅ Source: Deploy from branch <code>gh-pages / (root)</code></li>
            <li>✅ Custom domain: Enter your domain name</li>
            <li>✅ Check <strong>Enforce HTTPS</strong> (free Let's Encrypt SSL certificate)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
