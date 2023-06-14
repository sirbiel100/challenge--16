import React from 'react';
import styles from '../styles/main.module.css';
import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';

function Main() {
    
    const transition = {type: 'spring', duration: 1};

    return (
        <section className={styles.main}>

            <img src='../../../card.svg' />

            <div className={styles.profile}>
                <img src='../../../image-victor.jpg' alt='profile' />
            </div>

            <div className={styles.textContent}>

                <div className={styles.profileInfo}>
                <p>Victor Crest <span>26</span> </p>
                <span>London</span>
                </div>

                <motion.div
                initial={{scale: '0'}}
                whileInView={{scale: '1'}}
                transition={transition}
                className={styles.numbers}
                >

                    <div className={styles.followers}>
                        <span>
                            <NumberCounter end={80} start={0} delay='1' />
                        </span>
                        <p>Followers</p> 
                    </div>

                    <div className={styles.likes}>
                        <span>
                        <NumberCounter end={803} start={100} delay='2'/>K
                        </span>
                        <p>Likes</p> 
                        </div>

                    <div className={styles.photos}>
                        <span>
                            1.4K 
                        </span>
                        <p>Photos</p>
                        </div>

                </motion.div>

            </div>

        </section>
    );
}

export default Main;