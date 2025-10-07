import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";



const Header = () => {
  const [hasScrolled, setHasScroller] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return; //  ✅ aman untuk SSR
    let ticking = false // ✅ flag untuk mencegah rAF dipanggil berkali2
    const handleScroll = () => {
      setHasScroller(window.scrollY > 32);  // ✅ update state
      ticking = false // reset flag setelah rAF jalan
    }

    const onScroll = () => { // ✅ hanya schedule sekali per frame
      if (!ticking) {
        window.requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    handleScroll() // ✅ cek posisi awal saat mount

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [])

  const NavLink = ({ title, offset }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={offset || -140}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
      {title}
    </LinkScroll>
  );

  return (
    <>
      <header className={clsx("fixed top-0 left-0 z-50  w-full py-10 max-lg:py-4 transition-all duration-500", hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]")}>
        <div className="container flex h-14 items-center max-lg:px-5">
          <LinkScroll
            onClick={() => setIsOpen(false)}
            to="hero"
            offset={-250}
            spy
            smooth
            className="lg:hidden flex-1 cursor-pointer z-2">
            <img src="/images/xora.svg" alt="Logo" width={115} height={55} />
          </LinkScroll>

          <div className={clsx("w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0", isOpen ? "max-lg:opacity-100 transition-opacity duration-500" : "max-lg:pointer-events-none  duration-200")}>
            <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
              <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                <ul className="flex max-lg:block max-lg:px-12">
                  <li className="nav-li">
                    <NavLink title="features" />
                    <div className="dot" />
                    <NavLink title="pricing" offset={-50} />
                  </li>
                  <li className="nav-logo">
                    <LinkScroll
                      to="hero" offset={-240} spy smooth className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')}>
                      <img
                        src="/images/xora.svg"
                        width={160}
                        height={55}
                        alt="logo"
                      />
                    </LinkScroll>
                  </li>
                  <li className="nav-li">
                    <NavLink title="faq" offset={-30} />
                    <div className="dot" />
                    <NavLink title="Download" />
                  </li>
                </ul>
              </nav>

              <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                <img src="/images/bg-outlines.svg" width={960} height={380} alt="outline" className="relative z-2" />
                <img src="/images/bg-outlines-fill.png" width={960} height={380} alt="outline" className="absolute inset-0 mix-blend-soft-light opacity-5" />
              </div>
            </div>
          </div>

          <button className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <img src={`/images/${isOpen ? "close" : "magic"}.svg`} alt="magic" className="size-1/2 object-contain" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
