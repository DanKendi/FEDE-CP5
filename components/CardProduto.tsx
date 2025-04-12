"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"

interface Produto {
    id: number;
    title: string;
    preco: number;
    thumbnail: string;
}

const CardProduto = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                const todos: Produto[] = res.data.products.flatMap((product: any) => ({
                    id: product.id,
                    title: product.title,
                    preco: product.price,
                    thumbnail: product.thumbnail
                }))
                setProdutos(todos);
            })
            .catch(() => console.error("Erro ao buscar API"))
    }, [])

    return (
        <>
            <h1>Lista de Produtos</h1>
            <ul>
                {produtos.map(prod => (
                    <li key={prod.id}><Link href={`/produtos/${prod.id}`}><img src={prod.thumbnail} />{prod.title} ${prod.preco}</Link> </li>
                ))}
            </ul>
        </>
    )
}

export default CardProduto;