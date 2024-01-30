import React from 'react'


function Footer() {
    return (
        <>
            <div className='w-full'>
                <div className='w-95% mx-auto flex flex-col lg:flex-row items-center justify-between'>
                    <div className='font-light'>
                        © 2024 MabArchitect - Award Winning Architectural Studio.
                    </div>
                    <div>
                        <div className='flex items-center gap-3  '>
                            <p className='font-semibold '>Connect</p>
                            <img src='line.png'></img>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer