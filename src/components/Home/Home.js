import React from 'react';
import img from "../media/images/w1.png"
import img2 from "../media/images/w2.png"
import video from "../media/videos/w2.mp4"
import video2 from "../media/videos/w3.mp4"
import video3 from "../media/videos/w4.mp4"
import video4 from "../media/videos/w5.mp4"
import video5 from "../media/videos/w6.mp4"
import flower2 from "../media/images/flower2.jpg"
import { Divider } from 'antd';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import flower from "../media/images/flower.webp"
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="my-2 py-2">
                <h1 className="text-center">Take designs from ideas to development<br /> in one unified platform</h1>
            </div>
            <div className="mx-4 px-5 py-2">
                <img src={img} style={{ boxShadow: "1px 1px 10px #EBEBEB" }} className="img img-fluid" alt="" />

            </div>

            <div className="row mx-3 px-3 d-flex justify-content-center align-items-center my-5 py-5">
                <div className="col-md-6 mr-3">
                    <video className="container container-fluid" loop autoPlay src={video}></video>
                </div>
                <div className="col-md-6 text-start px-5">
                    <h1 >Collaborate in real <br />time on an endless digital<br /> whiteboard.<span style={{ color: "#737881" }}> Start fast <br />with a blank canvas or<br /> pre-built templates.</span></h1>
                    <h3 style={{ color: "red" }}> <span style={{ paddingBottom: "3px", borderBottom: "3px solid red" }}>Explore Freehand</span> </h3>
                </div>
            </div>


            <div className="row mx-3 px-3 d-flex justify-content-center align-items-center my-2 py-2">
                <div className="col-md-6 text-start px-5">
                    <h1 className="mx-5">Connect your workflow <br />with essential <br />integrations.<span style={{ color: "#737881" }}>InVision <br />works with your existing<br />tools to streamline the<br />entire product<br />development process.</span></h1>
                    {/* <h3 style={{ color: "red" }}> <span style={{ paddingBottom: "3px", borderBottom: "3px solid red" }}>Explore Freehand</span> </h3> */}
                </div>

                <div className="col-md-6">
                    <video className="container container-fluid" loop autoPlay src={video2}></video>
                </div>


            </div>

            <div className="row m-5 p-5 d-flex justify-content-center align-items-center" style={{ background: "#F8F8F9" }}>
                <div className="col-md-4 text-end px-5">
                    <div className="row d-flex justify-content-end">
                        <div className="col-md-6"><img src={flower2} style={{ height: "75px", width: "75px" }} alt="" /></div>
                    </div>
                </div>

                <div className="col-md-8 text-start">
                    <h1>InVision fits almost everywhere <br />in our design process.</h1>
                    <h6>James Helms</h6>
                    <p>Design Leader, Intuit</p>
                    <h4>InTuit</h4>

                </div>
            </div>


            <div className="row m-5 p-5 d-flex justify-content-center align-items-center">
                <div className="col-md-5 text-start">
                    <h1 style={{ fontSize: "60px" }}>DSM<span className="text-danger">.</span> </h1>
                </div>

                <div className="col-md-7 text-start">
                    <h1>Work smarter, faster, and more in <br />sync with a powerful design<br />system</h1>
                    <h3 style={{ color: "red" }}> <span style={{ paddingBottom: "3px", borderBottom: "3px solid red" }}>Explore DSM</span> </h3>
                </div>
            </div>

            <div className="mx-4 px-5 py-2 text-start">
                <div className="col-md-12">
                    <img src={img2} style={{ boxShadow: "1px 1px 10px #EBEBEB" }} className="img img-fluid mb-3" alt="" />
                    <h3>Bring all your principles, components and code together in one centralized place.</h3>
                </div>

            </div>

            <div className="row mx-3 px-3 d-flex justify-content-center align-items-center text-start my-5 py-5">
                <div className="col-md-6 ">
                    <div>
                        <video className="container container-fluid" loop autoPlay src={video3}></video>
                        <h5 className="mx-4 mt-3">Sync changes globally through Sketch.</h5>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <video className="container container-fluid" loop autoPlay src={video4}></video>
                        <h5 className="mx-4 mt-3">Connect designs to code with Storybook.</h5>
                    </div>
                </div>
            </div>

            <div className="row m-5 p-5 d-flex justify-content-center align-items-center" style={{ background: "#F8F8F9" }}>
                <div className="col-md-4 text-center">
                    <div className="row d-flex justify-content-end">
                        <div className="col-md-6"><img src={flower} style={{ height: "75px", width: "75px" }} alt="" /></div>
                    </div>
                </div>

                <div className="col-md-8 text-start ">
                    <h1>InVision made our design process <br />more fluid and gave us a single<br />source of truth for design, product,<br />and development.</h1>
                    <h6>Kerry Hebert</h6>
                    <p>Principal UX Designer, Visa</p>
                    <h2>VISA</h2>
                </div>
            </div>

            <div className="row m-5 p-5 d-flex justify-content-center align-items-center">
                <div className="col-md-5 text-start">
                    <h1 style={{ fontSize: "60px" }}>Studio<span className="text-danger">.</span> </h1>
                </div>

                <div className="col-md-7 text-start">
                    <h1>Amplify your creative expression<br />with stunning screen design</h1>
                    <h3 style={{ color: "red" }}> <span style={{ paddingBottom: "3px", borderBottom: "3px solid red" }}>Explore Studio</span> </h3>
                </div>
            </div>

            <div className="m-3 p-3 row">
                <div className="col-md-12">
                    <video className="w-100" loop autoPlay src={video5}></video>
                </div>

            </div>


        </div>

    );
};

export default Home;