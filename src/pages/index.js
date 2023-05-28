import Navbar from '@/components/Navbar'
import Parallax from '@/components/Parallax'

function Home() {
  return (
    <>
      <Navbar />
      <Parallax />
      <div className="about">
        <h2>Telegram Bot</h2>
        <p>
          The Government Exam Preparation Chatbot is an AI-powered virtual tutor
          designed to assist individuals in their government exam preparation.
          It offers a wide range of features including exam syllabus breakdown,
          study materials, practice questions, personalized study plans, doubt
          resolution, progress tracking, and motivational support. By providing
          comprehensive resources, targeted guidance, and personalized
          assistance, the chatbot aims to enhance users' exam preparation,
          improve their knowledge and skills, and increase their chances of
          success in government exams.
        </p>
      </div>
    </>
  );
}

export default Home