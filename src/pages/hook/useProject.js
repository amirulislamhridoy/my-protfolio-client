import project11 from '../../images/project1/project1.png'
import project12 from '../../images/project1/project12.png'
import project13 from '../../images/project1/project13.png'
import project21 from '../../images/project2/project2.png'
import project22 from '../../images/project2/project22.png'
import project23 from '../../images/project2/project23.png'
import project31 from '../../images/project3/project3.png'
import project32 from '../../images/project3/project32.png'
import project33 from '../../images/project3/project33.png'
import project41 from '../../images/project4/project4.png'
import project42 from '../../images/project4/project42.png'
import project43 from '../../images/project4/project43.png'
import project51 from '../../images/project5/project5.png'
import project52 from '../../images/project5/project52.png'
import project53 from '../../images/project5/project53.png'
import project61 from '../../images/project6/project6.png'
import project62 from '../../images/project6/project62.png'
import project63 from '../../images/project6/project63.png'

const useProject = () => {
  const projects = [
    {
      _id: "1",
      name: "LFZero ",
      img1: project11,
      img2: project12,
      img3: project13,
      live: "https://learn-from-zero.vercel.app/",
      client:
        "https://github.com/rezainiet/lfzero-client.git",
      server:
        "https://github.com/rezainiet/lfzero-server.git",
      description: [
        "Learn from Zero is an online educational platform web application.", "Two types of user in this site such as student & instructor. Students can communicate with their enrolled courses instructor via chat.", "Some features for students, some features for instructors and super admin all access."
      ],
      usedTechnology: 'React, Firebase, Socket.io, used MVC pattern architecture, Node.js, MongoDB, Mongoose, React-Toastify'
    },
    {
      _id: "2",
      name: "Royal Manufacturer",
      img1: project51,
      img2: project52,
      img3: project53,
      live: "https://royal-manufacturer.netlify.app/",
      client:
        "https://github.com/amirulislamhridoy/Royal_Manufacturer_Client.git",
      server:
        "https://github.com/amirulislamhridoy/Royal-Manufacturer-Server.git",
      description: [
        "This is a manufacturer factory website. Any customer can buy from this website for his business or use.", "It has authentication and authorization system. It has toast system for user experience.", "Customers can order to buy and then delete or payment.", "Customer order data and payment transaction id will be stored and shown in UI."
      ],
      usedTechnology: 'React, Firebase, React-Helmet, React-Hook,Form, React-slick, React-animation'
    },
    {
      _id: "3",
      name: "Medical Clinic",
      img1: project61,
      img2: project62,
      img3: project63,
      live: "https://medical-clinic-hridoy.netlify.app/",
      client:
        "https://github.com/amirulislamhridoy/Medical-Clinic-Client.git",
      server:
        "https://github.com/amirulislamhridoy/Medical_Clinic_Server.git",
      description: [
        "Medical Clinic in clinic website.", "It has clinic doctors, services, appointment system. Patients can know easily about doctors and clinic.", "It has authentication system for appointment system management."
      ],
      usedTechnology: 'React, Redux, SASS, React Day Picker, Firebase, swiper, Node.js, Express.js, MongoDB'
    },
  ]
  return projects
}
export default useProject

    // {
    //   _id: "4",
    //   name: "Dr. Luke Slater ",
    //   img1: project31,
    //   img2: project32,
    //   img3: project33,
    //   live: "https://dr-luke-slater.netlify.app/",
    //   client:
    //     "https://github.com/amirulislamhridoy/Dr.-Luke-Slater.git",
    //   description: [
    //     "This is a responsive website. Doctor gives some service for patients.",
    //     "Authentication is important for taking service every customer. Because it has protected route and authentication system."," If the patient doesn’t valid user, he could not see treatment details.","This project has private and dynamic route etc"
    //   ],
    //   usedTechnology: "React, React Router, Firebase, Firebase Hooks, React Icons, React Toastify."
    // }
// {
//   _id: "4",
//   name: "Lucky-One",
//   img1: project41,
//   img2: project42,
//   img3: project43,
//   live: "https://bejewelled-custard-7de940.netlify.app/",
//   client:
//     "https://github.com/amirulislamhridoy/Assignment-8-lucky-one.git",
//   description: [
//     "This website is different. This website is for television sales.", "The main difference is this website is a lottery. If you select some TV then you click to choose one for my website show you one TV for you.", "Choose Again Button."
//   ],
//   usedTechnology: "React, React Modal. Font Awesome Icon."
// }