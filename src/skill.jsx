import React from 'react';
import { useState } from 'react';
import './Content.css';

const Skill = (props) => {

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
        
        <p class="font">root@10.0.0.1:~$ cat Skill.txt</p>
        <p className='font profile-intro'>Skills</p>
        <p class="font profile-content">As an adaptable developer, I have a decent level of experience in web technologies such as PHP, MySQL, JavaScript, HTML, and CSS. I'm now learning React.js to increase my level of knowledge in the Frontend Development.</p>
        <p class="font profile-content"> I am capable to code with C++, Java, and new to Python programming. I am familiar with version control systems, such as GitHub and Git, to a decent degree.</p>
        <p class="font profile-content">I actively broaden my knowledge and skills in a variety of software development disciplines since I have a strong desire to learn new things constantly. Currently, I am pursuing my CCNA certification and I just finished CCNA ITN 1 from my last semester.</p>


        </div>
        </div>
        </>
    );
}

export default Skill;

 /* <h2 className='profile-header'>Introduction</h2>
        <div className='profile-content'>
        Greetings! I'm Melvin Kwan Yii Syn, a passionate individual hailing from the scenic landscapes of Sabah, Malaysia. Armed with a Bachelor's Degree in Security Technology from Multimedia University Malacca Campus, I embark on a journey fueled by innovation and dedication.

My skill set encompasses a diverse range of languages and technologies, including HTML, CSS, JavaScript, PHP, MySQL, C++, Java, and Python. With a penchant for problem-solving and a commitment to excellence, I aim to leverage my expertise to create impactful solutions in the realm of technology.
        </div> */