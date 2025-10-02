
import { clsx } from 'clsx';
import { useState } from 'react';
import CountUp from 'react-countup';
import { Element } from 'react-scroll';
import Button from '../components/Button';
import { plans } from '../constants';
const Pricing = () => {
    const [monthly, setMonthly] = useState(false)

    return (
        <section>
            <Element name="pricing">
                <div className="container">
                    <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
                        <h3 className="text-h3 font-h3 leading-h3 tracking-h3 max-lg:text-h4 max-lg:font-h4 max-lg:leading-h4 max-md:text-h5 max-md:font-h5 max-md:leading-h5 z-4 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
                            Flexible pricing for teams of all sizes
                        </h3>
                        <div className='relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]'>
                            <button
                                className={clsx("pricing-head_btn cursor-pointer text-[16px] font-bold leading-[24px] text-p5 ", monthly && "text-p4")}
                                onClick={() => setMonthly(true)}
                            >
                                Monthly
                            </button>
                            <button
                                className={clsx("pricing-head_btn cursor-pointer text-[16px] font-bold leading-[24px] text-p5 ", !monthly && "text-p4")}
                                onClick={() => setMonthly(false)}
                            >
                                Yearly
                            </button>
                            <div className={clsx('bg-g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden  shadow-400 transition-transform duration-500', !monthly && "translate-x-full")} />
                        </div>
                        <div className='pricing-bg'>
                            <img src="/images/bg-outlines.svg" alt="outline" width={960} height={380} className='relative z-2' />
                            <img src="/images/bg-outlines-fill.png" alt="outline-fill" width={960} height={380} className='absolute inset-0 opacity-5 mix-blend-soft-light' />
                        </div>
                    </div>

                    {/* Pricing section */}
                    <div className='scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6'>
                        {
                            plans.map((plan, index) => (
                                <div
                                    key={plan.id}
                                    className='pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]'>

                                    {index === 1 && <div className='bg-g4 absolute h-330 left-0 right-0 top-0 rounded-tl-3xl rounded-tr-3xl' />}
                                    {/* Pricing icon logo */}
                                    <div className={clsx("absolute left-0 right-0 z-2 flex items-center justify-center", index === 1 ? "-top-6" : "-top-6 xl:-top-11")}>
                                        <img
                                            src={plan.logo}
                                            alt={plan.title}
                                            className={clsx("object-contain drop-shadow-2xl", index === 1 ? "size-[120px]" : "size-[80px]")}
                                        />
                                    </div>

                                    <div className={clsx("relative flex flex-col items-center", index === 1 ? "pt-24" : "pt-12")}>
                                        {/* pricing card body */}
                                        <div className={clsx("text-small-2 font-small-2 leading-small-2 tracking-small-2 rounded-20 relative z-2 mx-2 mb-6 border-2 px-4 py-1.5 uppercase", index === 1 ? "border-p3 text-p3" : "border-p1 text-p1")}>
                                            {plan.title}
                                        </div>

                                        <div className="relative z-2 flex items-center justify-center">
                                            <div className={clsx("text-h-num font-h-num leading-h-num", index === 1 ? "text-p3" : "text-p4")}>
                                                ${" "}
                                                <CountUp
                                                    start={plan.priceMonthly}
                                                    end={monthly ? plan.priceMonthly : plan.priceYearly}
                                                    duration={0.4}
                                                    useEasing={false}
                                                    preserveValue
                                                />
                                            </div>
                                            <div className='small-1 relative top-3 ml-1'>/mo</div>
                                        </div>
                                    </div>
                                    <div className={clsx("relative text-body-1 leading-body-1 z-2 mb-10 w-full border-b-s2 pb-9 text-p4 text-center", index === 1 && "border-b")}>
                                        {plan.caption}
                                    </div>
                                    <ul className='mx-auto space-y-4 xl:px-7'>
                                        {plan.features.map((feature) => (
                                            <li key={feature} className='relative flex items-center gap-5 hover:cursor-default hover:scale-102 text-shadow-p3 hover:text-p3 transition-transform duration-500'>
                                                <img src="/images/check.png" alt="check" className='size-10 object-contain' />
                                                <p className='flex-1'>{feature}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='mt-10 w-full flex justify-center'>
                                        <Button icon={plan.icon}>Get Started</Button>
                                    </div>
                                    {index === 1 && (
                                        <p className='small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-["-"] after:mx-2.5  after:content-["-"]'>Limited Time Over</p>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Element>
        </section >
    )
}

export default Pricing