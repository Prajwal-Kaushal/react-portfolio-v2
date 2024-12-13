import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Text-Summarizer",
    image: projectOne,
    description: (
      <>
        <p>
        The Text-Summarizer project is designed to automatically condense large texts 
        into concise summaries, making it easier to extract key insights and information.
         By leveraging advanced algorithms, it processes input data efficiently to generate
          meaningful and accurate summaries, enhancing readability and saving time for users.
        </p>
      </>
    ),
    github: "https://github.com/Prajwal-Kaushal/Text-Summarizer",
    demo: "https://netlify.com",
  },
  2: {
    title: "Smart-ATS(Apoplication tracking system)",
    image: projectTwo,
    description: (
      <>
        <p>
        
The Resume Optimization and Job Matching Tool compares resumes with job descriptions to provide a match percentage, highlight missing keywords, and suggest improvements. It helps job seekers optimize their resumes, increase their success chances, and efficiently track application progress.
        </p>
      </>
    ),
    github: "https://github.com/Prajwal-Kaushal/Application-Tracking-System",
    demo: "https://netlify.com",
  },
  3: {
    title: "Personality Predictor",
    image: projectThree,
    description: (
      <>
        <p>
        The MBTI Personality Predictor analyzes Twitter tweets to determine a user's
         Myers-Briggs personality type. Using natural language processing (NLP), 
         it identifies linguistic patterns and behaviors to classify users into MBTI
          categories, offering insights into personality traits based on social media
           activity.
        </p>
      </>
    ),
    github: "https://github.com/Prajwal-Kaushal/Personality_Predictor",
    demo: "https://netlify.com",
  },
};

export default projects;
