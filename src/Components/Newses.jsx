import React from 'react'

// const articles = [
//     {
//         source: {
//             id: "the-times-of-india",
//             name: "The Times of India"
//         },
//         author: "Reuters",
//         title: "Mag 7? MANGOS? SpaceX forces name rethink on Wall Street's tech-stock moniker",
//         description: "SpaceX's massive $2 trillion IPO has challenged the 'Magnificent Seven' moniker, as its valuation now surpasses Tesla and Meta. With other tech giants like OpenAI ",
//         url: "https://economictimes.indiatimes.com/news/international/global-trends/mag-7-mangos-spacex-forces-name-rethink-on-wall-streets-tech-stock-moniker/articleshow/131711421.cms",
//         urlToImage: "https://img.etimg.com/thumb/msid-131711449,width-1200,height-630,imgsize-49590,overlay-economictimes/articleshow.jpg",
//         publishedAt: "2026-06-13T18:42:48Z",
//         content: "SpaceX roared into markets this past week with a valuation of more than $2 trillion, surpassing two members of Wall Street's \"Magnificent Seven\" and raising a key question: Does the Mag 7 name still … [+3115 chars]"
//     },
// {
//         source: {
//             id: "the-times-of-india",
//             name: "The Times of India"
//         },
//         author: "Reuters",
//         title: "Mag 7? MANGOS? SpaceX forces name rethink on Wall Street's tech-stock moniker",
//         description: "SpaceX's massive $2 trillion IPO has challenged the 'Magnificent Seven' moniker, as its valuation now surpasses Tesla and Meta. With other tech giants like OpenAI ",
//         url: "https://economictimes.indiatimes.com/news/international/global-trends/mag-7-mangos-spacex-forces-name-rethink-on-wall-streets-tech-stock-moniker/articleshow/131711421.cms",
//         urlToImage: "https://img.etimg.com/thumb/msid-131711449,width-1200,height-630,imgsize-49590,overlay-economictimes/articleshow.jpg",
//         publishedAt: "2026-06-13T18:42:48Z",
//         content: "SpaceX roared into markets this past week with a valuation of more than $2 trillion, surpassing two members of Wall Street's \"Magnificent Seven\" and raising a key question: Does the Mag 7 name still … [+3115 chars]"
//     },]


function Newses({
    articles,searchq,setsearchq
}) {
    return (
        <>
            <div className='flex justify-center items-center mt-24 flex-col  '>
                <h1 className='text-5xl p-3 my-9 font-bold'>Latest news</h1>

                <input type="text" className='w-80 h-12 border-2 border-gray-500 py-2 px-3 rounded-full my-2'
                placeholder='Search here....' value={searchq} onChange={(e)=>setsearchq(e.target.value)}/>

                <div className='flex flex-wrap gap-5 justify-center items-center'>
                {articles.map((e,i)=>(
                    <div key={i} className='w-77 border-2 h-100 border-red-500 p-3 rounded-2xl '  >
                        <div className='w-full h-45  rounded-2xl overflow-hidden'>
                            <img src={e.urlToImage ? e.urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2281288883.jpg?c=16x9&q=w_800,c_fill"} alt="" className='h-full w-full object-cover' />
                        </div>
                        <div className='my-3'>
                       {e.description?.length > 120
  ? e.description.slice(0, 110) + "..."
  : e.description}
                        </div>
                        <div className='ml-auto'>
                            <button className='bg-blue-500 text-white rounded-lg py-2 px-4'>Read More</button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default Newses