import ProductCard from "./ProductCard";

export default function Controllers({products}) {
    const controllerProducts = products.filter(product => {
        return product.product_type === 'controller'
      })
    
  return (
    <section className="pb-20 xl:pb-16">
      <div className="space-y-8 mx-4 xl:mx-48">
        <div className="mt-8">
          <h1 className="font-bold text-2xl xl:text-5xl text-center">
            Controllers and Accessories
          </h1>
          <p className="text-center text-gray-700">
            Lots of controllers for different platforms to choose from! Accessories too!
          </p>
        </div>
        <div className=" gap-y-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {controllerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
