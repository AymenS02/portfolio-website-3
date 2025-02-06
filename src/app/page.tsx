import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen md:p-[10vw] text-gray-300 font-mono">
      <div className="flex">

        <div className="w-[200px] h-[200px] rounded-xl overflow-hidden">
          <Image
            src="/photoface.png"
            alt="logo"
            className="w-full h-full object-cover"
            width={200}
            height={200}
          />
        </div>

        <div className='flex flex-col justify-end p-10 h-[200px]'>

          <h1 className='text-[60px]'>Aymen Shoteri</h1>
          <p className='text-[20px] text-gray-500'>CS undergrad, software engineer</p>

          <div className="flex items-center gap-4 mt-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aymen-shoteri/"
              className="flex items-center gap-2 bg-gray-700 border border-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition"
            >
              <Image src="/linkedin.webp" alt="LinkedIn" className="h-6 w-auto object-contain" width={50} height={50} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AymenS02"
              className="flex items-center gap-2 bg-gray-700 border border-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition"
            >
              <Image src="/github.png" alt="GitHub" className="h-6 w-auto object-contain" width={50} height={50} />
            </a>

            {/* Email Button */}
            <a
              href="mailto:shoteriaymen@gmail.com"
              className="flex items-center gap-2 bg-gray-700 border border-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition"
            >
              <Image src="/email.png" alt="Email" className="h-6 w-auto object-contain" width={24} height={24} />
              <span className='text-gray-500'>shoteriaymen@gmail.com</span>
            </a>
          </div>


        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl">About Me</h2>
        <p className="mt-4 text-lg">
          I&apos;m a software engineer with 2 years of experience in building web applications using React, Next.js, and Node.js. I&apos;m passionate about learning new technologies and building products that make a difference.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl">Experience</h2>
        <div className="mt-4">
          <div className='bg-gray-800 p-4 rounded-lg shadow-md w-[300px]'>

            <div className='flex gap-2'>
              <Image src="/photoface.png" alt="Microsoft" className="h-10 w-auto object-contain rounded-lg" width={100} height={100} />
              <div className='mt-2 flex-col items-center gap-2'>
                <h3>The Win Column</h3>
                <p>Software Engineer</p>
              </div>
            </div>

            <p className='mt-2'>May 2024 - Aug 2024</p>

            <p className='mt-2'>Devloped a blah blah blah</p>

            <div className='mt-2 flex gap-2'>

              <p>React</p>
              <p>Next.js</p>
              <p>MongoDB</p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
