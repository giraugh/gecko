const loadTestData = db => {
    const testUsers = [
        {
            email: "testymctest@face.com",
            phone: "0404500200"
        },
        {
            email: "yourfriend@hotmail.net",
            phone: "0448293689"
        },
        {
            email: "employment@maxwellreid.tech",
            phone: "0404044044"
        }
    ]
    const userValues = testUsers
        .map(({email, phone}) => `("${email}", "${phone}")`)
        .join(',')
    db.exec(`INSERT INTO Users (email, phone) VALUES ${userValues}`)
}

export default loadTestData
