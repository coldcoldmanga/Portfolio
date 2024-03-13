import React from 'react';
import { useState } from 'react';
import { TypeAnimation }  from 'react-type-animation';
import Profile from './profile.jsx';
import Button from './button.jsx';
import { render } from '@testing-library/react';

const App = () => {

    const [activePage, setPage] = useState(null);
    
    const renderPage = () => {
        switch(activePage){
            case 'Profile':
                return <Profile/>;
            case 'Skill':
                return null;
            case 'Project':
                return null;
            default:
                return null;
        }
    }

    return (
        <>
        <div className='container'>
            <div className='button'>
            <Button btn={"Profile"} setPage={setPage}/>
            <Button btn={"Skill"} setPage={setPage}/>
            <Button btn={"Project"} setPage={setPage}/>    
            </div>

            <div className='screen'>
            <div className='title'>
            <div><p className='intro'>// HI, I'M MELVIN KWAN, A...</p></div>
            
        
            <div className='role'>
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
            </div>

            </div>

            <div className='content'>
                {renderPage()}
            </div>

            </div>
           
        </div>

        <footer className='footer'>©2024 - Melvin Kwan Yii Syn</footer>
            
        </>

      
    );
  };

export default App;