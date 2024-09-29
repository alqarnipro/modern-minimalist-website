import React from 'react';

interface AnalistecProps {
    title: string;
    numberAnalises: string;
    background?: string;
}

const Analistec: React.FC<AnalistecProps> = ({ title, numberAnalises, background = 'bg-gray-100' }) => {
    return (
        <div className={`${background} p-6 rounded-lg`}>
            <div>
                <p className="text-gray-600 text-sm m-0 w-3/4 ">{title}</p>
                <p className="text-5xl mt-10  text-center ">{numberAnalises}</p>
            </div>
        </div>
    );
}

export default Analistec;
