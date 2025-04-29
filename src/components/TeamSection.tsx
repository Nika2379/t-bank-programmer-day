
import { TeamMember } from "@/components/TeamMember";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Абашин Никита",
      role: "Техническое обеспечение",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Чурикова Вероника",
      role: "Дизайн",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Алханов Устархан",
      role: "Медиа-контент",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Мячина Александра",
      role: "Организация",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Бекренёв Антон",
      role: "SMM и сайт",
      imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Наша команда</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name} 
              role={member.role} 
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
