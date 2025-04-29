
export const SpaceDecoration = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Оформление пространства</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-bold mb-4">Тематика оформления:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Цветовая гамма:</h4>
              <div className="flex gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#FFC700]" title="Жёлтый"></div>
                <div className="h-10 w-10 rounded-full bg-black" title="Чёрный"></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Символика:</h4>
              <p>Бутка «Т»</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Стиль:</h4>
              <p>Вайбовый, Современный, Бомбовый</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
