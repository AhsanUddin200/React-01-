import { useState } from 'react';

const questions = [
    {
      question: "Intuitively group categories to make a much better user experience",
      answer: "By organizing your questions into natural categories a users can quickly navigate to what they need. Imagine the same process as an information architecture."
    },
    {
      question: "Write your question from the perspective of the customer",
      answer: "This helps the user connect with the question more easily and it helps you to provide relevant information more clearly."
    },
    {
      question: "Use language that your user will understand",
      answer: "Following copywriting 101 standards, always use language and terminology that your user understands so that they will connect with the dialogue and your brand. Never use terminology or complex ‘industry speak’ that your user might not understand"
    },
    {
      question: "Use your brand personality and Tone of Voice",
      answer: "Your FAQ is an extension of customer services, so this is a space where you want to show users how great you are. As with all the content on your website, use your personality and connect with your audience. Every piece of content is an opportunity to represent your brand.."
    }
]

function QuestionAns() {
    const[currentIndex,setcurrentIndex] = useState(undefined);

    const openanswer = (index) => {
        setcurrentIndex(index === currentIndex ? undefined : index);
    }

return( 
   
    <div> 
       
         <h1>Question And Answers</h1>
         <ul>
    {questions.map((q, index)=>(  
    <li  key={index}>
      
    
    <div 
    onClick={() => openanswer(index)}

    className={`question ${currentIndex=== index ? 'active' : ''}`}
     style={{ cursor: 'pointer' }} 
    >
    <h4>{q.question} </h4>

   
    </div>
    <p>{currentIndex === index && <div className="answer"> {q.answer}</div>
    }
    </p>
    
    </li>

    ))}
    </ul>

    </div>
  

    );

}

export default QuestionAns;