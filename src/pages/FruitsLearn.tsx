import fruitsData from "../fruitsData"; // Importer les données des fruits
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FruitListPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 p-6 flex flex-col items-center">
        <div className="w-full max-w-7xl">
        <Link to="/">
            <button className="bg-kid-blue hover:bg-kid-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              Liste des Fruits
            </h1>
            <p className="text-gray-600">
              Découvrez tous les fruits avec leurs images !
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {fruitsData.length > 0 ? (
              fruitsData.map((fruit, index) => (
                <div
                  key={index}
                  className="p-4 border-2 border-gray-300 rounded-lg shadow-md bg-white hover:border-blue-500 transition-colors duration-200"
                >
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="w-full h-40 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {fruit.name || "Fruit sans nom"}
                  </h3>
                </div>
              ))
            ) : (
              <p>Chargement des fruits...</p>
            )}
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-gray-500 bg-white">
        <p>AI Fruit Explorer - Apprends avec les fruits !</p>
      </footer>
    </div>
  );
};

export default FruitListPage;
