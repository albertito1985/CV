import TIBSILogo from './../../images/Experience/Tibsi/TIBSILogo.svg';
import TibsiFore1 from './../../images/Experience/Tibsi/tibsi1.jpg';
import TibsiFore2 from './../../images/Experience/Tibsi/tibsi2.jpg';
import TibsiFore3 from './../../images/Experience/Tibsi/tibsi3.jpg';
import SquidLogo from './../../images/Experience/squidFactor/squidfactorBW.svg';
import SquidFore1 from './../../images/Experience/squidFactor/squid1.png';
import SquidBack1 from './../../images/Experience/squidFactor/background1.jpg';
import SquidFore2 from './../../images/Experience/squidFactor/squid2.png';
import SquidBack2 from './../../images/Experience/squidFactor/background2.jpg';
import SquidFore3 from './../../images/Experience/squidFactor/squid3.png';
import SquidBack3 from './../../images/Experience/squidFactor/background3.jpg';
import mindtempLogo from './../../images/Experience/mindtemp/MindtempLogoWhite.svg';
import mindtempFore1 from './../../images/Experience/mindtemp/mindtemp1.jpg';
import mindtempFore2 from './../../images/Experience/mindtemp/mindtemp2.jpg';
import mindtempFore3 from './../../images/Experience/mindtemp/mindtemp3.jpg';
import racketFore1 from './../../images/Experience/Rackethub/racket1.jpg';
import racketFore2 from './../../images/Experience/Rackethub/racket2.jpg';
import racketFore3 from './../../images/Experience/Rackethub/racket3.jpg';
import RackethubLogo from './../../images/Experience/Rackethub/Rackethub.svg';

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
            link:"https://www.figma.com/design/fpI61xYkJlh6MD7PBcmDKJ/TIBSI-APP?node-id=11029-17398&t=30Cs3QzZlgGTam5r-1"
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
                    {pic:"none"},
                foreground:
                    {pic:TibsiFore2}
            },{
                background:{
                    pic:"none"},
                foreground:
                    {pic:TibsiFore3}
            },
        ]
    },SquidFactor:{
        name:"SquidFactor",
        logo:SquidLogo,
        project: "Squidfactor’s webapp",
        role:"UI consultant",
        description:<>In this project I remade the UI of the Squidfactor’s webapp since the previous version was not optimal and the owners wanted a more gamified concept. Worth to mention is that my resposibility of the project was only the UI and not the graphic design since they have an in house graphic designer. The client was pleased with my work as you can see <a target="_blank" href='https://www.linkedin.com/posts/johanranstam_kudos-aemverfaemrvaeuntan-activity-7161305831026606080-I1wS?utm_source=share&utm_medium=member_desktop'> here</a>.</>,
        comment:null,
        links: {
            type:"prototype",
            link:"https://www.figma.com/design/YMg54tzqJ6gcfB9rdlKVn6/SquidFactor-Webapp?node-id=435-8266&t=iCfXTGOImkAurYtY-1"
        },
        numberOfPics:3,
        pics: [
            {
                background:
                    {pic:SquidBack1},
                foreground:
                    {pic:SquidFore1}
            },{
                background:
                    {pic:SquidBack2},
                foreground:
                    {pic:SquidFore2}
            },{
                background:
                    {pic:SquidBack3},
                foreground:
                    {pic:SquidFore3}
            },
        ]
    },Mindtemp:{
        name:"Mindtemp",
        logo:mindtempLogo,
        project: "Mindtemps App and Website",
        role:"In house UX/UI/Graphic designer",
        description:"In this experience I first redesigned Mindtemp app to optimize its usability in several releases. I remade their website according to the companies requirements. And I redisigned internal documents and presentations. Important to mention regarding the website is that the company required that the pictures had one color background as part of their brand.",
        comment:"Contact me to have a personal recommendation from this project.",
        links: {
            type:"prototype",
            link:"https://www.figma.com/design/4eXcIPjSjiXQ0jLk9dMdiQ/Mindtemp?node-id=2967-21435&t=EdcnYrudcP9zHqOY-1"
        },
        numberOfPics:3,
        pics: [
            {
                background:
                    {pic:"none"},
                foreground:
                    {pic:mindtempFore1}
            },{
                background:
                    {pic:"none"},
                foreground:
                    {pic:mindtempFore3}
                
            },{background:
                {pic:"none"},
                foreground:
                    {pic:mindtempFore2}
            },
        ]
    },RacketHub: {
        name:"Racket Hub",
        logo:RackethubLogo,
        project: "Racket Hub Mobile Application Development",
        role:"UX/UI Designer",
        description:"In this project I designed the Racket Hub mobile application, an application to find and join padel games.",
        comment:"",
        links: {
            type:"prototype",
            link:"https://www.figma.com/design/Y7KevEyuHPebGoRrzlZXyw/Racket-hub-2024?node-id=158-23632&t=oRWuQCtKmYHC00Wa-1"
        },
        numberOfPics:3,
        pics: [
            {
                background:
                    {pic:"none"},
                foreground:
                    {pic:racketFore1}
            },{
                background:
                    {pic:"none"},
                foreground:
                    {pic:racketFore2}
            },{
                background:{
                    pic:"none"},
                foreground:
                    {pic:racketFore3}
            },
        ]
    }
}

export default experienceData;