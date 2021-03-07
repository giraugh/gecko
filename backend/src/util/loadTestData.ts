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
    
    const testGoals = [
        {
            name: 'Finish a book',
            author: 1,
            friend: 2,
            amount: 5.00,
            charity: 1,
            startDate: Date.now(),
            endDate: Date.now() + 86400000
        },
        {
            name: 'Learn a guitar solo',
            author: 1,
            friend: 2,
            amount: 10.00,
            charity: 1,
            startDate: Date.now(),
            endDate: Date.now() + 86400000
        },
        {
            name: 'Avoid Coffee',
            author: 1,
            friend: 2,
            amount: 9.00,
            charity: 2,
            startDate: Date.now(),
            endDate: Date.now() + 86400000
        },
        {
            name: 'Win UNIHACK',
            author: 1,
            friend: 2,
            amount: 13.00,
            charity: 1,
            startDate: Date.now(),
            endDate: Date.now() + 86400000
        },
        {
            name: 'Complete marathon',
            author: 2,
            friend: 1,
            amount: 10.20,
            charity: 2,
            startDate: Date.now(),
            endDate: Date.now() + 50000000
        }
    ]

    const userValues = testUsers
        .map(({name, email, phone}) => `("${name}", "${email}", "${phone}")`)
        .join(',')
    const charityValues = testCharities
        .map(({name, url, imageUrl}) => `("${name}", "${url}", "${imageUrl}")`)
        .join(',')
    const goalValues = testGoals
        .map(g => `("${g.name}", "${g.author}", "${g.friend}", "${g.amount}", "${g.charity}", "${g.startDate}", "${g.endDate}")`)
        .join(',')
    db.exec(`INSERT INTO Users (name, email, phone) VALUES ${userValues}`)
    db.exec(`INSERT INTO Charities (name, url, imageUrl) VALUES ${charityValues}`)
    db.exec(`INSERT INTO Goals (name, author, friend, amount, charity, startDate, endDate) VALUES ${goalValues}`)
}

export default loadTestData
