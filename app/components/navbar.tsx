export default function Navbar() {
  return (
    <div className="container flex z-30 lg:px-8 lg:py-6 p-2"><Brand /></div>
  )
}

function Brand() {
  return (
    <div className="inline-flex">
      <img className="h-7 w-7" src="/fleet-logo-sm-no-bg-light.svg" alt="fleet-logo" />
      <p className="text-xs tracking-wider p-2 font-overpass uppercase">Fleet Technologies</p>
    </div>
  )
}