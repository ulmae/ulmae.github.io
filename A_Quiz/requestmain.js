const request = require('request');

const URL_API_CATEGORY_LOOKUP = 'https://opentdb.com/api_category.php';
// EXAMPLE API URL: https://opentdb.com/api.php?amount=10&category=13&difficulty=easy&type=multiple
const BASE_URL = 'https://opentdb.com/api.php?';


// I get all the categories inside of a JSON
const getCategories = () => {
    return new Promise((resolve, reject) => {
        request.get(URL_API_CATEGORY_LOOKUP, (err, res, body) => {
            if (res.statusCode === 200) {
                const json = JSON.parse(body);
                resolve(json)
            } else {
                reject(new Error("Could not retrieve categories.", err))
            }
        });
    })
}

getCategories()
    .then(newCategory => {
        console.log(newCategory.trivia_categories[0].name)
    })
    .catch(error => console.log(error))