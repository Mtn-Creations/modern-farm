export const Catalog = (harvestedCrops) => {
    
    let htmlString = ""
    const mainElement = document.getElementsByTagName("main")[0]
    

    for (const cropItem of harvestedCrops) {
        // htmlString += `<section class="plant">${cropItem.type}</section>\n`
        let sectionElement = document.createElement("section")
        let sectionContent = document.createTextNode(`${cropItem.type}`)
        sectionElement.classList.add("plant")
        sectionElement.appendChild(sectionContent)
        mainElement.appendChild(sectionElement)
    }

}