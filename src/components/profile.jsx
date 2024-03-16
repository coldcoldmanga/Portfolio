import React from 'react';
import { useState } from 'react';
import './Content.css';

const Profile = (props) => {

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
        <p class="font profile-intro">Introduction</p>
        <p class="font profile-content">Greetings! My name is Melvin Kwan Yii Syn, from the Land Below the Wind, Sabah, Malaysia. Im currently pursuing my second year of study of B.C.S (hons) in Security Technology at Multimedia University Malacca Campus. With a passion for technology and a knack for problem solving, Im always ready to take on new challenges.</p>
        <p class="font profile-content">I am gear up with a diverse skillset that includes HTML, CSS, JavaScript, PHP and MySQL. Besides, I can also work in backend environment and I have sufficient knowledge in programming language such as Java, C++ and Python. For version control, I also have experience in using Git . Moreover, I'm confident in finding solution independently with my critical thinking ability.
</p>

        </div>
        </div>
        </>
    );
}

export default Profile;

 /* <h2 className='profile-header'>Introduction</h2>
        <div className='profile-content'>
        Greetings! I'm Melvin Kwan Yii Syn, a passionate individual hailing from the scenic landscapes of Sabah, Malaysia. Armed with a Bachelor's Degree in Security Technology from Multimedia University Malacca Campus, I embark on a journey fueled by innovation and dedication.

My skill set encompasses a diverse range of languages and technologies, including HTML, CSS, JavaScript, PHP, MySQL, C++, Java, and Python. With a penchant for problem-solving and a commitment to excellence, I aim to leverage my expertise to create impactful solutions in the realm of technology.
        </div> */