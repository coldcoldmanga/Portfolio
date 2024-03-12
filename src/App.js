import React from 'react';
import { useState } from 'react';
import { TypeAnimation }  from 'react-type-animation';
import Profile from './profile.jsx';

const App = () => {

    const [activePage, setPage] = useState(null);

    const handlePage = (page) => {
        setPage(page);
    };

    return (
        <>
        <div className='container'>
            <div className='screen'>
                
            </div>
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
                    style={{ fontSize: '4em', display: 'flex', justifyContent:'center', alignContent:'center', marginTop:'30px', color:'black'}}
                />
                    <span className='fixed-curly'>{"  '}"}</span>
                </h1>
            </div>

            </div>

            <div className='button'>
                    <button className='profile-btn' onClick={() => handlePage('Profile')}>Profile</button>
                    <button className='skillset-btn'onClick={() => handlePage('Skills')}>Skills</button>
                    <button className='project-btn' onClick={() => handlePage('Project')}>Project</button>
            </div>

            
        </div>

        <footer className='footer'>©2024 - Melvin Kwan Yii Syn</footer>
            
        </>

      
    );
  };

export default App;