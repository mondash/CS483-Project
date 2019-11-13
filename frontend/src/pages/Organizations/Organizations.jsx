import React from 'react';
import Layout from 'Components/shared/Layout';
import './Organizations.scss';

export default () => {
    return (
        <Layout>
            <h1>Organizations</h1>
            <h3>
                FOR INFORMATION ON OUR USER GROUPS AND THE PROGRAMMING THEY OFFER, CLICK ON THE
                CORRESPONDING LOGOS!
            </h3>
            <table>
                <tr>
                    <td>
                        <a href="https://www.gefsc.com/">
                            <img className="logo" src="./GEFSC.png" alt="GEFSC" />
                        </a>
                        <p>
                            Learn to Skate classes for <br />
                            all ages, hosts competitions test sessions and ice shows
                        </p>
                    </td>
                    <td>
                        <a href="http://eyha.us/">
                            <img className="logo" src="./EYHA.jpg" alt="EYHA" />
                        </a>
                        <p>
                            Youth hockey from beginner through high school travel and house leagues
                        </p>
                    </td>
                    <td>
                        <h2>TSAHA "B" League</h2>
                        <p>
                            Adult league on Sundays 6:30pm. <br />
                            To register for B League,
                            <br />
                            contact Neil Werthmann at polyweave1@gmail.com
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="http://www.evansvillesportkarateacademy.com/home.html">
                            <img src="./Karate.jpg" alt="Karate" className="logo" />
                        </a>
                        <p>
                            Classes for traditional martial arts with a competitive edge for all age
                            groups
                        </p>
                    </td>
                    <td>
                        <a href="https://www.facebook.com/RiverCityIceTheatre">
                            <img src="./RCIT.jpg" alt="Ice Theatre" className="logo" />
                        </a>
                        <p>Tri-States only Theater On Ice organization</p>
                    </td>
                    <td>
                        <a href="https://genesishockey.com/">
                            <img src="./GENESIS.png" alt="GENESIS" className="logo" />
                        </a>
                        <p>
                            Created to expand the player development for ice hockey. <br /> Strongly
                            focusing on players practicing the basic fundamentals.
                        </p>
                    </td>
                </tr>
            </table>
        </Layout>
    );
};
