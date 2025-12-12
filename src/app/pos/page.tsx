"use client";
import React, { useEffect, useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { ProductPosType, CartItemPosType } from '@/types/pos/postypes';
import ProductCard from '@/components/Pos/ProductCard';
import CartItemCard from '@/components/Pos/CartCardItem';
import Sidebar from '@/components/Pos/SideBar';

const productsData: ProductPosType[] = [
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

const Page: React.FC = () => {
  const [cart, setCart] = useState<CartItemPosType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [customer, setCustomer] = useState('');
  const [sidebarDisplay, setSidebarDisplay] = useState(true);
  const [isMobileScreen, setMobileScreen] = useState(true);

  useEffect(() => {
    const checkIsMobile = () => {
      setSidebarDisplay(window.innerWidth >= 1024); 
      if(window.innerWidth < 1024){
        setMobileScreen(true);
      }else{
        setMobileScreen(false);
      }
    }

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [])

  const handleOpenSidebar = () => {
    setSidebarDisplay(!sidebarDisplay);
  }

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

  const addToCart = (product: ProductPosType) => {
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
    <div className="h-full w-full bg-white p-0">
      <div className="w-full mx-auto flex gap-6 flex-row">
        {/* <div style={{display: sidebarDisplay ? "block" : "hidden"}} className={`${isMobileScreen ? "absolute z-50 top-0 right-0 w-full h-screen bg-[#1212125f]" : "hidden"}`}> */}
        {/* <div className={`${isMobileScreen ? "absolute z-50 top-0 right-0 w-full h-screen bg-[#1212125f]" : "hidden"}`}> */}
          <Sidebar screenSize={isMobileScreen} display={sidebarDisplay} hideFn={handleOpenSidebar}/>
        {/* </div> */}
        <div className="flex-1 h-full w-full">
          <p className='block lg:hidden' onClick={handleOpenSidebar}>Menu</p>
          <div className='flex w-full justify-between lg:items-center flex-col md:flex-row items-start gap-2'>
            <div className="mb-0">
              <h1 className="text-[14px] font-bold text-[#121212] mb-1">Sales Transaction</h1>
              <p className="text-gray-400 text-[12px]">February 18, 2025</p>
            </div>

            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={12} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-6 pt-4 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-2 py-2 rounded-lg relative whitespace-nowrap transition-colors text-[12px] ${selectedCategory === category.id
                  ? 'bg-white text-black border border-black'
                  : 'bg-white text-gray-700 border-gray-300 border hover:bg-gray-50'
                  }`}
              >
                <div className="font-medium">{category.name}</div>
                <div className={`border rounded-2xl absolute top-[-8px] right-[-6px] text-[#121212] text-[8px] flex items-center justify-center text-center font-semibold p-0 w-4.5 h-4.5
                ${selectedCategory === category.id
                    ? 'bg-[#121212] text-white border border-black'
                    : 'bg-white text-gray-700 border-gray-300'
                  }
                `}>{category.count}</div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full max-h-[600px] overflow-scroll w-full pb-[2.5rem]">
            <div className="hidden bg-white rounded-lg border-2 border-dashed border-gray-300 flex-col items-center justify-center h-full cursor-pointer hover:border-gray-400 transition-colors">
              <Plus size={32} className="text-gray-400 mb-2" />
              <p className="text-gray-600 font-medium">Add New Product</p>
            </div>

            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[300px] bg-white rounded-lg p-6 border border-gray-300">
          <h2 className="text-[14px] font-bold text-gray-800 mb-2">Detail Order</h2>

          <div className="mb-6">
            <label className="block text-[12px] font-medium text-gray-700 mb-2">
              Customer
            </label>
            <input
              type="text"
              placeholder="Type or Select Customer"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="w-full px-2 py-1 border border-gray-200 rounded-lg text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-[14px] font-medium text-gray-700 pb-2 mb-2 border-b border-b-[#E4E4E4]">Your Order</h3>
            <div className="max-h-full overflow-y-auto">
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

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-[12px]">
              <span className="text-gray-600">Subtotal ({cart.length})</span>
              <span className="font-semibold">Rp {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[12px]">
              <span className="text-gray-600">Service Tax</span>
              <span className="font-semibold">Rp {serviceTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[14px] font-bold pt-2 border-t">
              <span>Total payment</span>
              <span>Rp {total.toLocaleString()}</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <label className="block text-[12px] font-medium text-gray-700 mb-2">
              Payment method: <span className="text-red-500">*</span>
            </label>
            <button className="w-full border border-gray-300 rounded-lg text-[12px] px-4 py-1 flex items-center justify-between hover:bg-gray-50">
              <span className="text-gray-700">Cash</span>
              <span className="text-gray-400">›</span>
            </button>
          </div>

          {/* Make Order Button */}
          <button className="w-full bg-[#121212] hover:bg-black text-white font-semibold py-3 text-[12px] rounded-lg mt-6 flex items-center justify-center gap-2 transition-colors">
            Make Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;