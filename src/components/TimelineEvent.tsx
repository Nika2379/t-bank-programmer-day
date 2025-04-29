
interface TimelineEventProps {
  time: string;
  title: string;
  description: string;
}

export const TimelineEvent = ({ time, title, description }: TimelineEventProps) => {
  return (
    <div className="flex">
      <div className="w-20 flex-shrink-0 text-center font-bold text-[#FFC700]">
        {time}
      </div>
      
      <div className="relative pl-8 pb-8 border-l border-gray-300">
        <div className="absolute w-3 h-3 bg-[#FFC700] rounded-full -left-[6.5px] top-[6px]"></div>
        <div>
          <h3 className="font-bold mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};
