import { useState } from "react";

import axios from "axios";

function ChatApp() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
    <div>
    <form
      onSubmit={generateAnswer}
      >
    
      <textarea
        required
           value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything"
      ></textarea>
      <button
        type="submit"
      
        disabled={generatingAnswer}
      >
        Generate answer
      </button>
    </form>
    <div>
      {answer}
    </div>
  </div>
    </>
  );
}

export default ChatApp;