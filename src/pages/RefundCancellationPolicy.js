import React from 'react';
import ImageCard from '../components/ImageCard'; // Replace with your ImageCard component
import PolicySection from '../components/PolicySection'; // Replace with your PolicySection component
import '../css/RefundCancellationPolicy.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images
import refundPolicyImage from '../assets/Fund.jpg';
import cancellationPolicyImage from '../assets/cancel.png';
import privacyPolicyImage from '../assets/privacy_policy.svg';
import termsOfServiceImage from '../assets/term1.jpg';

const refundPolicyContent = `
<ul>
    <li>All donations made to Sant Sewalal Maharaj Foundation are considered final and non-refundable unless otherwise determined by the NGO's management.</li>
    <li>Donors may request a refund of their donation within 7 days of the transaction if the donation was made in error or for any other valid reason. Refund requests beyond this period will not be considered.</li>
    <li>To request a refund, donors must contact <a href="mailto:support@santsewalalfoundation.org">support@santsewalalfoundation.org</a> and provide details of the donation (e.g., donation amount, date of donation, method of payment).</li>
    <li>Refunds will be processed using the original method of payment whenever possible. If the original payment method is not available, refunds may be issued by check or another method determined by the NGO.</li>
    <li>In exceptional circumstances, such as errors in processing donations or other valid reasons determined by the NGO, management reserves the right to refund donations beyond the specified period or under different conditions.</li>
    <li>For questions or concerns about this refund and cancellation policy, please contact <a href="mailto:support@santsewalalfoundation.org">support@santsewalalfoundation.org</a>.</li>
    <li>This refund and cancellation policy may be updated from time to time. Any changes will be posted on <a href="http://www.santsewalalfoundation.org">www.santsewalalfoundation.org</a> and will be effective immediately upon posting.</li>
</ul>
`;

const cancellationPolicyContent = `
<ul>
    <li>Cancellation of Recurring Donations</li>
    <li>Donors who have set up recurring donations may cancel future donations at any time by contacting <a href="mailto:support@santsewalalfoundation.org">support@santsewalalfoundation.org</a>.</li>
    <li>Cancellation requests for recurring donations must be received at least 15 days before the next scheduled donation date to ensure that the cancellation can be processed before the next payment is made.</li>
</ul>
`;

const privacyPolicyContent = `
<ul>
    <li>Introduction - Overview of your NGO's commitment to privacy.</li>
    <li>Information Collection - Types of information collected.</li>
    <li>Use of Information - How collected information is used.</li>
    <li>Data Security - Measures taken to protect personal information.</li>
    <li>Data Retention - How long personal data is retained.</li>
    <li>Rights of Data Subjects - Rights of individuals regarding their personal data.</li>
    <li>Updates to this Policy - How and when the policy will be updated.</li>
    <li>Contact Information - How individuals can contact the NGO regarding privacy concerns.</li>
</ul>
`;

const termsOfServiceContent = `
<ul>
    <li>Introduction - Explanation of the terms governing the use of your NGO's services/website.</li>
    <li>Use of Services - Acceptable use of your NGO's services.</li>
    <li>Donations and Contributions - Terms governing donations.</li>
    <li>Intellectual Property - Ownership of content on the NGO’s website and materials.</li>
    <li>Limitation of Liability - Disclaimer of warranties.</li>
    <li>Governing Law - Jurisdiction and applicable law governing the terms.</li>
    <li>Changes to Terms - How and when the terms will be updated.</li>
    <li>Contact Information - How users can contact the NGO regarding questions or concerns about the terms.</li>
</ul>
`;

const RefundCancellationPolicy = () => {
    return (
        <div>
            <Navbar />
            <div className="content-container">
                {/* Refund Policy */}
                <PolicySection
                    title="Refund Policy"
                    id="refund-policy"
                    content={refundPolicyContent}
                />
                <ImageCard
                    image={refundPolicyImage}
                    title="Refund Policy"
                    text={refundPolicyContent}
                />
                <PolicySection
                    title="Refund Policy"
                    content={refundPolicyContent}
                />
                {/* Cancellation policy */}
                <PolicySection
                    title="Cancellation Policy"
                    id="cancellation-policy"
                    content={cancellationPolicyContent}
                />
                <ImageCard
                    image={cancellationPolicyImage}
                    title="Cancellation Policy"
                    text={cancellationPolicyContent}
                />
                <PolicySection
                    title="Cancellation Policy"
                    content={cancellationPolicyContent}
                />
                {/* Privacy Policy */}
                <PolicySection
                    title="Privacy Policy"
                    id="privacy-policy"
                    content={privacyPolicyContent}
                />
                <ImageCard
                    image={privacyPolicyImage}
                    title="Privacy Policy"
                    text={privacyPolicyContent}
                />
                <PolicySection
                    title="Privacy Policy"
                    content={privacyPolicyContent}
                />
 {/* Term of service policy */}

            <PolicySection
                title="Terms of Service"
                id="terms-of-service"
                
            />s
            <ImageCard
                image={termsOfServiceImage}
                title="Terms of Service"
                text={termsOfServiceContent}
            />
             <PolicySection
               
                content={termsOfServiceContent}
            />
                      
            </div>
            <Footer/>
        </div>
    );
};

export default RefundCancellationPolicy;