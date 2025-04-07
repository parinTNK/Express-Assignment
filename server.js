import express from 'express';

const app = express();


app.get('/profiles', (req, res) => {
    res.send({
        "data": {
            "name": "john",
            "age": 20
        }
    });
}
);


app.listen(4000, () => {
    console.log('Server is running on port 4000');
}
);