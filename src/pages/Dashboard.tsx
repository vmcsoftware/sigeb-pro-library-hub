import { DashboardCard } from "@/components/DashboardCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  AlertCircle,
  TrendingUp,
  Award,
  PieChart,
  BarChart3
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total de Livros",
      value: "337",
      icon: BookOpen,
      gradient: "bg-gradient-to-br from-sigeb-primary to-sigeb-accent"
    },
    {
      title: "Usuários Ativos",
      value: "6",
      subtitle: "Usuários: 4",
      icon: Users,
      gradient: "bg-gradient-to-br from-sigeb-info to-blue-500"
    },
    {
      title: "Empréstimos Ativos",
      value: "0",
      icon: Calendar,
      gradient: "bg-gradient-to-br from-sigeb-success to-green-500"
    },
    {
      title: "Atrasos",
      value: "0",
      icon: AlertCircle,
      gradient: "bg-gradient-to-br from-sigeb-warning to-orange-500"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Bem-vindo ao SIGEB Pro</h1>
        <p className="text-muted-foreground">Sistema de Gestão de Biblioteca</p>
        <p className="text-sigeb-primary font-medium">Escola Estadual Bias Forte</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <DashboardCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            gradient={stat.gradient}
          />
        ))}
      </div>

      {/* Rankings and Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ranking de Leitores */}
        <Card className="border-l-4 border-l-sigeb-primary">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-sigeb-primary" />
              <CardTitle className="text-lg">Ranking de Leitores</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Clique para acessar</p>
              <Button variant="outline" className="mt-4" size="sm">
                Ver Ranking
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Ranking de Livros */}
        <Card className="border-l-4 border-l-sigeb-accent">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-sigeb-accent" />
              <CardTitle className="text-lg">Ranking de Livros</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Clique para acessar</p>
              <Button variant="outline" className="mt-4" size="sm">
                Ver Ranking
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status dos Empréstimos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="h-5 w-5" />
              <span>Status dos Empréstimos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <PieChart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">Nenhum empréstimo ativo no momento</p>
              <div className="flex justify-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-sigeb-success rounded-full"></div>
                  <span>Em dia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-sigeb-warning rounded-full"></div>
                  <span>Atrasados</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Livros por Gênero */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Livros por Gênero</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">Distribuição dos 337 livros por gênero</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Ficção</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-1/2 h-full bg-sigeb-primary rounded-full"></div>
                    </div>
                    <span>150</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Técnico</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-1/3 h-full bg-sigeb-accent rounded-full"></div>
                    </div>
                    <span>100</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Educação</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-1/4 h-full bg-sigeb-info rounded-full"></div>
                    </div>
                    <span>87</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}