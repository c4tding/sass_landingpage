
import { Element } from 'react-scroll';
const Faq = () => {
    return (
        <section>
            <Element name='faq' className='relative'>
                <div className="container relative z-2 py-28">
                    <div>
                        <h3 className='text-h3 font-h3 leading-h3 tracking-h3 max-md:text-h5 max-md:font-h5 max-md:leading-h5 max-w-640 max-lg:max-w-md mb-7 text-p4'>Curiosity didn't kill the cat, it given answers. </h3>
                        <p className='text-body-1 leading-body-1 max-lg:max-w-sm'>You've got questions, we've got answers.</p>
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Faq