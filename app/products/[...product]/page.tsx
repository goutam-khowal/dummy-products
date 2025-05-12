import SingleProduct from "@/components/Products/slug-components/SingleProduct";
import axios from "axios";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Type for Product data returned by API
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

// Generate static paths
export async function generateStaticParams(): Promise<{ product: string[] }[]> {
  const response = await axios.get("https://dummyjson.com/products");
  const products: Product[] = response.data.products;

  return products.map((product) => ({
    product: [product.id.toString()],
  }));
}

// Fetch product data
async function getProduct(id: string): Promise<Product> {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data as Product;
  } catch (error: any) {
    if (error?.response?.status === 404) {
      notFound(); // 👈 Next.js 404 page
    }
    throw error;
  }
}

// Page metadata (SEO)
export async function generateMetadata({
  params,
}: {
  params: { product: string[] };
}): Promise<Metadata> {
  const id = params.product[0];
  const product = await getProduct(id);

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

// Page component
interface PageProps {
  params: {
    product: string[];
  };
}

async function ProductSlug({ params }: PageProps) {
  const id = params.product[0];
  const productData = await getProduct(id);

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
