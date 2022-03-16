// set client
const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// get all BLog(all_article, projectUpdate,,,)
export async function getAllArticle() {

    let res = {
        all: null,
        announcement: null,
        projectUpdates: null,
        platform: null,
        technology: null,
        tutorials: null,
    }
    let promises = [], entrieRes = [], entries = [];
    const entriesAnnoncement = client.getEntries({
        content_type: "announcement",
        order: "-fields.date",
    });
    const entriesProjectUpdates = client.getEntries({
        content_type: "projectUpdates",
        order: "-fields.date",
    });
    const entriesPlatform = client.getEntries({
        content_type: "platform",
        order: "-fields.date",
    });
    const entriesTechnology = client.getEntries({
        content_type: "technology",
        order: "-fields.date",
    });
    const entriesTutorials = client.getEntries({
        content_type: "tutorials",
        order: "-fields.date",
    });
    promises.push(entriesAnnoncement, entriesProjectUpdates, entriesPlatform, entriesTechnology, entriesTutorials)
    entrieRes = await Promise.all(promises);


    for (let i = 0; i < entrieRes.length; i++) {
        if (entrieRes[i].items) {
            for (let j = 0; j < entrieRes[i].items.length; j++)
                entries.push(entrieRes[i].items[j]);
        }
    }
    res.announcement = entrieRes[0].items
    res.projectUpdates = entrieRes[1].items
    res.platform = entrieRes[2].items
    res.technology = entrieRes[3].items
    res.tutorials = entrieRes[4].items
    res.all = entries
    // console.log("res", res.all);
    return res;
    // return entries;
}

//get all one author's articles
export async function getAllAuthorArticle(authorName) {

    let promises = [], entrieRes = [], entries = [];
    const entriesAnnoncement = client.getEntries({
        content_type: "announcement",
        order: "-fields.date",
    });
    const entriesProjectUpdates = client.getEntries({
        content_type: "projectUpdates",
        order: "-fields.date",
    });
    const entriesPlatform = client.getEntries({
        content_type: "platform",
        order: "-fields.date",
    });
    const entriesTechnology = client.getEntries({
        content_type: "technology",
        order: "-fields.date",
    });
    const entriesTutorials = client.getEntries({
        content_type: "tutorials",
        order: "-fields.date",
    });
    promises.push(entriesAnnoncement, entriesProjectUpdates, entriesPlatform, entriesTechnology, entriesTutorials)
    entrieRes = await Promise.all(promises);

    for (let i = 0; i < entrieRes.length; i++) {
        if (entrieRes[i].items) {
            for (let j = 0; j < entrieRes[i].items.length; j++) {
                if (entrieRes[i].items[j].fields.author.fields.name === authorName) {
                    entries.push(entrieRes[i].items[j]);
                }
            }
        }
    }
    return entries;
}

