function skillsMember() {
    var skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'Ruby'];
    var skillsList = document.getElementById('skillsList');
    var skillsFragment = document.createDocumentFragment();
    var skillsArray = skills.map(function(skill) {
        var skillItem = document.createElement('li');
        skillItem.textContent = skill;
        return skillItem;
    });
    skillsArray.forEach(function(skill) {
        skillsFragment.appendChild(skill);
    });
    skillsList.appendChild(skillsFragment);
}