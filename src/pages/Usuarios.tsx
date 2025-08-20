import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Usuarios() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Usuários</h1>
          <p className="text-muted-foreground">Gerencie os usuários da biblioteca</p>
        </div>
        <Button className="bg-sigeb-primary hover:bg-sigeb-primary-dark">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Usuário
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar usuários..." className="pl-10" />
        </div>
        <Button variant="outline">Filtros</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="border-l-4 border-l-sigeb-primary">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">6</p>
              <p className="text-sm text-muted-foreground">Usuários Ativos</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-sigeb-accent">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">4</p>
              <p className="text-sm text-muted-foreground">Usuários Cadastrados</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-sigeb-info">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">2</p>
              <p className="text-sm text-muted-foreground">Administradores</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Lista de Usuários</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-16">
            <Users className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-2">Gerenciamento de Usuários</h3>
            <p className="text-muted-foreground mb-6">
              Esta seção mostrará a lista completa de usuários registrados no sistema
            </p>
            <Button className="bg-sigeb-primary hover:bg-sigeb-primary-dark">
              Ver Todos os Usuários
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}