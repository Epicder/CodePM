import React from 'react'

export default function ModalTest(props) {
    const [textResult, setTextResult] = useState('');

    if (props.accuracy < 40) {
        setTextResult("Wow, definitely you're my grandma with a computer! 🧓");
    }
    else if (props.accuracy < 70) {
        setTextResult('Meh, you type like everybody else. 😐');
    }
    else if (props.accuracy < 100) {
        setTextResult('Holy!, you are a typing machine! 🤖');
    }
    else {
        setTextResult('WOOOOOOOAH! You are a typing god! 🦸‍♂️');
    }

  return (
    <div className='modal'>
        <p>
            Typing test finished!
            <br />
            <br />
            Your code accuracy is: {props.accuracy}%
            <br />
            Your CPM is: {props.cpm}!
            <br />
            <br />
            {textResult}
            <button onClick={props.handleResetClick}>Try again</button>
        </p>
    </div>
  )
}
