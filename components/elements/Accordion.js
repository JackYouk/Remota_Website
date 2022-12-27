/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

function Accordion() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>

            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Transparency</button>
                    </h2>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(2)}><button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Data Security Practices</button></h2>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(3)}><button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>IT service desk operations?</button></h2>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(4)}><button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>How will my company be charged?</button></h2>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(5)}><button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Do you own the assets, or do we?</button></h2>
                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(6)}><button className={isActive.key == 6 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>Can Remota scale with my company's growth?</button></h2>
                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" onClick={() => handleToggle(7)}><button className={isActive.key == 7 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>1000 orders in a day too much?</button></h2>
                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                        <div className="accordion-body">Yes! You might give Jack a heart attack!</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Accordion;