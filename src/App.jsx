import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "./components/ui/button";


export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm border border-gray-100 flex items-center justify-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690705e79256be47234142cd/903212dc2_Screenshot2025-10-30at43059PM1.png"
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-12">
              {["Works", "Pricing", "Home", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm tracking-wide text-gray-500 hover:text-gray-900 transition-colors duration-300 font-[SF Pro Display,system-ui,sans-serif]"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right side circle (empty for design) */}
            <div className="w-12 h-12" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section  className="min-h-screen flex items-center !justify-center px-2 pt-8 bg-white font-[SF Pro Display,system-ui,sans-serif]">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">
          <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-4 md:pl-5"
    >
            <h2 className="text-xl tracking-tight text-gray-900 font-normal font-[SF Pro Display,system-ui,sans-serif] tracking-[-0.05em] bg-gradient-to-b from-[#000000] to-[#9b9b9b] bg-clip-text text-transparent font-regular text-5xl">
              Studio Aureo
            </h2>
            <h1 className="text-4xl md:text-5xl font-extralight text-gray-400 leading-tight tracking-[-0.05em] font-[SF Pro Display,system-ui,sans-serif]">
              Design that
              <br /> 
              feels effortless
            </h1>
             <a
    href="https://forms.gle/aad6nzaHo7GbEcp59"
    target="_blank"
    rel="noopener noreferrer"
  >
             <Button
              variant="outline"
              class="mt-6 px-9 py-1 border border-blue-700 text-blue-700 rounded-full hover:bg-gray-100 transition duration-300 font-[SF Pro Display,system-ui,sans-serif]"
            >
              Let's Talk
            </Button>
            </a>
          </motion.div>

           <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      className="!flex !justify-center"
    >
      <div className="!flex !items-center !justify-center">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690705e79256be47234142cd/df42b9663_Screenshot2025-11-02131436.png"
          alt="Profile"
          className="w-[600px] h-[600px] object-contain opacity-95 mix-blend-multiply"
        />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Less but better Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-6xl mb-40 font-extralight text-gray-900 font-[SF Pro Display,system-ui,sans-serif] tracking-[-0.05em] bg-gradient-to-b from-[#000000] to-[#9b9b9b] bg-clip-text text-transparent text-5xl !font-light !text-7xl"
          >
            Less, but better.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-xl font-extralight text-gray-900 font-[SF Pro Display,system-ui,sans-serif] tracking-[-0.05em] bg-gradient-to-b from-[#000000] to-[#9b9b9b] bg-clip-text text-transparent font-normal ">
              Design that speaks softly—and stays remembered.
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed font-[SF Pro Display,system-ui,sans-serif]">
              We are a minimal design studio crafting modern visuals for brands, products, and digital experiences.<br/>
              Our approach is simple: clarity, balance, and precision in every pixel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extralight text-center text-gray-900 mb-20 font-[SF Pro Display,system-ui,sans-serif] tracking-[-0.05em] bg-gradient-to-b from-[#000000] to-[#9b9b9b] bg-clip-text text-transparent font-light antialiased pb-[8px]">
          
            Our Design Philosophy
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "Simple.",
                description: "Less, but better.",
              },
              {
                title: "Valuable.",
                description: "Designs that serve purpose, not trends.",
              },
              {
                title: "Human.",
                description: "Emotions matter more than pixels.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center space-y-4 group"
              >
                <h4 className="text-3xl font-light text-gray-1200 group-hover:text-gray-600 transition-colors duration-300 font-[SF Pro Display,system-ui,sans-serif] tracking-[-0.05em] font-light">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed font-[SF Pro Display,system-ui,sans-serif]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h3 className="text-6xl font-extralight text-gray-900 font-[SF Pro Display,system-ui,sans-serif] tracking-[-0.05em] bg-gradient-to-b from-[#000000] to-[#9b9b9b] bg-clip-text text-transparent font-light ">
              How we work
            </h3>

            <div className="space-y-8">
              {[
                {
                  title: "Understand.",
                  description: "We listen first. We dig into your goals.",
                },
                {
                  title: "Design.",
                  description: "Ideas come to life. Intentional, clear, and effective.",
                },
                {
                  title: "Deliver.",
                  description: "Polished work that's ready to launch—and built to last.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="space-y-2"
                >
                  <h4 className="text-4xl font-light text-gray-900 font-[SF Pro Display,system-ui,sans-serif] tracking-[-0.05em] font-light ">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-400 font-[SF Pro Display,system-ui,sans-serif]">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690705e79256be47234142cd/e85f5315b_Screenshot2025-11-02131543.png"
              alt="Artistic design element"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-4xl font-light font-[SF Pro Display,system-ui,sans-serif] tracking-[-0.05em] bg-gradient-to-b from-[#000000] to-[#9b9b9b] bg-clip-text text-transparent antialiased pb-[8px] font-light">
            Everything your brand needs, designed simply.
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              "Brand Identity",
              "Product & UI Design",
              "Website Design",
              "Marketing & Communication Assets",
              "Design Subscription for Startups",
            ].map((service, index) => (
              <motion.div
                key={service}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Button
                  variant="outline"
                  className="w-full max-w-md !rounded-full border border-gray-300 bg-gray-50 !text-gray-700 font-[SF Pro Display,system-ui,sans-serif] font-light text-base py-4 hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300">
                  {service}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm text-blue-400 pt-8"
          >
            <a href="#" className="text-xs text-blue-500 mt-12 text-center leading-relaxed font-[SF Pro Display,system-ui,sans-serif] font-light">
              One studio. One monthly partnership.

            </a>
            <br />
            <a href="#" className="hover:text-blue-500 transition-colors text-xs text-blue-500 mt-12 text-center leading-relaxed font-[SF Pro Display,system-ui,sans-serif] font-light">
            Your full design team — without the overhead.
            </a>
          </motion.p>
        </div>
      </section>

      {/* Portfolio */}
     <section id="work" className="py-32 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <motion.h3
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.8 }}
      className="text-5xl font-extralight text-center text-gray-900 mb-16 font-[SF Pro Display,system-ui,sans-serif] tracking-[-0.05em] bg-gradient-to-b from-[#000000] to-[#9b9b9b] bg-clip-text text-transparent font-light "
    >
      Portfolio
    </motion.h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          image: "https://i.postimg.cc/tCQqKgHv/i-Phone-16-Pro.png",
          link: "https://www.figma.com/design/8K7b0WTKSvVa8uL4426hGW/IBT-APP?node-id=0-1&t=6oy9qfLaEEjtQeN8-1",
          title: "IBT App Design",
        },
        {
          image: "https://i.postimg.cc/ZKdGhPx1/Screenshot-2025-11-10-020145.png",
          link: "https://www.figma.com/design/rvfgzgDY6JkPTmuAdndrY6/Pitch-Deck?node-id=0-1&t=iK2OI7kIfsdJo826-1",
          title: "Pitch Deck",
        },
        {
          image: "https://i.postimg.cc/59mL0DNb/Frame-1.png",
          link: "https://www.figma.com/design/82Wfky6WU3pegG3MxdDKpP/Poster?node-id=0-1&t=0BfAmZu1qNtRVMa0-1",
          title: "Poster Design",
        },
        
        {
          image: "https://i.postimg.cc/t4wcYsCP/Whats-App-Image-2025-11-09-at-20-26-53-35206b5d.jpg",
          link: "https://www.figma.com/design/umBcBLBJsnDqyb2C54ntXT/Clarus?node-id=0-1&t=UJdUhloLrmrSlWmq-1",
          title: "Clarus Design",
        },
        
        
        
        // Add next projects here ↓
      ].map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="aspect-square bg-gray-100 rounded-lg overflow-hidden group cursor-pointer block shadow-sm hover:shadow-lg transition-shadow duration-500"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </motion.a>
      ))}
    </div>
  </div>
</section>


      {/* Fast Team */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="!text-5xl md:text-4xl font-extralight text-gray-900 leading-tight font-[SF Pro Display,system-ui,sans-serif] tracking-[-0.05em] bg-gradient-to-b from-[#000000] to-[#9b9b9b] bg-clip-text text-transparent font-light antialiased pb-[8px] ">
          
            A design team that moves as fast as you do.
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-sm text-gray-400 font-[SF Pro Display,system-ui,sans-serif]">
              Work with us monthly.
            </p>
            <p className="text-sm text-gray-400 font-[SF Pro Display,system-ui,sans-serif]">
              Unlimited design requests, delivered in Figma — at a single flat rate.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              variant="outline"
             class="px-6 py-1 border border-blue-700 text-blue-700 rounded-full bg-gray-50 transition duration-300 font-[SF Pro Display,system-ui,sans-serif]"
            >
              Explore plans
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extralight text-gray-900 font-[SF Pro Display,system-ui,sans-serif] tracking-[-0.05em]  font-light ">
          
            Let's build something
            <br />
            meaningful together.
          </motion.h3>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
  <a
  href="https://forms.gle/aad6nzaHo7GbEcp59"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    className="px-7 py-1 !rounded-full font-[SF Pro Display,system-ui,sans-serif] text-sm text-white bg-gradient-to-b from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-sm hover:shadow-md"
  >
    Get in Touch
  </Button>
  </a>  
</motion.div>

          

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6 pt-8"
          >
            {[
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Mail, href: "#" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>  
      </section>

        

      

      {/* Footer with Terms & Privacy */}
      <footer className="py-16 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Copyright */}
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center">
              <img 
                src="https://i.postimg.cc/Z5MGpfjv/Group-2.png"
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-900 font-[SF Pro Display,system-ui,sans-serif]">© 2025 Studio Aureo. All rights reserved.</p>
              <p className="text-xs text-gray-500 font-[SF Pro Display,system-ui,sans-serif]">Designed with intention. Built for clarity.</p>
            </div>
            <div className="flex justify-center gap-3 text-sm">
              <a href="#privacy" className="text-blue-600 hover:text-blue-700 transition-colors font-[SF Pro Display,system-ui,sans-serif]">Privacy Policy</a>
              <span className="text-gray-300">•</span>
              <a href="#terms" className="text-blue-600 hover:text-blue-700 transition-colors font-[SF Pro Display,system-ui,sans-serif]">Terms of Service</a>
              <span className="text-gray-300">•</span>
              <a href="#cookies" className="text-blue-600 hover:text-blue-700 transition-colors font-[SF Pro Display,system-ui,sans-serif]">Cookies Notice</a>
            </div>
          </div>


          {/* Privacy Policy */}
          <div id="privacy" className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">Privacy Policy</h3>
              <p className="text-xs text-gray-500 mb-6 font-[SF Pro Display,system-ui,sans-serif]">Last updated: October 2025</p>
              <p className="text-sm text-gray-700 mb-6 font-[SF Pro Display,system-ui,sans-serif]">At Studio Aureo, we respect your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or contact us.</p>
            </div>

            <div className="space-y-6 text-sm text-gray-700">
              <div>
                <h4 className="font-small text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">1. Information We Collect</h4>
                <ul className="space-y-1 ml-4 font-[SF Pro Display,system-ui,sans-serif]">
                  <li>- Contact details: When you reach out via our forms or email.</li>
                  <li>- Usage data: Non-personal analytics like page views and session time.</li>
                  <li>- Cookies: Small files used only to improve website performance and experience.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-small text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">2. How We Use Your Information</h4>
                <p className="leading-relaxed font-[SF Pro Display,system-ui,sans-serif]">We use the collected data to:</p>
                <ul className="space-y-1 ml-4 mt-2 font-[SF Pro Display,system-ui,sans-serif]">
                  <li>- Respond to inquiries and project requests.</li>
                  <li>- Improve our website experience.</li>
                  <li>- Share occasional studio updates (only if you subscribe).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-small text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">3. Data Security</h4>
                <p className="leading-relaxed font-[SF Pro Display,system-ui,sans-serif]">We keep your information secure using standard encryption and never sell or share it with third parties.</p>
              </div>

              <div>
                <h4 className="font-small text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">4. Your Rights</h4>
                <p className="leading-relaxed font-[SF Pro Display,system-ui,sans-serif]">You can request to access, edit, or delete your personal data anytime by emailing hello@studioaureo.com.</p>
              </div>

              <div>
                <h4 className="font-small text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">5. Contact Us</h4>
                <p className="leading-relaxed font-[SF Pro Display,system-ui,sans-serif]">For any privacy concerns, reach us at: hello@studioaureo.com</p>
              </div>
            </div>


          {/* Terms of Service */}
          <div id="terms" className="max-w-4xl mx-auto mb-16 space-y-8">
            <div>
              <h3 className="text-xl font-light text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">Terms of Service</h3>
              <p className="text-xs text-gray-500 mb-6 font-[SF Pro Display,system-ui,sans-serif]">Effective Date: October 2025</p>
              <p className="text-sm text-gray-700 mb-6 font-[SF Pro Display,system-ui,sans-serif]">Welcome to Studio Aureo. By accessing or using our website, you agree to the following terms.</p>
            </div>

            <div className="space-y-6 text-sm text-gray-700">
              <div>
                <h4 className="font-small text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">1. General Use</h4>
                <p className="leading-relaxed font-[SF Pro Display,system-ui,sans-serif]">Our website and its content are owned and operated by Studio Aureo. You may view, read, or share links for personal or professional interest, but you may not copy or distribute any material without written permission.</p>
              </div>

              <div>
                <h4 className="font-small text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">2. Services</h4>
                <p className="leading-relaxed font-[SF Pro Display,system-ui,sans-serif]">Any service or partnership with Studio Aureo will be governed by a separate written agreement or proposal shared with you before work begins.</p>
              </div>

              <div>
                <h4 className="font-small text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">3. Intellectual Property</h4>
                <p className="leading-relaxed font-[SF Pro Display,system-ui,sans-serif]">All visuals, text, logos, and design assets on this site are the intellectual property of Studio Aureo. Unauthorized use is prohibited.</p>
              </div>

              <div>
                <h4 className="font-small text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">4. Limitation of Liability</h4>
                <p className="leading-relaxed font-[SF Pro Display,system-ui,sans-serif]">Studio Aureo shall not be held responsible for any direct or indirect losses arising from website use.</p>
              </div>

              <div>
                <h4 className=" text-gray-900 mb-2 font-[SF Pro Display,system-ui,sans-serif]">5. Updates</h4>
                <p className="leading-relaxed font-[SF Pro Display,system-ui,sans-serif]">We may update these terms occasionally to stay aligned with industry standards.</p>
              </div>
            </div>
          </div>

          </div>
        </div>
      </footer>
    </div>
  );
}