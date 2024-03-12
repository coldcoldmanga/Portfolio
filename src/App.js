import React from 'react';
import { useState } from 'react';
import { TypeAnimation }  from 'react-type-animation';

const App = () => {

    const [textColor, setTextColor] = useState('red');

    return (
        <>
        <div className='container'>
            <div className='title'>
            <div><p className='intro'>// HI, I'M MELVIN KWAN, A...</p></div>
        
            <div>
                <h1 className='role'>
                    <span className='fixed-curly'>{"{'  "}</span>
                    <TypeAnimation
                    sequence={[
                    '_Programmer', 
                    2000, // Waits 1s
                    '_Web Developer', 
                    2000, // Waits 2s
                    '_Sabahan', 
                    2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '4em', display: 'flex', justifyContent:'center', alignContent:'center', marginTop:'30px', color:'#00ADB5'}}
                />
                    <span className='fixed-curly'>{"  '}"}</span>
                </h1>
            </div>

            </div>

            <div className='content'>
            <div className='card'>
                <div className='card-content'>
                    <nav></nav>
                    <div></div>
                    <footer></footer>
                </div>
            </div>

            <div className='button'>
                    <div className='button-content'>
                        <button>something</button>
                    </div>
            </div>

            </div>

            
        

        </div>
            
        </>

      
    );
  };

export default App;