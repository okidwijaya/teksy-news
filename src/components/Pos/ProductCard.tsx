import { ProductPosType } from '@/types/pos/postypes';
import Image from 'next/image';

type Props = {
  product: ProductPosType;
  onAddToCart: (product: ProductPosType) => void;
};

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <div
      onClick={() => onAddToCart(product)}
      className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow border border-gray-300"
    >
      <div className="relative h-32">
        <Image
        width={100}
        height={100}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <h3 className="text-[#3c3c3c] mb-0 !text-[12px]">{product.name}</h3>
        <div className="flex items-center gap-1 !text-[10px]">
          {product.originalPrice && (
            <span className="text-gray-400 line-through !text-[10px]">
              Rp {product.originalPrice.toLocaleString()}
            </span>
          )}
          {product.discount && (
            <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded">
              {product.discount}% Off
            </span>
          )}
        </div>
        <p className="text-[#121212] font-semibold mt-0 text-[12px]">
          Rp {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
