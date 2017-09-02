var initialState = [
    { title: "Material", content:
        [
            "Estoque",
            "Entrada de Material",
            "Saída de Material"
        ]    
    },
    {
        title: "Financeiro", content:
        [
           "Contas a Pagar",
           "Baixa em Bloco" 
        ]
    }
];

export default function(state = initialState, action){
    return state
}