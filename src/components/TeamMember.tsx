
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl?: string;
}

export const TeamMember = ({ name, role, imageUrl }: TeamMemberProps) => {
  // Получаем инициалы из имени для запасного варианта аватара
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
      <Avatar className="h-16 w-16 mr-4">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
      </Avatar>
      
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};
