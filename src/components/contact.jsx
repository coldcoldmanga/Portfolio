import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <>
        
        <a href="https://github.com/coldcoldmanga" target='blank'>
        <button class="Btn-github">
            <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="black"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"/></svg>
                <span class="tooltip-github">@coldcoldmanga</span>
        </button>
        </a>

        <a href="mailto:melvinkwanys@gmail.com">
        <button class="Btn-gmail">
        <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="black"><path stroke="#000000" stroke-linejoin="round" stroke-width="12" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"/></svg>
            <span class="tooltip-gmail">@melvinkwanys@gmail.com</span>
        </button>
        </a>
        <a href="https://wa.me/601151358262" target='blank'>
        <button class="Btn-whatsapp">
        <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="black"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#000000" stroke-linecap="round" stroke-width="12" d="M96 65v44m22-22H74"></path><path stroke="#000000" stroke-linejoin="round" stroke-width="12" d="M96 151.5c35.898 0 65-28.99 65-64.75C161 50.99 131.898 22 96 22c-35.898 0-65 28.99-65 64.75 0 42.55 39 74 65 83.25v-18.5Z"></path></g></svg>        
            <span class="tooltip-whatsapp">@01151358262</span>
        </button>
        </a>
        
        
        
        

        </>
    );
}

export default Contact;