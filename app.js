const express = require ('express');
const conn = require ('./conn')
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.get('/', (req,res) => {
    res.render('index');
});

app.post('/register', (req,res) => {
    const student_id = req.body.student_id;
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const citizenship = req.body.citizenship;
    const religion = req.body.religion;
    const date_of_birth = req.body.date_of_birth;
    const place_of_birth = req.body.place_of_birth;
    const mobile_number = req.body.mobile_number;
    const current_address = req.body.current_address;
    const occupation = req.body.occupation;
    const civil_status = req.body.civil_status;
    const email = req.body.email;

    const university = req.body.university;
    const year_level = req.body.year_level;
    const course = req.body.course;

    const father_name = req.body.father_name;
    const father_occupation = req.body.father_occupation;

    const mother_name = req.body.mother_name;
    const mother_occupation = req.body.mother_occupation;

    const guardian_name = req.body.guardian_name;
    const ice_cream = req.body.ice_cream;


    const insert = `INSERT INTO user_biodata VALUES ('0',
    '${student_id}',
    '${name}',
    '${age}',
    '${gender}',
    '${citizenship}',
    '${religion}',
    '${date_of_birth}',
    '${place_of_birth}',
    '${mobile_number}',
    '${current_address}',
    '${occupation}',
    '${civil_status}',
    '${email}',
    '${university}',
    '${year_level}',
    '${course}',
    '${father_name}',
    '${father_occupation}',
    '${mother_occupation}',
    '${mother_name}',
    '${guardian_name}',
    '${ice_cream}')`

    conn.query(insert, (err) => {
        if(err) throw err;
        res.send(
            `<script>
                alert('Data inserted successfully!');
                location.href = '/'
            </script>`
        );
    });

    console.log(req.body);
    
});

app.listen(15000);

