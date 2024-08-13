import TIBSILogo from './../../images/Experience/Tibsi/TIBSILogo.svg';
import TibsiFore1 from './../../images/Experience/Tibsi/TibsiLoggaColor.svg';
import TibsiFore2 from './../../images/Experience/Tibsi/mockup2.png';
import TibsiFore3 from './../../images/Experience/Tibsi/mockup3.png';
import TibsiBack2 from './../../images/Experience/Tibsi/Background2.svg';
import TibsiBack3 from './../../images/Experience/Tibsi/Background3.svg';

let experienceData = {
    TIBSI: {
        name:"TIBSI",
        logo:TIBSILogo,
        project: "iN-DWise Mobile Application Development",
        role:"Development Team Lead & UX/UI Designer",
        description:"In this project I led the development team in India for the iN-DWise mobile application, a sophisticated conversation analysis tool. Focused on enhancing the user experience and interface design to ensure a seamless and intuitive application for users.",
        comment:"Contact me to have a personal recommendation from this project.",
        links: {
            type:"prototype",
            link:"https://www.figma.com/proto/ad6vVy7GuBWbPV05SW8LTT/TIBSI-software-2024-01-30?page-id=169%3A7664&node-id=4738-33221&viewport=294%2C182%2C0.02&t=LobcwTc59tXxHVEU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4738%3A33221&show-proto-sidebar=1"
        },
        numberOfPics:3,
        pics: [
            {
                background:
                    {pic:"none"},
                foreground:
                    {pic:TibsiFore1}
            },{
                background:
                    {pic:TibsiBack2,
                    style:[{
                        name:"backgroundSize",
                        value:"130%"
                    }]},
                foreground:
                    {pic:TibsiFore2,
                    style:[{
                        name:"backgroundSize",
                        value:"100%",}]
                    }
            },{
                background:{
                    pic:TibsiBack3,
                    style:[{
                        name:"backgroundPosition",
                        value:"top",}]
                },
                foreground:
                    {pic:TibsiFore3,
                    style:[{
                        name:"backgroundSize",
                        value:"100%",}]
                    }
            },
        ]
    },
}

export default experienceData;