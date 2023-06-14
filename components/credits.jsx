import React from 'react';
import creditStyle from '../styles/credits.module.css'

function Credits() {

    return (
        <section className={creditStyle.creditSection}>
            <div className={creditStyle.Loading}></div>
            <div className={creditStyle.creditDiv}>
                <p>Challenged by <a href="https://www.frontendmentor.io/" target='_blank'>Frontendmentor</a>. Coded by <a href="https://www.frontendmentor.io/profile/sirbiel100/" target='_blank'>Crispim.</a>😁
                    </p>
            </div>
        </section>
    );
}

export default Credits;