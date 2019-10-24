import React from'react';
import Layout from '../components/shared/Layout';

const Home = () => {
    return(
        <Layout>
            <img style={{width: "90%", maxWidth: "600px"}} alt = 'swonder' src = "./swonderice.png"/>
            <h1>Welcome to Swonder!</h1>
            <br />
            <br />
            <h2>About Us</h2>
            <br />
            <p>
                The original Swonder Ice Rink, opened in 1978, and was connected to Hartke pool located just across the parking lot. The current facility, Swonder Ice Arena, replaced Swonder Ice Rink when it opened in 2002. Comprised of two NHL regulation size arenas and a mezzanine fitness center, Swonder is home to recreational skaters, hockey players, figure skaters and fitness enthusiasts. Swonder offers public skating sessions 7 days a week and inexpensive daily or monthly rates in the fitness center.
            </p>
            <p>
            In 2002, the facility was also comprised of an indoor-outdoor skatepark which has since been removed. The space is currently used for yoga, zumba, and pickleball during various times throughout the week.  
            Swonder is home to many user groups including Evansville Youth Hockey, Total Package Hockey, The Tri-State Adult Hockey Association, River City Ice Theatre and the Greater Evansville Figure Skating Club. Over the years many organizations including: the Evansville IceMen, The University of Southern Indiana Ice Eagles Hockey Team, the Roller Girls of Southern Indiana, and The Evansville Rage Arena Football have utilized the facility. Swonder has hosted the Deaconess Party of the Year, the YWCA Cake party, the American Diabetes Association Gala as well as other local formal events.
            </p>
        </Layout>
    );
};

export default Home;