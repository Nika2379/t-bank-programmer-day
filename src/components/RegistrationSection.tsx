
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RegistrationForm } from "@/components/RegistrationForm";

interface RegistrationSectionProps {
  showRegistration: boolean;
  onShowRegistration: () => void;
}

export const RegistrationSection = ({ 
  showRegistration, 
  onShowRegistration 
}: RegistrationSectionProps) => {
  return (
    <div id="registration" className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Регистрация на мероприятие</h2>
        
        {showRegistration && <RegistrationForm />}
        
        {!showRegistration && (
          <div className="text-center">
            <Button 
              onClick={onShowRegistration}
              size="lg"
              className="bg-[#FFC700] text-black hover:bg-[#FFC700]/80"
            >
              Зарегистрироваться
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
