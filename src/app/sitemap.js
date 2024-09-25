import { getChapters, countPagesTwo, countPages } from "@/utils/paginate.mjs";
import { shortStories } from "@/utils/shortStories";

async function getNovelChapterPages() {
    const chapters = await getChapters('/stories/tickets_to_salvation.md');
    const slugs = chapters.map((_, index) => `chapter-${index + 1}`);

    const sluggers = await chapters.reduce(async (accPromise, chapter, index) => {
        const acc = await accPromise;
        const numberOfPages = countPagesTwo(chapter, 3070);

        acc[`chapter-${index + 1}`] = Array.from(
            { length: numberOfPages },
            (_, index) => 'page-' + String(index + 1)
        );

        return acc  
    }, Promise.resolve({}));

    const paths = slugs.flatMap((slug) =>
        sluggers[slug].map((slugger) => ({
            slug,
            slugger,
        }))
    );
    
    return paths
}

async function getStoryPages() {
    const slugs = shortStories.map((story) => story.title.replace(/\,/g, "").split(' ').join('-').toLowerCase()); // Example slug values
   
    const sluggers = await shortStories.reduce(async (accPromise, story) => {
        const acc = await accPromise; // Await the accumulated object
        const numberOfPages = await countPages(story.path, 3070);
      
        // Create the key based on the story title and add it to the accumulator
        acc[story.title.replace(/\,/g, "").split(' ').join('-').toLowerCase()] = Array.from(
          { length: numberOfPages },
          (_, index) => 'page-' + String(index + 1)
        );
      
        return acc;
      }, Promise.resolve({})); // Start with an empty object
        
    // Generate all combinations of slug and slugger
    const paths = slugs.flatMap((slug) =>
        sluggers[slug].map((slugger) => ({
        slug,
        slugger,
      }))
    );
  
    return paths;
}

export default async function sitemap() {
    const pages = ["about","tickets-to-salvation","short-stories","contact"];

    const novelPages = await getNovelChapterPages();

    const storyPages = await getStoryPages();

    let mainPages = pages.map((page) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${page}`,
        changeFrequency: 'monthly',
    }));

    novelPages.forEach((page) => {
        mainPages.push({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets-to-salvation/${page.slug}/${page.slugger}`,
            changeFrequency: 'monthly',
        });
    });

    storyPages.forEach((page) => {
        mainPages.push({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/short-stories/${page.slug}/${page.slugger}`,
            changeFrequency: 'monthly'
        });
    });


    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            changeFrequency: 'monthly',
        },
        ...mainPages
    ]
}