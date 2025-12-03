// Mock email data with AI analysis for testing

import type { Email } from "../models/email";

export const MOCK_EMAILS: Email[] = [
  {
    id: 1,
    sender: '"Straive via LinkedIn" <newsletters-noreply@linkedin.com>',
    recipient: '"Kent Harold Belen" <belenkentharold@gmail.com>',
    subject: "What Sets Straive's LLM Approach Apart?",
    body: "In this leadership podcast, Anand S, Head of Innovation and LLM Psychologist, outlines Straive's approach to AI operationalization...",
    attachments: [],
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    phishing_score_cti: null,
    cti_flags: [],
    extracted_urls: [
      "https://www.linkedin.com/comm/feed/",
      "https://www.straive.com/agentic-ai-solutions/",
      "https://youtu.be/3f4yKHLkji8"
    ],
    sender_domain: "linkedin.com",
    sender_ip: "150.171.22.12",
    sender_name: "Straive via LinkedIn",
    spf_result: "pass",
    dkim_result: "pass",
    dmarc_result: "pass",
    headers: {
      from: '"Straive via LinkedIn" <newsletters-noreply@linkedin.com>',
      to: '"Kent Harold Belen" <belenkentharold@gmail.com>',
      subject: "What Sets Straive's LLM Approach Apart?",
      date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
    },
    attachment_hashes: [],
    detailed_analysis: {
      domains: {
        "linkedin.com": {
          identifier: "linkedin.com",
          type: "domain",
          stats: {
            timeout: 0,
            harmless: 65,
            malicious: 0,
            suspicious: 0,
            undetected: 30
          },
          reputation_score: 100,
          threat_level: "clean",
          confidence: "low",
          malicious_engines: [],
          suspicious_engines: [],
          categories: ["business networking", "business", "professional networking"],
          tags: [],
          last_analysis_date: new Date().toISOString(),
          popularity_ranks: {
            "Alexa": { rank: 12, timestamp: 1684083480 },
            "Cisco Umbrella": { rank: 278, timestamp: 1764686295 }
          }
        }
      },
      ips: {
        "150.171.22.12": {
          identifier: "150.171.22.12",
          type: "ip",
          stats: {
            timeout: 0,
            harmless: 62,
            malicious: 0,
            suspicious: 0,
            undetected: 33
          },
          reputation_score: 100,
          threat_level: "clean",
          confidence: "low",
          malicious_engines: [],
          suspicious_engines: [],
          categories: [],
          tags: [],
          last_analysis_date: new Date().toISOString(),
          popularity_ranks: {}
        }
      },
      urls: {},
      summary: {
        total_checks: 2,
        malicious_detections: 0,
        suspicious_detections: 0,
        reputation_score: 200,
        confidence_level: "low"
      }
    },
    threat_summary: {
      confidence: "low",
      overall_risk: "clean",
      total_analyzed: 2,
      malicious_found: 0,
      suspicious_found: 0,
      average_reputation: 100
    },
    ai_verdict: "legitimate",
    ai_reasoning: `The email appears to be legitimate based on the following analysis:

Sender Authenticity: The sender is listed as "Straive via LinkedIn" with the email address newsletters-noreply@linkedin.com. The linkedin.com domain in the sender's email address is a strong indicator of legitimacy, as LinkedIn is a well-known professional networking platform. The newsletters-noreply part suggests it's an automated communication from LinkedIn for newsletters.

Email Headers: The Received header shows the email was routed through maile-cb.linkedin.com before reaching Google's mail servers (mx.google.com), further confirming a legitimate origin from LinkedIn. The use of TLS encryption (version=TLS1_3) is also standard for secure email communication.

Threat Intelligence Data (VirusTotal & URLhaus):
- VirusTotal: All checked domains (specifically linkedin.com) and IPs have a "clean" reputation with zero malicious or suspicious detections. The overall reputation score of 200 (on a scale where higher is better for legitimate) is good, and the confidence level is noted as "low" which is typical for broad domain checks but doesn't indicate maliciousness.
- URLhaus: All analyzed URLs returned "no_results", meaning no known malicious activity was associated with them. One URL was marked as invalid_url, which is likely a formatting issue with how the URL was parsed and doesn't indicate malicious intent in the context of the other findings.

Absence of Suspicious URLs: The analysis explicitly states "No redirect URLs detected" and that the "actual destination URLs have been decoded and analyzed." This is crucial. Phishing attempts often rely on redirecting users to malicious websites through deceptive links. The lack of any suspicious URLs found in the analysis is a significant positive sign.

Email Content: The subject line "What Sets Straive's LLM Approach Apart?" and the snippet mentioning a "leadership podcast" with "Anand S, Head of Innovation and LLM Psychologist" suggest a professional, content-driven communication likely related to industry insights. This aligns with typical newsletter content from a company like Straive, promoted through a platform like LinkedIn.

In summary, the combination of a legitimate sender domain, proper email routing, clean threat intelligence reports for all related domains and IPs, and the absence of any suspicious or malicious URLs strongly indicates that this email is a legitimate newsletter from Straive via LinkedIn.`,
    cti_confidence: "low"
  },
  {
    id: 2,
    sender: "support@paypal-verify.com",
    recipient: "user@example.com",
    subject: "Urgent: Verify Your Account",
    body: "Your PayPal account has been suspended. Click here to verify your identity immediately.",
    attachments: [],
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    phishing_score_cti: 0.89,
    cti_flags: ["suspicious_domain", "phishing_keywords", "urgency_tactics"],
    extracted_urls: ["http://paypal-verify.com/login"],
    sender_domain: "paypal-verify.com",
    sender_ip: "185.220.101.45",
    sender_name: "PayPal Support",
    spf_result: "fail",
    dkim_result: "fail",
    dmarc_result: "fail",
    headers: {
      from: "support@paypal-verify.com",
      to: "user@example.com",
      subject: "Urgent: Verify Your Account",
      date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
    },
    attachment_hashes: [],
    detailed_analysis: {
      domains: {
        "paypal-verify.com": {
          identifier: "paypal-verify.com",
          type: "domain",
          stats: {
            malicious: 8,
            suspicious: 2,
            harmless: 0,
            undetected: 5
          },
          reputation_score: 15,
          threat_level: "critical",
          confidence: "high",
          malicious_engines: [
            { engine: "Kaspersky", result: "phishing" },
            { engine: "BitDefender", result: "malicious" }
          ],
          suspicious_engines: [],
          categories: ["phishing", "suspicious"],
          tags: ["phishing", "suspicious-domain"],
          last_analysis_date: new Date().toISOString(),
          popularity_ranks: {}
        }
      },
      ips: {},
      urls: {},
      summary: {
        total_checks: 15,
        malicious_detections: 8,
        suspicious_detections: 2,
        reputation_score: 15,
        confidence_level: "high"
      }
    },
    threat_summary: {
      confidence: "high",
      overall_risk: "malicious",
      total_analyzed: 15,
      malicious_found: 8,
      suspicious_found: 2,
      average_reputation: 15
    },
    ai_verdict: "phishing",
    ai_reasoning: `This email is a phishing attempt based on the following red flags:

Domain Mismatch: The sender domain "paypal-verify.com" is NOT PayPal's legitimate domain (paypal.com). This is a classic phishing technique where attackers register domains that look similar to legitimate brands.

Failed Authentication: All email authentication checks failed:
- SPF: FAIL - The sending server is not authorized to send emails for this domain
- DKIM: FAIL - The email signature cannot be verified
- DMARC: FAIL - The domain owner's policy to reject fraudulent emails was triggered

Threat Intelligence: VirusTotal analysis shows:
- 8 out of 15 security engines flagged this domain as MALICIOUS
- Kaspersky identified it as "phishing"
- BitDefender marked it as "malicious"
- Reputation score of only 15/100 (extremely poor)
- Domain categorized as "phishing" and "suspicious"

Urgency Tactics: The subject line "Urgent: Verify Your Account" is designed to create panic and pressure the recipient into acting quickly without thinking. This is a common psychological manipulation technique used in phishing.

Suspicious Content: The email claims the account has been "suspended" and requires immediate verification. PayPal would never suspend accounts via email and would direct users to log in through their official website/app, not through email links.

Malicious URL: The extracted URL "http://paypal-verify.com/login" uses HTTP (not secure HTTPS) and points to the fake domain, likely leading to a credential harvesting page.

High Confidence Assessment: With 8 malicious detections and multiple failed authentication checks, the confidence level for this phishing assessment is HIGH.

RECOMMENDATION: Delete this email immediately. Never click links in suspicious emails claiming to be from financial institutions. Always navigate directly to the official website by typing the URL yourself.`,
    cti_confidence: "high"
  },
  {
    id: 3,
    sender: "noreply@amazon.com",
    recipient: "user@example.com",
    subject: "Your Order Confirmation #AMZ-8472",
    body: "Thank you for your recent purchase. Your order has been confirmed and will ship within 2-3 business days.",
    attachments: ["invoice.pdf"],
    timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    phishing_score_cti: 0.12,
    cti_flags: [],
    extracted_urls: ["https://www.amazon.com/orders"],
    sender_domain: "amazon.com",
    sender_ip: "52.94.236.248",
    sender_name: "Amazon",
    spf_result: "pass",
    dkim_result: "pass",
    dmarc_result: "pass",
    headers: {
      from: "noreply@amazon.com",
      to: "user@example.com",
      subject: "Your Order Confirmation #AMZ-8472",
      date: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString()
    },
    attachment_hashes: ["a1b2c3d4e5f6"],
    detailed_analysis: {
      domains: {},
      ips: {},
      urls: {},
      summary: {
        total_checks: 8,
        malicious_detections: 0,
        suspicious_detections: 0,
        reputation_score: 95,
        confidence_level: "high"
      }
    },
    threat_summary: {
      confidence: "high",
      overall_risk: "clean",
      total_analyzed: 8,
      malicious_found: 0,
      suspicious_found: 0,
      average_reputation: 95
    },
    ai_verdict: "legitimate",
    ai_reasoning: `This email appears to be legitimate based on comprehensive analysis:

Verified Sender: The email originates from "amazon.com", Amazon's official domain. The sender address "noreply@amazon.com" is a standard no-reply address used for automated transactional emails.

Perfect Authentication: All three email authentication protocols passed:
- SPF: PASS - The sending server is authorized
- DKIM: PASS - Email signature verified
- DMARC: PASS - Sender domain authenticated

Clean Threat Intelligence: Security analysis shows:
- 0 malicious detections across all security engines
- 0 suspicious flags
- Reputation score: 95/100 (excellent)
- High confidence level in the assessment

Legitimate Infrastructure: The sender IP (52.94.236.248) belongs to Amazon's AWS infrastructure, which is expected for Amazon's transactional emails.

Appropriate Content: The subject and body contain order confirmation information, which is a standard transactional email type. The presence of an invoice PDF attachment is normal for e-commerce order confirmations.

Secure URL: The extracted URL points to amazon.com's official orders page using HTTPS (secure protocol).

Low Phishing Score: CTI phishing score of 0.12 (on a scale of 0-1) indicates very low risk.

No Red Flags: No urgency tactics, no suspicious requests, no unusual links, and no authentication failures.

CONCLUSION: This is a legitimate transactional email from Amazon.`,
    cti_confidence: "high"
  },
  {
    id: 4,
    sender: "alerts@unknown-bank.net",
    recipient: "user@example.com",
    subject: "Unusual Activity Detected",
    body: "We noticed unusual activity on your account. Please verify your transactions.",
    attachments: [],
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    phishing_score_cti: 0.67,
    cti_flags: ["suspicious_domain"],
    extracted_urls: ["http://unknown-bank.net/verify"],
    sender_domain: "unknown-bank.net",
    sender_ip: "192.168.1.100",
    sender_name: "Bank Alerts",
    spf_result: "neutral",
    dkim_result: "fail",
    dmarc_result: "none",
    headers: {
      from: "alerts@unknown-bank.net",
      to: "user@example.com",
      subject: "Unusual Activity Detected",
      date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
    },
    attachment_hashes: [],
    detailed_analysis: {
      domains: {},
      ips: {},
      urls: {},
      summary: {
        total_checks: 6,
        malicious_detections: 1,
        suspicious_detections: 3,
        reputation_score: 42,
        confidence_level: "medium"
      }
    },
    threat_summary: {
      confidence: "medium",
      overall_risk: "suspicious",
      total_analyzed: 6,
      malicious_found: 1,
      suspicious_found: 3,
      average_reputation: 42
    },
    ai_verdict: "suspicious",
    ai_reasoning: `This email exhibits multiple suspicious characteristics that warrant caution:

Questionable Domain: The sender domain "unknown-bank.net" uses a generic ".net" extension rather than a country-specific banking domain or well-known financial institution domain. Legitimate banks typically use their branded domains.

Mixed Authentication Results:
- SPF: NEUTRAL - Not a strong pass, indicates potential configuration issues
- DKIM: FAIL - Email signature cannot be verified
- DMARC: NONE - No domain policy in place (legitimate banks have strict policies)

Moderate Threat Intelligence: Analysis reveals:
- 1 malicious detection
- 3 suspicious flags
- Reputation score: 42/100 (below average)
- Medium confidence level
- Phishing score: 0.67 (moderately high)

Vague Sender Identity: "Bank Alerts" is a generic name that doesn't identify a specific financial institution. Legitimate banks clearly identify themselves.

Generic Alert Language: The message uses vague language about "unusual activity" without specific details. This is common in phishing attempts to apply broadly.

Insecure URL: The link uses HTTP (not HTTPS), which is highly unusual for any financial institution that should prioritize security.

Private IP Range: The sender IP (192.168.1.100) is from a private IP range, which suggests potential email spoofing or misconfiguration.

RECOMMENDATION: Exercise extreme caution. Do not click any links. If you have an account with this institution, contact them directly through their official phone number or website (not through this email) to verify if this alert is legitimate.`,
    cti_confidence: "medium"
  }
];
