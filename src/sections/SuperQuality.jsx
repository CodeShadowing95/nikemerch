import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import { Button } from "../components"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                Masterpiece Collection: Nike's <span className="text-coral-red">Super Quality</span> Unleashed 💎
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">Explore the Masterpiece Collection now and unleash the extraordinary with each step, as you walk in shoes that are truly a work of art.</p>
            <p className="mt-6 lg:max-w-lg info-text">At Nike, your satisfaction is our not just a goal; it's our guarantee.</p>
            <div className="mt-11">
                <Button label="Shop now" iconURL={arrowRight} />
            </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
            <img src={shoe8} alt="shoe 8" width={570} height={522} className="object-contain" />
        </div>
    </section>
  )
}

export default SuperQuality