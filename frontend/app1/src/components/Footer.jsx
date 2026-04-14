import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card mt-5 p-4 p-md-5 rounded-4 shadow-2xl"
      style={{ 
        background: "rgba(15, 23, 42, 0.95)", 
        border: "1px solid var(--glass-border)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
      }}
    >
      <div className="row text-center text-md-start">
        <div className="col-md-6 mb-4">
          <h5 className="fw-bold text-glow mb-3" style={{ color: "var(--primary-color)", fontSize: "1.2rem" }}>SUNBEAM HINJAWADI PUNE</h5>
          <p className="text-white opacity-75 mb-2">
            SunBeam IT Park, Phase 2, Rajiv Gandhi Infotech Park
          </p>
          <div className="d-flex flex-column gap-1 text-white opacity-50 small">
             <span>📞 +91 82 82 82 9805</span>
             <span>✉️ sit@sunbeaminfo.com</span>
          </div>
        </div>

        <div className="col-md-6 mb-4 text-md-end">
          <h5 className="fw-bold text-glow mb-3" style={{ color: "var(--secondary-color)", fontSize: "1.2rem" }}>SUNBEAM KARAD</h5>
          <p className="text-white opacity-75 mb-2">
            Anuda Chambers, Shanivar Peth
          </p>
          <div className="d-flex flex-column gap-1 text-white opacity-50 small">
             <span>📞 +91 82 82 82 9806</span>
             <span>✉️ sitkarad@sunbeaminfo.com</span>
          </div>
        </div>
      </div>

      <hr className="opacity-10 my-4" style={{ borderColor: "rgba(255,255,255,0.1)" }} />

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <p className="text-white opacity-50 small mb-0">
          © 2025 <strong className="text-white opacity-100">SunBeam Institute</strong>. All Rights Reserved.
        </p>
        <div className="d-flex gap-4 small">
          <a href="#" className="text-white opacity-50 text-decoration-none hover-opacity-100 transition-all">Terms</a>
          <a href="#" className="text-white opacity-50 text-decoration-none hover-opacity-100 transition-all">Privacy</a>
          <a href="#" className="text-white opacity-50 text-decoration-none hover-opacity-100 transition-all">Contact</a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
