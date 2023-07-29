import React,{useState,useEffect} from 'react'
import Project from './components/Project';
import BlogCard from './components/BlogCard.js';
import hp from './images/portraitImg.png';
import './Home.css'
import Nav from './components/Nav';
import {FiGithub,FiLinkedin,FiInstagram,FiMail} from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css'
import HashLoader from "react-spinners/HashLoader";

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
                <img src={hp} alt="p" className="rightPhoto"/>
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
                <div className="leftSideAboutImage" data-aos="zoom-in-right">
                    {/* <img src={myImage} height={280} width={300}/> */}
                </div>
                
            </div>

            <div className='rightAbout'>
                <div className='meHeading' data-aos="fade-in">Me and Myself</div>
                <div className='aboutPara' >
                    <div data-aos="zoom-out-up">
                    Third year computer engineering tech-savvy who's passionate about 
                    learning tech stuff. I possess self-motivated, well-organised personality 
                    when it comes to develope projects. I'm currently exloring web developement.
                    <br/><br/>
                    My zeal for vector art encourages me for illustration. 
                    Besides tech stuff I like to pass my leisure times in outdoor activities 
                    ,cooking ,binge watching ,learning new softwares.


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
        title={"Online Bakery Shop"}
        technology={"MERN Stack"}
        githubLink={"https://github.com/heerpatell/BakeryShop"}
        aboutDescription={"The project  Bakers is a Web Application which is proposed in order to provide ease to bakers who bake cakes at their pace and provide it to customers"}
        video="true"
        vlink='https://drive.google.com/file/d/1p6IxDp9X6L8IGGlwODssgUIUkLbT5XEU/view?usp=sharing'
    />

    <Project
        number={"02"}
        title={"for primary school students"}
        technology={"Unity , C#"}
        whatIDid={"Half Module (Capital alphabet module with Phonic &Visual Effect ,added Translation ,Animation)"}
        githubLink={"https://github.com/heerpatell/SgpSem4"}
        aboutDescription={"This project is under Unnat Bharat Abhiyan, which is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India"}
        teammember={"2"}
        video="true"
        vlink='https://drive.google.com/file/d/1jV83O8lrPSfOHJsQxi0aIEVdmR3L4jjz/view?usp=sharing'
    />

    <Project
        number={"03"}
        title={"Unit Convertor"}
        technology={"JavaScript"}
        githubLink={"https://github.com/heerpatell/units_converter"}
        aboutDescription={"units supported : Meter , Millimetre , Kilometer , Centimeter , Foot , Inch , Mile , Yard"}
        video="true"
        vlink ='https://drive.google.com/file/d/1bMRpw-rJKMtdwpab-oSuuUb5bq7OiskQ/view?usp=sharing'
    />

    <Project
        number={"04"}
        title={"Tic Tac Toe"}
        technology={"Flutter"}
        githubLink={"https://github.com/heerpatell/TicTacToe"}
        aboutDescription={"Two player can play this game and scored will be displayed appropriately."}
        video="true"
        vlink = 'https://www.linkedin.com/posts/heer-patel-700235206_learning-flutter-dart-activity-6786329905295634432-93xm'
    />

    <Project
        number={"05"}
        title={"CA Website"}
        technology={"Bootstrap (Web Designing | Internship)"}
        githubLink={"https://github.com/heerpatell/CA_website"}
        aboutDescription={"This website was made as a part of internship."}
        whatIDid={"Built 3 modules among 7"}
        teammember={"4"}
        link="true"
    />

    <Project
        number={"06"}
        title={"Portfolio"}
        technology={"React Js"}
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
