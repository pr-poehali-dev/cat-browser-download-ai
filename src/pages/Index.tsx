import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      icon: "Sparkles",
      title: "AI Помощник",
      description: "Встроенный интеллект для поиска и анализа информации в реальном времени"
    },
    {
      icon: "Zap",
      title: "Молниеносная скорость",
      description: "Оптимизированный движок для мгновенной загрузки страниц"
    },
    {
      icon: "Shield",
      title: "Максимальная безопасность",
      description: "Продвинутая защита данных и приватности пользователей"
    },
    {
      icon: "Palette",
      title: "Настраиваемый интерфейс",
      description: "Персонализация внешнего вида под ваши предпочтения"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="relative z-10">
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center animate-glow">
              <span className="text-2xl">🐱</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Cat Browser</span>
          </div>
          
          <Button variant="outline" className="glass-effect border-primary/50 hover:bg-primary/20">
            <Icon name="Github" size={20} className="mr-2" />
            GitHub
          </Button>
        </nav>

        <section className="container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full glass-effect border border-primary/30 text-sm font-medium mb-6 inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Новая эра браузеров
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Браузер с встроенным
              <span className="block gradient-text mt-2">искусственным интеллектом</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Cat Browser — это следующее поколение веб-браузеров. Интеллектуальный поиск, мгновенный анализ и непревзойденная скорость работы.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all animate-glow group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Icon name="Download" size={24} className="mr-2 group-hover:animate-bounce" />
                Скачать Cat Browser
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 glass-effect border-primary/50 hover:bg-primary/10"
              >
                <Icon name="Play" size={24} className="mr-2" />
                Смотреть демо
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span>Windows, Mac, Linux</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span>Бесплатно навсегда</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-primary" />
                <span>Open Source</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Революционные возможности
              </h2>
              <p className="text-xl text-muted-foreground">
                Технологии будущего уже сегодня
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="p-8 glass-effect border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:animate-float">
                    <Icon name={feature.icon as any} size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 gradient-text">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <Card className="max-w-5xl mx-auto p-12 glass-effect border-primary/30 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                  AI ТЕХНОЛОГИЯ
                </div>
                
                <h2 className="text-4xl font-bold">
                  Ваш личный
                  <span className="gradient-text block mt-2">AI ассистент</span>
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Встроенный искусственный интеллект помогает находить информацию мгновенно, анализирует контент страниц и отвечает на ваши вопросы прямо в браузере.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Умный поиск</p>
                      <p className="text-sm text-muted-foreground">Находит точные ответы, а не просто ссылки</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Анализ контента</p>
                      <p className="text-sm text-muted-foreground">Суммирует статьи и выделяет главное</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Приватность</p>
                      <p className="text-sm text-muted-foreground">Все обработки локально, без отправки данных</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 glass-effect animate-float">
                  <div className="w-full h-full rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center animate-glow">
                        <Icon name="Brain" size={40} className="text-white" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold gradient-text">AI Ассистент активен</p>
                        <p className="text-xs text-muted-foreground px-8">
                          Готов помочь с поиском и анализом информации
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Готовы к новым возможностям?
            </h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к тысячам пользователей, которые уже используют Cat Browser
            </p>
            
            <div className="pt-8">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all animate-glow"
              >
                <Icon name="Download" size={28} className="mr-3" />
                Скачать бесплатно
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              Доступно для Windows 10+, macOS 11+, Linux
            </p>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-12 border-t border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-xl">🐱</span>
                </div>
                <span className="font-bold">Cat Browser</span>
              </div>

              <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">О проекте</a>
                <a href="#" className="hover:text-primary transition-colors">Документация</a>
                <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
                <a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a>
              </div>

              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                  <Icon name="Github" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t border-border/30">
              © 2024 Cat Browser. Все права защищены.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
