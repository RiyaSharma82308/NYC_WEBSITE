const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Enable CORS
app.use(cors());


app.post('/api/ContactForm', async (req, res) => {
  const { name, email, contactNumber, message } = req.body;

  // Configure nodemailer using SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server
    port: 587, // Replace with your SMTP port
    secure: false,
    auth: {
      user: 'clashwithchiefrpjyt@gmail.com', // Replace with your email
      pass: 'finkaexhjzagjsag', // Replace with your email password
    },
  });

  // Email content
  const mailOptions = {
    from: email, // Replace with your email
    to: 'riya82308@gmail.com', // Replace with recipient's email
    subject: 'Query to reach you out',
    html: `<p>Hey there, I just had a query so I wanted to reach out to you. Here goes my details below</p>
    <p>Name: ${name}</p><p>Email: ${email}</p><p>Number: ${contactNumber}</p><p>Message: ${message}</p>`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// project form 

app.post('/api/ProjectForm', async (req, res) => {
  const { name, contact, designation, service, additionalInfo } = req.body;

  // Configure nodemailer using SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server
    port: 587, // Replace with your SMTP port
    secure: false,
    auth: {
      user: 'clashwithchiefrpjyt@gmail.com', // Replace with your email
      pass: 'finkaexhjzagjsag', // Replace with your email password
    },
  });

  // Email content
  const mailOptions = {
    from: "clashwithchiefrpjyt@gmail.com", // Replace with your email
    to: 'riya82308@gmail.com', // Replace with recipient's email
    subject: 'Our Idea',
    html: `<p>Hey there, I just had a query so I wanted to reach out to you. Here goes my details below</p>
    <p>Name: ${name}</p><p>Contact Number: ${contact}</p><p>designation: ${designation}</p><p>Service: ${service}</p><p>Our Idea: ${additionalInfo}</p>`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Operatinal Manager Form


const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/api/OperationalManagerForm', upload.single('resumeFile'), async (req, res) => {
  const { name, email, contact, designation, CTC, otherinfo, linkedin, additionalInfo } = req.body;
  const resumeFile = req.file; // The uploaded resume file

  // Configure nodemailer using SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server
    port: 587, // Replace with your SMTP port
    secure: false,
    auth: {
      user: 'clashwithchiefrpjyt@gmail.com', // Replace with your email
      pass: 'finkaexhjzagjsag', // Replace with your email password
    },
  });

  // Email content
  const mailOptions = {
    from: email, // Replace with your email
    to: 'riya82308@gmail.com', // Replace with recipient's email
    subject: 'want to join',
    html: `<p>Hey there, I just had a query so I wanted to reach out to you. Here goes my details below</p>
    <p>Name: ${name}</p><p>Email: ${email}</p><p>Contact Number: ${contact}</p><p>designation: ${designation}</p><p>Current CTC: ${CTC}</p><p>other info: ${otherinfo}</p><p>Linkedin: ${linkedin}</p><p>About me: ${additionalInfo}</p>`,
    attachments: [
      {
        filename: resumeFile.originalname, // Use the original filename
        content: resumeFile.buffer, // Use the file buffer from memory
      },
    ],
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});