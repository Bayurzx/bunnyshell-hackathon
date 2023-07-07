
const ConnectWallet = () => {
  return (
    <div>
      <section className="py-10 sm:py-0">

        <div className="flex justify-center items-center h-screen">
          <div className="bg-gray-200 p-4 rounded-md">
            <h1 className="text-2xl font-bold">Connect Wallet</h1>
            <p>Kindly connect your wallet to access the site.</p>

            <div className="bg-white p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
              {/* <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse" /> */}
              <img src="/assets/cat1.gif" />

              <div className="flex flex-col flex-1 gap-5 sm:p-2">
                <div className="flex flex-1 flex-col gap-3">
                  <div className="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" />
                  <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" />
                  <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" />
                  <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" />
                  <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" />
                </div>
                <div className="mt-auto flex gap-3">
                  <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" />
                  <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" />
                  <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" />
                </div>
              </div>
            </div>



          </div>
        </div>

      </section>
    </div>
  );
};

export default ConnectWallet;
