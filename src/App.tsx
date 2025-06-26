import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Code2, BookOpen, Award, GraduationCap, Trophy, Sun, Moon, Instagram, Twitter } from 'lucide-react';
import StarryBackground from './components/StarryBackground';
import ParallaxBackground from './components/ParallaxBackground';
import AnimatedCounter from './components/AnimatedCounter';
import * as SiIcons from 'react-icons/si';
import emailjs from 'emailjs-com';

function App() {
  // Add state for theme
  const [isDark, setIsDark] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [resultMsg, setResultMsg] = useState('');

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.15,
        ease: 'easeInOut',
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: "blur(6px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.7
      }
    }
  };

  const textRevealVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      clipPath: "inset(100% 0px 0px 0px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0px 0px 0px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const codeBlockVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.98,
      x: -30
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.7
      }
    }
  };

  return (
    <div className={`min-h-screen overflow-hidden ${
      isDark 
        ? 'bg-[#0f1115] text-white' 
        : 'bg-gray-100 text-gray-900'
    }`}>
      {isDark && <StarryBackground />}
      {isDark && <ParallaxBackground />}
      <div className="content-wrapper">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 backdrop-blur-sm ${
  isDark 
    ? 'bg-[#0f1115]/80' 
    : 'bg-white/80'
}`}>
  <div className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      
      {/* Logo Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2"
      >
        <Code2 className="w-8 h-8 text-purple-500" />
        <span className="text-xl font-bold font-display tracking-wide">Portfolio</span>
      </motion.div>

      {/* Navigation + Theme Toggle Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center space-x-4"
      >
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-12">
          {["About", "Skills", "Projects","Experience", "Education", "Certifications"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-500 transition-colors font-medium tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={toggleTheme}
          className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          {isDark ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </motion.button>
      </motion.div>
    </div>
  </div>
</nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 min-h-screen flex items-center relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.h1 
                  className="text-6xl font-bold mb-4 font-display tracking-tight leading-tight"
                  variants={textRevealVariants}
                >
                  Hi, I am
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 inline-block pb-2">
                    Nilancy Agarwal
                  </span>
                </motion.h1>
                <motion.h2 
                  className="text-2xl text-gray-400 mb-6"
                  variants={textRevealVariants}
                >
                  I am a{' '}
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      2000,
                      'UI/UX Enthusiast',
                      2000,
                      'Digital Marketer',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-purple-500"
                  />
                </motion.h2>
                <motion.p 
                  className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 leading-relaxed font-sans text-lg`}
                  variants={textRevealVariants}
                >
                  A passionate and versatile developer with expertise in both frontend and backend development. Driven by innovation, I craft impactful solutions that seamlessly merge functionality with creativity. My strengths lie in collaborative problem-solving, effective teamwork, and clear, results-oriented communication. 
                </motion.p>
                <motion.div 
                  className="flex space-x-4"
                  variants={containerVariants}
                >
                  {[
                    { icon: <Github size={24} />, href: "https://github.com/nilancy04" },
                    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/nilancy04/" },
                    { icon: <Instagram size={24} />, href: "https://www.instagram.com/nncy_.45/" },
                    { icon: <Twitter size={24} />, href: "https://x.com/nilancy2005" }
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="p-2 hover:text-purple-500 transition-colors"
                      variants={itemVariants}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                  <motion.a
                    href="https://drive.google.com/file/d/1SNmIWdhC7Wki69XRX7PTyfq7W25E18wL/view?usp=drivesdk"
                    variants={itemVariants}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
                  >
                    <BookOpen size={20} />
                    View Resume
                  </motion.a>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative"
              >
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-purple-500/10">
                  <img 
                    src="https://i.imgur.com/FTVGy1X.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-20 ${
          isDark ? 'bg-[#13151a]' : 'bg-gray-50'
        }`}>
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 
                className="text-3xl font-bold mb-8"
                variants={textRevealVariants}
              >
                About Me
              </motion.h2>
              <motion.p 
                className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}
                variants={textRevealVariants}
              >
                I'm a third-year Computer Science Engineering student at SRM University. Fueled by my passion for technology, I'm diving into various fields of computing, from web development to cutting-edge research. With a strong foundation in programming and problem-solving, I'm constantly looking for opportunities to apply my skills to real-world projects and innovative collaborations. I believe in continuous growth and am always excited to learn and contribute to the tech community!
              </motion.p>
              <motion.p 
                className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}
                variants={textRevealVariants}
              >
                Beyond coding, I'm an active participant in hackathons, coding competitions, and open-source projects.
                I believe in continuous learning and staying updated with the latest technologies and industry trends.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={
          isDark ? 'bg-[#13151a]' : 'bg-gray-50'
        }>
          <div className="container mx-auto px-6">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              className="text-3xl font-bold mb-4 text-center font-display tracking-tight"
            >
              Professional <span className="text-purple-500">Skillset</span>
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mt-12"
            >
              {[
                {
                  name: "C++",
                  icon: <SiIcons.SiCplusplus size={40} className="text-[#00599C]" />
                },
                {
                  name: "C",
                  icon: <SiIcons.SiC size={40} className="text-[#A8B9CC]" />
                },
                {
                  name: "HTML5",
                  icon: <SiIcons.SiHtml5 size={40} className="text-[#E34F26]" />
                },
                {
                  name: "CSS3",
                  icon: <SiIcons.SiCss3 size={40} className="text-[#1572B6]" />
                },
                {
                  name: "JavaScript",
                  icon: <SiIcons.SiJavascript size={40} className="text-[#F7DF1E]" />
                },
                {
                  name: "Node.js",
                  icon: <SiIcons.SiNodedotjs size={40} className="text-[#339933]" />
                },
                {
                  name: "Git",
                  icon: <SiIcons.SiGit size={40} className="text-[#F05032]" />
                },
                {
                  name: "React",
                  icon: <SiIcons.SiReact size={40} className="text-[#61DAFB]" />
                },
                {
                  name: "MySQL",
                  icon: <SiIcons.SiMysql size={40} className="text-[#4479A1]" />
                },
                {
                  name: "MongoDB",
                  icon: <SiIcons.SiMongodb size={40} className="text-[#47A248]" />
                },
                {
                  name: "Next.js",
                  icon: <SiIcons.SiNextdotjs size={40} className="text-white" />
                },
                {
                  name: "Python",
                  icon: <SiIcons.SiPython size={40} className="text-[#3776AB]" />
                },
                {
                  name: "Java",
                  icon: <SiIcons.SiOpenjdk size={40} className="text-[#007396]" />
                },
                {
                  name: "Github",
                  icon: <SiIcons.SiGithub size={40} className="text-[#007396]" />
                }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all ${
                    isDark ? 'bg-[#1c1f26]' : 'bg-white'
                  } flex flex-col items-center justify-center gap-4`}
                >
                  {skill.icon}
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} font-display tracking-wide`}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Add spacing between Skills and Projects */}
        <div className="my-12" />

        {/* Projects Section */}
        <section id="projects" className={isDark ? 'bg-[#181a20]' : 'bg-white'}>
          <div className="container mx-auto px-6 py-20">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              className="text-3xl font-bold mb-4 text-center font-display tracking-tight"
            >
              Featured Projects
              {/* <span className="text-purple-500">Projects</span> */}
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12"
            >
              {[
                {
                  title: 'Stock Market Platform',
                  description: 'Developed a responsive platform with secure payment integration and Google OAuth authentication.',
                  tech: ['React.js', 'PHP', 'MySQL'],
                  link: 'https://dtctradingclub.com/',
                  github: 'https://github.com/Ajay309/stockproject'
                },
                {
                  title: 'Digitalised Local Shopping',
                  description: 'Built a smart solution to boost small vendor visibility with real-time browsing, ordering, and interaction.',
                  tech: ['React.js', 'Node.js', 'MySQl', 'Express'],
                  link: '',
                  github: 'https://github.com/nilancy04/DigitalLocalShop'
                },
                {
                  title: 'Discover Places',
                  description: 'Developed a responsive travel website with Google Maps, travel planner, and EmailJS integration for smooth user interaction.',
                  tech: ['React.js', 'EmailJS','Google Maps API'],
                  link: 'https://discover-places.netlify.app/',
                  github: 'https://github.com/nilancy04/Travel'
                }
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`p-8 rounded-2xl border border-purple-500/20 transition-all duration-300 shadow-lg ${isDark ? 'bg-[#23263a]' : 'bg-gray-50'} flex flex-col gap-4`}
                >
                  <h3 className="text-xl font-semibold font-display tracking-wide mb-2">{project.title}</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-500">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                  {project.link && (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-500 hover:text-gray-400 transition-colors font-medium"
  >
    Live Demo
  </a>
)}

                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors font-medium">GitHub</a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`py-20 ${
          isDark ? 'bg-[#13151a]' : 'bg-gray-50'
        }`}>
          <div className="container mx-auto px-6">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              className="text-3xl font-bold mb-12 text-center"
            >
              Work Experience
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="relative pl-8 border-l-2 border-purple-500/20"
              >
                {[
                  {
                    title: "Mern Stack Intern",
                    company: "SIKAR INFOTECH",
                    period: "05/2025 - 07/2025",
                    description: [
                      "Engineered a fully dynamic, high-performance stock market platform with an interactive React.",
                      "Designed robust, secure, and scalable APIs using PHP, ensuring smooth data flow and user experience.",
                      "Optimized real-time data handling and storage with MySQL, enhancing system reliability.",
                      "Seamlessly integrated Razorpay for secure payments and Google OAuth for effortless, one-click login."
                    ],
                    // certificate: {
                    //   url: "https://drive.google.com/file/d/19MCuQMTFPL140nw5cFSwa1LVqFF-K0oh/view?usp=drivesdk",
                    //   title: "View Certificate"
                    // }
                  },
                  {
                    title: "AI-ML Intern",
                    company: "EduSkills",
                    period: "10/2024 - 12/2024",
                    description: [
                      "Focused on AI/ML concepts and real-world applications.",
                      "Gained hands-on experience with Python, TensorFlow, and data preprocessing.",
                      "Built, optimized, and evaluated AI/ML models.",
                      "Enhanced problem-solving and technical skills in AI/ML."
                    ],
                    certificate: {
                      url: "https://drive.google.com/file/d/19MCuQMTFPL140nw5cFSwa1LVqFF-K0oh/view?usp=drivesdk",
                      title: "View Certificate"
                    }
                  },
                  {
                    title: "PMKVY-4.0",
                    company: "Skill India- NSDC",
                    period: "2024 - 2025",
                    description: [
                      "Contributed to India's PMKVY 4.0 skill development initiative as an intern.  ",
                      "Assisted in curriculum design, data analysis, and program outreach.  ",
                      "Collaborated with teams to onboard training centers and optimize digital platforms.",
                      "Gained project management experience while supporting youth skill development."
                    ]
                  },
                  {
                    title: "Android Developer Intern",
                    company: "NEAT- Eduskills",
                    period: "04/2024 - 06/2024",
                    description: [
                      "Built and tested Android applications during Google Android Development virtual internship. ",
                      "Gained experience in UI design, data management, and app testing.",
                      "Improved skills in Kotlin, Java, and Android SDK.  ",
                      "Learned performance optimization and debugging techniques."
                    ],
                    certificate: {
                      url: "https://drive.google.com/file/d/1xcolBwKoUUJOkgy8hzKadmnhTjTaIHZI/view?usp=drivesdk",
                      title: "View Certificate"
                    }
                  }
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="mb-12 relative"
                  >
                    <div className="absolute -left-10 top-0 w-4 h-4 bg-purple-500 rounded-full" />
                    <div className={`${isDark ? 'bg-[#1c1f26]' : 'bg-white'} p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all`}>
                      <h3 className="text-xl font-semibold font-display tracking-wide">{job.title}</h3>
                      <p className="text-purple-500 mb-2">{job.company}</p>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{job.period}</p>
                      <ul className="space-y-2 mb-6">
                        {job.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className={`${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-start`}
                          >
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      {job.certificate && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="mt-4"
                        >
                          <a 
                            href={job.certificate.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                              isDark 
                                ? 'bg-purple-600 hover:bg-purple-700' 
                                : 'bg-purple-500 hover:bg-purple-600'
                            } text-white transition-colors`}
                          >
                            <Trophy size={20} />
                            {job.certificate.title}
                          </a>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              {[
                {
                  title: "Bachelor of Technology",
                  school: "SRM Institute of Science and Technology",
                  period: "2023 - 2027",
                  score: "9.8",
                  scoreLabel: "CGPA",
                  maxScore: "10",
                  courses: ["Computer Science and Engineering"]
                },
                {
                  title: "12th",
                  school: "Matrix Senior Secondary School",
                  period: "2022 - 2023",
                  score: "85.40",
                  scoreLabel: "Percentage",
                  maxScore: "100",
                  courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
                },
                {
                  title: "10th",
                  school: "Matrix Senior Secondary School",
                  period: "2020 - 2021",
                  score: "94",
                  scoreLabel: "Percentage",
                  maxScore: "100",
                  courses: ["Science", "Mathematics", "Social Studies"]
                }
              ].map((edu, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={codeBlockVariants}
                  className={`${isDark ? 'bg-[#1c1f26]' : 'bg-white'} p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all`}
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden md:block">
                      <GraduationCap className="w-12 h-12 text-purple-500" />
                    </div>
                    <div>
                      <motion.h3 
                        variants={textRevealVariants}
                        className="text-xl font-semibold"
                      >
                        {edu.title}
                      </motion.h3>
                      <motion.p 
                        variants={textRevealVariants}
                        className="text-purple-500 mb-4"
                      >
                        {edu.school} • {edu.period}
                      </motion.p>
                      <motion.p 
                        variants={textRevealVariants}
                        className="text-gray-400 mb-4"
                      >
                        {edu.scoreLabel}: <AnimatedCounter end={parseFloat(edu.score)} duration={2000} decimals={2} /> /{edu.maxScore}
                      </motion.p>
                      <motion.div 
                        variants={containerVariants}
                        className="space-y-4"
                      >
                        <div>
                          <h4 className="font-semibold mb-2">Relevant Coursework</h4>
                          <ul className="grid grid-cols-2 gap-2 text-gray-400">
                            {edu.courses.map((course, idx) => (
                              <motion.li
                                key={idx}
                                variants={itemVariants}
                                className="flex items-center"
                              >
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                {course}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className={`py-20 ${
          isDark ? 'bg-[#13151a]' : 'bg-gray-50'
        }`}>
          <div className="container mx-auto px-6">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              className="text-3xl font-bold mb-12 text-center"
            >
              Certifications
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {[
                {
                  title: "NPTEL-Database",
                  issuer: "Indian Institute of Technology Madras",
                  date: "Jan - Apr 2025",
                  icon: <Trophy className="w-12 h-12 text-purple-500" />,
                  certificateUrl: "https://drive.google.com/file/d/1KfPDrl4EW-IJjaYqMrFwGA-rBAy5x8fL/view?usp=drivesdk"
                },
                {
                  title: "Software Engineering Job Simulation",
                  issuer: "By JP Morgan Chase & Co.",
                  date: "12 Jan, 2025",
                  icon: <Award className="w-12 h-12 text-purple-500" />,
                  certificateUrl: "https://drive.google.com/file/d/1CF2gbvg77vhPnkPEyVlcVR66HbBK4tgs/view?usp=drivesdk"
                },
                {
                  title: "NPTEL-Programming in JAVA",
                  issuer: "Indian Institute of Technology Kharagpur",
                  date: " Jul-Oct 2024",
                  icon: <Award className="w-12 h-12 text-purple-500" />,
                  certificateUrl: "https://drive.google.com/file/d/15zCqgZ_uCExtiBGyaVmipwB6HAa4WCvQ/view?usp=drivesdk"
                },
                {
                  title: "OCI 2024",
                  issuer: "Oracle University",
                  date: "Feb 12, 2025",
                  icon: <Award className="w-12 h-12 text-purple-500" />,
                  certificateUrl: "https://drive.google.com/file/d/1mLs9cydpW5tGa_3L6yYM5olCj-AT-Isn/view?usp=drivesdk"
                },
                {
                  title: "AWS",
                  issuer: "AWS Academy",
                  date: "12 march, 2025",
                  icon: <Award className="w-12 h-12 text-purple-500" />,

                  certificateUrl: "https://drive.google.com/file/d/1mRSxfppiBwqWNwYDiR4wfQYfVB7R4KrY/view?usp=drivesdk"
                },
                {
                  title: "Technova",
                  issuer: "ESSPL",
                  date: "04 oct, 2024",
                  icon: <Award className="w-12 h-12 text-purple-500" />,
                  certificateUrl: "https://drive.google.com/file/d/1uMr9rgZza0L97-JcontM38kHUj9yYW2v/view?usp=drivesdk"
                }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  variants={codeBlockVariants}
                  className={`${isDark ? 'bg-[#1c1f26]' : 'bg-white'} p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all`}
                >
                  <div className="flex items-start gap-4">
                    {cert.icon}
                    <div className="flex-1">
                      <motion.h3 
                        variants={textRevealVariants}
                        className="text-xl font-semibold"
                      >
                        {cert.title}
                      </motion.h3>
                      <motion.p 
                        variants={textRevealVariants}
                        className="text-purple-500"
                      >
                        {cert.issuer}
                      </motion.p>
                      <motion.p 
                        variants={textRevealVariants}
                        className="text-gray-400 mt-2"
                      >
                        {cert.date}
                      </motion.p>
                      <motion.div
                        variants={textRevealVariants}
                        className="mt-4"
                      >
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                            isDark 
                              ? 'bg-purple-600 hover:bg-purple-700' 
                              : 'bg-purple-500 hover:bg-purple-600'
                          } text-white text-sm transition-colors`}
                        >
                          <Trophy size={16} />
                          View Certificate
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className={isDark ? 'bg-[#181a20]' : 'bg-white'}>
          <div className="container mx-auto px-6 py-20">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              className="text-3xl font-bold mb-4 text-center font-display tracking-tight"
            >
              Contact Me
               {/* <span className="text-purple-500">Me</span> */}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className={`mb-8 text-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Have a question, want to collaborate, or just want to say hi? Fill out the form below and I'll get back to you soon!
            </motion.p>
            <motion.form
              ref={formRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-xl mx-auto bg-opacity-80 rounded-2xl p-8 shadow-lg flex flex-col gap-6 border border-purple-500/10"
              onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setSending(true);
                setResultMsg('');
                if (formRef.current) {
                  try {
                    await emailjs.sendForm(
                      'service_lwxbzhl',
                      'template_kdyb7ix',
                      formRef.current,
                      'yYoQ8N3cfbVSfIvis'
                    );
                    setResultMsg('Message sent successfully!');
                    formRef.current.reset();
                  } catch (err) {
                    setResultMsg('Failed to send message. Please try again.');
                  }
                }
                setSending(false);
              }}
            >
              <div>
                <label className="block mb-2 font-medium" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg border outline-none transition-colors ${isDark ? 'bg-[#23263a] border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:border-purple-500`}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg border outline-none transition-colors ${isDark ? 'bg-[#23263a] border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:border-purple-500`}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`w-full px-4 py-2 rounded-lg border outline-none transition-colors resize-none ${isDark ? 'bg-[#23263a] border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} focus:border-purple-500`}
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${isDark ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-500 hover:bg-purple-600 text-white'}`}
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {resultMsg && (
                <div className={`text-center mt-2 font-medium ${resultMsg.includes('success') ? 'text-purple-600' : 'text-red-500'}`}>{resultMsg}</div>
              )}
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${
          isDark ? 'bg-[#0f1115] text-gray-400' : 'bg-white text-gray-600'
        } py-8`}>
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-4 mb-4"
            >
              <a href="https://github.com/nilancy04" className="hover:text-purple-500 transition-colors"><Github   size={20} /></a>
              <a href="https://www.linkedin.com/in/nilancy04/" className="hover:text-purple-500 transition-colors"><Linkedin size={20} /></a>
              <a href="https://x.com/nilancy2005" className="hover:text-purple-500 transition-colors"><Twitter size={20} /></a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2024 Nilancy Agarwal. All rights reserved.
            </motion.p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;