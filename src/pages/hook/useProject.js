import project11 from '../../images/project1/project1.png'
import project12 from '../../images/project1/project12.png'
import project13 from '../../images/project1/project13.png'
import project21 from '../../images/project2/project2.png'
import project22 from '../../images/project2/project22.png'
import project23 from '../../images/project2/project23.png'
import project31 from '../../images/project3/project3.png'
import project32 from '../../images/project3/project32.png'
import project33 from '../../images/project3/project33.png'

const useProject = () => {
    const projects = [
        {
            _id: "1",
            name: "Bike Warehouse",
            img1: project11,
            img2: project12,
            img3: project13,
            live: "https://velvety-entremet-267826.netlify.app/",
            client:
              "https://github.com/amirulislamhridoy/Assignment-11-bikes-warehouse-client.git",
            server:
              "https://github.com/amirulislamhridoy/Assignment-11-bikes-warehouse-server.git",
            description: [
                "A responsive website. Allowing Customers to Create an Account.", "Customer Authentication and Authorization", "Order Products, Buy Products, Delete Product, Private Route."
            ],
            usedTechnology: 'React, React Router, Bootstrap, Axios, Firebase,  React-Hook-From, React-Toastify, MongoDB Atlas,  JSON Web Token(JWT / Jot)'
        },
        {
            _id: "2",
            name: "Dr. Luke Slater",
            img1: project21,
            img2: project22,
            img3: project23,
            live: "https://assignment-10-doctor-1d2b0.web.app/",
            client:
              "https://github.com/amirulislamhridoy/Assignment-10-react-authentication.git",
            description: [
                "This is a responsive website. The Doctor gives some service to a patient.",
                "The patients can create an account. If the patient doesn’t log in, he could not see treatment details.",
                "Private Router, Dynamic Id, 404 page"
            ],
            usedTechnology: "React, React Router, Firebase, Firebase Hooks, React Icons, React Toastify."
        },
        {
            _id: "3",
            name: "Buyer Confused",
            img1: project31,
            img2: project32,
            img3: project33,
            live: "https://bejewelled-custard-7de940.netlify.app/",
            client:
              "https://github.com/amirulislamhridoy/Assignment-8-lucky-one.git",
            description: [
                "This website is different. This website is for television sales.","The main difference is this website is a lottery. If you select some TV then you click to choose one for my website show you one TV for you.", "Choose Again Button."
            ],
            usedTechnology: "React, React Modal. Font Awesome Icon."
        },
    ]
    return projects
}
export default useProject