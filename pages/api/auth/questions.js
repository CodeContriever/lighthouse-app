// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
            {
            "question": "Which two tribes of Israel were not named after sons of Jacob?",
            "answerOptions": [
            {"answer": "Reuben and Ephraim"},
            {"answer": "Judah and Zebulun"},
            {"answer": "Ephraim and Manesseh", "is correct": true},
            {"answer": "Manesseh and Simeon"}
            ]
            },
            {
            "question": "Who went up yearly to worship God in Shiloh, and one year prayed to God for a baby?",
            "answerOptions": [
            {"answer": "Hannah", "isCorrect": true },
            {"answer": "Peninnah"},
            {"answer": "Sarah"},
            {"answer": "Rebekah"}
            ]
            },
            {
            "question": "What did Melchizedek give to Abraham?",
            "answerOptions": [
            {"answer": "Roasted meat"},
            {"answer": "Bread and milk"},
            {"answer": "Bread and wine", "isCorrect": true},
            {"answer": "Yogurt"}
            ]
            },
            {
            "question": "When the disciples saw Jesus walking on water, what did they think he was?",
            "answerOptions": [
            {"answer": "A spirit"},
            {"answer": "A ghost", "isCorrect": true},
            {"answer": "A spectre"},
            {"answer": "A wraith"}
            ]
            },
            {
            "question": "Who was Paul with when he wrote the letter to Philemon?",
            "answerOptions": [
            {"answer": "John"},
            {"answer": "Timothy", "isCorrect": true},
            {"answer": "Matthew"},
            {"answer": "Philip"}
            ]
            },
            {
            "question": "What happened to King Nebuchadnezzar before being restored as king?",
            "answerOptions": [
            {"answer": "He was purnished by his own people"},
            {"answer": "He was exiled"},
            {"answer": "He went mad"},
            {"answer": "He went mad and lived as a beast", "isCorrect": true}
            ]
            },
            {
            "question": "Who was the father in law of Caiaphas, the high priest at the time of Jesus death?",
            "answerOptions": [
            {"answer": "Annas", "isCorrect": true},
            {"answer": "Seth"},
            {"answer": "Augustus"},
            {"answer": "Josephus"}
            ]
            },
            {
            "question": "Who escorted the slave with the letter to Philemon?",
            "answerOptions": [
            {"answer": "Paul"},
            {"answer": "Onesimus"},
            {"answer": "Tychius", "isCorrect": true},
            {"answer": "Eirene"}
            ]
            },
            {
            "question": "Which missionary was described as having known the holy scriptures from an early age?",
            "answerOptions": [
            {"answer": "Pual"},
            {"answer": "John"},
            {"answer": "Timothy", "isCorrect": true},
            {"answer": "Matthew"}
            ]
            },
            {
            "question": "Who was king of the southern kingdom when the northern kingdom of Israel fell to Assyria?",
            "answerOptions": [
            {"answer": "Rehoboam"},
            {"answer": "Saul"},
            {"answer": "David"},
            {"answer": "Hezekiah", "isCorrect": true}
            ]
            } 
    ]                                                             
  )
  }