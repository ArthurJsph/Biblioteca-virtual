import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function Body() {
    const cardData = Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        title: `O pequeno Príncipe ${index + 1}`,
        description: "É um livro que conta a história de um pequeno príncipe em busca de sua amada rosa.",
        author: "Antoine de Saint-Exupéry",
        publisher: "Reynal & Hitchcock",
        date: `2024-12-${index + 1}`, // Exemplo de data gerada
        image: "", // Adicione o caminho da imagem, se necessário.
    }));

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', padding: '16px' }}>
            {cardData.map((card) => (
                <Card key={card.id} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={card.image || "/placeholder-image.jpg"} // Substitua com uma imagem padrão se necessário
                            alt={card.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {card.description}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: '8px' }}>
                                <strong>Autor:</strong> {card.author}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <strong>Editora:</strong> {card.publisher}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'right', marginTop: '8px' }}>
                                {card.date}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    );
}

export default Body;