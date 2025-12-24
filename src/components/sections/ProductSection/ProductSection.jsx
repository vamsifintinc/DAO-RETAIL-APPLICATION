import { Container, Grid } from '@mui/material'
import ProductCard from './ProductCard'
import { PRODUCT_CARDS } from './productCardsData'

const ProductSection = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {PRODUCT_CARDS.map((card) => (
          <Grid
            key={card.id}
            size={{
              md: 6
            }}
          >
            <ProductCard data={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductSection
