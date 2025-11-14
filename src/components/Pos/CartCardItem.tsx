import { CartItemPosType } from '@/types/pos/postypes';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';

type Props = {
  item: CartItemPosType;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
};

const CartItemCard: React.FC<Props> = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-3 mb-3">
      <Image
        src={item.image}
        alt={item.name}
        className="w-16 h-16 rounded-lg object-cover"
        width={100}
        height={100}
      />
      <div className="flex-1">
        <h4 className="font-medium text-gray-800 text-sm">{item.name}</h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-900 font-semibold text-sm">
            Rp {item.price.toLocaleString()}
          </span>
          {item.discount && (
            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
              {item.discount}% Off
            </span>
          )}
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={18} />
      </button>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onDecrease(item.id)}
          className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <Minus size={14} />
        </button>
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => onIncrease(item.id)}
          className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <Plus size={14} />
        </button>
      </div>
      <div className="w-24 text-right">
        <p className="font-semibold text-gray-900">
          Rp {(item.price * item.quantity).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;