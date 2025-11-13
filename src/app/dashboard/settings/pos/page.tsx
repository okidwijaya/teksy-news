import Image from 'next/image';
import { CheckCircle, Circle } from 'lucide-react';

export default function Page() {
  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Quick start guide</h2>
            <p className="text-sm text-gray-500 mb-4">4 of 7 tasks complete</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">POS Setup guide</h3>
            <p className="text-sm text-gray-500 mb-6">Get started with this step-by-step guide</p>

            {/* Steps */}
            <div className="space-y-4">
              <Step checked label="Import your products from Square" />
              <Step label="Double check your migration" />
              <Step checked label="Select products to sell in person" />
              <Step label="Get the Point of Sale app" customContent={<POSDownload />} />
              <Step label="Order hardware accessories" />
            </div>

            <div className="mt-6">
              <details className="mb-2">
                <summary className="cursor-pointer text-gray-700 font-medium">Store settings</summary>
              </details>
              <details>
                <summary className="cursor-pointer text-gray-700 font-medium">Get ready to sell in person</summary>
              </details>
            </div>
          </div>

          {/* POS Pro Section */}
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-sm text-gray-500 mb-2">1 of 4 tasks complete</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Streamline in-store operations with POS Pro</h3>
            <p className="text-sm text-gray-500 mb-4">
              Get serious about in-person selling with these POS Pro features—designed to help you run your
              business like a pro and included in your trial.
            </p>
            <p className="text-xs text-gray-400">
              An overview of your POS analytics and cash tracking sessions will be displayed here after setup.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center text-center">
          <Image src="/pos-demo.jpg" width={200} height={200} alt="POS demo" className="rounded-xl mb-4" />
          <h4 className="text-md font-semibold text-gray-900 mb-1">Sell anywhere from a single back-office</h4>
          <p className="text-sm text-gray-500">
            Manage inventory, orders, and customer lists from one place across in-store, online, and social channels.
          </p>
        </div>
      </div>
    </div>
  );
}

type StepProps = {
  label: string;
  checked?: boolean;
  customContent?: React.ReactNode;
};

function Step({ label, checked = false, customContent = null }: StepProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">
        {checked ? (
          <CheckCircle className="w-5 h-5 text-black" />
        ) : (
          <Circle className="w-5 h-5 text-gray-300" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-800 font-medium mb-1">{label}</p>
        {customContent}
      </div>
    </div>
  );
}

function POSDownload() {
  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-500">
        Scan the QR code or send yourself the link to get the app. The POS app is where you&#39;ll make sales,
        accept payments, and look up customer info when selling in person.
        <a href="#" className="text-blue-600 ml-1 underline text-xs">Learn more</a>
      </p>
      <div className="flex items-center gap-2">
        <input
          type="email"
          className="text-sm border border-gray-300 rounded-md p-2 w-full"
          placeholder="Enter email"
          defaultValue="okidwijaya@gmail.com"
        />
        <button className="text-sm bg-gray-800 text-white px-4 py-2 rounded-md">Send download link</button>
      </div>
      <div>
        <Image src="/qr-code.png" width={100} height={100} alt="QR Code" className="mt-2" />
      </div>
    </div>
  );
}
