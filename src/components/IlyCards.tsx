import {Link} from "react-router-dom";

const one =[
    {
        title:"In the club we all fammm",
        detail:"The last time we went to the club w Blessing & we had smoked all our ouid. Then you kept looking deep in our eyes lool to ask if we needed more ouid. Can't believe you disappeared and came back in some minutes w a joint or two. Super thoughtful. Also in the same light you kinda knelt before me at the club. that's kinda like super hot super submissive. I think about it a lot. It felt like you were surrendering yourself to me & I think in general fems love when their mascs kneel before them LOL   "
    },
]

    const four =[
        {
            title:"Chooselife",
            detail: "Your insomnia aside, who stays up all night to help deliver a project that has nothing to do with them(kinda) you considered me so much during that time like i'd never truly be able to describe what it did for me. I'd be the one to drink coffee and pass out LOOOL"
        },
        {
            title:"Seashells",
            detail: "You getting me seashells from the beach is just the most thoughtful, cutest & girliest thing ever."
        },
        {
            title:"Expression",
            detail: "Not the attachment o 🤭. Just you commenting on my ig and tiktok. I feel like your intrusive thoughts run free. It's cuteeee"
        },
        {
            title:"Enhancers",
            detail:"When we got edibles, 12 joints and molly for a night? What were we onnn. Definitely changed some stuff in my brain "

        },
    ]

    const three=[
        {
            title: "Mornings",
            detail: "Remember how I used to get you breakfast snacks? I loved that & also loved sipping yor cokey gin from your huge ass mug"

        },
        {
            title: "Pizza",
            detail: "We had wayyy too many great pizza & wing moments. Mouthgasmss!"
        },
        {
            title: "😏",
            detail: "Those things you do. You know what i mean"
        }
    ]
export default function IlyCards(){
    return (
        <div>

            <div className={"py-[10px] text-center animate-marquee bg-[black] text-[deeppink]"}>
                THINGS THAT ALTERED MY BRAIN CHEMISTRY
            </div>
            <Link to={"/"} className={"cursor-pointer text-right"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                    <path fill="#ff2ff0" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="4"
                          d="M44 40.8361C39.1069 34.8632 34.7617 31.4739 30.9644 30.6682C27.1671 29.8625 23.5517 29.7408 20.1182 30.303V41L4 23.5453L20.1182 7V17.167C26.4667 17.2172 31.8638 19.4948 36.3095 24C40.7553 28.5052 43.3187 34.1172 44 40.8361Z"
                          clip-rule="evenodd"/>
                </svg>
            </Link>

            <div className={"flex flex-col items-center gap-[10px] justify-center m-auto"}>
                <div className={"flex flex-col items-center gap-[15px]"}>
                    <div className={"py-[10px] flex w-[40px] items-center justify-center rounded-[12px] h-[40px] bg-[black] text-[deeppink]"}>
                        1
                    </div>
                    {one.map((item, index) => (
                        <div
                            className={"flex  w-[300px] h-[350px] gap-[5px] p-[15px] border-2 border-[#FF1493] rounded-[12px] flex-col bg-[white] "}
                            key={index}>
                            <div className={"bg-[#FF1493] rounded-[6px] text-center font-medium text-[white]"}>
                                {item.title}
                            </div>
                            <div className={"bg-[pink]   overflow-scroll p-[10px] rounded-[5px]"}>
                                {item.detail}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={"flex  flex-col items-center gap-[15px]"}>
                    <div
                        className={"py-[10px] flex w-[40px] items-center justify-center rounded-[12px] h-[40px] bg-[black] text-[deeppink]"}>
                        4
                    </div>
                    <div className={"flex gap-[15px]"}>
                    {four.map((item, index) => (
                        <div
                            className={"flex w-[300px] h-[350px] gap-[5px] p-[15px] border-2 border-[#FF1493] rounded-[12px] flex-col bg-[white] "}
                            key={index}>
                            <div className={"bg-[#FF1493] flex items-center justify-center rounded-[6px] text-center font-medium text-[white]"}>
                                {item.title}
                            </div>
                            <div className={"bg-[pink] p-[10px]  rounded-[5px]"}>
                                {item.detail}
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className={" flex flex-col items-center gap-[15px]"}>
                    <div className={"py-[10px] flex w-[40px] items-center justify-center rounded-[12px] h-[40px] bg-[black] text-[deeppink]"}>
                        3
                    </div>
                    <div className={"flex gap-[15px]"}>
                        {three.map((item, index) => (
                            <div
                                className={"flex w-[300px] h-[350px] gap-[5px] p-[15px] border-2 border-[#FF1493] rounded-[12px] flex-col bg-[white] "}
                                key={index}>
                                <div className={"bg-[#FF1493] rounded-[6px] text-center font-medium text-[white]"}>
                                    {item.title}
                                </div>
                                <div className={"bg-[pink] p-[10px] rounded-[5px]"}>
                                    {item.detail}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )


}