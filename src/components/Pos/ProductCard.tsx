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
      className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow border border-gray-200"
    >
      <div className="relative h-40">
        <Image
        width={100}
        height={100}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-800 mb-2 text-sm">{product.name}</h3>
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              Rp {product.originalPrice.toLocaleString()}
            </span>
          )}
          {product.discount && (
            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
              {product.discount}% Off
            </span>
          )}
        </div>
        <p className="text-gray-900 font-semibold mt-1">
          Rp {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
