import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Database, 
  Palette,
  Clock,
  Mail,
  Save
} from "lucide-react";

export default function Configuracoes() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
          <p className="text-muted-foreground">Gerencie as configurações do sistema SIGEB Pro</p>
        </div>
        <Button className="bg-sigeb-primary hover:bg-sigeb-primary-dark">
          <Save className="h-4 w-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      <Tabs defaultValue="geral" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="geral">Geral</TabsTrigger>
          <TabsTrigger value="usuarios">Usuários</TabsTrigger>
          <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
          <TabsTrigger value="seguranca">Segurança</TabsTrigger>
          <TabsTrigger value="sistema">Sistema</TabsTrigger>
        </TabsList>

        <TabsContent value="geral" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Configurações Gerais</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome-biblioteca">Nome da Biblioteca</Label>
                <Input 
                  id="nome-biblioteca" 
                  placeholder="SIGEB Pro - Biblioteca Central" 
                  defaultValue="SIGEB Pro - Biblioteca Central"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endereco">Endereço</Label>
                <Input 
                  id="endereco" 
                  placeholder="Rua das Bibliotecas, 123" 
                  defaultValue="Rua das Bibliotecas, 123"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="(11) 9999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="contato@biblioteca.com" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Configurações de Empréstimo</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prazo-emprestimo">Prazo de Empréstimo (dias)</Label>
                    <Input id="prazo-emprestimo" type="number" defaultValue="15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-livros">Máximo de Livros por Usuário</Label>
                    <Input id="max-livros" type="number" defaultValue="3" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="multa-diaria">Multa por Dia de Atraso (R$)</Label>
                  <Input id="multa-diaria" type="number" step="0.01" defaultValue="2.00" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usuarios" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Configurações de Usuários</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Auto-aprovação de Cadastros</Label>
                  <p className="text-sm text-muted-foreground">
                    Permite que novos usuários sejam automaticamente aprovados
                  </p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Permitir Auto-cadastro</Label>
                  <p className="text-sm text-muted-foreground">
                    Usuários podem se cadastrar sem intervenção do administrador
                  </p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Validação por E-mail</Label>
                  <p className="text-sm text-muted-foreground">
                    Exigir verificação de e-mail para ativar conta
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Configurações de Notificações</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Lembrete de Devolução</Label>
                  <p className="text-sm text-muted-foreground">
                    Enviar notificação 3 dias antes do vencimento
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Notificação de Atraso</Label>
                  <p className="text-sm text-muted-foreground">
                    Alertar sobre livros em atraso diariamente
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Novos Livros Disponíveis</Label>
                  <p className="text-sm text-muted-foreground">
                    Notificar usuários sobre novos livros no acervo
                  </p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Configurações de E-mail
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="servidor-smtp">Servidor SMTP</Label>
                  <Input id="servidor-smtp" placeholder="smtp.gmail.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="porta-smtp">Porta SMTP</Label>
                    <Input id="porta-smtp" placeholder="587" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-remetente">E-mail Remetente</Label>
                    <Input id="email-remetente" type="email" placeholder="biblioteca@escola.com" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seguranca" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Configurações de Segurança</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Autenticação de Dois Fatores</Label>
                  <p className="text-sm text-muted-foreground">
                    Exigir segundo fator para administradores
                  </p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Log de Atividades</Label>
                  <p className="text-sm text-muted-foreground">
                    Registrar todas as ações dos usuários no sistema
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Política de Senhas</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="min-caracteres">Mínimo de Caracteres</Label>
                  <Input id="min-caracteres" type="number" defaultValue="8" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Exigir Caracteres Especiais</Label>
                    <p className="text-sm text-muted-foreground">
                      Senhas devem conter símbolos especiais
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sistema" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5" />
                <span>Configurações do Sistema</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Modo Manutenção</Label>
                  <p className="text-sm text-muted-foreground">
                    Desabilitar acesso de usuários temporariamente
                  </p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Personalização
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Tema Escuro</Label>
                    <p className="text-sm text-muted-foreground">
                      Ativar modo escuro por padrão
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Backup Automático
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Backup Diário</Label>
                    <p className="text-sm text-muted-foreground">
                      Realizar backup automático dos dados diariamente
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="horario-backup">Horário do Backup</Label>
                  <Input id="horario-backup" type="time" defaultValue="02:00" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}