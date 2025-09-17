export default function CheckoutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
                {/* Cart items will be displayed here */}
                <p>Order summary goes here.</p>
                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">Proceed to Payment</button>
            </div>
        </div>
    );
}
