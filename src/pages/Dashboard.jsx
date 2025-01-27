import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    // Fetch portfolios from your data source
    const fetchPortfolios = async () => {
      const data = [
        {
          id: 1,
          title: 'Portfolio 1',
          description: 'A brief description of Portfolio 1.',
          imageUrl: 'https://via.placeholder.com/300',
        },
        {
          id: 2,
          title: 'Portfolio 2',
          description: 'A brief description of Portfolio 2.',
          imageUrl: 'https://via.placeholder.com/300',
        },
      ];
      setPortfolios(data);
    };

    fetchPortfolios();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center py-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300">
            Create New Portfolio
          </button>
        </header>

        <main className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.length === 0 ? (
              <p className="text-gray-500">No portfolios yet. Create one to get started!</p>
            ) : (
              portfolios.map((portfolio) => (
                <div key={portfolio.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={portfolio.imageUrl}
                    alt={`${portfolio.title} Thumbnail`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {portfolio.title}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {portfolio.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <button className="text-blue-500 hover:underline">
                        Edit
                      </button>
                      <button className="text-red-500 hover:underline">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard; 