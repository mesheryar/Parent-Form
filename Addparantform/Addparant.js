import React from 'react'
import "./Addparant.css"
import parantimg from "./fotor-20240126152243.png"
import { GrNotes } from "react-icons/gr";
import { MdFamilyRestroom, MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";

const Addparant = () => {
    return (
        <div className='Addparant-main'>
            <div className='Addparant-main-child-1'>
                <div className='Addparant-main-child-1-img'>
                    <img src={parantimg} alt='img' />
                </div>
                <h2>aleiiiyaiaha</h2>
                <button>Parent</button>
                <div className='Addparant-main-child-1-tap-button'>
                    <GrNotes /> <h3>General Info</h3>
                </div>
            </div>
            <div className='Addparant-main-child-2'>
                <div className='Addparant-main-child-2-General-Information'>
                    <h2>General Information</h2>
                    <button>Edit Information</button>
                </div>
                <div className='Addparant-main-child-2-Identification-Information'>
                    <div className='Addparant-main-child-2-title'>
                        <h2>Identification Information</h2>
                    </div>
                    <div className='Addparant-main-child-2-Identification-Information-form'>
                        <div className='Addparant-main-child-2-input-and-label'>
                            <label>name</label>
                            <input placeholder='-' />
                        </div>
                        <div className='Addparant-main-child-2-input-and-label'>
                            <label>User Profile</label>
                            <input placeholder='parant' />
                        </div>
                        <div className='Addparant-main-child-2-input-and-label'>
                            <label>Email</label>
                            <input placeholder='-' />
                        </div>
                    </div>
                    <div className='Addparant-main-child-2-Identification-Information-form'>
                        <div className='Addparant-main-child-2-input-and-label'>
                            <label>Phone Num</label>
                            <input placeholder='-' />
                        </div>
                        <div className='Addparant-main-child-2-input-and-label'>
                            <label>Homephone</label>
                            <input placeholder='-' />
                        </div>
                        <div className='Addparant-main-child-2-input-and-label'>
                            <label>Work Email</label>
                            <input placeholder='-' />
                        </div>
                    </div>
                </div>
                <div className='Addparant-main-child-2-Access-Information'>
                    <div className='Addparant-main-child-2-title'>
                        <h2>Access Information</h2>
                    </div>
                    <div className='Addparant-main-child-2-Identification-Information-form'>
                        <div className='Addparant-main-child-2-input-and-label'>
                            <label>Login Email Address</label>
                            <input placeholder='-' />
                        </div>
                        <div className='Addparant-main-child-2-input-and-label'>
                            <label>Portal Access</label>
                            <input placeholder='-' />
                        </div>
                        <div className='Addparant-main-child-2-input-and-label'>
                            <label>Disable parent</label>
                            <input placeholder='-' />
                        </div>
                    </div>
                </div>
                <div className='Addparant-main-child-2-Associated-Students'>
                    <h2>Associated Students</h2>
                    <div className='Addparant-main-child-2-Associated-Students-cards'>
                        <div className="Addparant-main-child-2-card" >
                            <div className="cardinfo">
                                <img src={parantimg} alt="userPicture" />
                                <div className="imgInfo">
                                    <h4>Sharyer</h4>
                                    <p>
                                        Father <span>● Primary</span>
                                    </p>
                                </div>
                                <div className="icons">
                                    <span className="green"><MdFamilyRestroom /></span>
                                    <span className="gray"><FaPen /></span>
                                    <span className="red"><MdDelete /></span>
                                </div>
                            </div>
                        </div>
                        <div className='Addparant-main-child-2-Associated-Students-Addcard-2'>
                            <IoAddSharp />
                            <h2>Associate Student</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addparant;
