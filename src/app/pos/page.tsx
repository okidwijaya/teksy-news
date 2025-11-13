"use client";
import React, { useState } from 'react';
import { Search, Plus, Minus, Trash2, Send } from 'lucide-react';

// Types
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: 'all' | 'foods' | 'beverage' | 'other';
}

interface CartItem extends Product {
  quantity: number;
}

// Sample Products Data
const productsData: Product[] = [
  {
    id: '1',
    name: 'Healthy Salad',
    price: 10000,
    originalPrice: 30000,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    category: 'foods'
  },
  {
    id: '2',
    name: 'Healthy Salad Avocado',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    category: 'foods'
  },
  {
    id: '3',
    name: 'Tsunami Salmon',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    category: 'foods'
  },
  {
    id: '4',
    name: 'Tropical Smoothies',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
    category: 'beverage'
  },
  {
    id: '5',
    name: 'Smooky Beef',
    price: 10000,
    originalPrice: 30000,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop',
    category: 'foods'
  },
  {
    id: '6',
    name: 'Salmon Coco Sauce',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    category: 'foods'
  },
  {
    id: '7',
    name: 'Indomie Seafood',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    category: 'foods'
  },
  {
    id: '8',
    name: 'Indomie Soto',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    category: 'foods'
  },
  {
    id: '9',
    name: 'Japanese Rice Bowl',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop',
    category: 'foods'
  },
  {
    id: '10',
    name: 'Kimchi Rice',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop',
    category: 'foods'
  }
];

// Product Card Component
const ProductCard: React.FC<{
  product: Product;
  onAddToCart: (product: Product) => void;
}> = ({ product, onAddToCart }) => {
  return (
    <div
      onClick={() => onAddToCart(product)}
      className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow border border-gray-200"
    >
      <div className="relative h-40">
        <img
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

// Cart Item Component
const CartItemCard: React.FC<{
  item: CartItem;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}> = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-3 mb-3">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 rounded-lg object-cover"
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

// Main POS Component
const Page: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [customer, setCustomer] = useState('');

  const categories = [
    { id: 'all', name: 'All Product', count: productsData.length },
    { id: 'foods', name: 'Foods', count: productsData.filter(p => p.category === 'foods').length },
    { id: 'beverage', name: 'Baverage', count: productsData.filter(p => p.category === 'beverage').length },
    { id: 'other', name: 'Other', count: productsData.filter(p => p.category === 'other').length }
  ];

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const serviceTax = subtotal * 0.1;
  const total = subtotal + serviceTax;

  return (
    <div className="min-h-screen bg-[#121212] p-6">
      <div className="max-w-7xl mx-auto flex gap-6">
        {/* Left Section - Products */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-1">Sales Transaction</h1>
            <p className="text-gray-400 text-sm">February 18, 2025</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white rounded-lg pl-12 pr-4 py-3 outline-none"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-3 mb-6 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-white text-blue-600 border-2 border-blue-600'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="font-medium">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} items</div>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-4">
            {/* Add New Product Card */}
            <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center h-64 cursor-pointer hover:border-gray-400 transition-colors">
              <Plus size={32} className="text-gray-400 mb-2" />
              <p className="text-gray-600 font-medium">Add New Product</p>
            </div>

            {/* Product Cards */}
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Order Details */}
        <div className="w-96 bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Detail Order</h2>

          {/* Customer Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Customer
            </label>
            <input
              type="text"
              placeholder="Type or Select Customer"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          {/* Cart Items */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Your order :</h3>
            <div className="max-h-96 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-center text-gray-400 py-8">No items in cart</p>
              ) : (
                cart.map(item => (
                  <CartItemCard
                    key={item.id}
                    item={item}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeFromCart}
                  />
                ))
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal ({cart.length})</span>
              <span className="font-semibold">Rp {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Service Tax</span>
              <span className="font-semibold">Rp {serviceTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t">
              <span>Total payment</span>
              <span>Rp {total.toLocaleString()}</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment method: <span className="text-red-500">*</span>
            </label>
            <button className="w-full border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-between hover:bg-gray-50">
              <span className="text-gray-700">Cash</span>
              <span className="text-gray-400">›</span>
            </button>
          </div>

          {/* Make Order Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-6 flex items-center justify-center gap-2 transition-colors">
            Make Order
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;