
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Пожалуйста, укажите ФИО";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Пожалуйста, укажите номер телефона";
    } else if (!/^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(formData.phone)) {
      newErrors.phone = "Укажите корректный номер телефона";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Пожалуйста, укажите email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Укажите корректный email";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Имитация отправки формы
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Регистрация успешна!",
          description: "Мы отправили подтверждение на ваш email.",
        });
        
        // Сброс формы
        setFormData({
          fullName: "",
          phone: "",
          email: "",
        });
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-2">
        <Label htmlFor="fullName">ФИО</Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Иванов Иван Иванович"
        />
        {errors.fullName && (
          <p className="text-sm text-red-500">{errors.fullName}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Номер телефона</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+7 (999) 123-45-67"
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Электронная почта</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@mail.ru"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email}</p>
        )}
      </div>
      
      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full bg-[#FFC700] text-black hover:bg-[#FFC700]/80"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Зарегистрироваться"}
        </Button>
      </div>
      
      <p className="text-sm text-gray-500 text-center">
        Регистрируясь, вы соглашаетесь с правилами обработки персональных данных
      </p>
    </form>
  );
};
