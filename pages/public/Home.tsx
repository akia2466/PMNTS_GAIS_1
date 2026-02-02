
import React from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
  onLoginClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onLoginClick }) => {
  return (
    <div className="space-y-24 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050853064-9524641ad3f3?auto=format&fit=crop&q=80&w=1920" 
            alt="School Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-10 opacity-80"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-5 relative z-20 w-full">
          <div className="max-w-3xl text-white">
            <h5 className="text-secondary font-bold uppercase tracking-[0.3em] mb-4 text-sm">Empowering PNG's Future Leaders</h5>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              A Tradition of<br />
              <span className="text-secondary">Higher Standards</span>
            </h1>
            <p className="text-lg text-gray-light mb-10 leading-relaxed max-w-2xl">
              At Port Moresby National High School, we believe that education extends far beyond the classroom walls. It is about shaping the mind, forging the character, and igniting a passion for lifelong learning.
              <br /><br />
              Our curriculum is designed to challenge and inspire, blending rigorous academic pursuit with a supportive community environment. We are dedicated to nurturing the next generation of leaders who will shape the future of our nation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => onNavigate('about')}
                className="bg-secondary text-primary px-10 py-4 rounded-md font-bold uppercase text-sm tracking-widest hover:bg-accent transition-all transform hover:scale-105 shadow-xl shadow-secondary/20"
              >
                Read Principal's Message
              </button>
              <button 
                onClick={onLoginClick}
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-md font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all"
              >
                Student Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Cards Section */}
      <section className="max-w-[1400px] mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { val: "30+", label: "Years of Excellence" },
            { val: "2000+", label: "Students Enrolled" },
            { val: "150+", label: "Qualified Teachers" },
            { val: "95%", label: "University Admission Rate" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-xl border-b-4 border-secondary text-center transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-4xl font-bold text-primary mb-2">{item.val}</h3>
              <p className="text-xs font-bold uppercase text-accent tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="max-w-[1400px] mx-auto px-5 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Academic Programs</h2>
          <p className="text-gray max-w-2xl mx-auto">Choose from our diverse range of programs designed to meet your educational goals and career aspirations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              title: "Regular Academic Program", 
              img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
              desc: "Our standard curriculum follows the Papua New Guinea national syllabus, preparing students for Grade 10 and Grade 12 national examinations.",
              items: ["Core subjects: Mathematics, English, Science, Social Studies", "Elective subjects based on student interests", "Continuous assessment and examinations"],
              color: "border-primary"
            },
            { 
              title: "Advanced Placement Program", 
              img: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800",
              desc: "Accelerated learning track for high-achieving students, offering advanced coursework and university preparation.",
              items: ["Advanced Mathematics and Sciences", "Research methodology and critical thinking", "University entrance exam preparation"],
              color: "border-secondary"
            },
            { 
              title: "Sports & Athletics", 
              img: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800",
              desc: "Professional coaching and training facilities for competitive and recreational sports.",
              items: ["Rugby, Soccer, Basketball, Volleyball", "Track & Field, Swimming", "Inter-school Competitions"],
              color: "border-accent"
            }
          ].map((program, idx) => (
            <div key={idx} className={`bg-white rounded-xl shadow-lg border-t-4 ${program.color} hover:-translate-y-2 transition-transform overflow-hidden flex flex-col group`}>
              <div className="h-64 overflow-hidden">
                <img src={program.img} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-10 flex-grow">
                <h3 className="text-xl font-bold text-primary mb-4">{program.title}</h3>
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

      {/* Latest Insights Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">Latest Insights</h2>
              <h3 className="text-4xl font-bold text-primary leading-tight">Stay connected with the pulse of our campus.</h3>
            </div>
            <button className="text-primary font-bold uppercase text-sm tracking-widest flex items-center hover:text-accent transition-colors">
              View All News <i className="fas fa-arrow-right ml-2 text-secondary"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Annual Science Fair Showcases Student Innovation", date: "May 15, 2024", text: "Our students presented groundbreaking projects at the Annual Science Fair, demonstrating exceptional creativity and scientific inquiry.", img: "111" },
              { title: "Parent-Teacher Conferences Scheduled for Next Month", date: "May 10, 2024", text: "Mark your calendars! Parent-Teacher Conferences will be held on June 5th and 6th. Sign-ups open next week.", img: "112" },
              { title: "School Play 'A Midsummer Night's Dream' a Huge Success", date: "May 8, 2024", text: "The drama club's production of Shakespeare's classic enchanted audiences with stellar performances and stunning set design.", img: "113" },
            ].map((news, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-xl mb-6 shadow-md">
                  <img src={`https://picsum.photos/seed/insight${news.img}/600/400`} alt={news.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md">News</div>
                </div>
                <p className="text-xs text-accent font-bold mb-2">{news.date}</p>
                <h4 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors">{news.title}</h4>
                <p className="text-sm text-gray mb-6 line-clamp-3">{news.text}</p>
                <span className="text-xs font-bold text-primary uppercase border-b-2 border-secondary pb-1">Read Story →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events & Calendar */}
      <section className="max-w-[1400px] mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-3xl font-bold text-primary uppercase tracking-tight">Upcoming Events & Calendar</h2>
          <button className="bg-light text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors">View All Events</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { date: "February 15, 2026", title: "Parent-Teacher Conference", desc: "Annual meeting to discuss student progress and academic goals" },
            { date: "March 1-5, 2026", title: "Mid-Term Examinations", desc: "First semester mid-term exams across all grade levels" },
            { date: "March 20, 2026", title: "Annual Sports Day", desc: "Inter-house athletics competition featuring track and field events" },
            { date: "April 10, 2026", title: "Science Fair", desc: "Students showcase innovative science projects and experiments" },
            { date: "May 5, 2026", title: "Cultural Week", desc: "Celebration of Papua New Guinea's diverse cultures and traditions" },
            { date: "June 15-25, 2026", title: "Final Examinations", desc: "End of semester examinations for all students" },
          ].map((event, idx) => (
            <div key={idx} className="flex p-6 bg-white rounded-xl border border-gray-light hover:shadow-lg hover:border-secondary transition-all group">
              <div className="w-20 h-20 bg-primary text-secondary rounded-lg flex flex-col items-center justify-center shrink-0 mr-6 group-hover:bg-secondary group-hover:text-primary transition-colors">
                <span className="text-[10px] font-bold uppercase text-center">{event.date.split(' ')[0].substring(0,3)}</span>
                <span className="text-xl font-bold">{event.date.split(' ')[1].replace(',', '')}</span>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">{event.title}</h4>
                <p className="text-xs text-gray">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-[1400px] mx-auto px-5 py-24">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">Success Stories</h2>
          <h3 className="text-4xl font-bold text-primary">Our Stories Worth Telling</h3>
          <p className="text-gray mt-4">Celebrating the achievements and journeys of our students, staff, and alumni</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "National Math Olympiad Champions", date: "December 2025", text: "Our students secured first place in the 2025 National Mathematics Olympiad, competing against teams from across the country.", img: "story-math" },
            { title: "Alumni Spotlight: Dr. Sarah Pato", date: "November 2025", text: "Class of 2010 graduate Dr. Sarah Pato returns as keynote speaker. Now a leading medical researcher.", img: "story-alumni" },
            { title: "Community Service Initiative", date: "October 2025", text: "Student volunteers spent 500+ hours teaching literacy skills to children in nearby communities.", img: "story-service" },
          ].map((story, idx) => (
            <div key={idx} className="bg-light rounded-2xl border border-gray-light hover:border-accent transition-colors relative group overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={`https://picsum.photos/seed/${story.img}/600/400`} alt={story.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-10 flex-grow relative">
                <i className="fas fa-quote-right absolute top-8 right-8 text-secondary/10 text-6xl"></i>
                <span className="text-xs font-bold text-accent uppercase block mb-4">{story.date}</span>
                <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{story.title}</h4>
                <p className="text-sm text-gray leading-relaxed mb-6">{story.text}</p>
                <button className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">Read Full Story</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-primary text-secondary px-10 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-accent transition-colors">View All Stories</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
