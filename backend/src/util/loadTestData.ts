const loadTestData = db => {
    const testCharities = [
        {
            name: 'Red Cross',
            url: 'https://www.redcross.org.au/',
            imageUrl: 'http://anzaccentenary.vic.gov.au/wp-content/uploads/2014/07/red_cross_1.png'
        },
        {
            name: 'Doctors Without Borders',
            url: 'https://msf.org.au/',
            imageUrl: 'https://pbs.twimg.com/profile_images/950482530213314560/pD4Jf2id_400x400.jpghttps://msf.org.au/'
        }
    ]

    const testUsers = [
        {
            name: "Testy McTestFace",
            email: "testymctest@face.com",
            phone: "0404500200"
        },
        {
            name: "Your Friend",
            email: "yourfriend@hotmail.net",
            phone: "0448293689"
        },
        {
            name: "Maxwell Reid",
            email: "contact@maxwellreid.tech",
            phone: "0404044044"
        }
    ]

    const userValues = testUsers
        .map(({name, email, phone}) => `("${name}", "${email}", "${phone}")`)
        .join(',')
    const charityValues = testCharities
        .map(({name, url, imageUrl}) => `("${name}", "${url}", "${imageUrl}")`)
        .join(',')
    db.exec(`INSERT INTO Users (name, email, phone) VALUES ${userValues}`)
    db.exec(`INSERT INTO Charities (name, url, imageUrl) VALUES ${charityValues}`)
}

export default loadTestData
