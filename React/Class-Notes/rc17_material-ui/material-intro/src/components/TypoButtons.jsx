import { Typography, Container, Button } from '@mui/material';
const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          color="error"
          sx={{
            background: '#eee',
            mt: 4,
            border: '1px solid green',
          }}
        >
          Typography, Buttons, Container, Box
        </Typography>

        <Typography variant="body2" align="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deserunt atque fugiat ratione blanditiis earum sed tempora quas
          voluptas laudantium molestias enim omnis exercitationem culpa labore,
          velit facilis nobis alias!
        </Typography>

        <Typography
          variant="button"
          align="justify"
          color="secondary"
          sx={{ display: 'inline-block', mt: 4 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deserunt atque fugiat ratione blanditiis earum sed tempora quas
          voluptas laudantium molestias enim omnis exercitationem culpa labore,
          velit facilis nobis alias!
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Button variant="contained" color="secondary">
          CLICK
        </Button>
        <Button variant="outlined" color="success">
          SEND
        </Button>
      </Container>
    </div>
  );
};

export default TypoButtons;
