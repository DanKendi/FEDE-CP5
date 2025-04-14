import axios from "axios"; //Importa biblioteca axios p/ requisições web

interface Produto {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    thumbnail: string;
}

//Define o componente assíncrono ProdutoPage que recebe o parâmetro "id" da rota dinâmica
export default async function ProdutoPage({ params }: { params: { id: string } }) {
    //Requisição à API para obter os produtos
    const res = await axios.get("https://dummyjson.com/products/");

    //Variável para receber os dados dos produtos
    const produtos = res.data.products;

    //Converte o id recebido em número
    const idBuscado = Number(params.id);

    //Busca no array de produtos aquele cujo id corresponde ao idBuscado.
    //O método .find() retorna o primeiro elemento que satisfaz a condição ou undefined (indefinido) caso nenhum seja encontrado.
    const produto: Produto| undefined = produtos.find((item: any) => item.id === idBuscado);

    //Se não encontrar, exibe mensagem
    if (!produto) {
        return <p>Produto não encontrado</p>
    }

    //Card estilizado com os dados do produto (nome, imagem, preço, descrição, categoria e avaliação)
    return (
        <div style={{ padding: "32px", display: "flex", justifyContent: "center" }}>
            <div style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                padding: "24px",
                maxWidth: "600px",
                width: "100%",
                backgroundColor: "#efefef",
                textAlign: "center"
            }}>
                <h1 style={{ fontSize: "40px" }}>{produto.title}</h1>
                <img src={produto.thumbnail} alt={produto.title} width={400} height={"auto"} />
                <p><strong>Preço: </strong>$ {produto.price}</p>
                <p><strong>Descrição: </strong>{produto.description}</p>
                <p><strong>Categoria: </strong>{produto.category}</p>
                <p><strong>Avaliação: </strong>{produto.rating}/5 ☆</p>
            </div>
        </div>
    )
}