import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Car() {
  return (
    <section className="cars">
        <div className="container">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BMW       </Typography>
        <Typography variant="body2" color="text.secondary">
        From exclusive comfort in the rear to the E-ACTIVE BODY CONTROL suspension.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Customizations</Button>
        <Button size="small">Specifications</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.drivespark.com/images/2022-05/2022-rolls-royce-boat-tail-4.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         RollsRoyce
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A large, expensive, and comfortable car of very high quality
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Customizations</Button>
        <Button size="small">Specifications</Button>
      </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://c4.wallpaperflare.com/wallpaper/370/231/779/audi-audi-rs5-coupe-car-wallpaper-preview.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Audi
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The top luxury car makers in the world, known for innovative design, smooth handling and speed. 
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Customizations</Button>
        <Button size="small">Specifications</Button>
      </CardActions>
    </Card>
    </div>
    </section>
  );
}
export default Car
