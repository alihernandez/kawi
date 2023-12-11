
export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center my-2 h-4/5 w-4/5 rounded-xl" id="outterDiv">
          <div className="flex flex-col justify-center items-center my-2 h-4/5 w-4/5 rounded-xl" id="innerLine">
        <p>About us..</p>
        <div className="flex justify-center my-2 h-4/5 w-4/5 rounded-lg" id="outterDiv">
          <p>Company story here</p>
        </div>
        <div className="flex justify-center my-2 h-4/5 w-4/5 rounded-lg" id="outterDiv">
          <p>more stuff here</p>
        </div>
        </div> 
        </div>
      </div>
    </main>
  )
}
