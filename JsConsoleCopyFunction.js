const allTopics = dociment.querySelectorAll('.classId')
//this will return a node list

copy(allTopics)
//this can then be copied into a text editor for further use

const topicsToArray = Array.prototype.slice.call(allTopics)

copy(topicsToArray)

topicsToArray[0]

topicsToArray[0].textContent

const topicList = topicsToArray.map(e => e.textContent)

copy(topicList)

//running these commands in the console sequentually will allow you to scrape the id'd element(s) in a clean organized way