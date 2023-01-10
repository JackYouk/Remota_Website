import React from 'react';
const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="text-center">
                            <img src='assets/imgs/template/logo-blacktext_1_300x.png' alt='remota' />
                            <div className="loader" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Preloader;