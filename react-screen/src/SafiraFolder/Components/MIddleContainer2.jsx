// import React from 'react'

// const MIddleContainer2 = () => {
//     return (

//         <div className='container2'>
//             <div className="fruit1">
//                 <div className="image-wrapper">
//                     <img src="/assets/banner5.jpg" alt="Fresh Fruits" />
//                     <div className="shadow-overlay">
//                         <div className="shadow-h"></div>
//                         <div className="shadow-v"></div>
//                     </div>
//                 </div>
//             </div>
//             <div className='fruits2'>
//                 <img src="/assets/banner6.jpg" alt="" />
//             </div>
//             <div className='fruits3'>
//                 <div className='fruits11'>
//                     <img src="/assets/banner7.jpg" alt="" />
//                 </div>
//                 <div className='fruits22'>
//                     <img src="/assets/banner8.jpg" alt="" />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default MIddleContainer2

import React from 'react'

const MIddleContainer2 = () => {
    return (
        <div className='container2'>
            {/* First two horizontal images */}
            <div className="fruit1">
                <div className="image-wrapper">
                    <img src="/assets/banner5.jpg" alt="Banner 1" />
                    <div className="shadow-overlay">
                        <div className="shadow-h"></div>
                        <div className="shadow-v"></div>
                    </div>
                </div>
            </div>

            <div className="fruit1">
                <div className="image-wrapper">
                    <img src="/assets/banner6.jpg" alt="Banner 2" />
                    <div className="shadow-overlay">
                        <div className="shadow-h"></div>
                        <div className="shadow-v"></div>
                    </div>
                </div>
            </div>

            {/* Last two vertical images */}
            <div className='fruits-vertical'>
                <div className="fruit1 small">
                    <div className="image-wrapper">
                        <img src="/assets/banner7.jpg" alt="Banner 3" />
                        <div className="shadow-overlay">
                            <div className="shadow-h"></div>
                            <div className="shadow-v"></div>
                        </div>
                    </div>
                </div>
                <div className="fruit1 small">
                    <div className="image-wrapper">
                        <img src="/assets/banner8.jpg" alt="Banner 4" />
                        <div className="shadow-overlay">
                            <div className="shadow-h"></div>
                            <div className="shadow-v"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MIddleContainer2
