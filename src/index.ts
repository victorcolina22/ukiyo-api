import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// Routes
import routes from './routes';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
