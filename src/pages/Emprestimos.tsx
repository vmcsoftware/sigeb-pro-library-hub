import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Calendar, User, BookOpen, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";

export default function Emprestimos() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for loans
  const mockLoans = [
    {
      id: 1,
      bookTitle: "Dom Casmurro",
      userName: "Ana Silva",
      loanDate: "2024-01-15",
      dueDate: "2024-02-15",
      status: "active",
    },
    {
      id: 2,
      bookTitle: "O Cortiço",
      userName: "João Santos",
      loanDate: "2024-01-10",
      dueDate: "2024-02-10",
      status: "overdue",
    },
    {
      id: 3,
      bookTitle: "Iracema",
      userName: "Maria Costa",
      loanDate: "2024-01-20",
      dueDate: "2024-02-20",
      status: "returned",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">Ativo</Badge>;
      case "overdue":
        return <Badge className="bg-red-500/20 text-red-600 border-red-500/30">Atrasado</Badge>;
      case "returned":
        return <Badge className="bg-green-500/20 text-green-600 border-green-500/30">Devolvido</Badge>;
      default:
        return <Badge>Desconhecido</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Empréstimos</h1>
          <p className="text-muted-foreground">Gerencie os empréstimos de livros da biblioteca</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
          <Plus className="mr-2 h-4 w-4" />
          Novo Empréstimo
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Empréstimos Ativos"
          value="24"
          icon={BookOpen}
          gradient="bg-gradient-to-br from-blue-500 to-blue-600"
        />
        <DashboardCard
          title="Empréstimos Hoje"
          value="3"
          icon={Calendar}
          gradient="bg-gradient-to-br from-green-500 to-green-600"
        />
        <DashboardCard
          title="Atrasados"
          value="7"
          icon={AlertCircle}
          gradient="bg-gradient-to-br from-red-500 to-red-600"
        />
        <DashboardCard
          title="Devolvidos Hoje"
          value="5"
          icon={CheckCircle}
          gradient="bg-gradient-to-br from-purple-500 to-purple-600"
        />
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="active">Ativos</TabsTrigger>
          <TabsTrigger value="overdue">Atrasados</TabsTrigger>
          <TabsTrigger value="returned">Devolvidos</TabsTrigger>
          <TabsTrigger value="new">Novo</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Empréstimos Ativos
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar empréstimos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Livro</TableHead>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Data Empréstimo</TableHead>
                    <TableHead>Data Vencimento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockLoans
                    .filter(loan => loan.status === "active")
                    .map((loan) => (
                    <TableRow key={loan.id}>
                      <TableCell className="font-medium">{loan.bookTitle}</TableCell>
                      <TableCell>{loan.userName}</TableCell>
                      <TableCell>{new Date(loan.loanDate).toLocaleDateString('pt-BR')}</TableCell>
                      <TableCell>{new Date(loan.dueDate).toLocaleDateString('pt-BR')}</TableCell>
                      <TableCell>{getStatusBadge(loan.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            Renovar
                          </Button>
                          <Button variant="outline" size="sm">
                            Devolver
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overdue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Empréstimos Atrasados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Livro</TableHead>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Data Empréstimo</TableHead>
                    <TableHead>Data Vencimento</TableHead>
                    <TableHead>Dias Atraso</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockLoans
                    .filter(loan => loan.status === "overdue")
                    .map((loan) => {
                      const overdueDays = Math.floor((new Date().getTime() - new Date(loan.dueDate).getTime()) / (1000 * 60 * 60 * 24));
                      return (
                        <TableRow key={loan.id}>
                          <TableCell className="font-medium">{loan.bookTitle}</TableCell>
                          <TableCell>{loan.userName}</TableCell>
                          <TableCell>{new Date(loan.loanDate).toLocaleDateString('pt-BR')}</TableCell>
                          <TableCell>{new Date(loan.dueDate).toLocaleDateString('pt-BR')}</TableCell>
                          <TableCell className="text-red-600 font-medium">{overdueDays} dias</TableCell>
                          <TableCell>{getStatusBadge(loan.status)}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm">
                                Notificar
                              </Button>
                              <Button variant="outline" size="sm">
                                Devolver
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="returned" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Empréstimos Devolvidos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Livro</TableHead>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Data Empréstimo</TableHead>
                    <TableHead>Data Devolução</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockLoans
                    .filter(loan => loan.status === "returned")
                    .map((loan) => (
                    <TableRow key={loan.id}>
                      <TableCell className="font-medium">{loan.bookTitle}</TableCell>
                      <TableCell>{loan.userName}</TableCell>
                      <TableCell>{new Date(loan.loanDate).toLocaleDateString('pt-BR')}</TableCell>
                      <TableCell>{new Date(loan.dueDate).toLocaleDateString('pt-BR')}</TableCell>
                      <TableCell>{getStatusBadge(loan.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Novo Empréstimo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Usuário</label>
                  <Input placeholder="Selecionar usuário" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Livro</label>
                  <Input placeholder="Selecionar livro" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Data de Empréstimo</label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Data de Vencimento</label>
                  <Input type="date" />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancelar</Button>
                <Button className="bg-gradient-to-r from-primary to-primary/80">
                  Registrar Empréstimo
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}