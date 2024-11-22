export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Payment Dashboard
        </h1>
        <p className="text-gray-700 mb-6">
          Manage and track your payment transactions effortlessly. Use the
          dashboard to filter, sort, and analyze your payments. Start by
          navigating through the options to explore the features.
        </p>
        <div className="flex gap-4">
          <a
            href="/transactions"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            View Transactions
          </a>
        </div>
      </div>
    </main>
  );
}
