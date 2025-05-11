import SingleProduct from "@/components/Products/slug-components/SingleProduct";
import axios from "axios";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const response = await axios.get("https://dummyjson.com/products");

  const products = response.data.products;
  return products.map((product) => ({
    product: [product.id.toString()],
  }));
}

async function getProduct(id: string) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    const productData = response.data;

    return productData;
  } catch (error) {
    if (error.response?.status === 404) {
      notFound(); // 👈 Triggers Next.js 404 page
    }
    throw error; // rethrow other errors
  }
}

async function ProductSlug({ params }: { params: { product: string[] } }) {
  const { product } = await params;
  const id = product[0];
  const productData = await getProduct(id);

  if (productData)
    return (
      <div className="px-5 py-6">
        <SingleProduct
          id={productData.id}
          title={productData.title}
          price={productData.price}
          image={productData.images[0]}
        />
      </div>
    );
}

export default ProductSlug;
