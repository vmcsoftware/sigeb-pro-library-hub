import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Calendar, Download, FileText, TrendingUp, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Relatorios() {
  const relatoriosEstatisticas = [
    {
      title: "Empréstimos este mês",
      value: "142",
      icon: BarChart3,
      color: "border-l-sigeb-primary",
      trend: "+12%"
    },
    {
      title: "Livros mais emprestados",
      value: "25",
      icon: TrendingUp,
      color: "border-l-sigeb-accent",
      trend: "+8%"
    },
    {
      title: "Usuários ativos",
      value: "89",
      icon: Users,
      color: "border-l-sigeb-info",
      trend: "+15%"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Relatórios</h1>
          <p className="text-muted-foreground">Acompanhe as estatísticas e métricas da biblioteca</p>
        </div>
        <Button className="bg-sigeb-primary hover:bg-sigeb-primary-dark">
          <Download className="h-4 w-4 mr-2" />
          Exportar Relatório
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatoriosEstatisticas.map((stat, index) => (
          <Card key={index} className={`border-l-4 ${stat.color}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-xs text-sigeb-primary font-medium mt-1">{stat.trend}</p>
                </div>
                <stat.icon className="h-8 w-8 text-sigeb-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="emprestimos" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="emprestimos">Empréstimos</TabsTrigger>
          <TabsTrigger value="livros">Livros</TabsTrigger>
          <TabsTrigger value="usuarios">Usuários</TabsTrigger>
          <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
        </TabsList>
        
        <TabsContent value="emprestimos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Relatório de Empréstimos</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16">
                <BarChart3 className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-2">Empréstimos Mensais</h3>
                <p className="text-muted-foreground mb-6">
                  Visualize dados detalhados sobre empréstimos, devoluções e atrasos
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="bg-sigeb-primary hover:bg-sigeb-primary-dark">
                    Gerar Relatório
                  </Button>
                  <Button variant="outline">
                    Ver Histórico
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="livros" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Relatório de Acervo</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16">
                <FileText className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-2">Análise do Acervo</h3>
                <p className="text-muted-foreground mb-6">
                  Estatísticas sobre disponibilidade, categorias e popularidade dos livros
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="bg-sigeb-primary hover:bg-sigeb-primary-dark">
                    Gerar Relatório
                  </Button>
                  <Button variant="outline">
                    Exportar CSV
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usuarios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Relatório de Usuários</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16">
                <Users className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-2">Atividade dos Usuários</h3>
                <p className="text-muted-foreground mb-6">
                  Acompanhe o engajamento e atividade dos usuários cadastrados
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="bg-sigeb-primary hover:bg-sigeb-primary-dark">
                    Gerar Relatório
                  </Button>
                  <Button variant="outline">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financeiro" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Relatório Financeiro</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16">
                <TrendingUp className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-2">Multas e Taxas</h3>
                <p className="text-muted-foreground mb-6">
                  Controle de multas por atraso e outras taxas da biblioteca
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="bg-sigeb-primary hover:bg-sigeb-primary-dark">
                    Gerar Relatório
                  </Button>
                  <Button variant="outline">
                    Exportar Dados
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}