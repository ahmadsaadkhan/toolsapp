'use client'
import { useRef, useState } from "react";
import data from '@/data/data.json'

export const Content = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [coverLetter, setCoverLetter] = useState(data.coverLetter);
    const [instruction, setInstruction] = useState(data.instruction);

    const divRef = useRef(null);

    const copyText = () => {
        const textToCopy = divRef.current.textContent;
        if (divRef.current) {
            const range = document.createRange();
            range.selectNodeContents(divRef.current);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => alert('Text copied successfully!'))
                .catch((error) => console.error('Error copying text: ', error));
        }
    };

    return (
        <main className="p-10">
            <h1 className="text-center mb-2 text-3xl">Upwork Proposal Helper</h1>
            <div className="flex">
                <textarea
                    className="w-full h-24 md:h-32 lg:h-40 xl:h-48 2xl:h-56 resize-none border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 mr-3 text-white bg-[#22272c]"
                    onChange={(e) => setJobDescription(e.target.value)}
                ></textarea>

                <textarea
                    className="w-full h-24 md:h-32 lg:h-40 xl:h-48 2xl:h-56 resize-none border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 text-white bg-[#22272c]"
                    onChange={(e) => setJobDescription(e.target.value)}
                    value={coverLetter}
                ></textarea>
            </div>

            <textarea
                className="w-full h-20 md:h-32 lg:h-20 xl:h-20 2xl:h-20 resize-none border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 mt-3 text-white bg-[#22272c]"
                onChange={(e) => setJobDescription(e.target.value)}
                value={instruction}
            ></textarea>

            <div>
                <h1>Final Content</h1>
                <div className="border rounded p-3" ref={divRef} onClick={copyText}>
                    {/* {jobDescription && (
                        <div>
                            <br />
                            <br />
                        </div>
                    )} */}
                    {jobDescription}
                    <br />
                    <br />
                    {instruction}
                    <br />
                    <br />
                    {coverLetter}
                </div>
                <div className="flex justify-center">
                    <button className= "mt-3 border p-2 rounded text-center bg-blue-400" onClick={copyText}>Copy Text</button>
                </div>
            </div>
        </main>
    )
}
