import axios from "axios";

// - Exibir: Nome, Descrição, Imagem, Preço, Categoria, Avaliação (rating)
interface Produto{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    image: string;
}

export default async function ProdutoPage({params}: {params: {id: string}}) {
    const res = await axios.get("https://dummyjson.com/products/");

    const produtos = res.data.products.flatMap((p: any) => p);

    const idBuscado = Number(params.id);

    const produtosEncontrado = produtos.find((item: any) => item.id === idBuscado);

    const produto: Produto | undefined = produtosEncontrado;

    if(!produto){
        return <p>Produto não encontrado</p>
    }

    return(
        <div style={{padding: "32px"}}>
            <h1>{produto.title}</h1>
            <img src={produto.image} alt={produto.title} width={200} height={"auto"}/>
            <p><strong>Preço: </strong>$ {produto.price}</p>
            <p><strong>Descrição: </strong>{produto.description}</p>
            <p><strong>Categoria: </strong>{produto.category}</p>
            <p><strong>Avaliação: </strong>{produto.rating}</p>
        </div>
    )
}