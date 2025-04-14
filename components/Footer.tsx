function Footer() {
    return (
        <>
            {/*Elemento <footer> com cor de fundo personalizada*/}
            <footer style={{backgroundColor: "#e0eeff"}}>
                {/*Centraliza o conteúdo do rodapé*/}
                <div style={{textAlign: "center", margin: "0 auto"}}>
                    {/*Exibe o ano atual dinamicamente + texto de direitos autorais*/}
                    <p>{new Date().getFullYear()} &copy; Lista de Produtos. Daniel Kendi Todos os Direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}
export default Footer;