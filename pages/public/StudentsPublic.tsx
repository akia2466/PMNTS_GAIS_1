
import React from 'react';

const StudentsPublic: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
       <section className="relative h-[40vh] flex items-center overflow-hidden bg-primary">
         <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1920" alt="Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-primary opacity-70 z-10"></div>
         </div>
         <div className="max-w-[1400px] mx-auto px-5 relative z-20 w-full text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary uppercase tracking-tight">Student Life</h1>
            <p className="text-secondary/80 text-sm md:text-base mt-4 max-w-2xl mx-auto font-semibold">
              Experience a vibrant community where academic excellence meets personal growth, cultural celebration, and lifelong friendships.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
         </div>
       </section>

       <section className="max-w-[1400px] mx-auto px-5 py-24">
          {/* Main Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {[
              { title: "Academic Support", icon: "fas fa-brain", desc: "Tutoring programs, study groups, and academic counseling to help every student succeed.", img: "support-life" },
              { title: "Student Clubs", icon: "fas fa-users", desc: "Over 20 clubs covering academics, arts, culture, and special interests.", img: "clubs-life" },
              { title: "Sports & Athletics", icon: "fas fa-running", desc: "Competitive teams in rugby, soccer, basketball, volleyball, and track & field.", img: "sports-life" },
              { title: "Pastoral Care", icon: "fas fa-heart", desc: "Dedicated counselors and support staff ensuring student wellbeing.", img: "care-life" },
              { title: "Cultural Events", icon: "fas fa-masks-theater", desc: "Celebrations of PNG's diverse cultures through festivals and activities.", img: "culture-life" },
              { title: "Career Guidance", icon: "fas fa-compass", desc: "University prep and career counseling to plan your future path.", img: "career-life" },
            ].map((resource, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-light shadow-sm hover:border-secondary transition-all text-center overflow-hidden flex flex-col group">
                <div className="h-44 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${resource.img}/600/400`} alt={resource.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-10 flex-grow">
                  <div className="w-16 h-16 bg-light text-accent rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:bg-secondary transition-colors">
                    <i className={resource.icon}></i>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-4 uppercase">{resource.title}</h4>
                  <p className="text-xs text-gray leading-relaxed">{resource.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Portal CTA - Moved above Organizations & Clubs */}
          <section className="bg-accent py-16 text-white text-center rounded-3xl mb-16">
            <div className="max-w-4xl mx-auto px-5">
              <h2 className="text-3xl font-bold mb-6">Ready to Access Your Student Portal?</h2>
              <p className="text-lg mb-8 opacity-90">Current students can log in to access grades, schedules, assignments, and more.</p>
              <div className="flex justify-center space-x-6">
                <button className="bg-primary text-secondary px-10 py-3 rounded-md font-bold uppercase text-xs tracking-widest hover:bg-white transition-all shadow-lg">Student Login</button>
                <button className="bg-white text-primary px-10 py-3 rounded-md font-bold uppercase text-xs tracking-widest hover:bg-secondary transition-all">Register Account</button>
              </div>
            </div>
          </section>

          {/* Organizations & Clubs */}
          <h2 className="text-3xl font-bold text-primary text-center uppercase tracking-widest mb-16">Organizations & Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
             <div className="space-y-8">
               <h4 className="font-bold text-accent uppercase text-xs tracking-widest border-b-2 border-accent pb-3 mb-6">Academic Clubs</h4>
               <ul className="space-y-6">
                 <li><h5 className="font-bold text-sm text-primary mb-1">Science Club</h5><p className="text-[10px] text-gray leading-relaxed">Explore discoveries and conduct experiments</p></li>
                 <li><h5 className="font-bold text-sm text-primary mb-1">Math Olympiad</h5><p className="text-[10px] text-gray leading-relaxed">Challenge yourself with advanced problems</p></li>
                 <li><h5 className="font-bold text-sm text-primary mb-1">Debate Club</h5><p className="text-[10px] text-gray leading-relaxed">Develop public speaking and critical thinking</p></li>
               </ul>
             </div>
             <div className="space-y-8">
               <h4 className="font-bold text-accent uppercase text-xs tracking-widest border-b-2 border-accent pb-3 mb-6">Leadership & Service</h4>
               <ul className="space-y-6">
                 <li><h5 className="font-bold text-sm text-primary mb-1">Student Council</h5><p className="text-[10px] text-gray leading-relaxed">Lead and represent the student body</p></li>
                 <li><h5 className="font-bold text-sm text-primary mb-1">Community Service</h5><p className="text-[10px] text-gray leading-relaxed">Volunteer work and community projects</p></li>
                 <li><h5 className="font-bold text-sm text-primary mb-1">Peer Mentorship</h5><p className="text-[10px] text-gray leading-relaxed">Guide and support younger students</p></li>
               </ul>
             </div>
             <div className="space-y-8">
               <h4 className="font-bold text-accent uppercase text-xs tracking-widest border-b-2 border-accent pb-3 mb-6">Arts & Culture</h4>
               <ul className="space-y-6">
                 <li><h5 className="font-bold text-sm text-primary mb-1">Drama Society</h5><p className="text-[10px] text-gray leading-relaxed">Perform in plays and develop acting skills</p></li>
                 <li><h5 className="font-bold text-sm text-primary mb-1">Music Ensemble</h5><p className="text-[10px] text-gray leading-relaxed">Play instruments and perform as a group</p></li>
                 <li><h5 className="font-bold text-sm text-primary mb-1">Arts Club</h5><p className="text-[10px] text-gray leading-relaxed">Express yourself through various media</p></li>
               </ul>
             </div>
             <div className="space-y-8">
               <h4 className="font-bold text-accent uppercase text-xs tracking-widest border-b-2 border-accent pb-3 mb-6">Special Interest</h4>
               <ul className="space-y-6">
                 <li><h5 className="font-bold text-sm text-primary mb-1">Cultural Club</h5><p className="text-[10px] text-gray leading-relaxed">Celebrate and preserve PNG heritage</p></li>
                 <li><h5 className="font-bold text-sm text-primary mb-1">Technology Club</h5><p className="text-[10px] text-gray leading-relaxed">Learn coding, robotics, and innovations</p></li>
                 <li><h5 className="font-bold text-sm text-primary mb-1">Environmental Club</h5><p className="text-[10px] text-gray leading-relaxed">Promote sustainability and awareness</p></li>
               </ul>
             </div>
          </div>

          {/* Student Support Services - Added Photos to top */}
          <div className="bg-primary text-secondary p-12 rounded-3xl mb-24 shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl font-bold uppercase mb-12 text-center tracking-[0.2em] relative z-10">Student Support Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
              {[
                { title: "Academic Counseling", icon: "fas fa-user-graduate", text: "Individual and group sessions for course selection, study skills, and challenges.", img: "counseling" },
                { title: "Pastoral Care", icon: "fas fa-hand-holding-heart", text: "Confidential support for personal issues, mental health, and wellbeing.", img: "pastoral" },
                { title: "Library & Resources", icon: "fas fa-book-open", text: "Extensive collection of books, digital resources, and quiet study spaces.", img: "library-service" }
              ].map((service, idx) => (
                <div key={idx} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex flex-col hover:bg-white/10 transition-colors">
                  <div className="h-40 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${service.img}/600/300`} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 text-center flex flex-col items-center">
                    <i className={`${service.icon} text-3xl mb-6`}></i>
                    <h4 className="font-bold text-white uppercase text-sm mb-4">{service.title}</h4>
                    <p className="text-xs text-white/70 leading-relaxed">{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <i className="fas fa-graduation-cap absolute -bottom-10 -right-10 text-white/5 text-[200px]"></i>
          </div>

          {/* SRC */}
          <h2 className="text-3xl font-bold text-primary text-center uppercase tracking-widest mb-16">Student Representative Council 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { initial: "JK", name: "Joshua Kila", role: "Student President", quote: "Leading our student body has taught me that unity and collaboration are the keys to achieving our shared goals. Together, we can make PMNHS even better for everyone." },
              { initial: "GM", name: "Grace Maru", role: "Vice President", quote: "I believe in empowering every student voice. My role is to ensure that all students feel heard, valued, and supported in their academic journey." },
              { initial: "DT", name: "David Tau", role: "Secretary", quote: "Organization and transparency are crucial for effective student representation. I am committed to keeping our community informed and engaged." },
            ].map((rep, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl border border-gray-light shadow-sm text-center relative pt-16 hover:-translate-y-2 transition-transform">
                <div className="w-20 h-20 bg-secondary text-primary rounded-full flex items-center justify-center font-bold text-2xl absolute -top-10 left-1/2 -translate-x-1/2 border-4 border-white shadow-lg">
                  {rep.initial}
                </div>
                <h4 className="text-lg font-bold text-primary mb-1">{rep.name}</h4>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-6">{rep.role}</p>
                <div className="text-xs text-gray italic leading-relaxed">"{rep.quote}"</div>
              </div>
            ))}
          </div>
       </section>
    </div>
  );
};

export default StudentsPublic;
