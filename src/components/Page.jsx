const Page = ({isLogin}) => {
  return <div className="justify-evenly p-12 grid gap-x-4 gap-y-4 grid-cols-3">
    <button className="bg-HighlightColor text-NavbarColor rounded-lg px-6 py-4 text-xl">Buy</button>
    <button className="bg-HighlightColor text-NavbarColor rounded-lg px-6 py-4 text-xl">Sell</button>
    <button className="bg-HighlightColor text-NavbarColor rounded-lg px-6 py-4 text-xl">End Sale</button>
    <button className="bg-HighlightColor text-NavbarColor rounded-lg px-6 py-4 text-xl">Mint</button>
    <button className="bg-HighlightColor text-NavbarColor rounded-lg px-6 py-4 text-xl">Transfer Tokens</button>
    {isLogin ? (
          <button className="bg-HighlightColor text-NavbarColor rounded-lg px-6 py-4 text-xl">Logout</button>
        ) : (
          <button className="bg-HighlightColor text-NavbarColor rounded-lg px-6 py-4 text-xl">Login</button>
        )}
  </div>
}

export default Page