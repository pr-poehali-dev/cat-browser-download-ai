import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Building2",
      title: "Настоящие дороги и здания",
      description: "Реалистичная карта Краснодара с детальными моделями по всему городу",
      emoji: "🏢"
    },
    {
      icon: "Trophy",
      title: "Легко достижимые фракции",
      description: "Присоединяйся к различным группировкам и развивайся в игре",
      emoji: "🥇"
    },
    {
      icon: "Shield",
      title: "Хорошая администрация",
      description: "Профессиональная команда модераторов следит за порядком",
      emoji: "💎"
    },
    {
      icon: "Users",
      title: "Активное сообщество",
      description: "Много игроков онлайн — заводи новых друзей каждый день",
      emoji: "🥳"
    },
    {
      icon: "Gamepad2",
      title: "Мероприятия от создателей",
      description: "Регулярные ивенты и конкурсы от администрации проекта",
      emoji: "🎮"
    },
    {
      icon: "Car",
      title: "Качественные модели",
      description: "Детализированные машины, здания и дороги высокого качества",
      emoji: "🏗"
    },
    {
      icon: "Sparkles",
      title: "Отличная графика",
      description: "Современная визуальная составляющая для максимального погружения",
      emoji: "🌆"
    }
  ];

  const screenshots = [
    {
      url: "https://cdn.poehali.dev/files/RobloxScreenShot20251201_110653239.png",
      title: "Зимний Краснодар"
    },
    {
      url: "https://cdn.poehali.dev/files/RobloxScreenShot20251201_110834441.png",
      title: "Городские улицы"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="relative z-10">
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-card/30 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🎮</div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Краснодар РП</h1>
              <p className="text-xs text-muted-foreground">Roblox Roleplay</p>
            </div>
          </div>
          
          <Button 
            className="bg-gradient-to-r from-primary to-red-600 hover:opacity-90 transition-all font-bold animate-pulse-glow"
            size="lg"
            onClick={() => window.open('https://www.roblox.com/games/15870836574/unnamed', '_blank')}
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать играть
          </Button>
        </nav>

        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold border border-primary/30">
                🔥 Более 1000 игроков онлайн
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                Добро пожаловать в
                <span className="block gradient-text mt-2">Краснодар РП</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Погрузись в виртуальную жизнь Краснодара! Реалистичный ролевой сервер в Roblox с детальной картой города, множеством фракций и активным сообществом.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-red-600 hover:opacity-90 transition-all font-bold group animate-pulse-glow"
                  onClick={() => window.open('https://www.roblox.com/games/15870836574/unnamed', '_blank')}
                >
                  <Icon name="Rocket" size={24} className="mr-2 group-hover:animate-bounce" />
                  Начать играть сейчас
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 glass-effect border-secondary/50 hover:bg-secondary/10"
                >
                  <Icon name="Users" size={24} className="mr-2" />
                  Сообщество
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Онлайн 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-muted-foreground">Бесплатно</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span className="text-muted-foreground">На русском</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="aspect-video rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-300">
                <img 
                  src={screenshots[0].url} 
                  alt="Краснодар РП скриншот"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20 blur-3xl animate-pulse"></div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Особенности сервера
              </h2>
              <p className="text-xl text-muted-foreground">
                Почему тысячи игроков выбирают именно нас
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="p-6 game-card hover:scale-105 group animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {feature.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Скриншоты игры
              </h2>
              <p className="text-xl text-muted-foreground">
                Взгляни на наш детализированный город
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {screenshots.map((screenshot, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={screenshot.url} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6">
                      <p className="text-xl font-bold">{screenshot.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <Card className="max-w-4xl mx-auto p-12 md:p-16 text-center glass-effect border-primary/30 animate-fade-in">
            <div className="space-y-8">
              <div className="inline-block text-6xl mb-4 animate-bounce">
                🎮
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                Готов начать приключение?
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Присоединяйся к огромному сообществу Краснодар РП прямо сейчас и начни строить свою карьеру в виртуальном городе!
              </p>

              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-red-600 hover:opacity-90 transition-all font-bold animate-pulse-glow"
                onClick={() => window.open('https://www.roblox.com/games/15870836574/unnamed', '_blank')}
              >
                <Icon name="Play" size={28} className="mr-3" />
                Играть бесплатно
              </Button>

              <p className="text-sm text-muted-foreground pt-2">
                Требуется Roblox • Полностью бесплатно • Доступно на ПК и мобильных
              </p>

              <div className="flex justify-center gap-8 pt-8 flex-wrap">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">1000+</div>
                  <div className="text-sm text-muted-foreground">Игроков онлайн</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-muted-foreground">Работа сервера</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-muted-foreground">Фракций</div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <footer className="container mx-auto px-6 py-12 border-t border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🎮</div>
                <div>
                  <h3 className="font-bold">Краснодар РП</h3>
                  <p className="text-xs text-muted-foreground">Roblox Roleplay Server</p>
                </div>
              </div>

              <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Правила</a>
                <a href="#" className="hover:text-primary transition-colors">Discord</a>
                <a href="#" className="hover:text-primary transition-colors">VK Группа</a>
                <a href="#" className="hover:text-primary transition-colors">Донат</a>
              </div>

              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                  <Icon name="Users" size={20} />
                </Button>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground mt-8 pt-8 border-t border-border/30">
              © 2024 Краснодар РП. Создано игроками для игроков
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
