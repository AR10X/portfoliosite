import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Terminal.css';

const Terminal = () => {
  const [outputs, setOutputs] = useState([['Ready to get in touch? Just type "contact" to start the conversation!']]);
  const [input, setInput] = useState('');
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
      setInput('');
    }
  };

  const handleCommand = () => {
    const command = input.trim().toLowerCase();

    switch (step) {
      case 0: 
        if (command === 'contact') {
          setOutputs([...outputs, ["Let's get started! Please enter your first name:"]]);
          setStep(1);
        } else if (command === 'help') {
          setOutputs([
            ...outputs,
            [
              'Commands:',
              '- contact: Start contacting',
              '- help: Display available commands',
            ],
          ]);
        } else {
          setOutputs([...outputs, ["Hmm, I didn't catch that. Type 'help' to see the available commands."]]);
        }
        break;
      case 1: 
        setFormData({ ...formData, firstName: command });
        setOutputs([...outputs, ["Great! Now, please enter your last name:"]]);
        setStep(2);
        break;
      case 2: 
        setFormData({ ...formData, lastName: command });
        setOutputs([...outputs, ["Excellent! Please provide your email address to continue."]]);
        setStep(3);
        break;
      case 3: 
        setFormData({ ...formData, email: command });
        setOutputs([...outputs, ["Is there anything else on your mind that you'd like to share?"]]);
        setStep(4);
        break;
      case 4: 
        setFormData({ ...formData, message: command });
        setOutputs([...outputs, ["Kindly confirm your submission by typing 'done'."]]);
        setStep(5);
        break;
      case 5:
        if (command.toLowerCase() === 'done') {
          sendEmail(formData);
          setOutputs([
            ...outputs,
            [
              'Your submission has been sent successfully.',
              'Thank you for contacting me, will get back to you.',
              'Type "contact" again to fill another form',
            ],
          ]);
          setStep(0); // Reset step to 0
        } else {
          setOutputs([...outputs, ['Command not recognized. Type "done" to confirm.']]);
        }
        break;
      default:
        break;
    }
  };

  const sendEmail = (formData) => {
    emailjs.send('service_1qai191', 'template_16ihi8j', formData, 'DA3FE-Os-OIDmELbG')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  return (
    <div className="terminal-container">
        <div className="options-menu">
            <span className="option">Problems</span>
            <span className="option">Output</span>
            <span className="option">Debug Console</span>
            <span className="op-term">Terminal </span>
            <span className="option">Port </span>
            <span className="option">Comments</span>
        </div>
        <div className='terminal-wrapper'>
            {outputs.map((output, index) => (
                <div key={index} className="terminal">
                {output.map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
                </div>
            ))}
            <div className="prompt">
                <span className="path">portfoliosite@Mern</span>
                <span>:</span>
                <span className="tilde">~</span>
                <span>$</span>
                <input
                type="text"
                className="input"
                placeholder="Type here..."
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    </div>
  );
};

export default Terminal;
