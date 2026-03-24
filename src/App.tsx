/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Coffee, MapPin, Clock, Instagram, Facebook, Twitter, ChevronRight, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Coffee className="w-6 h-6 text-[#D4A373]" />
          <span className="font-serif text-2xl font-semibold tracking-tight text-[#F9F7F2]">Matteo Coffea</span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest text-[#F9F7F2]">
          <a href="#home" className="hover:text-[#D4A373] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#D4A373] transition-colors">Our Story</a>
          <a href="#menu" className="hover:text-[#D4A373] transition-colors">Menu</a>
          <a href="#location" className="hover:text-[#D4A373] transition-colors">Location</a>
          <button className="bg-[#D4A373] text-[#121212] px-6 py-2 rounded-full hover:bg-[#E5B484] transition-all">
            Order Now
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#121212] border-b border-white/5 px-6 py-8 flex flex-col gap-6 text-center uppercase tracking-widest text-sm text-[#F9F7F2]"
        >
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>Our Story</a>
          <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="#location" onClick={() => setIsOpen(false)}>Location</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
          alt="Coffee Shop Interior" 
          className="w-full h-full object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-sm mb-6 font-medium"
        >
          Artisanal Roasters • Bengaluru
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif mb-8 leading-tight"
        >
          Crafting the Perfect <br /> <span className="italic">Coffee Moment</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a href="#menu" className="inline-flex items-center gap-2 bg-[#D4A373] text-[#121212] px-8 py-4 rounded-full font-medium hover:bg-[#E5B484] transition-all group">
            Explore Our Menu
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000" 
              alt="Barista working" 
              className="rounded-3xl shadow-2xl opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#D4A373] text-[#121212] p-8 rounded-2xl hidden lg:block">
              <p className="font-serif text-3xl italic">"Coffee is a language in itself."</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#F9F7F2]">Our Bengaluru Roots</h2>
          <p className="text-lg text-[#AAA] leading-relaxed mb-6">
            Born in the vibrant streets of Bengaluru, Matteo Coffea is more than just a cafe. It's a sanctuary for those who appreciate the finer nuances of specialty coffee. 
          </p>
          <p className="text-lg text-[#AAA] leading-relaxed mb-8">
            We source our beans from the lush estates of Chikmagalur and Coorg, ensuring every cup tells a story of the soil it grew in. Our baristas are craftsmen, dedicated to the art of the perfect pour.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-2xl mb-2 italic text-[#D4A373]">Specialty Beans</h4>
              <p className="text-sm text-[#888]">Sourced directly from local estates.</p>
            </div>
            <div>
              <h4 className="font-serif text-2xl mb-2 italic text-[#D4A373]">Expert Brewing</h4>
              <p className="text-sm text-[#888]">Precision in every extraction.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const menuItems = [
    { name: "Signature Espresso", price: "₹220", desc: "Our house blend, rich and balanced." },
    { name: "Pour Over (V60)", price: "₹280", desc: "Single origin beans, clean and complex." },
    { name: "Cold Brew", price: "₹250", desc: "18-hour steep for a smooth, low-acid finish." },
    { name: "Matteo Special Latte", price: "₹260", desc: "Infused with subtle notes of cardamom." },
    { name: "Avocado Toast", price: "₹380", desc: "Sourdough, smashed avocado, chili flakes." },
    { name: "Classic Croissant", price: "₹180", desc: "Buttery, flaky, baked fresh daily." },
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-[#121212]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#F9F7F2]">The Curated Menu</h2>
        <p className="text-[#888] uppercase tracking-widest text-sm">A selection of our finest offerings</p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12">
        {menuItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-between items-start border-b border-white/10 pb-6 group cursor-default"
          >
            <div>
              <h3 className="text-xl font-serif mb-1 group-hover:text-[#D4A373] transition-colors text-[#F9F7F2]">{item.name}</h3>
              <p className="text-sm text-[#888] italic">{item.desc}</p>
            </div>
            <span className="font-medium text-[#D4A373]">{item.price}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="border border-[#D4A373] text-[#D4A373] px-10 py-3 rounded-full hover:bg-[#D4A373] hover:text-[#121212] transition-all">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 px-6 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#F9F7F2]">Visit Us in Bengaluru</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#D4A373]" />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1 text-[#F9F7F2]">Our Address</h4>
                <p className="text-[#AAA]">12th Main Rd, Indiranagar,<br />Bengaluru, Karnataka 560038</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#D4A373]" />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1 text-[#F9F7F2]">Opening Hours</h4>
                <p className="text-[#AAA]">Mon - Fri: 8:00 AM - 10:00 PM</p>
                <p className="text-[#AAA]">Sat - Sun: 7:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-8 bg-[#121212] rounded-3xl">
            <h4 className="font-serif text-2xl mb-4 italic text-[#D4A373]">Get in Touch</h4>
            <p className="text-[#AAA] mb-6">Planning an event or just want to say hi? We'd love to hear from you.</p>
            <a href="mailto:hello@matteocoffea.com" className="text-[#D4A373] font-medium underline underline-offset-8">hello@matteocoffea.com</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[500px] rounded-3xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/5"
        >
          {/* Placeholder for a map or high-quality location photo */}
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
            alt="Cafe Interior" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-[#F9F7F2] py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Coffee className="w-6 h-6 text-[#D4A373]" />
            <span className="font-serif text-3xl font-semibold italic">Matteo Coffea</span>
          </div>
          <p className="text-[#888] max-w-sm leading-relaxed">
            Elevating the coffee culture in Bengaluru through artisanal roasting and mindful brewing. Join us for a cup of excellence.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4 text-[#888] text-sm uppercase tracking-widest">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
            <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4A373] hover:text-[#121212] transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4A373] hover:text-[#121212] transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4A373] hover:text-[#121212] transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#666]">
        <p>© 2026 Matteo Coffea. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#D4A373] selection:text-[#121212]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
