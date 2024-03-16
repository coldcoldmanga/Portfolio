import React from 'react';
import { useState } from 'react';
import { TypeAnimation }  from 'react-type-animation';
import Profile from './components/profile.jsx';
import Skill from './components/skill.jsx';
import Project from './components/project.jsx';
import Button from './components/button.jsx';
import Contact from './components/contact.jsx';

const App = () => {

    const [activePage, setPage] = useState(null);

    return (
        <>
        <Contact/>
        <div className='container'>

            <div className='button'>
                <Button btn={"Profile"} setPage={setPage}/>
                <Button btn={"Skill"} setPage={setPage}/>
                <Button btn={"Project"} setPage={setPage}/>    
            </div>

            <div className='content'>
                {activePage === "Profile" && <Profile setPage={setPage}/>}
                {activePage === "Skill" && <Skill setPage={setPage}/>}
                {activePage === "Project" && <Project setPage={setPage}/>}      
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

            </div>
           
        </div>

        <footer className='footer'>©2024 - Melvin Kwan Yii Syn</footer>
            
        </>

      
    );
  };

export default App;