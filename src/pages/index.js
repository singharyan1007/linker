import Image from 'next/image'
import data from '/home/bugscoder/linktree-clone/data.json'

function LinkCard({href,title,image}){
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  )
}
export default function Home() {
  return (
    <main className='p-10 '>

   <div className='flex items-center flex-col justify-center mx-auto w-full mt-20 '>
    <Image 
    src={data.avatar}
    className='rounded-full'
    alt={data.name}
    width={96}
    height={96}
    />
    <h1 className='font-semibold text-xl mt-4 font-mono'>{data.name}</h1>
    <p className='text-gray-500 pb-4'>{data.about}</p>
    {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}

   </div>
    </main>
  )
}

