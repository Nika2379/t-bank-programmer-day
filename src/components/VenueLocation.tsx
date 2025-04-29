
import { MapPin } from "lucide-react";

export const VenueLocation = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Место проведения</h2>
          
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 mr-3 text-[#FFC700]" />
              <div>
                <h3 className="text-xl font-bold">Бизнес-центр AFI Square</h3>
                <p>м. Белорусская, Москва</p>
              </div>
            </div>
            
            <div className="h-64 bg-gray-700 rounded-lg mb-4">
              {/* Здесь может быть iframe с картой */}
              <div className="h-full flex items-center justify-center">
                <p className="text-center">Карта местоположения</p>
              </div>
            </div>
            
            <p className="text-gray-300">
              Удобное расположение в центре города, рядом с метро. 
              На территории есть парковка и вся необходимая инфраструктура.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
