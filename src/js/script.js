const ul = document.querySelector('.containerListaProdutos ul');
let carrinhoAtt = []
console.log(carrinhoAtt)

function montarListaProdutos(listaProdutos) {
    ul.innerHTML = '';
    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ol = document.createElement('ol')
        const button = document.createElement('button')
        button.id = produto.id
            // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        button.innerText = 'Adicionar ao carrinho'
        button.classList.add('buttonComprar')
        button.addEventListener('click', () => {
            const carrinho = document.querySelector('#carrinhodeCompra')
            const li = document.createElement('li')
            const img = document.createElement('img');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const id = button.getAttribute("id")
            const productFind = produtos.find((produto) => {
                return produto.id === Number(id);
            })
            carrinhoAtt.push(productFind)
            img.src = produto.img;
            img.alt = produto.nome;
            h3.innerText = produto.nome;
            p.innerText = produto.preco;
            span.innerText = produto.secao;

            carrinho.appendChild(li)
            li.appendChild(img);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(span)

            let total = carrinhoAtt.reduce((a, produto) => {
                return a + Number(produto.preco)
            }, 0)
            console.log(total)
            const resultado = document.querySelector('#precoTotal')
            resultado.innerText = total
        })




        ////////////////////////////
        const listaIng = produto.componentes
        listaIng.forEach((produto) => {
            const liIng = document.createElement('li')
            liIng.innerText = produto;

            ol.appendChild(liIng)


        })

        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ol)
        li.appendChild(button)

        // Adicionando li ao HTML
        ul.appendChild(li);
    });
}
montarListaProdutos(produtos)

//________________________________<>________________________________//

function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti);

}
const botaoMostrarHortifruti = document.querySelector('#botaohorti');

botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);

function mostrarTodos() {
    const mostrarTodosItens = produtos

    montarListaProdutos(mostrarTodosItens);

}
const botaoMostrarTodos = document.querySelector('#mostrarTodos');

botaoMostrarTodos.addEventListener('click', mostrarTodos);

//________________________________<>________________________________//

function findButton() {
    const inputValue = document.querySelector('.campoBuscaPorNome').value

    const newFilter = produtos.filter((produto) => {
        return (produto.secao.toLowerCase() === inputValue.toLowerCase() ||
            produto.categoria.toLowerCase() === inputValue.toLowerCase() ||
            produto.nome.toLowerCase() === inputValue.toLowerCase())
    })

    console.log(newFilter)
    montarListaProdutos(newFilter)




    //     if (inputValue.value === 'Hortifruti' || inputValue.value === 'hortifruti') {
    //         const hortifruti = produtos.filter((produto) => {
    //             return produto.secao === 'Hortifruti';
    //         });
    //         montarListaProdutos(hortifruti)
    //     }
    //     if (inputValue.value === 'fruta' || inputValue.value === 'Fruta') {
    //         const fruta = produtos.filter((produto) => {
    //             return produto.categoria === 'fruta';
    //         });
    //         montarListaProdutos(fruta)
    //     }
    //     if (inputValue.value === 'Panificadora' || inputValue.value === 'panificadora') {
    //         const panificadora = produtos.filter((produto) => {
    //             return produto.secao === 'Panificadora';
    //         });
    //         montarListaProdutos(panificadora)
    //     }
    //     if (inputValue.value === 'Pães' || inputValue.value === 'pães') {
    //         const paes = produtos.filter((produto) => {
    //             return produto.categoria === 'Pães';
    //         });
    //         montarListaProdutos(paes)
    //     }
    //     if (inputValue.value === 'Laticinio' || inputValue.value === 'laticinio') {
    //         const laticinio = produtos.filter((produto) => {
    //             return produto.secao === 'Laticinio';
    //         });
    //         montarListaProdutos(laticinio)
    //     }
    //     if (inputValue.value === 'Banana' || inputValue.value === 'banana') {
    //         const banana = produtos.filter((produto) => {
    //             return produto.nome === 'Banana';
    //         });
    //         montarListaProdutos(banana)
    //     }
    //     if (inputValue.value === 'Morango' || inputValue.value === 'morango') {
    //         const morango = produtos.filter((produto) => {
    //             return produto.nome === 'Morango';
    //         });
    //         montarListaProdutos(morango)
    //     }
    //     if (inputValue.value === 'Maçã' || inputValue.value === 'Maca' || inputValue.value === 'maçã' || inputValue.value === 'maca') {
    //         const maca = produtos.filter((produto) => {
    //             return produto.nome === 'Maçã';
    //         });
    //         montarListaProdutos(maca)
    //     }
    //     if (inputValue.value === 'Pão' || inputValue.value === 'Pao' || inputValue.value === 'pao') {
    //         const pao = produtos.filter((produto) => {
    //             return produto.nome === 'Pão';
    //         });
    //         montarListaProdutos(pao)
    //     }
    //     if (inputValue.value === 'Leite' || inputValue.value === 'leite') {
    //         const leite = produtos.filter((produto) => {
    //             return produto.nome === 'Leite';
    //         });
    //         montarListaProdutos(leite)
    //     }

}

const listFinded = document.querySelector('#txtBusca')
listFinded.addEventListener('click', findButton)