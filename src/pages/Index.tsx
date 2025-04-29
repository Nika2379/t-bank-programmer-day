
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { RegistrationForm } from "@/components/RegistrationForm";
import { TeamMember } from "@/components/TeamMember";
import { TimelineEvent } from "@/components/TimelineEvent";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleScrollToRegistration = () => {
    setShowRegistration(true);
    setTimeout(() => {
      document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Герой секция */}
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
              onClick={handleScrollToRegistration}
              size="lg"
              className="bg-black text-white hover:bg-black/80"
            >
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>

      {/* О мероприятии */}
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

      {/* Программа мероприятия */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Программа мероприятия</h2>
            
            <div className="space-y-4">
              <TimelineEvent 
                time="12:00" 
                title="Начало регистрации участников" 
                description="Приветственный кофе, выдача бейджей и материалов"
              />
              
              <TimelineEvent 
                time="12:30" 
                title="Мастер-класс по программированию" 
                description="Практическое занятие от специалистов Т-Банка"
              />
              
              <TimelineEvent 
                time="12:40" 
                title="Первая лекция" 
                description="Лекция от ведущего работника Т-Банка"
              />
              
              <TimelineEvent 
                time="13:00" 
                title="Мастер-класс по работе банкомата" 
                description="Знакомство с технологиями работы банкоматов"
              />
              
              <TimelineEvent 
                time="13:30" 
                title="Вторая лекция" 
                description="Лекция от специалиста IT-сферы Т-Банка"
              />
              
              <TimelineEvent 
                time="14:00" 
                title="Мастер-класс по работе с программой Т-Банка" 
                description="Практическое занятие по банковскому ПО"
              />
              
              <TimelineEvent 
                time="15:00" 
                title="Сбор в холле" 
                description="Речь от главного программиста Т-Банка и обзорная экскурсия по офису"
              />
              
              <TimelineEvent 
                time="16:00" 
                title="Завершение мероприятия" 
                description="Подведение итогов, нетворкинг"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Команда */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Наша команда</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TeamMember 
              name="Абашин Никита" 
              role="Техническое обеспечение" 
              imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop"
            />
            
            <TeamMember 
              name="Чурикова Вероника" 
              role="Дизайн" 
              imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
            />
            
            <TeamMember 
              name="Алханов Устархан" 
              role="Медиа-контент" 
              imageUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop"
            />
            
            <TeamMember 
              name="Мячина Александра" 
              role="Организация" 
              imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
            />
            
            <TeamMember 
              name="Бекренёв Антон" 
              role="SMM и сайт" 
              imageUrl="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&h=200&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>

      {/* Техническое оснащение */}
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

      {/* Оформление */}
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

      {/* Место проведения */}
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

      {/* Регистрация */}
      <div id="registration" className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Регистрация на мероприятие</h2>
          
          {showRegistration && <RegistrationForm />}
          
          {!showRegistration && (
            <div className="text-center">
              <Button 
                onClick={() => setShowRegistration(true)}
                size="lg"
                className="bg-[#FFC700] text-black hover:bg-[#FFC700]/80"
              >
                Зарегистрироваться
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Футер */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Т-Банк</h3>
                <p className="text-gray-400">День программиста 2025</p>
              </div>
              
              <div className="flex gap-4">
                <Button variant="ghost" className="text-white hover:text-[#FFC700] hover:bg-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </Button>
                
                <Button variant="ghost" className="text-white hover:text-[#FFC700] hover:bg-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </Button>
                
                <Button variant="ghost" className="text-white hover:text-[#FFC700] hover:bg-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Button>
              </div>
            </div>
            
            <Separator className="my-6 bg-gray-800" />
            
            <div className="text-center text-gray-400 text-sm">
              <p>© 2025 Т-Банк. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
