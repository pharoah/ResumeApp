import React from 'react';

const Contact = () => (
        <div id="contact" className="contact">
            <h2>Get in Touch</h2>
            <div id="contact-form">
                <form method="POST" action="https://formspree.io/email@email.com">
                    <input type="hidden" name="_subject" value="Contact request from personal website" />
                    <input type="email" name="_replyto" placeholder="Your email" required />
                    <textarea name="message" placeholder="Your message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        );
    


export default Contact
