/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level:Basic, Duration: 1 hours, NoOf Chapters:5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Fundamentals\",\n    \"description\": \"A beginner-friendly introduction to Python programming, covering the core concepts and syntax essential for building simple programs.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter will introduce you to Python, its history, key features, and why it's a popular choice for programming.\",\n        \"duration\": \"15 minutes\",\n        \"category\": \"Programming\",\n        \"topic\": \"Python\",\n        \"level\": \"Basic\"\n      },\n      {\n        \"name\": \"Variables and Data Types\",\n        \"about\": \"Learn about different data types in Python, how to declare variables, and perform basic operations on them.\",\n        \"duration\": \"20 minutes\",\n        \"category\": \"Programming\",\n        \"topic\": \"Python\",\n        \"level\": \"Basic\"\n      },\n      {\n        \"name\": \"Operators and Expressions\",\n        \"about\": \"Explore arithmetic, comparison, logical operators, and how to write expressions to manipulate data.\",\n        \"duration\": \"20 minutes\",\n        \"category\": \"Programming\",\n        \"topic\": \"Python\",\n        \"level\": \"Basic\"\n      },\n      {\n        \"name\": \"Conditional Statements and Loops\",\n        \"about\": \"Learn how to control the flow of your program using if-else statements, for loops, and while loops.\",\n        \"duration\": \"20 minutes\",\n        \"category\": \"Programming\",\n        \"topic\": \"Python\",\n        \"level\": \"Basic\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"Understand the concept of functions for code organization and reuse, and discover how to use built-in modules.\",\n        \"duration\": \"15 minutes\",\n        \"category\": \"Programming\",\n        \"topic\": \"Python\",\n        \"level\": \"Basic\"\n      }\n    ],\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour\",\n    \"noOfChapters\": 5\n  }\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in Detail on Topic: yoga, Chapter:Introduction to Yoga, in JSON Format with list of array with field as title, description in detail, Code Example(Code field in <precode> format) if applicable"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"title\": \"What is Yoga?\",\n    \"description\": \"Yoga is a multifaceted practice that originated in ancient India. It encompasses physical postures (asana), breathing techniques (pranayama), meditation, and ethical principles (yama and niyama). The goal of yoga is to achieve a state of union between the body, mind, and spirit, leading to overall well-being and spiritual enlightenment.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Origins and History\",\n    \"description\": \"Yoga's origins can be traced back thousands of years to the Indus Valley Civilization. Early forms of yoga were likely based on rituals and practices related to nature worship and spiritual development. The earliest known text on yoga is the Yoga Sutras of Patanjali, which dates back to around 200 BCE. This text outlines the eight limbs of yoga, a framework for achieving liberation.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"The Eight Limbs of Yoga\",\n    \"description\": \"The eight limbs of yoga, as described by Patanjali, provide a comprehensive system for spiritual growth. They are:\\n\\n1. **Yama (Ethical Restraints):** Ahimsa (non-violence), Satya (truthfulness), Asteya (non-stealing), Brahmacharya (continence), and Aparigraha (non-attachment).\\n2. **Niyama (Ethical Observances):** Saucha (cleanliness), Santosha (contentment), Tapas (discipline), Swadhyaya (self-study), and Ishvara Pranidhana (surrender to the Divine).\\n3. **Asana (Postures):** Physical postures designed to cultivate flexibility, strength, balance, and awareness.\\n4. **Pranayama (Breathing Techniques):** Techniques for controlling the breath, which influences the mind and body.\\n5. **Pratyahara (Withdrawal of the Senses):** Turning inward and focusing on the inner world, reducing distractions.\\n6. **Dharana (Concentration):** Focusing the mind on a single object or point.\\n7. **Dhyana (Meditation):** Cultivating a state of deep absorption and awareness.\\n8. **Samadhi (Liberation):** A state of enlightenment and union with the divine.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Types of Yoga\",\n    \"description\": \"There are numerous styles of yoga, each with its own emphasis and approach. Some popular styles include:\\n\\n* **Hatha Yoga:** The most common style, focusing on physical postures and breathing exercises.\\n* **Vinyasa Yoga:** A dynamic style that connects poses with breath, creating a flowing sequence.\\n* **Ashtanga Yoga:** A rigorous and physically demanding style with a specific series of poses.\\n* **Iyengar Yoga:** Emphasizes alignment, precision, and the use of props.\\n* **Bikram Yoga:** Performed in a heated room and follows a set sequence of poses.\\n* **Kundalini Yoga:** Focuses on awakening energy through specific postures, breathwork, and meditation.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Benefits of Yoga\",\n    \"description\": \"Yoga offers a wide range of physical, mental, and spiritual benefits, including:\\n\\n* **Physical Benefits:** Improved flexibility, strength, balance, and cardiovascular health.\\n* **Mental Benefits:** Reduced stress and anxiety, improved focus and concentration, enhanced self-awareness.\\n* **Spiritual Benefits:** Cultivating inner peace, fostering compassion, and connecting with a higher purpose.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Yoga for Beginners\",\n    \"description\": \"If you're new to yoga, it's essential to start with a beginner-friendly class and gradually progress. Listen to your body, avoid overexertion, and seek guidance from a qualified instructor. It's also helpful to practice regularly and establish a consistent routine.\",\n    \"code\": \"\"\n  }\n]\n```"},
          ],
        },
      ],
    });
  