import React from 'react';
import { BodyError } from '../components/404/BodyError';
import '../assets/css/404.css'

function Error404() {
    return (
        <>
            <div className="site-wrap">
                <BodyError />
            </div>
        </>
    );
}
export { Error404 }