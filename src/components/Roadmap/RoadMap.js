import React from 'react'
import "aos/dist/aos.css"
import {RiGovernmentFill} from 'react-icons/ri'
import {FaPeopleCarry} from 'react-icons/fa'
import {MdCasino} from 'react-icons/md'
import './RoadMap.css'

function RoadMap() {
  return (
    <div>
        <div className='RoadMapDiv'>
            <h2 className='RoadMapTitle' data-aos="fade-up"> Road-Map </h2>
            <div className='RoadMapList'>
                <ul>
                    <li className='RoadMapLi' data-aos="fade-up"> Website launch</li>
                    <li className='RoadMapLi' data-aos="fade-up"> Airdrop </li>
                    <li className='RoadMapLi' data-aos="fade-up"> Community building </li>
                    <li className='RoadMapLi' data-aos="fade-up"> Token sale </li>
                    <li className='RoadMapLi' data-aos="fade-up" > Listing on CEX and DEX </li>
                    <li className='RoadMapLi'data-aos="fade-up" >Airdrop</li>
                    <li className='RoadMapLi' data-aos="fade-up">Burning </li>
                    <li className='RoadMapLi' data-aos="fade-up"> Community expansion </li>
                    <li className='RoadMapLi' data-aos="fade-up">Partnership / Marketing </li>
                    <li className='RoadMapLi' data-aos="fade-up">Community Governance </li>
                    <li className='RoadMapLi' data-aos="fade-up">More listing on CEX and DEX </li>
                    <li className='RoadMapLi' data-aos="fade-up">Multichain deployment </li>
                    <li className='RoadMapLi' data-aos="fade-up">Governance - Product Call</li>
                   
                </ul>
            </div>
        </div>

        <div className='useCase'>
            <h2 className='useCaseTitle' data-aos="fade-up">Use Cases</h2>
            <div className='useCaseContent'>
            
                <div className='useCaseIconDiv' data-aos="zoom-in"><RiGovernmentFill className='useCaseIcon'/> <p className='RoadMapTitles'>Governance</p></div>
                <div className='useCaseIconDiv' data-aos="zoom-in"><FaPeopleCarry className='useCaseIcon'/> <p className='RoadMapTitles'>Social-Causes</p></div>
                <div className='useCaseIconDiv' data-aos="zoom-in"><MdCasino className='useCaseIcon'/> <p className='RoadMapTitles'> Staking</p></div>
            
            </div>
        </div>
    </div>
  )
}

export default RoadMap