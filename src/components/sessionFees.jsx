const SessionFees = () => {
    return (
        <section className="bg-amber-50 py-10 px-4 md:px-8 border-t-2 border-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-playfair font-semibold text-stone-800 mb-7">
                    Session Fees
                </h2>
                <p className="text-stone-600 text-md mb-10">
                    Therapy sessions are thoughtfully priced to reflect the value of individualized care. Below are the standard session rates:
                </p>

                <div className="flex flex-col [@media(min-width:500px)]:flex-row justify-center gap-6">

                    <div className="bg-white rounded-2xl shadow-md p-6 w-full md:w-1/2 border border-amber-100">
                        <h3 className="text-xl font-semibold text-amber-700 mb-2">
                            Individual Session
                        </h3>
                        <p className="text-stone-600 text-lg">$200 / session</p>
                    </div>


                    <div className="bg-white rounded-2xl shadow-md p-6 w-full md:w-1/2 border border-amber-100">
                        <h3 className="text-xl font-semibold text-amber-700 mb-2">
                            Couples Session
                        </h3>
                        <p className="text-stone-600 text-lg">$240 / session</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SessionFees;



