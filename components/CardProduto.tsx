"use client"
import { useEffect, useState } from "react" //Importa hooks do React
import axios from "axios" //Importa biblioteca axios p/ requisições web
import Link from "next/link" //Importa componente interno Link

//Interface com os atributos
interface Produto {
    id: number;
    title: string;
    preco: number;
    thumbnail: string;
}

const CardProduto = () => {
    //Cria o atributo "produtos" para armazenar os dados da API em um array
    const [produtos, setProdutos] = useState<Produto[]>([]);

    //Hook para executar função
    useEffect(() => {
        axios.get("https://dummyjson.com/products") //Faz a requisição GET para obter os dados dos produtos
            .then(res => {
                const todos: Produto[] = res.data.products.flatMap((product: any) => ({ //Transforma os produtos da resposta no formato
                    id: product.id,
                    title: product.title,
                    preco: product.price,
                    thumbnail: product.thumbnail
                }))
                //Atualiza o estado com os produtos
                setProdutos(todos);
            })
            //Captura e exibe erro em caso de falha
            .catch(() => console.error("Erro ao buscar API"))
    }, [])

    return (
        //Conteiner principal
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px" }}> 

        <h1 style={{ textAlign: "center", marginBottom: "32px", fontSize: "40px"}}>Lista de Produtos</h1>{/*Título da Página*/}

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", justifyItems: "center" }}>{/*Grid para os cards de produto*/}

                {produtos.map(prod => (
                    //Card do produto
                    <div key={prod.id} style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "16px",
                        textAlign: "center",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        width: "100%",
                        maxWidth: "250px",
                        backgroundColor: "#efefef",
                        transition: "transform 0.2s",
                    }}>
                        <Link href={`/produtos/${prod.id}`}> {/*Link para a página de mais informações do produto contendo: imagem, nome e preço*/}
                            <img src={prod.thumbnail} style={{ height: "200px", width: "100%", objectFit: "cover" }} />
                            <h3 style={{margin: "12px 0", color: "#000"}}>{prod.title}</h3>
                            <p style={{color: "#000"}}>${prod.preco}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardProduto;