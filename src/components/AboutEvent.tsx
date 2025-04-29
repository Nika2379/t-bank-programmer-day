
export const AboutEvent = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">О мероприятии</h2>
        <p className="text-lg mb-6">
          Т-Банк приглашает студентов и молодых специалистов на День открытых дверей, 
          где вы сможете познакомиться с профессией программиста и узнать о проектах, 
          разрабатываемых в нашей компании.
        </p>
        <p className="text-lg mb-6">
          Вас ждут интересные лекции, мастер-классы по программированию, знакомство 
          с работой банковских систем и экскурсия по офису.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Что вас ждёт:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Мастер-классы по программированию</li>
            <li>Лекции от ведущих специалистов Т-Банка</li>
            <li>Практические занятия по работе с банкоматами</li>
            <li>Экскурсия по офису</li>
            <li>Знакомство с IT-инфраструктурой банка</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
