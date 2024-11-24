const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoURL: { type: String, required: true },
  quizzes: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
    },
  ],
});

module.exports = mongoose.model('Course', CourseSchema);
