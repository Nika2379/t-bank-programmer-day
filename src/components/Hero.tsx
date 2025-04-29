
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero = ({ onRegisterClick }: HeroProps) => {
  return (
    <div className="bg-[#FFC700] text-black">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">День программиста</h1>
            <p className="text-xl md:text-2xl">День открытых дверей в Т-Банке</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-3xl">
            <div className="bg-white/90 p-4 rounded-lg flex items-center">
              <Calendar className="mr-3 h-5 w-5" />
              <div>
                <p className="font-medium">1 мая 2025</p>
                <p className="text-sm text-gray-600">Дата</p>
              </div>
            </div>
            <div className="bg-white/90 p-4 rounded-lg flex items-center">
              <Clock className="mr-3 h-5 w-5" />
              <div>
                <p className="font-medium">12:00 - 16:00</p>
                <p className="text-sm text-gray-600">Время</p>
              </div>
            </div>
            <div className="bg-white/90 p-4 rounded-lg flex items-center">
              <MapPin className="mr-3 h-5 w-5" />
              <div>
                <p className="font-medium">AFI Square</p>
                <p className="text-sm text-gray-600">м. Белорусская</p>
              </div>
            </div>
          </div>
          <Button
            onClick={onRegisterClick}
            size="lg"
            className="bg-black text-white hover:bg-black/80"
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </div>
  );
};
