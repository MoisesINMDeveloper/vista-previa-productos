export default function Tarjeta() {
    return (
        <div className="flex flex-col  justify-center md:flex-row">
            <div className="flex flex-col h-full md:flex-row">

                <span className="flex justify-content w-[22rem] h-full">
                    <div className="w-[22rem] md:h-[90%]">
                        {/* Imagen para diseño mobile */}
                        <img className="rounded-t-lg md:hidden" src="./src/Components/assets/img-mobile.jpg" alt="Perfume" />

                        {/* Imagen para diseño desktop */}
                        <img className="rounded-l-lg hidden md:flex object-contain" src="./src/Components/assets/img-desktop.jpg" alt="Perfume" />
                    </div>
                </span >
                <div className=" pb-5 bg-[#ffffff] rounded-b-lg md:rounded-r-lg">
                    <div className="flex flex-col w-[340px] px-6 py-5 md:pl-[2rem] md:pr-[3rem]">
                        <h6 className="text-[14px] text-neutral-400 font-semibold font-montserrat mb-2 md:my-4">P E R F U M E</h6>
                        <h1 className="font-fraunces font-bold text-3xl mb-2 md:mb-4 md:text-[2.5rem]">Gabrielle Essence Eau De Parfum</h1>
                        <p className="font-montserrat text-sm md:text-base text-neutral-400 md:leading-relaxed  md:mb-2">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                    </div>
                    <div className="px-6 flex flex-row items-center md:ml-2">
                        <p className="font-fraunces font-bold text-4xl text-[#3c8067]">$149.99</p>
                        <p className="px-4 font-montserrat text-sm line-through text-neutral-400 font-semibold md:mr-2">$169.99</p>
                    </div>
                    <button className="flex justify-center items-center bg-[#3c8067] rounded-lg mx-8 mt-6  w-[18rem] h-10 focus:bg-[#254b3d] md:h-14 md:mt-12" > <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF" /></svg> <p className="text-white font-montserrat text-xs font-semibold w-[6rem]">Add to Cart</p></button>
                </div>
            </div>
        </div >
    )
}