import React from 'react';
// import { AuthContext } from '../contexts/UserContext';
import homegif from '../../src/components/72328-web-page-header.gif';
import rightSide from './79552-northrow-header.gif';

const Home = () => {
    // const {user} = useContext(AuthContext);
    return (
        <div className='gird grid-cols-2 flex justify-between bg-white'>
            <div>
                <img src={homegif} alt="" srcset="" />
            </div>
            <div>
                <img src={rightSide} alt="" srcset="" />
            </div>
        </div>

    );
};

export default Home;