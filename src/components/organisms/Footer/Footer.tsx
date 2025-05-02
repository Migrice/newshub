const Footer = () => {
  return (
    <>
      <div className="mx-3 flex w-full flex-col gap-5 py-15 md:flex-row md:justify-between md:gap-0 lg:justify-around">
        <div className="flex w-full flex-col justify-center gap-4 md:w-[50%] md:gap-6">
          <h1 className="text-3xl font-bold">NewsHub</h1>
          <p className="max-w-80">
            Craft narratives that ignite inspiration, knowledge, and
            entertainment.
          </p>

          <form action="" className="flex w-full gap-1.5">
            <input
              type="text"
              placeholder="Your Email"
              className="flex w-[60%] rounded-sm border border-gray-400 p-[0.5rem] text-[1rem] text-black"
            />
            <button
              type="submit"
              className="flex h-full items-center justify-center rounded-sm border-none bg-[#d85a5c] p-[0.5rem] text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-row gap-20">
          <div className="flex flex-col">
            <h1 className="mb-4 font-bold">Company</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Media</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-4 font-bold">Ressources</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Newsletter</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="mb-4 font-bold">Social</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="">Linkedlin</a>
              </li>
              <li>
                <a href="">Github</a>
              </li>
              <li>
                <a href="">X</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
