import React from 'react';
import { Layout } from 'Shared';
import './Organizations.scss';

// TODO fix images
export default () => {
    return (
        <Layout>
            <h1>Organizations</h1>
            <h3>
                FOR INFORMATION ON OUR USER GROUPS AND THE PROGRAMMING THEY OFFER, CLICK ON THE
                CORRESPONDING LOGOS!
            </h3>
            <div className="GridContainer">
                <span className="GridElement">
                    <a href="https://www.gefsc.com/" rel="noopener noreferrer" target="_blank">
                        <img className="logo" src="./GEFSC.jpg" alt="GEFSC" />
                    </a>
                    <p>
                        Learn to Skate classes for all ages, hosts competitions test sessions and
                        ice shows
                    </p>
                </span>
                <span className="GridElement">
                    <a href="http://eyha.us/" rel="noopener noreferrer" target="_blank">
                        <img className="logo" src="./EYHA.jpg" alt="EYHA" />
                    </a>
                    <p>Youth hockey from beginner through high school travel and house leagues</p>
                </span>
                <span className="GridElement">
                    <h2>TSAHA "B" League</h2>
                    <p>
                        Adult league on Sundays 6:30pm. To register for B League, contact Neil
                        Werthmann at polyweave1@gmail.com
                    </p>
                </span>
                <span className="GridElement">
                    <a
                        href="http://www.evansvillesportkarateacademy.com/home.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./Karate.jpg" alt="Karate" className="logo" />
                    </a>
                    <p>
                        Classes for traditional martial arts with a competitive edge for all age
                        groups
                    </p>
                </span>
                <span className="GridElement">
                    <a
                        href="https://www.facebook.com/RiverCityIceTheatre"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./RCIT.jpg" alt="Ice Theatre" className="logo" />
                    </a>
                    <p>Tri-States only Theater On Ice organization</p>
                </span>
                <span className="GridElement">
                    <a href="https://genesishockey.com/" target="_blank" rel="noopener noreferrer">
                        <img src="./GENESIS.jpg" alt="GENESIS" className="logo" />
                    </a>
                    <p>
                        Created to expand the player development for ice hockey. Strongly focusing
                        on players practicing the basic fundamentals.
                    </p>
                </span>
            </div>
        </Layout>
    );
};
