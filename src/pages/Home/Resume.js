import React from 'react';

const Resume = () => {
    return (
        <div>
            {/* <a href='https://drive.google.com/file/d/1zz3o6mI9fX5rQ2HO57yWEWL8W8oMJNu_/view' download>Download</a> */}


            <a href="https://docs.google.com/document/d/1uVJRhgIFdtac-2_NWlknycIjfo7C-GlD/edit?usp=sharing&ouid=117187944808997710275&rtpof=true&sd=true" className='btn btn-primary' target="_blank">Download Resume</a>

            <iframe src="https://docs.google.com/document/d/1uVJRhgIFdtac-2_NWlknycIjfo7C-GlD/edit?usp=sharing&ouid=117187944808997710275&rtpof=true&sd=true" width='1000' height='1200'></iframe>
        </div>
        
    );
};

export default Resume;