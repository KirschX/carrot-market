import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10">
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Tooly Chair</span>
          <span className="font-semibold">$19</span>
        </div> 
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center">Checkout</div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white">
          <div className="flex items-end justify-between relative -top-16 ">
             <div className="flex flex-col items-center">
               <span className="text-sm text-gray-500">Orders</span>
               <span className="font-bold">340</span>
             </div>
             <div className="h-24 w-24 bg-red-400 rounded-full"></div>
             <div className="flex flex-col items-center" >
               <span className="text-sm text-gray-500">Spent</span>
               <span className="font-bold">$2,310</span>
             </div>
          </div>
          <div className="relative -mt-16 flex flex-col items-center -mt-110 -mb-5">
               <span className="text-lg font-bold">Tony Molloy</span>
               <span className="text-sm text-gray-500">New York, USA</span>
             </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
    )
}

export default Home