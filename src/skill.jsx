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
        
        <p class="font">root@10.0.0.1:~$ cat Introduction.txt</p>
        <p className='font profile-intro'>Introduction</p>
        <p class="font profile-content">Hey there! I'm Melvin Kwan Yii Syn, coming at you from the beautiful shores of Sabah, Malaysia. I've got a Bachelor's Degree in Security Technology from Multimedia University Malacca Campus, and I'm all about diving deep into the world of tech.</p>
        <p class="font profile-content">My toolbox is filled with all sorts of goodies—I'm fluent in HTML, CSS, JavaScript, PHP, MySQL, C++, Java, and Python. Whether it's crafting sleek websites or diving into complex coding challenges, I'm all in.</p>

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