import React, { Component } from 'react';

class ProgressBar extends Component {
    render() {
        return (
            <div>
                <body className="min-h-screen flex justify-center items-center">
    <div className="flex">
        <div className="flex flex-col justify-start items-center text-black">
            <div className="flex items-center">
                <div className="w-10 h-1"></div>
                <div className="border-4 border-orange-400 rounded-full w-16 h-16 flex justify-center items-center text-2xl font-bold">
                    1
                </div>
                <div className="bg-orange-400 w-10 h-1"></div>
            </div>
            <div className="">
                Step #1
            </div>
        </div>
        <div className="flex flex-col justify-start items-center text-gray-400">
            <div className="flex items-center">
                <div className="bg-gray-400 w-10 h-1"></div>
                <div className="border-4 border-gray-400 rounded-full w-16 h-16 flex justify-center items-center text-2xl font-bold">
                    2
                </div>
                <div className="bg-gray-400 w-10 h-1"></div>
            </div>
            <div className="">
                Step #2
            </div>
        </div>
        <div className="flex flex-col justify-start items-center text-gray-400">
            <div className="flex items-center">
                <div className="bg-gray-400 w-10 h-1"></div>
                <div className="border-4 border-gray-400 rounded-full w-16 h-16 flex justify-center items-center text-2xl font-bold">
                    3
                </div>
                <div className="bg-transparent w-10 h-1"></div>
            </div>
            <div className="">
                Step #3
            </div>
        </div>
    </div>
</body>
            </div>
        );
    }
}

export default ProgressBar;