import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen md:p-[10vw] text-white">
      <div className="flex">
        <Image src="/favicon.ico" alt="logo" width={200} height={200} />
        <div className='flex flex-col justify-center p-10'>
          <h1 className='text-[60px]'>Aymen Shoteri</h1>
          <p className='text-[20px]'>Software Engineer</p>
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aymen-shoteri/"
              className="flex items-center gap-2 bg-gray-800 border border-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              <Image src="/linkedin.png" alt="LinkedIn" width={50} height={50} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AymenS02"
              className="flex items-center gap-2 bg-gray-800 border border-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              <Image src="/github.png" alt="GitHub" width={50} height={50} />
            </a>

            {/* Email Button */}
            <a
              href="mailto:shoteriaymen@gmail.com"
              className="flex items-center gap-2 bg-gray-800 border border-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              <Image src="/email-icon.svg" alt="Email" width={24} height={24} />
              <span>shoteriaymen@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
