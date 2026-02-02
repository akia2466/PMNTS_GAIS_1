
import React, { useEffect } from 'react';

// Global declaration for Leaflet 'L'
declare global {
  interface Window {
    L: any;
  }
}

const Contact: React.FC = () => {
  useEffect(() => {
    // School coordinates: 9°24'08"S 147°09'51"E -> -9.402222, 147.164167
    const schoolCoords: [number, number] = [-9.402222, 147.164167];
    
    // Initialize map if Leaflet is loaded and div is ready
    if (window.L && document.getElementById('map')) {
      const map = window.L.map('map').setView(schoolCoords, 16);
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // School marker
      const schoolIcon = window.L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      window.L.marker(schoolCoords, { icon: schoolIcon }).addTo(map)
        .bindPopup('<div class="font-bold text-primary">Port Moresby National High School</div><div class="text-xs text-gray">Hohola, NCD</div>')
        .openPopup();
    }
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
       <section className="relative h-[40vh] flex items-center overflow-hidden bg-primary text-center">
         <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1577563908411-5077b6ac7a20?auto=format&fit=crop&q=80&w=1920" alt="Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-primary opacity-70 z-10"></div>
         </div>
         <div className="max-w-[1400px] mx-auto px-5 relative z-20 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary uppercase tracking-tight">Contact Us</h1>
            <p className="text-secondary/80 text-sm md:text-base mt-4 max-w-2xl mx-auto font-semibold">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
         </div>
       </section>

       <section className="max-w-[1400px] mx-auto px-5 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column: Contact Info, Socials, and Getting Here */}
            <div className="space-y-16">
               <div>
                  <h2 className="text-3xl font-bold text-primary uppercase tracking-tight mb-4">Get in Touch</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-accent shrink-0 mt-1"><i className="fas fa-phone-alt"></i></div>
                        <div>
                          <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-2">Phone</h4>
                          <p className="text-sm text-gray font-bold">+675 325 6789</p>
                          <p className="text-sm text-gray font-bold">+675 325 6790</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-accent shrink-0 mt-1"><i className="fas fa-envelope"></i></div>
                        <div>
                          <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-2">Email</h4>
                          <p className="text-sm text-gray font-bold">info@pmnhs.edu.pg</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-accent shrink-0 mt-1"><i className="fas fa-map-marker-alt"></i></div>
                        <div>
                          <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-2">Address</h4>
                          <p className="text-sm text-gray font-bold">Hohola, Port Moresby<br />Papua New Guinea</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-accent shrink-0 mt-1"><i className="fas fa-clock"></i></div>
                        <div>
                          <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-2">Office Hours</h4>
                          <p className="text-xs text-gray"><span className="font-bold">Monday - Friday:</span> 8:00 AM - 4:00 PM</p>
                          <p className="text-xs text-gray"><span className="font-bold">Saturday:</span> 9:00 AM - 12:00 PM</p>
                          <p className="text-xs text-gray"><span className="font-bold">Sunday:</span> Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>

               <div>
                 <h3 className="text-xl font-bold text-primary uppercase tracking-tight mb-8">Connect With Us</h3>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                   <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-light shadow-sm">
                     <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xl"><i className="fab fa-facebook-f"></i></div>
                     <div>
                       <h5 className="font-bold text-[10px] uppercase">Facebook</h5>
                       <p className="text-[9px] text-gray">@PMNHS.Official</p>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-light shadow-sm">
                     <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center text-xl">𝕏</div>
                     <div>
                       <h5 className="font-bold text-[10px] uppercase">Twitter</h5>
                       <p className="text-[9px] text-gray">@PMNHS_Official</p>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-light shadow-sm">
                     <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-lg flex items-center justify-center text-xl"><i className="fab fa-instagram"></i></div>
                     <div>
                       <h5 className="font-bold text-[10px] uppercase">Instagram</h5>
                       <p className="text-[9px] text-gray">@pmnhs_official</p>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-light shadow-sm">
                     <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center text-xl"><i className="fab fa-tiktok"></i></div>
                     <div>
                       <h5 className="font-bold text-[10px] uppercase">TikTok</h5>
                       <p className="text-[9px] text-gray">@pmnhs_official</p>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-light shadow-sm">
                     <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center text-xl"><i className="fab fa-youtube"></i></div>
                     <div>
                       <h5 className="font-bold text-[10px] uppercase">YouTube</h5>
                       <p className="text-[9px] text-gray">PMNHS Channel</p>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-light shadow-sm">
                     <div className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center text-xl"><i className="fab fa-telegram-plane"></i></div>
                     <div>
                       <h5 className="font-bold text-[10px] uppercase">Telegram</h5>
                       <p className="text-[9px] text-gray">PMNHS_Updates</p>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Getting Here - Moved Under Connect With Us */}
               <div className="bg-white p-8 rounded-3xl border border-gray-light shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-6 uppercase">Getting Here</h4>
                  <div className="space-y-6">
                     {[
                       { icon: "fas fa-bus", title: "By Bus", text: "Regular bus services available from city center. Routes 10, 15, and 22 stop near the school." },
                       { icon: "fas fa-car", title: "By Car", text: "Ample parking available on campus. Follow Hohola Road and look for institutional signage." },
                       { icon: "fas fa-shuttle-van", title: "School Shuttle", text: "School-operated shuttle services available from designated pickup points throughout the city." }
                     ].map((way, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center text-accent shrink-0 mr-4"><i className={`${way.icon} text-sm`}></i></div>
                          <div className="space-y-1">
                            <h5 className="font-bold text-primary text-xs uppercase">{way.title}</h5>
                            <p className="text-[10px] text-gray leading-relaxed">{way.text}</p>
                          </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Right Column: Message Form */}
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 border border-gray-light relative overflow-hidden h-fit">
                 <div className="relative z-10">
                   <h3 className="text-2xl font-bold text-primary mb-10 uppercase tracking-tight">Send us a Message</h3>
                   <form className="space-y-6">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray mb-2 tracking-widest">Full Name</label>
                        <input type="text" className="w-full bg-light border border-gray-light rounded-xl p-4 text-sm focus:outline-none focus:border-secondary transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray mb-2 tracking-widest">Email Address</label>
                        <input type="email" className="w-full bg-light border border-gray-light rounded-xl p-4 text-sm focus:outline-none focus:border-secondary transition-all" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray mb-2 tracking-widest">Subject</label>
                        <input type="text" className="w-full bg-light border border-gray-light rounded-xl p-4 text-sm focus:outline-none focus:border-secondary transition-all" placeholder="What is this regarding?" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-gray mb-2 tracking-widest">Message</label>
                        <textarea className="w-full bg-light border border-gray-light rounded-xl p-4 text-sm focus:outline-none focus:border-secondary transition-all h-32 resize-none" placeholder="Tell us more about your inquiry..."></textarea>
                      </div>
                      <button className="w-full bg-primary text-secondary py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-sm hover:bg-dark transition-all shadow-xl shadow-primary/20 transform active:scale-[0.98]">
                        Send Message
                      </button>
                   </form>
                 </div>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-0"></div>
              </div>
            </div>
          </div>
       </section>

       {/* Map Section Full Width at Bottom */}
       <section className="max-w-[1400px] mx-auto px-5 pb-24">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-light overflow-hidden">
            <h3 className="text-2xl font-bold text-primary uppercase tracking-tight mb-8">Campus Map & Directions</h3>
            <div id="map" className="w-full h-[500px] bg-light rounded-2xl shadow-inner relative overflow-hidden z-10 border border-gray-light"></div>
            <p className="text-xs text-red-500 font-bold mt-4 flex items-center p-3 bg-red-50 rounded-lg">
              <i className="fas fa-exclamation-triangle mr-2"></i> Unable to get your location. Please enable location services for precise navigation.
            </p>
          </div>
       </section>
    </div>
  );
};

export default Contact;
