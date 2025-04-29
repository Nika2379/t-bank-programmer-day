
export const TechnicalEquipment = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Техническое оснащение</h2>
          <p className="text-lg mb-6">
            Мероприятие полностью оборудовано всем необходимым для комфортной работы:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Оборудование:</h3>
              <ul className="space-y-2">
                <li>• Стулья — 225 шт.</li>
                <li>• Столы — 150 шт.</li>
                <li>• Ноутбуки — 100 шт.</li>
                <li>• Проекторы — 2 шт.</li>
                <li>• Микрофоны — 3 шт.</li>
                <li>• Колонки — 4 шт.</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Дополнительно:</h3>
              <ul className="space-y-2">
                <li>• Тумбы для выступлений — 2 шт.</li>
                <li>• Ручки от Т-Банка — 300 шт.</li>
                <li>• Блокноты с логотипом — 300 шт.</li>
                <li>• Пластиковые загородки — 4 шт.</li>
                <li>• Макеты новых банкоматов — 4 шт.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
