
function App() {

  return (
    <div className="flex w-screen h-screen bg-background overflow-hidden">
      <div className="grid grid-rows-3 m-8 pb-8">
        <div className="flex w-full h-full items-end">
          <p className="bottom-0 left-0 uppercase font-chivo text-sm">Hi, I am</p>
          <span className="uppercase font-chivo text-bigName leading-[180px]">BAST</span>
        </div>
        <div className="flex w-full h-full items-end">
          <span className="uppercase font-chivo text-bigName leading-[180px]">IEN.</span>
          <p className="bottom-0 left-0 uppercase font-chivo text-sm">I am</p>
        </div>
        <div className="flex flex-col w-full h-full justify-end">
          <span className="uppercase font-chivo text-[128px] leading-[110px]">web</span>
          <span className="uppercase font-chivo text-[128px] leading-[110px]">developer</span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center ms-20">
        <span className="uppercase font-chivo text-[64px] leading-[70px]">Projects</span>
        <div className="w-full h-1.5 bg-black"></div>
        <span className="uppercase font-chivo text-[64px] leading-[70px]">Skills</span>
        <div className="w-full h-1.5 bg-black"></div>
        <span className="uppercase font-chivo text-[64px] leading-[70px]">About me</span>
        <div className="w-full h-1.5 bg-black"></div>
      </div>
    </div>
  )
}

export default App
