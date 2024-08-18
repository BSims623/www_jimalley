import { promises as fs } from 'fs';
import path from 'path';

export async function countPages(pathToStory, numOfChars) {
    let numberOfPages = 0;
    let pointerTwo = numOfChars;
    pathToStory = "/public" + pathToStory;

    const absolutePath = path.join(process.cwd(), pathToStory);
    
    let content = await fs.readFile(absolutePath, 'utf-8');

    if (content.length === numOfChars || content.length < numOfChars) {
        return 1
    }

    while (numOfChars < content.length) {
        while (content[pointerTwo] !== " ") {
            pointerTwo--
        }
        numberOfPages++;
        content = content.slice(pointerTwo + 1);
        pointerTwo = numOfChars;
        if (content.length < numOfChars && content.length > 0) {
            numberOfPages++
        }
    }

    return numberOfPages
}

export async function getPage(pathToStory, numOfChars, pageNumber) {
    let currentPageContent;
    let numberOfPages = 0;
    let pointerTwo = numOfChars;
    pathToStory = "/public" + pathToStory;

    const absolutePath = path.join(process.cwd(), pathToStory);
    
    let content = await fs.readFile(absolutePath, 'utf-8');

    if (content.length === numOfChars || content.length < numOfChars) {
        return content
    }

    while (numOfChars < content.length) {
        while (content[pointerTwo] !== " ") {
            pointerTwo--
        }
        numberOfPages++;
        currentPageContent = content.slice(0, pointerTwo);
        if (numberOfPages === pageNumber) return currentPageContent;
        content = content.slice(pointerTwo + 1);
        pointerTwo = numOfChars;
        if (content.length < numOfChars && content.length > 0) {
            numberOfPages++
            return content
        }
    }
}