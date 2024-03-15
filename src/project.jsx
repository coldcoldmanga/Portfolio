import React from 'react';
import { useState } from 'react';
import './Content.css';

const Project = (props) => {

    const [isMaximized, setMaximized] = useState(false);

    const handlePage = () => {
        props.setPage(null);
    }

    const Maximized = () => {
        setMaximized(!isMaximized);
    }

    const terminalStyle = isMaximized? "terminal-maximized" : "terminal";
    const barStyle = isMaximized? "bar-maximized" : "bar";
    const screenStyle = isMaximized? "screen-maximized" : "screen";

    return (
        <>
        <div className={terminalStyle}>
        <div id={barStyle}>
                <div id="red" onClick={handlePage}></div>
                <div id="yellow"></div>
                <div id="green" onClick={Maximized}></div>
            
        </div>
        <div id={screenStyle}>
        
        <p class="font">root@10.0.0.1:~$ cat Project.txt</p>
        <p class="font profile-intro">Project</p>
        <a href="https://github.com/coldcoldmanga/LibraryManagement" target='blank'><h3 class="font profile-content">Library Management System</h3></a>

        </div>
        </div>
        </>
    );
}

export default Project;

 /* <h2 className='profile-header'>Introduction</h2>
        <div className='profile-content'>
        Greetings! I'm Melvin Kwan Yii Syn, a passionate individual hailing from the scenic landscapes of Sabah, Malaysia. Armed with a Bachelor's Degree in Security Technology from Multimedia University Malacca Campus, I embark on a journey fueled by innovation and dedication.

My skill set encompasses a diverse range of languages and technologies, including HTML, CSS, JavaScript, PHP, MySQL, C++, Java, and Python. With a penchant for problem-solving and a commitment to excellence, I aim to leverage my expertise to create impactful solutions in the realm of technology.
        </div> */