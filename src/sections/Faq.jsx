
import { Element } from 'react-scroll';
import FaqItem from '../components/FaqItem';
import { faq } from '../constants/index';
const Faq = () => {
    const halfLength = Math.floor(faq.length / 2)
    return (
        <section>
            <Element name='faq' className='relative'>
                <div className="container relative z-2 py-28">
                    <div>
                        <h3 className='text-h3 font-h3 leading-h3 tracking-h3 max-md:text-h5 max-md:font-h5 max-md:leading-h5 max-w-640 max-lg:max-w-md mb-7 text-p4'>Curiosity didn't kill the cat, it given answers.
                        </h3>
                        <p className='text-body-1 leading-body-1 max-lg:max-w-sm'>You've got questions, we've got answers.</p>
                    </div>

                    <div className='faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2' />
                </div>
                <div className='faq-glow_before relative z-2 border-2 border-s2 bg-s1'>
                    <div className="container flex gap-10 max-lg:block">
                        <div className="rounded-half absolute -top-10 left-[calc(50%-39.9px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
                            <img src="/images/faq-logo.svg" alt="logo" className='size-1/2' />
                        </div>
                        <div className="relative flex-1 pt-24">
                            {faq.slice(0, halfLength).map((item, index) => (
                                <FaqItem key={item.id} item={item} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Faq