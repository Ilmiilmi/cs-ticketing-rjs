import React, {useContext, useEffect} from 'react'
import { AuthContext } from '../../App';
import {Navigate, useNavigate} from 'react-router-dom';
import Header from "../../template/header";
import IconTiket from "../../assets/ic_tiket.svg";
import Vector from "../../assets/vector.svg";
import Vector1 from "../../assets/vector1.svg";
import Vector2 from "../../assets/vector2.svg";
import EmojiSad from "../../assets/emojisad.svg";
import EmojiNormal from "../../assets/emojinormal.svg";
import EmojiHappy from "../../assets/emojihappy.svg";
import {BiSearch} from "react-icons/bi";

export default function Home() {

    const {state} = useContext(AuthContext);

    console.log("cek state :" + state.isAuthenticated)

    useEffect (() => {
        if (localStorage.getItem('token')) {
            state.isAuthenticated = true
        } else {
            state.isAuthenticated = false
        }
    }, []);

    if(!state.isAuthenticated){
        return <Navigate to="/login" />
    }

    return (
        <section>
            <Header/>
            <div className="px-14 flex-1 pt-14">
                <div className="border border-gray-300 rounded w-full flex py-3 px-3 items-center rounded-xl w-[28%] ml-[39em]">
                    <BiSearch className="mr-2"/>
                    <input type={"text"} className="flex-1" placeholder="Search"/>
                </div>
            <div className="h-screen md:flex">

                <div className="relative self-start overflow-hidden md:flex flex-1 bg-white justify-around items-center">
                    <div className="w-full mt-8">
                        <div className="w-full md:flex mx-8">

                            <div className="relative overflow-hidden md:flex w-1/4 bg-white justify-between items-center hidden">
                                <button className="absolute w-36 h-8 bottom-14 left-3 top-4 right-8 bg-neutral-700 ml-8 mr-12 text-white rounded-xl hover:bg-blue-500">
                                    <span className="text-2xl mr-1"></span> <strong> Total Tiket</strong>
                                </button>
                                <div className="bg-bg-black-card rounded-2xl w-56 h-56"></div>
                                    <img className="absolute h-20 w-69 bottom-0 left-0 rounded-2xl right-0" src={Vector2} alt="logo" />
                                    <img className="absolute h-16 w-49 bottom-0 left-0 rounded-2xl right-0" src={Vector1} alt="logo" />
                                    <img className="absolute h-14 w-39 bottom-0 left-0 rounded-2xl right-0" src={Vector} alt="logo" />
                            </div>

                            <div className="relative overflow-hidden md:flex w-1/4 bg-white justify-between items-center hidden">
                            <button className="absolute w-36 h-8 bottom-14 left-3 top-4 right-8 bg-red-500 ml-8 mr-12 text-white rounded-xl hover:bg-white-100">
                                <img className="absolute w-5 h-5 bottom-1 left-3 right-2" src={EmojiSad} alt="logo" />
                                    <span className="text-2xl mr-5"></span> <strong> Ticket Open</strong>
                                </button>
                                <div className="bg-bg-red-card rounded-2xl w-56 h-56"></div>
                                <button className="absolute w-56 h-14 bottom-0 rounded-b-lg left-0 right-0 bg-gray-50">
                                </button>
                               <button className="absolute w-32 h-8 left-12  bottom-3 rounded-lg left-0 right-0 bg-red-500">
                                    <span className="font-semibold text-xs leading-6 text-slate-50">Detail</span>
                                </button>
                            </div>

                            <div className="relative overflow-hidden md:flex w-1/4 bg-white justify-between items-center hidden">
                            <button className="absolute w-36 h-8 bottom-14 left-3 top-4 right-8 bg-yellow-600 ml-8 mr-12 text-white rounded-xl hover:bg-white-100">
                            <img className="absolute w-5 h-5 bottom-1 left-3 right-2" src={EmojiNormal} alt="logo" />
                                    <span className="text-2xl mr-6"></span> <strong> On Progress</strong>
                                </button>
                                <div className="bg-bg-yellow-card rounded-2xl w-56 h-56"></div>
                                <button className="absolute w-56 h-14 bottom-0 rounded-b-lg left-0 right-0 bg-gray-50">
                                    </button>
                                <button className="absolute w-32 h-8 left-12  bottom-3 rounded-lg left-0 right-0 bg-yellow-600">
                                    <span className="font-semibold text-xs leading-6 text-slate-50">Detail</span>
                                </button>
                            
                            </div>
                            <div className="relative overflow-hidden md:flex w-1/4 bg-white justify-between items-center hidden">
                            <button className="absolute w-18 h-8 bottom-14 left-2 top-4 right-10 bg-blue-500 ml-10 mr-14 text-white rounded-xl hover:bg-white-100">
                                <img className="absolute w-5 h-5 bottom-1 left-5 right-2" src={EmojiHappy} alt="logo" />
                                    <span className="text-2xl mr-4"></span> <strong> Solved</strong>
                            </button>
                                <div className="bg-bg-blue-card rounded-2xl w-56 h-56"></div>
                                <button className="absolute w-56 h-14 bottom-0 rounded-b-lg left-0 right-0 bg-gray-50">
                                </button>
                                <button className="absolute w-32 h-8 left-12  bottom-3 rounded-lg left-0 right-0 bg-blue-500">
                                    <span className="font-semibold text-xs leading-6 text-slate-50">Detail</span>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-421 justify-left items-center border-l">

                    <div className="relative self-start">
                        <img className="max-w-lg" src={IconTiket} alt="logo" />
                        <button className="absolute h-11 bottom-14 left-6 right-6 bg-blue-500 ml-8 mr-8 text-white rounded-xl hover:bg-blue-600">
                            <span className="text-2xl mr-3">+</span> <strong>Add Ticket</strong>
                        </button>

                    </div>

                </div>
            </div>
            </div>
        </section>

    )
}