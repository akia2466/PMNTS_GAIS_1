
import React from 'react';

const Academics: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
       <section className="relative h-[40vh] flex items-center overflow-hidden bg-primary">
         <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920" alt="Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-primary opacity-70 z-10"></div>
         </div>
         <div className="max-w-[1400px] mx-auto px-5 relative z-20 w-full text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary uppercase tracking-tight">Academic Programs</h1>
            <p className="text-secondary/80 text-sm md:text-base mt-4 max-w-2xl mx-auto font-semibold">
              We offer a comprehensive curriculum designed to prepare students for success in higher education and beyond.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
         </div>
       </section>

       {/* Core Programs Overview - Top of Page */}
       <section className="max-w-[1400px] mx-auto px-5 pt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: "Regular Academic Program", 
                img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
                desc: "Our standard curriculum follows the Papua New Guinea national syllabus, preparing students for Grade 10 and Grade 12 national examinations.",
                items: ["Core subjects: Mathematics, English, Science, Social Studies", "Elective subjects based on student interests", "Continuous assessment and examinations", "Career guidance and counseling"],
                color: "border-primary"
              },
              { 
                title: "Advanced Placement Program", 
                img: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800",
                desc: "Accelerated learning track for high-achieving students, offering advanced coursework and university preparation.",
                items: ["Advanced Mathematics and Sciences", "Research methodology and critical thinking", "University entrance exam preparation", "Scholarship application support"],
                color: "border-secondary"
              },
              { 
                title: "Sports & Athletics", 
                img: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800",
                desc: "A wide variety of competitive and recreational sporting activities with professional guidance.",
                items: ["Rugby, Soccer, Basketball, Volleyball", "Track & Field, Swimming", "Inter-school Competitions", "Professional coaching and training facilities", "Inter-house sports tournaments"],
                color: "border-accent"
              }
            ].map((program, idx) => (
              <div key={idx} className={`bg-white rounded-2xl shadow-xl border-t-4 ${program.color} overflow-hidden flex flex-col group`}>
                <div className="h-64 overflow-hidden">
                  <img src={program.img} alt={program.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-10 flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-4 uppercase">{program.title}</h3>
                  <p className="text-sm text-gray mb-6">{program.desc}</p>
                  <ul className="text-xs space-y-3 text-gray font-semibold">
                    {program.items.map((li, i) => (
                      <li key={i} className="flex items-start"><i className="fas fa-check text-secondary mr-3 mt-1"></i> {li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
       </section>

       {/* Degree Programs Catalog */}
       <section className="max-w-[1400px] mx-auto px-5 py-12">
          <h2 className="text-3xl font-bold text-primary uppercase tracking-widest mb-16 text-center">Degree Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {[
              { id: "MATH-MS", title: "Master of Science in Applied Mathematics", desc: "Advanced techniques and computational methods for solving complex problems in quantitative fields.", courses: "Differential Equations, Numerical Analysis, Statistical Modeling.", img: "math" },
              { id: "SCI-BS", title: "Bachelor of Science in Natural Sciences", desc: "Comprehensive science program covering physics, chemistry, and biology with hands-on lab experience.", courses: "Organic Chemistry, Quantum Physics, Molecular Biology.", img: "science" },
              { id: "ENG-BA", title: "Bachelor of Arts in English Literature", desc: "In-depth study of literature, composition, and communication skills with emphasis on critical analysis.", courses: "World Literature, Creative Writing, Rhetoric and Composition.", img: "literature" },
              { id: "SOC-BA", title: "Bachelor of Arts in Social Studies", desc: "Interdisciplinary program covering history, geography, economics, and political science focused on the Pacific.", courses: "Pacific History, Economic Development, Political Systems.", img: "social" },
              { id: "ART-BFA", title: "Bachelor of Fine Arts", desc: "Visual arts, music, drama, and creative expression program nurturing talent and cultural appreciation.", courses: "Studio Art, Music Theory, Theatrical Performance.", img: "arts" },
              { id: "CS-BS", title: "Bachelor of Science in Computer Science", desc: "Programming, web development, and digital literacy program preparing students for tech careers.", courses: "Data Structures, Database Systems, Artificial Intelligence.", img: "computer" },
            ].map((program, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-light hover:border-accent shadow-sm transition-all group overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={`https://picsum.photos/seed/${program.img}/600/400`} alt={program.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-primary/90 text-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md">{program.id}</div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent h-14 flex items-center leading-tight">{program.title}</h3>
                  <p className="text-sm text-gray mb-6 leading-relaxed flex-grow">{program.desc}</p>
                  <div className="text-xs text-gray border-t border-gray-light pt-6">
                    <span className="font-bold text-primary uppercase block mb-3">Core Courses:</span>
                    {program.courses}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Departments */}
          <h2 className="text-3xl font-bold text-primary uppercase tracking-widest mb-16 text-center">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              { name: "Computer Science", head: "Dr. Alan Turing", email: "compsci@pmnhs.edu.pg", ext: "101", desc: "Theory of computation and design of systems. Programs in software engineering and AI.", img: "cs-dept" },
              { name: "Mathematics", head: "Dr. Ada Lovelace", email: "math@pmnhs.edu.pg", ext: "102", desc: "Pure and applied mathematics, statistics, and actuarial science.", img: "math-dept" },
              { name: "Natural Sciences", head: "Dr. Marie Curie", email: "science@pmnhs.edu.pg", ext: "103", desc: "Natural world exploration through physics, chemistry, and biology.", img: "sci-dept" },
              { name: "English & Literature", head: "Dr. William Shakespeare", email: "english@pmnhs.edu.pg", ext: "104", desc: "Language proficiency, literary analysis, and creative expression.", img: "lit-dept" },
              { name: "Social Studies", head: "Dr. Nelson Mandela", email: "socialstudies@pmnhs.edu.pg", ext: "105", desc: "Human society, culture, and institutions examination.", img: "soc-dept" },
              { name: "Fine Arts", head: "Dr. Leonardo Da Vinci", email: "arts@pmnhs.edu.pg", ext: "106", desc: "Creativity nurturing through visual, music, and performing arts.", img: "arts-dept" },
            ].map((dept, idx) => (
              <div key={idx} className="bg-light rounded-xl border border-gray-light shadow-sm flex flex-col overflow-hidden group">
                <div className="p-10 flex-grow">
                  <h4 className="text-lg font-bold text-primary mb-2 uppercase">{dept.name}</h4>
                  <p className="text-[10px] font-bold text-accent uppercase mb-4 tracking-widest">Head: {dept.head}</p>
                  <p className="text-xs text-gray mb-8 leading-relaxed">{dept.desc}</p>
                  <div className="text-xs space-y-2 border-t border-gray-light pt-6">
                     <p className="flex justify-between"><span>Email:</span> <span className="font-bold text-primary">{dept.email}</span></p>
                     <p className="flex justify-between"><span>Extension:</span> <span className="font-bold text-primary">Ext. {dept.ext}</span></p>
                  </div>
                </div>
                <div className="h-40 overflow-hidden">
                   <img src={`https://picsum.photos/seed/${dept.img}/600/300`} alt={dept.name} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Academic Resources */}
          <h2 className="text-3xl font-bold text-primary uppercase tracking-widest mb-16 text-center">Academic Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {[
              { title: "Library & Learning Center", icon: "fas fa-book-reader", desc: "Modern library with over 15,000 books, digital resources, and quiet study spaces.", img: "res-library" },
              { title: "Science Laboratories", icon: "fas fa-microscope", desc: "Fully-equipped labs for Physics, Chemistry, and Biology with supervised experiments.", img: "res-lab" },
              { title: "Computer Labs", icon: "fas fa-laptop", desc: "Two labs with 60+ workstations, high-speed internet, and industry software.", img: "res-comp" }
            ].map((res, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-light text-center shadow-sm overflow-hidden flex flex-col group">
                <div className="h-48 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${res.img}/600/400`} alt={res.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-10 flex-grow">
                  <div className="w-16 h-16 bg-secondary/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-colors"><i className={`${res.icon} text-2xl`}></i></div>
                  <h4 className="font-bold text-primary uppercase mb-4">{res.title}</h4>
                  <p className="text-xs text-gray leading-relaxed">{res.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Faculty & Staff Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary uppercase tracking-widest mb-4">Faculty & Staff</h2>
              <p className="text-gray font-semibold">Meet our dedicated educators and support staff</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { initial: "EV", name: "Dr. Eleanor Vance", role: "Professor of Computer Science", dept: "Computer Science", email: "e.vance@pmnhs.edu.pg" },
                { initial: "MC", name: "Dr. Michael Chen", role: "Associate Professor of Mathematics", dept: "Mathematics", email: "m.chen@pmnhs.edu.pg" },
                { initial: "ST", name: "Dr. Sarah Thompson", role: "Professor of Chemistry", dept: "Natural Sciences", email: "s.thompson@pmnhs.edu.pg" },
                { initial: "JW", name: "Dr. James Wilson", role: "Professor of English Literature", dept: "English & Literature", email: "j.wilson@pmnhs.edu.pg" },
                { initial: "PG", name: "Dr. Patricia Garcia", role: "Associate Professor of History", dept: "Social Studies", email: "p.garcia@pmnhs.edu.pg" },
                { initial: "RM", name: "Dr. Robert Martinez", role: "Professor of Fine Arts", dept: "Fine Arts", email: "r.martinez@pmnhs.edu.pg" },
                { initial: "LA", name: "Dr. Linda Anderson", role: "Assistant Professor of Physics", dept: "Natural Sciences", email: "l.anderson@pmnhs.edu.pg" },
                { initial: "DL", name: "Dr. David Lee", role: "Professor of Economics", dept: "Social Studies", email: "d.lee@pmnhs.edu.pg" },
                { initial: "JB", name: "Dr. Jennifer Brown", role: "Associate Professor of Music", dept: "Fine Arts", email: "j.brown@pmnhs.edu.pg" },
                { initial: "TW", name: "Dr. Thomas White", role: "Professor of Data Science", dept: "Computer Science", email: "t.white@pmnhs.edu.pg" },
                { initial: "MR", name: "Dr. Maria Rodriguez", role: "Assistant Professor of Biology", dept: "Natural Sciences", email: "m.rodriguez@pmnhs.edu.pg" },
                { initial: "CT", name: "Dr. Christopher Taylor", role: "Professor of Creative Writing", dept: "English & Literature", email: "c.taylor@pmnhs.edu.pg" },
              ].map((faculty, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-light text-center hover:border-secondary transition-all group">
                  <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold border-2 border-secondary shadow-sm group-hover:scale-110 transition-transform">
                    {faculty.initial}
                  </div>
                  <h5 className="text-[10px] font-bold text-primary uppercase leading-tight mb-1">{faculty.name}</h5>
                  <p className="text-[8px] text-accent uppercase font-bold mb-3 tracking-tighter leading-tight">{faculty.role}</p>
                  <p className="text-[8px] text-gray uppercase font-bold mb-2">{faculty.dept}</p>
                  <p className="text-[7px] text-gray/70 truncate">{faculty.email}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Schedule / Upcoming Events Section */}
          <section className="mb-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-primary uppercase tracking-tight mb-4">Schedule</h2>
                <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Upcoming Events</p>
                <p className="text-gray text-sm max-w-xl">Join us for academic showcases, sports tournaments, and community gatherings.</p>
              </div>
              <button className="bg-primary text-secondary px-8 py-3 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-dark transition-all shadow-lg">
                View Full Calendar
              </button>
            </div>
            <div className="space-y-6">
              {[
                { day: "26", month: "Oct", time: "09:00 AM", loc: "School Gymnasium", title: "Annual School Science Fair", desc: "Showcasing innovative science projects from students across all grades. Come and support our young scientists!" },
                { day: "15", month: "Nov", time: "03:00 PM", loc: "Various Classrooms", title: "Parent-Teacher Conference Day", desc: "An opportunity for parents to meet with teachers to discuss student progress and academic goals. Appointments required." },
                { day: "05", month: "Dec", time: "07:00 PM", loc: "School Auditorium", title: "Fall Music Concert", desc: "Featuring performances by the school band, choir, and orchestra. A delightful evening of musical talent." },
                { day: "01", month: "Nov", time: "04:00 PM", loc: "School Sports Fields & Gym", title: "Winter Sports Tryouts", desc: "Tryouts for basketball, wrestling, and swimming teams. All interested students must register beforehand." },
              ].map((ev, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl border border-gray-light flex flex-col md:flex-row items-center gap-10 hover:border-secondary transition-all shadow-sm">
                  <div className="flex flex-col items-center justify-center w-24 h-24 bg-primary text-secondary rounded-2xl shrink-0 shadow-lg">
                    <span className="text-3xl font-bold">{ev.day}</span>
                    <span className="text-xs font-bold uppercase">{ev.month}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="text-[10px] font-bold text-accent uppercase mb-2 tracking-widest">
                      <i className="fas fa-clock mr-2"></i> {ev.time} | <i className="fas fa-map-marker-alt mx-2"></i> {ev.loc}
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-2 uppercase">{ev.title}</h4>
                    <p className="text-sm text-gray leading-relaxed max-w-2xl">{ev.desc}</p>
                  </div>
                  <button className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-accent transition-all shrink-0 shadow-md">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </section>
       </section>
    </div>
  );
};

export default Academics;
