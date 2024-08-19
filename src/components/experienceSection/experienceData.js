import TIBSILogo from './../../images/Experience/Tibsi/TIBSILogo.svg';
import TibsiFore1 from './../../images/Experience/Tibsi/TibsiLoggaColor.svg';
import TibsiFore2 from './../../images/Experience/Tibsi/mockup2.png';
import TibsiFore3 from './../../images/Experience/Tibsi/mockup3.png';
import TibsiBack2 from './../../images/Experience/Tibsi/Background2.svg';
import TibsiBack3 from './../../images/Experience/Tibsi/Background3.svg';
import SquidLogo from './../../images/Experience/squidFactor/squidfactorBW.svg';
import SquidFore1 from './../../images/Experience/squidFactor/foreground1.svg';
import SquidFore2 from './../../images/Experience/squidFactor/foreground2.png';
import SquidBack2 from './../../images/Experience/squidFactor/background2.svg';
import ImageRoller from './imageRoller';
import Squidfore3Moving from './../../images/Experience/squidFactor/moving1.png'
import Squidfore3Static from './../../images/Experience/squidFactor/static1.png';;


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
    },SquidFactor:{
        name:"squidFactor",
        logo:SquidLogo,
        project: "Squidfactor’s webapp",
        role:"UI consultant",
        description:"In this project I remade the UI of the Squidfactor’s webapp since the previous version was not optimal and the owners wanted a more gamified concept. Worth to mention is that my resposibility of the project was only the UI and not the graphic design since they have an in house graphic designer. The client was pleased with my work as you can see here.",
        comment:"Contact me to have a personal recommendation from this project.",
        links: {
            type:"prototype",
            link:"https://www.figma.com/proto/YMg54tzqJ6gcfB9rdlKVn6/Website?page-id=1%3A28&node-id=75-5063&m=dev&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=75%3A5063&show-proto-sidebar=1&t=H81f1SAO4p1XZuoz-1"
        },
        numberOfPics:3,
        pics: [
            {
                background:
                    {pic:"none"},
                foreground:
                    {pic:SquidFore1,
                    style:[{
                        name:"backgroundSize",
                        value:"70%",}]
                    }
            },{
                background:
                    {pic:SquidBack2},
                foreground:
                    {pic:SquidFore2}
            },{
                background:
                    {pic:"none"},
                foreground:
                    {type:"component",
                    pic:<ImageRoller moving={Squidfore3Moving} fixed={Squidfore3Static} name="squidFactor" number="3"/>}
            },
        ]
    }
}

export default experienceData;