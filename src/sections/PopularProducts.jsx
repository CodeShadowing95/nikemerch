import { PopularProductCard } from "../components";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
            <h2 className="text-4xl font-palanquin font-bold">
                Elevate Your <span className="text-coral-red">Style</span> with Our Best-Sellers 🌟
            </h2>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Elevate your style with the shoes that resonate with the pulse of the times. Dive into the popularity. Shop now and experience the best of Nike's style and innovation!</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products.map((product) => (
                <PopularProductCard
                    key={product.name}
                    {...product}
                />
            ))}
        </div>
    </section>
  )
}

export default PopularProducts