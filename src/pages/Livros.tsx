import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Livros() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Livros</h1>
          <p className="text-muted-foreground">Gerencie o acervo da biblioteca</p>
        </div>
        <Button className="bg-sigeb-primary hover:bg-sigeb-primary-dark">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Livro
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar livros..." className="pl-10" />
        </div>
        <Button variant="outline">Filtros</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5" />
            <span>Acervo da Biblioteca</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-16">
            <BookOpen className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-2">337 livros cadastrados</h3>
            <p className="text-muted-foreground mb-6">
              Esta seção mostrará a lista completa de livros da biblioteca
            </p>
            <Button className="bg-sigeb-primary hover:bg-sigeb-primary-dark">
              Visualizar Catálogo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}