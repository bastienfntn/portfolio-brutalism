
function App() {

  return (
    <div className="flex w-screen h-screen bg-background overflow-hidden items-center">
      <div className="grid w-full h-full grid-rows-3 m-8 pb-16 pt-14">
        <div className="flex w-full h-full items-end">
          <span className="bottom-0 left-0 uppercase font-chivo text-sm">Hi, I am</span>
          <span className="uppercase font-chivo text-bigName leading-[180px]">BAST</span>
        </div>
        <div className="flex w-full h-full items-end">
          <span className="uppercase font-chivo text-bigName leading-[180px]">IEN.</span>
          <span className="bottom-0 left-0 uppercase font-chivo text-sm">I am</span>
        </div>
        <div className="flex flex-col w-full h-full justify-end">
          <span className="uppercase font-chivo text-[128px] leading-[110px]">web</span>
          <span className="uppercase font-chivo text-[128px] leading-[110px]">developer</span>
        </div>
      </div>
      <div className="w-full h-80 flex flex-col justify-center ms-20">
        <div className="relative group w-full h-20">
          <div className="absolute bottom-0 group-hover:h-20 w-full h-1.5 bg-black transition-all duration-300"/>
          <span
            className="absolute bottom-0 px-1 uppercase font-chivo text-[64px] leading-[70px] group-hover:text-white transition-all duration-300">Projects</span>
        </div>
        <div className="relative group w-full h-20">
          <div className="absolute bottom-0 group-hover:h-20 w-full h-1.5 bg-black transition-all duration-300"/>
          <span
            className="absolute bottom-0 px-1 uppercase font-chivo text-[64px] leading-[70px] group-hover:text-white transition-all duration-300">Skills</span>
        </div>
        <div className="relative group w-full h-20">
          <div className="absolute bottom-0 group-hover:h-20 w-full h-1.5 bg-black transition-all duration-300"/>
          <span
            className="absolute bottom-0 px-1 uppercase font-chivo text-[64px] leading-[70px] group-hover:text-white transition-all duration-300">About Me</span>
        </div>
      </div>
    </div>
  )
}

export default App
