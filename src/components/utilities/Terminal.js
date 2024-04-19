import React, { useState } from 'react';
import './Terminal.css'; // Import your CSS file for styling

const Terminal = () => {
  const [outputs, setOutputs] = useState([['Enter "contact" command to contact me']]);
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
      case 0: // Waiting for contact command
        if (command === 'contact') {
          setOutputs([...outputs, ['Enter first name:']]);
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
          setOutputs([...outputs, ['Command not recognized. Type "help" for available commands.']]);
        }
        break;
      case 1: // Waiting for first name
        setFormData({ ...formData, firstName: command });
        setOutputs([...outputs, ['Enter last name:']]);
        setStep(2);
        break;
      case 2: // Waiting for last name
        setFormData({ ...formData, lastName: command });
        setOutputs([...outputs, ['Enter email id:']]);
        setStep(3);
        break;
      case 3: // Waiting for email id
        setFormData({ ...formData, email: command });
        setOutputs([...outputs, ['Anything else you want to tell me?']]);
        setStep(4);
        break;
      case 4: // Confirmation step
        setOutputs([...outputs, ['Pls confirm this by typing "done"']]);
        setStep(5);
        break;
      case 5: // Done confirmation step
        if (command.toLowerCase() === 'done') {
          setOutputs([
            ...outputs,
            [
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
