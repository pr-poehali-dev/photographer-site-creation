import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight text-black font-serif">anna.s.photographer</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">О себе</a>
              <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Портфолио</a>
              <a href="#schedule" className="text-gray-600 hover:text-black transition-colors">Расписание</a>
              <a href="#booking" className="text-gray-600 hover:text-black transition-colors">Записаться</a>
              <a href="#contacts" className="text-gray-600 hover:text-black transition-colors">Контакты</a>
            </div>
            <div className="md:hidden">
              <Icon name="Menu" size={24} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl font-light mb-6 tracking-tight font-serif">
                Частичка жизни<br/>
                <span className="font-bold">в фотографии</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Создаю естественные и эмоциональные кадры: портреты, студийная съёмка, 
                мобильные фотосессии, девичники и семейные моменты. 
                Каждый кадр — это история, рассказанная через объектив.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-black hover:bg-gray-800">
                  Посмотреть работы
                </Button>
                <Button variant="outline" size="lg">
                  Записаться
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/img/85dd00e9-f84d-4d33-8f8b-b98a92578531.jpg" 
                  alt="Portrait Photography Example" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gray-200 rounded-full overflow-hidden">
              <img 
                src="/img/0dcd97c5-78fa-4d6e-8cf9-f020a18c1450.jpg" 
                alt="Photographer Anna" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-light mb-6 font-serif">О себе</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Меня зовут Анна, и я профессиональный фотограф с 5-летним опытом. 
                Специализируюсь на портретной и студийной съёмке, мобильных фотосессиях, 
                фото-девичниках и семейных моментах.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Работаю в студии с профессиональным оборудованием, выезжаю на локации, 
                создаю атмосферные кадры для особых событий и семейных праздников.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Портретная фотография</Badge>
                <Badge variant="secondary">Студийная съёмка</Badge>
                <Badge variant="secondary">Мобильная съёмка</Badge>
                <Badge variant="secondary">Фото-девичник</Badge>
                <Badge variant="secondary">Семейная съёмка</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-light text-center mb-12 font-serif">Портфолио</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon name="Image" size={32} className="text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Посмотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl font-light text-center mb-12">Расписание и услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="User" size={24} />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Портретная съёмка</h4>
                  <p className="text-gray-600 mb-4">
                    Индивидуальные портреты в студии или на локации
                  </p>
                  <p className="text-2xl font-bold">от 4000 ₽</p>
                  <p className="text-sm text-gray-500">60 минут / 15 обработанных фото</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Camera" size={24} />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Студийная съёмка</h4>
                  <p className="text-gray-600 mb-4">
                    Профессиональная съёмка в студии с контролируемым освещением
                  </p>
                  <p className="text-2xl font-bold">от 5000 ₽</p>
                  <p className="text-sm text-gray-500">60 минут / 20 обработанных фото</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Car" size={24} />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Мобильная съёмка</h4>
                  <p className="text-gray-600 mb-4">
                    Выездная съёмка в любом месте города
                  </p>
                  <p className="text-2xl font-bold">от 6000 ₽</p>
                  <p className="text-sm text-gray-500">90 минут / 25 обработанных фото</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Users" size={24} />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Фото-девичник</h4>
                  <p className="text-gray-600 mb-4">
                    Атмосферная съёмка для компании подруг
                  </p>
                  <p className="text-2xl font-bold">от 8000 ₽</p>
                  <p className="text-sm text-gray-500">120 минут / 40 обработанных фото</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Heart" size={24} />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Семейная съёмка</h4>
                  <p className="text-gray-600 mb-4">
                    Тёплые кадры для всей семьи
                  </p>
                  <p className="text-2xl font-bold">от 7000 ₽</p>
                  <p className="text-sm text-gray-500">90 минут / 30 обработанных фото</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg">
            <h4 className="text-xl font-semibold mb-4">График работы</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-medium">Понедельник - Пятница</p>
                <p className="text-gray-600">10:00 - 19:00</p>
              </div>
              <div>
                <p className="font-medium">Суббота</p>
                <p className="text-gray-600">11:00 - 18:00</p>
              </div>
              <div>
                <p className="font-medium">Воскресенье</p>
                <p className="text-gray-600">12:00 - 16:00</p>
              </div>
              <div>
                <p className="font-medium">Выезд</p>
                <p className="text-gray-600">По договорённости</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-4xl font-light text-center mb-12">Записаться на фотосессию</h3>
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Тип съёмки</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Выберите тип съёмки</option>
                  <option>Портретная съёмка</option>
                  <option>Студийная съёмка</option>
                  <option>Мобильная съёмка</option>
                  <option>Фото-девичник</option>
                  <option>Семейная съёмка</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Желаемая дата</label>
                <Input type="date" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Комментарий</label>
                <Textarea placeholder="Расскажите о ваших пожеланиях к съёмке" rows={4} />
              </div>
              <Button className="w-full bg-black hover:bg-gray-800" size="lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Contacts & Payment Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-light text-center mb-12">Контакты и оплата</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h4 className="text-2xl font-semibold mb-6">Контакты</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={20} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={20} />
                  <span>photo@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={20} />
                  <span>Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Instagram" size={20} />
                  <span>@photographer_anna</span>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <h5 className="font-semibold mb-3">Студия</h5>
                <p className="text-gray-600 text-sm">
                  Профессиональная фотостудия с современным оборудованием 
                  и различными фонами для создания идеальных портретов.
                </p>
              </div>
            </Card>
            
            <Card className="p-8">
              <h4 className="text-2xl font-semibold mb-6">Оплата</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="CreditCard" size={20} />
                  <span>Банковская карта</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Wallet" size={20} />
                  <span>Наличные</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Smartphone" size={20} />
                  <span>СБП (Система быстрых платежей)</span>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <h5 className="font-semibold mb-3">Условия оплаты</h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Предоплата 50% при бронировании</li>
                  <li>• Остальная сумма в день съёмки</li>
                  <li>• Обработанные фото в течение 7 дней</li>
                  <li>• Возможна рассрочка для больших заказов</li>
                </ul>
              </div>
              <Button className="w-full mt-6 bg-black hover:bg-gray-800">
                Оплатить онлайн
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">© 2024 Photographer. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;