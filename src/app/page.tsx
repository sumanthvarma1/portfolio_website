
import Image from "next/image";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen font-sans">
      <nav className="sticky top-0 bg-white dark:bg-black bg-opacity-80 backdrop-blur-sm z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold">Sumanth Varma Dandu</span>
            <div className="flex items-center space-x-4 text-lg">
              <a href="#about" className="hover:text-gray-400">About</a>
              <a href="#experience" className="hover:text-gray-400">Experience</a>
              <a href="#skills" className="hover:text-gray-400">Skills</a>
              <a href="#education" className="hover:text-gray-400">Education</a>
              <a href="#contact" className="hover:text-gray-400">Contact</a>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </nav>

      <header className="max-w-5xl mx-auto px-4 py-32 text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/profile.jpg"
            alt="Sumanth Varma Dandu"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Sumanth Varma Dandu
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            AI/ML, Data Analytics @Tiktok
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4">
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
            I’m passionate about using data to uncover insights and create
            meaningful solutions. Over the years, I’ve worked on building
            scalable data pipelines, optimizing systems, and delivering projects
            that make a real difference. What I enjoy most is breaking down
            complex technical ideas so they’re easy for everyone to understand
            and act on, whether it’s a teammate or a company leader. I’m driven
            by the impact that data and technology can have in shaping smarter
            strategies and better outcomes.
          </p>
        </section>

        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-8">Top Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">Retrieval-Augmented Generation (RAG)</span>
            <span className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">Token constraints</span>
            <span className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">Multi-source data access</span>
          </div>
        </section>

        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-12">
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-8">
              <h3 className="text-2xl font-bold">TikTok</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Analytics Engineer | Dec 2024 - Present</p>
              <p className="mt-2">New York City Metropolitan Area</p>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-8">
              <h3 className="text-2xl font-bold">ByteDance</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Analytics Engineer | Dec 2024 - Present</p>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-8">
              <h3 className="text-2xl font-bold">UpSquad</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Software Engineer Trainee (Data) | Jun 2024 - Dec 2024</p>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-8">
              <h3 className="text-2xl font-bold">Montclair State University</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Data Analyst and Technology Support | Oct 2021 - Apr 2024</p>
               <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Graduate Assistant | Sep 2022 - May 2023</p>
              <p className="mt-2">Montclair, New Jersey, United States</p>
            </div>
            <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-8">
              <h3 className="text-2xl font-bold">OpsAway</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">Data Engineer | Sep 2018 - Aug 2021</p>
              <p className="mt-2">Hyderabad, Telangana, India</p>
            </div>
          </div>
        </section>

        <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
          <div className="text-center">
            <h3 className="text-2xl font-bold">Montclair State University</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">Master of Science - MS, Computer and Information Sciences, General</p>
            <p className="mt-1 text-gray-500">Sep 2021 - May 2023</p>
          </div>
        </section>
        
        <section id="certifications" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
          <div className="text-center">
            <p className="text-lg">Complete python Boot camp</p>
          </div>
        </section>

        <section id="contact" className="py-16 text-center bg-gray-50 dark:bg-gray-900">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <p className="text-lg mb-4"> Feel free to reach out if you would like to discuss about Data Analytics & Engineering!</p>
          <div className="flex justify-center gap-8">
            <a href="mailto:dandusumanthvarma1909@gmail.com" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition-colors">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/sumanthvarmadandu" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-800 transition-colors">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-800">
        <p>&copy; 2026 Sumanth Varma Dandu. All rights reserved.</p>
      </footer>
    </div>
  );
}
