const setQuizDataToLocalStorage = () => {
    const quizData = [{
            "name": "Computer Challenge",
            "questions": [{
                    "question": "Full form of RAM?",
                    "options": ["Read and memorize", "Random access memory", "Rapid action memory", "Read and monitor"],
                    "correct_answer": "Random access memory",
                    "points": 5
                },
                {
                    "question": "Number of bits in 1 byte",
                    "options": ["1", "4", "8", "16"],
                    "correct_answer": "8",
                    "points": 5
                }
            ],
            "highest_score": 0
        },

        {
            "name": "Science Challenge",
            "questions": [{
                    "question": "Atomic number of Hydrogen?",
                    "options": ["3", "4", "1", "2"],
                    "correct_answer": "1",
                    "points": 5
                },
                {
                    "question": "Formulae for velocity is",
                    "options": ["distance/time", "displacement/time", "time/distance", "time/displacement"],
                    "correct_answer": "distance/time",
                    "points": 5
                }
            ],
            "highest_score": 0
        }
    ];

    localStorage.setItem('quizData', JSON.stringify(quizData));
};

export default setQuizDataToLocalStorage;