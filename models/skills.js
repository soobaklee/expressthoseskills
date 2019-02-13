let skills = [
{lang: 'CSS', level: '2-beginner'},
{lang: 'html', level: '2-beginner'},
{lang: 'javaScript', level: '1-just learning'},
{lang: 'python', level: '0-dreaming'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function getAll() {
    return skills;
}

function getOne(idx) {
    return skills[idx];
}

function create(lang) {
    skills.push(lang);
}

function deleteOne(id) {
    skills.splice(id, 1);
}