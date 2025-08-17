// function Footer() {
//     return (
//         <div id="footer">
//             <i className="fa-brands fa-instagram"></i>
//             <i className="fa-brands fa-facebook"></i>
//             <i className="fa-brands fa-whatsapp"></i>
//             <i className="fa-brands fa-twitter"></i>
//         </div>
//     );
// }

// export default Footer;




function Footer() {
  return (
    <footer className="footer">
      {/* Top section */}
      <div className="footer-top">
        <p className="footer-intro">
          Looking for a perfect platfrom to learn? You are already on the right page! Start your journey with us today.
        </p>
        <div className="footer-social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>

      {/* Links section */}
      <div className="footer-links">
        <div className="footer-group">
          <ul>
            <li>About us</li>
            <li>FAQs</li>
            <li>How it works</li>
            <li>Privacy policy</li>
            <li>Payment policy</li>
          </ul>
        </div>
        <div className="footer-group">
          <ul>
            <li>Learners</li>
            <li>What's new</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-group">
          <ul>
            <li>Get in touch</li>
            <li>Email:  hello@zentrixia.tech</li>
            <li>Phone: +91 9876543211</li>
            <li>10:00 AM – 9:00 PM (Monday to Friday)</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <p>© 2025 Your Company. All rights reserved.</p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
