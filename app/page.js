import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform">
            Welcome to <span className="text-yellow-300">PieChat</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            The ultimate platform to connect, communicate, and collaborate seamlessly. 
            Enjoy secure and fast messaging at your fingertips.
          </p>
          <div className="space-x-4">
            {/* <Link href="/signup">
              <button className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg text-lg shadow-md hover:bg-yellow-400 transition">
                View on Github
              </button>
            </Link> */}
            <Link href="/forums">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg text-lg shadow-md hover:bg-gray-100 transition">
                Start Chatting
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Features of PieChat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gray-100">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2467/2467673.png"
                alt="Real-time Messaging"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Real-time Messaging</h3>
              <p className="text-gray-600">
                Enjoy lightning-fast communication with your friends and colleagues.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gray-100">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1008/1008996.png"
                alt="Secure Encryption"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">
                Your messages are encrypted to ensure maximum privacy and security.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gray-100">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                alt="Cross-Platform"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Cross-Platform Support</h3>
              <p className="text-gray-600">
                Use PieChat on desktop, mobile, and web – wherever you are.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gray-100">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                alt="Group Chats"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
              <p className="text-gray-600">
                Collaborate with your team or stay connected with family and friends.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gray-100">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2917/2917995.png"
                alt="Custom Themes"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Custom Themes</h3>
              <p className="text-gray-600">
                Personalize your chat experience with beautiful themes.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gray-100">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3342/3342137.png"
                alt="Voice & Video Calls"
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Voice & Video Calls</h3>
              <p className="text-gray-600">
                Stay connected with crystal-clear voice and video calls.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Affordable Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white">
              <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
              <p className="text-gray-600 mb-4">Perfect for individuals.</p>
              <p className="text-yellow-500 text-4xl font-bold mb-6">$0<span className="text-lg font-medium">/mo</span></p>
              <ul className="text-gray-600 mb-6">
                <li>- 100 messages/day</li>
                <li>- Basic features</li>
                <li>- Email support</li>
              </ul>
              <button className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition">
                Get Started
              </button>
            </div>
            {/* Pro Plan */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white border border-yellow-300">
              <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
              <p className="text-gray-600 mb-4">For professionals and teams.</p>
              <p className="text-yellow-500 text-4xl font-bold mb-6">$9.99<span className="text-lg font-medium">/mo</span></p>
              <ul className="text-gray-600 mb-6">
                <li>- Unlimited messaging</li>
                <li>- Advanced features</li>
                <li>- Priority support</li>
              </ul>
              <button className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition">
                Choose Plan
              </button>
            </div>
            {/* Enterprise Plan */}
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white">
              <h3 className="text-2xl font-semibold mb-4">Enterprise Plan</h3>
              <p className="text-gray-600 mb-4">Customized for businesses.</p>
              <p className="text-yellow-500 text-4xl font-bold mb-6">Contact Us</p>
              <ul className="text-gray-600 mb-6">
                <li>- Custom integrations</li>
                <li>- Dedicated support</li>
                <li>- Advanced analytics</li>
              </ul>
              <button className="bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} PieChat. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="text-gray-400 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
