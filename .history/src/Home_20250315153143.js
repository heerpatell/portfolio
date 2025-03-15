import React,{useState,useEffect} from 'react'
import Project from './components/Project';
import BlogCard from './components/BlogCard.js';
import './Home.css'
import Nav from './components/Nav';
import {FiGithub,FiLinkedin,FiInstagram,FiMail} from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css'
import HashLoader from "react-spinners/HashLoader";
import myImage from './images/myImg.jpg'

function Home() {

    const [loading,setLoading] = useState('false')

    useEffect(()=>{
        Aos.init({duration:1500})
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[]);

    return (
    <>
    {
        loading
        ?
        <div className="loadingPage">
            <HashLoader color={"#88FFF7"} loading={loading} size={80} />
        </div>
        :
        <HomeContent/>
    }
    </>
    )
}

function HomeContent(){
return(
    <>
    <section className="landingPage" id="section1" >       
    <Nav/>
        <div className="preview">
            <div className="leftSide">
                <div className="hiLine" data-aos="flip-right" >Hi, I'm</div>
                <div className="name" data-aos="fade-up">Heer</div>
                <div className="surname" data-aos="fade-up">Patel</div>
                <a href='#section3'><div className="viewProjBtn" data-aos="zoom-in">View Projects</div></a> 
            </div>
            <div className="rightSide" data-aos="fade-up">
                {/* <img src={hp} alt="photo" className="rightPhoto"/> */}
            </div>
        </div>
        <div className='contactIcon'>
            <div className='contIcon'><a href='https://github.com/heerpatell'><FiGithub size={23}/></a></div>
            <div className='contIcon'><a href='https://www.linkedin.com/in/heer-patel-700235206/'><FiLinkedin size={23}/></a></div>
            <div className='contIcon'><a href='https://www.instagram.com/heer.p9/'><FiInstagram size={23}/></a></div>
            <div className='contIcon' ><a href='mailto:heerpatel291@gmail.com?subject = ContactPortfolio&body = Message'><FiMail size={23}/></a></div>
            <div className='contaDottedLine'></div>
        </div>
    </section>
    
    <section className='aboutSection'  id="section2">
    <h2 className='headName'  data-aos="fade-in">About Me</h2>
        <div className='aboutPage'> 
            
            <div className='leftAbout'>
                <img data-aos="zoom-in-right" alt='Heer Patel' className="leftSideAboutImage" 
                src={myImage} height={280} width={300}
                />
            </div>

            <div className='rightAbout'>
                <div className='meHeading' data-aos="fade-in">Me and Myself</div>
                <div className='aboutPara' >
                    <div data-aos="zoom-out-up">
                    Hi, I'm Heer, a <b>software engineer</b> passionate about building <b>scalable</b> and user-friendly applications. My expertise lies in <b>React, TypeScript, JavaScript, and UI prototyping</b>, along with backend development using <b>.NET and Node.js, ExpreeJS</b>.
                    <br/><br/>
                    In addition to software development, I have a strong foundation in <b>Data Engineering</b>, including data processing, transformation, and integration. I'm experienced in working with databases, ETL pipelines, and data visualization tools like <b>Power BI</b>, enabling businesses to extract valuable insights from raw data and make data-driven decisions.
                    <br/><br/>
                    I hold a Master’s degree in Electrical and Computer Engineering from the University of Waterloo and have hands-on experience in <b>cloud technologies, data integration,</b> and <b>full-stack development.</b> I enjoy solving complex problems, optimizing system performance, and crafting seamless digital experiences.
                    <br/><br/>
                    I'm always exploring new technologies and expanding my expertise in Node.js, .NET, and Azure to stay ahead in the ever-evolving tech landscape. I enjoy working across the full stack, from designing seamless user interfaces to developing robust <b>backend systems, ensuring efficiency, scalability,</b>and <b>innovation</b> in every solution I build.
                    </div>
                    <div className='lineVertical'></div>
                </div>
            </div>
        </div>

    </section>

    <section className='projectPage' id="section3">
    <h2 className="headName" data-aos="fade-in">Projects</h2>
    
    <Project
        number={"01"}
        title={"DEVELOPMENT OF GNSS & PSEUDOLITE HYBRID POSITIONING ALGORITHMS"}
        technology={"Matlab, Python, C++"}
        github="false"
        // githubLink={"https://github.com/heerpatell/BakeryShop"}
        aboutDescription={"Pseudolite & NavIC combined user position algorithm has been proposed by using conventional GNSS iterative algorithm. Novelty of the approach is that the combined user position algorithm works perfectly well with the iterative approach once initial guess at very first time instance is provided from only NavIC system. Position accuracy & Dilution Of Precision (DOP) results are presented for only NavIC & combined Pseudolite & NavIC scenarios. Integrated NavIC & Pseudolite system can be very useful combination for the applications such as landing of the aircraft, Re-usable Launch Vehicle (RLV) landing, mining or in GNSS obstructed environment."}
    />

    <Project
        number={"02"}
        title={"eBake"}
        technology={"MERN Stack"}
        github="true"
        githubLink={"https://github.com/heerpatell/BakeryShop"}
        aboutDescription={"Built a platform connecting bakeries and customers, enabling location-based discovery, profile browsing, and order placement. Developed a responsive frontend using React.js, ensuring seamless navigation and an engaging user experience. Designed RESTful APIs integrated with a NoSQL database for scalable data operations, with Node.js as the API gateway to manage backend logic and routing"}
        video="true"
        vlink='https://drive.google.com/file/d/1p6IxDp9X6L8IGGlwODssgUIUkLbT5XEU/view?usp=sharing'
    />

    <Project
        number={"03"}
        title={"SyncWell"}
        technology={"React + NodeJS + SQL + Postman + Agile Methodology"}
        github="true"
        githubLink={"https://github.com/heerpatell/BakeryShop"}
        aboutDescription={" Engineered a scheduling platform enabling organizers to share custom scheduling links with invitees for efficient meeting coordination. Built visually consistent frontend using React.js and Material UI, incorporating state management with hooks and reusable components for availability grids. Created detailed  prototypes in Figma to design intuitive user flows"}
        video="true"
        vlink='https://drive.google.com/file/d/1p6IxDp9X6L8IGGlwODssgUIUkLbT5XEU/view?usp=sharing'
    />

    <Project
        number={"03"}
        title={"for primary school students"}
        technology={"Unity , C#"}
        whatIDid={"Half Module (Capital alphabet module with Phonic &Visual Effect ,added Translation ,Animation)"}
        github="true"
        githubLink={"https://github.com/heerpatell/SgpSem4"}
        aboutDescription={"This project is under Unnat Bharat Abhiyan, which is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India"}
        teammember={"2"}
        video="true"
        vlink='https://drive.google.com/file/d/1jV83O8lrPSfOHJsQxi0aIEVdmR3L4jjz/view?usp=sharing'
    />

    <Project
        number={"04"}
        title={"Unit Convertor"}
        technology={"JavaScript"}
        github="true"
        githubLink={"https://github.com/heerpatell/units_converter"}
        aboutDescription={"units supported : Meter , Millimetre , Kilometer , Centimeter , Foot , Inch , Mile , Yard"}
        video="true"
        vlink ='https://drive.google.com/file/d/1bMRpw-rJKMtdwpab-oSuuUb5bq7OiskQ/view?usp=sharing'
    />

    <Project
        number={"05"}
        title={"Tic Tac Toe"}
        technology={"Flutter"}
        github="true"
        githubLink={"https://github.com/heerpatell/TicTacToe"}
        aboutDescription={"Two player can play this game and scored will be displayed appropriately."}
        video="true"
        vlink = 'https://www.linkedin.com/posts/heer-patel-700235206_learning-flutter-dart-activity-6786329905295634432-93xm'
    />

    <Project
        number={"06"}
        title={"Portfolio"}
        technology={"React Js"}
        github="true"
        githubLink={"https://github.com/heerpatell/TicTacToe"}
        aboutDescription={"My portfolio"}
        link="true"
        linkDetail="https://heer-patel-portfolio.herokuapp.com/"
    />
    </section>

    {/* blog */}
    <h2 className="headName" data-aos="fade-in">Blog</h2>
    <section className="blogSection">
        <div className="blogRow">
            <BlogCard
            site={"Medium"}
            title={"Multiple Form Navigation using Material UI and React JS with validation"}
            link={"https://medium.com/@vinitrathod_81125"}
            />    
        </div>
    </section>

    {/* footer */}
    <div className="footer">
        Built with ❤ in React.js by Heer Patel   
    </div>
    </>
)
}

export {Home}
export {HomeContent}
