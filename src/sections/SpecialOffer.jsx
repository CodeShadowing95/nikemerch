import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../components"

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
            <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full" />
        </div>
        <div className="flex flex-1 flex-col">
            <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                Step into <span className="text-coral-red">Savings</span>: Unmissable Offers on Nike's Best!
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">Ready to kickstart your savings and step into a world of style? Dive into our exclusive deals and let your strides speak volumes without burning a hole in your pocket. Your perfect pair is just a click away! 👟💰</p>
            <p className="mt-6 lg:max-w-lg info-text">Don't Wait – Shop Now! 🔥</p>
            <div className="mt-11 flex flex-wrap gap-4">
                <Button label="View details" />
                <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
            </div>
        </div>
    </section>
  )
}

export default SpecialOffer