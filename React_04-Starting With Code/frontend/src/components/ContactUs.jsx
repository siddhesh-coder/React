import React from 'react';


const ContactUs = () => {
  const toggleAnswer = (index) => {
    const answer = document.getElementById(`faq-answer-${index}`);
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  };

  return (
    <div className="help-page-container">
      <h2 className="section-title">Help Center</h2>

      {/* Frequently Asked Questions (FAQs) Section */}
      <section className="faq-section">
        <h3 className="subsection-title">Frequently Asked Questions</h3>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                {faq.question}
              </div>
              <div id={`faq-answer-${index}`} className="faq-answer">
                {faq.answer}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Information Section */}
      <section className="contact-section">
        <h3 className="subsection-title">Contact Information</h3>
        <p>
          If you need further assistance or have any inquiries, feel free to reach out to our support team.
        </p>
        <p className="contact-info">
          <strong>Email:</strong> support@pizza.com
        </p>
        <p className="contact-info">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
      </section>
    </div>
  );
};

const faqs = [
  {
    question: "Is single order from many restaurants possible?",
    answer: "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
  },
  {
    question: 'Can I modify my order after placing it?',
    answer: 'Unfortunately, once an order is placed, modifications are not allowed.',
  },
  {
    question: 'How do I track my delivery?',
    answer: 'You can track your delivery in real-time through our app. [Provide more details]',
  },
  {
    question: "I want to cancel my order",
    answer: "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
  },
  {
    question: "Is there a minimum order value?",
    answer: "We have no minimum order value and you can order for any amount. ",
  },
  {
    question: "How long do you take to deliver?",
    answer: "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
  },
];

export default ContactUs;
