const Course = require('../models/Course');

// Fetch all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new course
exports.addCourse = async (req, res) => {
  const { title, description, videoURL, quizzes } = req.body;
  try {
    const course = new Course({ title, description, videoURL, quizzes });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
