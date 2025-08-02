import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-card">
      <h2 className="terms-title">Good Luck Casino Terms & Conditions</h2>

      <div className="terms-content">
        <p>Welcome to Good Luck Casino. By using this site, you agree to the terms below.</p>

        <h2>1. Introduction</h2>
        <p>1.1. By accessing or using any part of the Good Luck Casino website or mobile app (the "Platform"), including registering an account, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any additional rules associated with specific games or features.</p>
        <p>1.2. If you do not agree with these Terms, please do not use or register on the Platform.</p>
        <p>1.3. We may modify these Terms at any time. Continued use of the Platform indicates your acceptance of the changes.</p>
        <p>1.4. References to "you" or "player" refer to any individual using our Platform. "Games" refers to all casino, card, sports, and promotional games offered.</p>

        <h2>2. Account Registration and Use</h2>
        <p>2.1. You must be at least 18 years of age or the legal age in your jurisdiction to use our Platform.</p>
        <p>2.2. It is your responsibility to ensure that using our Platform is legal in your country.</p>
        <p>2.3. You must provide accurate, up-to-date personal information upon registration. Duplicate accounts or false details may lead to suspension.</p>
        <p>2.4. Your account is personal and must not be shared, sold, or transferred to others. You are responsible for maintaining the confidentiality of your login credentials.</p>
        <p>2.5. Good Luck Casino reserves the right to suspend or close any accounts suspected of fraudulent, abusive, or illegal behavior.</p>

        <h2>3. Deposits and Withdrawals</h2>
        <p>3.1. Players can fund their account using approved payment methods listed on the deposit page. All funds must originate from legal sources.</p>
        <p>3.2. Withdrawals require successful KYC verification, including identity and banking documentation.</p>
        <p>3.3. A deposit must be wagered at least once before it can be withdrawn. Some payment channels may have additional rules.</p>
        <p>3.4. Good Luck Casino reserves the right to apply limits to deposits and withdrawals and may process large payouts in installments.</p>

        <h2>4. Bonuses and Promotions</h2>
        <p>4.1. Bonuses are subject to specific terms and wagering requirements. Abuse of bonuses (e.g., multiple accounts) may result in forfeiture of winnings.</p>
        <p>4.2. Good Luck Casino reserves the right to cancel bonuses if not used within the specified time.</p>

        <h2>5. Fair Play & Anti-Fraud</h2>
        <p>5.1. Any form of cheating, collusion, or use of unauthorized software is strictly prohibited.</p>
        <p>5.2. If we suspect foul play, your account may be suspended and winnings forfeited. Legal action may be taken where necessary.</p>

        <h2>6. Inactive Accounts & Closure</h2>
        <p>6.1. Accounts inactive for over 6 months may be closed. Any balance may be subject to administrative fees or forfeiture.</p>
        <p>6.2. You may request closure of your account at any time by contacting customer support.</p>

        <h2>7. Personal Information</h2>
        <p>7.1. Your personal data will be processed according to our Privacy Policy. We use reasonable security to protect your information.</p>

        <h2>8. Technical Failures</h2>
        <p>8.1. In the event of a system crash or interrupted gameplay, affected games may be voided or reprocessed at our discretion.</p>

        <h2>9. Customer Support</h2>
        <p>9.1. For any queries, complaints, or support requests, contact us at <a href="mailto:support@goodluckcasino.com">support@goodluckcasino.com</a> or via the live chat option on the Platform.</p>

        <h2>10. Governing Law</h2>
        <p>10.1. These Terms shall be governed by the laws of the jurisdiction in which Good Luck Casino is registered.</p>

        <h4 className="terms-footer">
          By registering or using our Platform, you agree to these Terms & Conditions.
        </h4>
      </div>
    </div>
  );
};

export default TermsAndConditions;