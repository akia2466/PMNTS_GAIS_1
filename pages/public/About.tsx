
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
       <section className="relative h-[40vh] flex items-center overflow-hidden bg-primary">
         <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1920" alt="Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-primary opacity-70 z-10"></div>
         </div>
         <div className="max-w-[1400px] mx-auto px-5 relative z-20 w-full text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary uppercase tracking-tight">About POMNHS</h1>
            <p className="text-secondary/80 text-sm md:text-base mt-4 max-w-2xl mx-auto font-semibold">
              Discover our history, mission, and the leadership that drives our commitment to excellence.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
         </div>
       </section>

       {/* Principal's Message Section */}
       <section className="max-w-[1400px] mx-auto px-5 py-24">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-light">
            <div className="md:w-1/3 relative h-80 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Principal Dr. John Kila" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6 text-white">
                <h3 className="font-bold text-xl">Dr. John Kila</h3>
                <p className="text-xs uppercase tracking-widest text-secondary">School Principal</p>
              </div>
            </div>
            <div className="md:w-2/3 p-10 md:p-16 flex flex-col justify-center bg-white">
              <h2 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight">Principal's Message</h2>
              <div className="space-y-6 text-gray leading-relaxed text-lg italic">
                <p>"Welcome to Port Moresby National High School. Since our founding in 1995, we have remained steadfast in our mission to shape the minds and characters of PNG's future leaders."</p>
                <p>"Excellence in education is not just about test scores, but about nurturing well-rounded individuals who will contribute meaningfully to our global society. We invite you to explore our vibrant community and share in our journey of discovery and growth."</p>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="w-12 h-1 bg-secondary"></div>
                <span className="font-bold text-primary uppercase tracking-widest text-sm">Integrity • Intellect • Inclusivity</span>
              </div>
            </div>
          </div>
       </section>

       {/* Mission & Vision Section */}
       <section className="max-w-[1400px] mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-12 rounded-3xl shadow-xl border-l-8 border-secondary">
            <h2 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight">Our Mission</h2>
            <p className="text-gray mb-8 leading-relaxed">To provide quality education that empowers students with knowledge, skills, and values necessary to become responsible, productive, and ethical citizens.</p>
            <ul className="space-y-4 text-sm text-gray font-semibold">
              <li className="flex items-start"><i className="fas fa-check-circle text-accent mr-3 mt-1"></i> Foster academic excellence and critical thinking</li>
              <li className="flex items-start"><i className="fas fa-check-circle text-accent mr-3 mt-1"></i> Create supportive learning environments</li>
              <li className="flex items-start"><i className="fas fa-check-circle text-accent mr-3 mt-1"></i> Celebrate Papua New Guinea's rich cultural heritage</li>
              <li className="flex items-start"><i className="fas fa-check-circle text-accent mr-3 mt-1"></i> Encourage creativity and lifelong learning</li>
            </ul>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-xl border-l-8 border-accent">
            <h2 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight">Our Vision</h2>
            <p className="text-gray mb-8 leading-relaxed">To be the premier educational institution in Papua New Guinea, recognized for producing graduates who excel academically and contribute meaningfully to society.</p>
            <ul className="space-y-4 text-sm text-gray font-semibold">
              <li className="flex items-start"><i className="fas fa-eye text-secondary mr-3 mt-1"></i> Produce graduates who demonstrate strong character</li>
              <li className="flex items-start"><i className="fas fa-eye text-secondary mr-3 mt-1"></i> Enable every student to reach their full potential</li>
              <li className="flex items-start"><i className="fas fa-eye text-secondary mr-3 mt-1"></i> Develop leaders in their chosen fields</li>
              <li className="flex items-start"><i className="fas fa-eye text-secondary mr-3 mt-1"></i> Contribute to national development and global society</li>
            </ul>
          </div>
       </section>

       {/* History Section */}
       <section className="bg-primary text-white py-24">
         <div className="max-w-[1400px] mx-auto px-5">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-secondary mb-8 uppercase tracking-tight">Our History</h2>
                <div className="space-y-8 text-gray-light leading-relaxed">
                  <p>Port Moresby National High School was established in 1995, making it one of the premier modern secondary schools in Papua New Guinea. Founded to meet the growing need for high-level academic training, the school began with a vision to integrate traditional values with modern educational excellence.</p>
                  <p>Over the decades, PMNHS has grown exponentially, both in size and reputation. The school has played a crucial role in educating Papua New Guinea's next generation of leaders, including prominent professionals in medicine, law, and business.</p>
                  <p>In the 2000s, the school underwent significant expansion, adding state-of-the-art science laboratories and enhanced sports facilities. Today, PMNHS serves over 2,000 students and continues to embrace modern educational methodologies and technology.</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-secondary/30">
                  <img 
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200" 
                    alt="PMNHS Historic Growth" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
           </div>
         </div>
       </section>

       {/* Leadership Section */}
       <section className="max-w-[1400px] mx-auto px-5 py-24">
         <h2 className="text-3xl font-bold text-primary text-center mb-16 uppercase tracking-widest">School Leadership</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
           {[
             { initial: "JK", name: "Dr. John Kila", role: "Principal", quote: "Excellence in education is not just about test scores, but about nurturing well-rounded individuals who will shape our nation's future." },
             { initial: "MT", name: "Mary Tau", role: "Vice Principal (Academic)", quote: "Every student has unique talents waiting to be discovered. Our role is to provide the platform for them to shine." },
             { initial: "PN", name: "Peter Nambui", role: "Vice Principal (Administration)", quote: "A well-organized school is a thriving school. We ensure every resource supports our students' success." },
             { initial: "SK", name: "Sarah Kore", role: "Director of Student Services", quote: "Student wellbeing is at the heart of everything we do. When students feel supported, they achieve greatness." },
           ].map((leader, idx) => (
             <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-light shadow-sm text-center pt-16 relative hover:-translate-y-2 transition-transform">
               <div className="w-20 h-20 bg-primary text-secondary rounded-full flex items-center justify-center font-bold text-2xl absolute -top-10 left-1/2 -translate-x-1/2 border-4 border-white shadow-lg">
                 {leader.initial}
               </div>
               <h4 className="text-lg font-bold text-primary mb-1">{leader.name}</h4>
               <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-6">{leader.role}</p>
               <p className="text-xs text-gray italic leading-relaxed">"{leader.quote}"</p>
             </div>
           ))}
         </div>
       </section>

       {/* Vertical Timeline Section */}
       <section className="max-w-4xl mx-auto px-5 py-24">
         <h2 className="text-3xl font-bold text-center mb-20 uppercase tracking-[0.2em] text-primary">Our Legacy</h2>
         <div className="relative border-l-4 border-secondary ml-6 md:ml-0 md:left-1/2">
           {[
             { year: "1995", title: "Foundation", desc: "Established with a dedicated cohort of teachers and students to set new academic standards." },
             { year: "2005", title: "Expansion Era", desc: "Major expansion with modern labs, enhanced library, and sports facilities." },
             { year: "2015", title: "Technology Integration", desc: "Introduction of advanced computer laboratories and digital learning platforms." },
             { year: "2020", title: "Academic Milestone", desc: "Achieved record university admission rates across all disciplines." },
             { year: "2025", title: "Present Day", desc: "Over 2,000 students with state-of-the-art facilities and world-class programs." },
           ].map((item, idx) => (
             <div key={idx} className="mb-12 relative">
               <div className="absolute top-0 -left-[14px] md:left-[-14px] w-6 h-6 bg-accent rounded-full border-4 border-white shadow-md z-10"></div>
               <div className={`md:w-1/2 pl-10 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-[-50%]' : 'md:pl-12 md:ml-[50%]'}`}>
                 <span className="text-2xl font-bold text-secondary block mb-1">{item.year}</span>
                 <h4 className="text-lg font-bold text-primary mb-2 uppercase">{item.title}</h4>
                 <p className="text-sm text-gray leading-relaxed">{item.desc}</p>
               </div>
             </div>
           ))}
         </div>
       </section>

       {/* Core Values Section */}
       <section className="bg-light py-24 border-y border-gray-light">
         <div className="max-w-[1400px] mx-auto px-5">
           <div className="text-center mb-20">
             <h3 className="text-4xl font-bold text-primary uppercase mb-4 tracking-tight">Core Values</h3>
             <p className="text-gray font-semibold">The principles that guide everything we do</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
             {[
               { icon: "🏆", title: "Excellence", desc: "Striving for the highest standards in all endeavors" },
               { icon: "🤝", title: "Integrity", desc: "Upholding honesty and strong moral principles" },
               { icon: "❤️", title: "Respect", desc: "Valuing diversity and treating all with dignity" },
               { icon: "💡", title: "Innovation", desc: "Embracing creativity and continuous improvement" },
               { icon: "🌍", title: "Community", desc: "Building strong relationships and social responsibility" },
             ].map((val, idx) => (
               <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-light hover:border-secondary transition-all group">
                 <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{val.icon}</div>
                 <h4 className="font-bold text-primary mb-3 uppercase text-sm tracking-widest">{val.title}</h4>
                 <p className="text-xs text-gray leading-relaxed">{val.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* Gallery Section */}
       <section className="max-w-[1400px] mx-auto px-5 py-24">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary uppercase tracking-widest">Gallery</h2>
            <p className="text-gray mt-2 font-semibold">Explore our beautiful campus and world-class facilities</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: "Main Entrance", desc: "The iconic main gate welcoming students and visitors.", img: "school-gate" },
             { title: "University Library, Main Reading Room", desc: "Students studying in the modern and spacious university library.", img: "library" },
             { title: "Science Building, Chemistry Lab 305", desc: "Advanced chemistry lab equipped for cutting-edge research.", img: "lab" },
             { title: "North Hall Dormitory, Room 212", desc: "A comfortable and well-lit student dormitory room.", img: "dorm" },
             { title: "Athletic Complex, Main Field", desc: "The university's multi-purpose athletic field under a clear sky.", img: "stadium" },
             { title: "Central Campus Quad", desc: "Students relaxing and socializing on the central campus quad.", img: "quad" },
             { title: "Fine Arts Building, Studio 101", desc: "Creative space in the Fine Arts building, bustling with student artists.", img: "studio" },
             { title: "Humanities Building, Lecture Hall A", desc: "A modern lecture hall ready for an engaging class.", img: "lecture-hall" },
           ].map((item, idx) => (
             <div key={idx} className="group flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-gray-light">
               <div className="relative overflow-hidden aspect-square">
                 <img src={`https://picsum.photos/seed/${item.img}/600/600`} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               </div>
               <div className="p-6 bg-white flex-grow">
                 <h4 className="text-primary font-bold text-sm mb-2 uppercase leading-tight">{item.title}</h4>
                 <p className="text-gray text-xs leading-relaxed">{item.desc}</p>
               </div>
             </div>
           ))}
         </div>
       </section>
    </div>
  );
};

export default About;
