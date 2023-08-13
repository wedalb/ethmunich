
const express = require("express");
import hpp from 'hpp';
import helmet from 'helmet';
//Route
import { serviceRouter } from './service_route';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());
app.use('/api/v1/service', serviceRouter);

const elementList = [];

app.use(express.json());

app.post('/service', (req, res) => {
    const { element } = req.body;
    if (element) {
        elementList.push(element);
        res.status(201).json({ message: 'Element added successfully' });
    } else {
        res.status(400).json({ error: 'Invalid element' });
    }
});

app.get('/service', (req, res) => {
    const number = parseFloat(req.query.number);

    res.json({ elements: elementList });
});


// Prevent http param pollution
app.use(hpp());

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()  => console.log(`Server running on port ${PORT}`))

