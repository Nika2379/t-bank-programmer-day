
import { TimelineEvent } from "@/components/TimelineEvent";

export const EventSchedule = () => {
  const scheduleEvents = [
    {
      time: "12:00",
      title: "Начало регистрации участников",
      description: "Приветственный кофе, выдача бейджей и материалов"
    },
    {
      time: "12:30",
      title: "Мастер-класс по программированию",
      description: "Практическое занятие от специалистов Т-Банка"
    },
    {
      time: "12:40",
      title: "Первая лекция",
      description: "Лекция от ведущего работника Т-Банка"
    },
    {
      time: "13:00",
      title: "Мастер-класс по работе банкомата",
      description: "Знакомство с технологиями работы банкоматов"
    },
    {
      time: "13:30",
      title: "Вторая лекция",
      description: "Лекция от специалиста IT-сферы Т-Банка"
    },
    {
      time: "14:00",
      title: "Мастер-класс по работе с программой Т-Банка",
      description: "Практическое занятие по банковскому ПО"
    },
    {
      time: "15:00",
      title: "Сбор в холле",
      description: "Речь от главного программиста Т-Банка и обзорная экскурсия по офису"
    },
    {
      time: "16:00",
      title: "Завершение мероприятия",
      description: "Подведение итогов, нетворкинг"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Программа мероприятия</h2>
          
          <div className="space-y-4">
            {scheduleEvents.map((event, index) => (
              <TimelineEvent 
                key={index}
                time={event.time} 
                title={event.title} 
                description={event.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
