import React, { useState, useEffect, useRef } from 'react';

import copy from 'copy-to-clipboard';

import './global.css';
import './App.css';
import './Main.css';

function App() {

	const [ borderValue, setBorderValue ] = useState([]);
	const [ border1, setBorder1 ] = useState(0);
	const [ border2, setBorder2 ] = useState(0);
	const [ border3, setBorder3 ] = useState(0);
	const [ border4, setBorder4 ] = useState(0);

  const textRef = useRef();

  const [ copied, setCopied ] = useState(false);

	useEffect(() => {
		if(border1 === '') {
			setBorderValue([''])
		} else {
			setBorderValue([border1, border2 ,border3 ,border4])	
		}
		
	}, [border1, border2 ,border3 ,border4]);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }, [copied])

	function handleClipboard() {		
    const textClipboard = textRef.current.innerText;
    copy(textClipboard)
    setCopied(true)
	}


	return (
		<div id="app">
			<main>
				<div className="borderRadius">
					<input 
						value={border1}
						type="number"
						onChange={e => setBorder1(e.target.value)}
					/>
					<input 
						value={border3}
						type="number"
						onChange={e => setBorder3(e.target.value)}
					/>
				</div>

				<div className="borderRadiusView" style={{ 
					borderTopLeftRadius: Number(border1),
					borderTopRightRadius: Number(border2),
					borderBottomLeftRadius: Number(border3),
					borderBottomRightRadius: Number(border4)
				}}>
					<div className="codeView" ref={textRef} value="oi">

						<span>border-radius</span>:
						<span>{borderValue.join('px ')}px</span>
						;
					</div>
					<div className="clipboard" onClick={handleClipboard }>
						<p>Copy</p>
					</div>
          {copied && (
            <p className="copied">Copied!</p>
          )}
				</div>

				<div className="borderRadius">
					<input 
						value={border2}
						type="number"
						onChange={e => setBorder2(e.target.value)}
					/>
					<input 
						value={border4}
						type="number"
						onChange={e => setBorder4(e.target.value)}
					/>
				</div>
			</main>
			<aside></aside>
		</div>
	);
}



export default App;