// get all Announcement
export async function getAllAnnouncement() {
    const entries = await client.getEntries({

        content_type: "announcement",
        order: "-fields.date",
    });

    if (entries.items) {
        return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function getLatestAnnouncement() {
    const latestAnnouncement = await client.getEntries({
        content_type: "announcement",
        order: "-fields.date",
    })
    if (latestAnnouncement.items) {
        return latestAnnouncement.items[0];
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}

// get a Announcement by slug
export async function getAnnouncementBySlug(slug) {
    const entries = await client.getEntries({
        content_type: "announcement",
        limit: 1,
        "fields.slug[in]": slug,
    });
    if (entries.items) {
        return entries.items[0];
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}

// get more 3 latest Announcement
export async function getMoreAnnouncement(slug) {
    const entries = await client.getEntries({
        content_type: "announcement",
        limit: 3,
        order: "-fields.date",
        "fields.slug[nin]": slug,
    });
    if (entries.items) {
        return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}

function parseAnnouncementSlug({ fields }) {
    return {
        slug: fields.slug,
    };
}

function parseAnnouncementSlugEntries(entries, cb = parseAnnouncementSlug) {
    return entries?.items?.map(cb);
}

// get all slugs of Announcement
export async function getAllAnnouncementWithSlug() {
    const entries = await client.getEntries({
        content_type: "announcement",
        select: "fields.slug",
    });
    return parseAnnouncementSlugEntries(entries, (announcement) => announcement.fields);
}
//    -----------Relate to Project Updates-------------
//     -
//     -                                                -
//     -                                                -
//     -                                                -
//    --------------------------------------------------

// get all projects
export async function getAllProjects() {
    // console.log("getallprojects_test");
    const entries = await client.getEntries({
        content_type: "projectUpdates",
        order: "-fields.date",
    });
    if (entries.items) {
        return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}


// get a project by slug
export async function getProjectBySlug(slug) {
    const entries = await client.getEntries({
        content_type: "projectUpdates",
        limit: 1,
        "fields.slug[in]": slug,
    });
    if (entries.items) {
        return entries.items[0];
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}
// get more 3 latest project
export async function getMoreProject(slug) {
    const entries = await client.getEntries({
        content_type: "projectUpdates",
        limit: 3,
        order: "-fields.date",
        "fields.slug[nin]": slug,
    });

    if (entries.items) {
        return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}

function parseProjectSlug({ fields }) {
    return {
        slug: fields.slug,
    }
}

function parseProjectSlugEntries(entries, cb = parseProjectSlug) {
    return entries?.items?.map(cb)
}
// get all slugs of projects
export async function getAllProjectWithSlug() {
    const entries = await client.getEntries({
        content_type: "projectUpdates",
        select: "fields.slug",
    });
    return parseProjectSlugEntries(entries, (project) => project.fields);
}

//    -----------Relate to Platform Updates-------------
//     -
//     -                                                -
//     -                                                -
//     -                                                -
//    --------------------------------------------------

// get all projects
export async function getAllPlatform() {
    // console.log("getallplatform_test");
    const entries = await client.getEntries({
        content_type: "platform",
        order: "-fields.date",
    });
    if (entries.items) {
        return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}


// get a project by slug
export async function getPlatformBySlug(slug) {
    const entries = await client.getEntries({
        content_type: "platform",
        limit: 1,
        "fields.slug[in]": slug,
    });
    if (entries.items) {
        return entries.items[0];
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}
// get more 3 latest project
export async function getMorePlatform(slug) {
    const entries = await client.getEntries({
        content_type: "platform",
        limit: 3,
        order: "-fields.date",
        "fields.slug[nin]": slug,
    });

    if (entries.items) {
        return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}

function parsePlatformSlug({ fields }) {
    return {
        slug: fields.slug,
    }
}

function parsePlatformSlugEntries(entries, cb = parsePlatformSlug) {
    return entries?.items?.map(cb)
}
// get all slugs of projects
export async function getAllPlatformWithSlug() {
    const entries = await client.getEntries({
        content_type: "platform",
        select: "fields.slug",
    });
    return parsePlatformSlugEntries(entries, (platform) => platform.fields);
}

//    -----------Relate to Technology-------------
//     -
//     -                                                -
//     -                                                -
//     -                                                -
//    --------------------------------------------------

// get all Technology
export async function getAllTechnology() {
    const entries = await client.getEntries({
        content_type: "technology",
        order: "-fields.date",
    });
    if (entries.items) {
        return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}


// get a project by slug
export async function getTechnologyBySlug(slug) {
    const entries = await client.getEntries({
        content_type: "technology",
        limit: 1,
        "fields.slug[in]": slug,
    });
    if (entries.items) {
        return entries.items[0];
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}
// get more 3 latest project
export async function getMoreTechnology(slug) {
    const entries = await client.getEntries({
        content_type: "technology",
        limit: 3,
        order: "-fields.date",
        "fields.slug[nin]": slug,
    });

    if (entries.items) {
        return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}

function parseTechnologySlug({ fields }) {
    return {
        slug: fields.slug,
    }
}

function parseTechnologySlugEntries(entries, cb = parseTechnologySlug) {
    return entries?.items?.map(cb)
}
// get all slugs of projects
export async function getAllTechnologyWithSlug() {
    const entries = await client.getEntries({
        content_type: "technology",
        select: "fields.slug",
    });
    return parseTechnologySlugEntries(entries, (technology) => technology.fields);
}


//    ------------------Relate to Tutorials-------------
//     -
//     -                                                -
//     -                                                -
//     -                                                -
//    --------------------------------------------------

// get all Technology
export async function getAllTutorials() {
    const entries = await client.getEntries({
        content_type: "tutorials",
        order: "-fields.date",
    });
    if (entries.items) {
        return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}


// get a project by slug
export async function getTutorialsBySlug(slug) {
    const entries = await client.getEntries({
        content_type: "tutorials",
        limit: 1,
        "fields.slug[in]": slug,
    });
    if (entries.items) {
        return entries.items[0];
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}
// get more 3 latest project
export async function getMoreTutorials(slug) {
    const entries = await client.getEntries({
        content_type: "tutorials",
        limit: 3,
        order: "-fields.date",
        "fields.slug[nin]": slug,
    });

    if (entries.items) {
        return entries.items;
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}

function parseTutorialsSlug({ fields }) {
    return {
        slug: fields.slug,
    }
}

function parseTutorialsSlugEntries(entries, cb = parseTutorialsSlug) {
    return entries?.items?.map(cb)
}
// get all slugs of projects
export async function getAllTutorialWithSlug() {
    const entries = await client.getEntries({
        content_type: "tutorials",
        select: "fields.slug",
    });
    return parseTutorialsSlugEntries(entries, (tutorials) => tutorials.fields);
}

//    ------------------Relate to Authors-------------
//     -
//     -                                                -
//     -                                                -
//     -                                                -
//    --------------------------------------------------

// get a Author by slug
export async function getAuthorBySlug(slug) {
    const entries = await client.getEntries({
        content_type: "author",
        limit: 1,
        "fields.slug[in]": slug,
    });
    if (entries.items) {
        return entries.items[0];
    }
    console.log(`Error getting Entries for ${contentType.name}.`);
}

function parseAuthorSlug({ fields }) {
    return {
        slug: fields.slug,
    };
}

function parseAuthorSlugEntries(entries, cb = parseAuthorSlug) {
    return entries?.items?.map(cb);
}

// get all slugs of Author
export async function getAllAuthorWithSlug() {
    const entries = await client.getEntries({
        content_type: "author",
        select: "fields.slug",
    });
    return parseAuthorSlugEntries(entries, (author) => author.fields);
}