import React from 'react';
import { Segment, Sidebar, Menu, Icon, Header, Accordion, Grid, List } from 'semantic-ui-react';

class AppMenu extends React.Component {
    constructor() {
        super();
        this.panels = (content) => {
            var key = 0;
            var contentKey = 0;

            return content.map(function (item) {
                <div key={++key}>
                    <Accordion.Title key={++key}>
                        <Icon name='dropdown' />
                        {item.title}
                    </Accordion.Title>
                    {item.content.map(function (subItem) {
                        return (
                            <Accordion.Title key={++key}>
                                <p>{subItem}</p>
                            </Accordion.Title>
                        );
                    })}
                </div>
            });
        }
    }

    render() {
        return (
            <Accordion fluid >
                <Accordion.Title>
                    <Icon circular name="dropdown" />
                    Cadastro
                </Accordion.Title>
                <Accordion.Content>
                    <List celled>
                        <List.Item as='a' >Empresa</List.Item>
                        <List.Item as='a'>Parceiro de Negócios</List.Item>
                        <List.Item as='a'>Grupo do Parceiro de Negócios</List.Item>
                        <List.Item as='a'>Subgrupo do Parceiro de Negócios</List.Item>
                        <List.Item as='a'>Centro de Custo</List.Item>
                        <List.Item as='a'>Forma de Pagamento</List.Item>
                        <List.Item as='a'>Prazo de Pagamento</List.Item>
                        <List.Item as='a'>Tipo de Documento</List.Item>
                        <List.Item as='a'>Município</List.Item>
                        <List.Item as='a'>Setor</List.Item>
                    </List>
                </Accordion.Content>
                <Accordion.Title>
                    <Icon circular name="dropdown" />
                    Materiais
                </Accordion.Title>
                <Accordion.Content>
                    <List celled>
                        <List.Item as='a'>Estoque</List.Item>
                        <List.Item as='a'>Entrada de Material</List.Item>
                        <List.Item as='a'>Saída de Material</List.Item>
                        <List.Item as='a'>Grupo</List.Item>
                        <List.Item as='a'>Subgrupo</List.Item>
                        <List.Item as='a'>Localização</List.Item>
                        <List.Item as='a'>Recipiente</List.Item>
                    </List>
                </Accordion.Content>
                <Accordion.Title>
                    <Icon circular name="dropdown" />
                    Financeiro
                </Accordion.Title>
                <Accordion.Content>
                    <List celled>
                        <List.Item as='a'>Conta a Pagar</List.Item>
                        <List.Item as='a'>Baixa em Bloco - Contas a Pagar</List.Item>
                        <List.Item as='a'>Conta a Receber</List.Item>
                        <List.Item as='a'>Baixa em Bloco - Contas a Receber</List.Item>
                        <List.Item as='a'>Plano de Contas</List.Item>
                        <List.Item as='a'>Banco</List.Item>
                        <List.Item as='a'>Conta Bancária</List.Item>
                        <List.Item as='a'>Transferência entre Contas</List.Item>
                        <List.Item as='a'>Movimento Financeiro</List.Item>
                    </List>
                </Accordion.Content>
                <Accordion.Title>
                    <Icon circular name="dropdown" />
                    Exame
                </Accordion.Title>
                <Accordion.Content>
                    <List celled>
                        <List.Item as='a'>Exame</List.Item>
                        <List.Item as='a'>Materiais por exame</List.Item>
                        <List.Item as='a'>Importar XML</List.Item>
                    </List>
                </Accordion.Content>
                <Accordion.Title>
                    <Icon circular name="dropdown" />
                    Esmeralda Visual
                </Accordion.Title>
                <Accordion.Content>
                    <List celled>
                        <List.Item as='a'>Movimento Financeiro</List.Item>
                        <List.Item as='a'>Conta a Receber</List.Item>
                    </List>
                </Accordion.Content>
                <Accordion.Title>
                    <Icon circular name="dropdown" />
                    Relatórios
                </Accordion.Title>
                <Accordion.Content>
                    <List celled>
                        <List.Item as='a'>Composição de Materiais</List.Item>
                        <List.Item as='a'>Listagem de materiais</List.Item>
                        <List.Item as='a'>Estoque Mínimo</List.Item>
                        <List.Item as='a'>Movimento de Material</List.Item>
                        <List.Item as='a'>Movimento de Material Sintético</List.Item>
                        <List.Item as='a'>Parcelas - Conta a Pagar</List.Item>
                        <List.Item as='a'>Parcelas - Conta a Receber</List.Item>
                        <List.Item as='a'>Tabela de Preços de Material</List.Item>
                        <List.Item as='a'>Relatório de Clientes</List.Item>
                        <List.Item as='a'>Listagem de Plano de Contas</List.Item>
                    </List>
                </Accordion.Content>
            </Accordion>
        );
    }
}

export default AppMenu;