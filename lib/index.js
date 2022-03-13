// set client
const client = require("contentful").createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// get all BLog(all_article, projectUpdate,,,)
// export async function getAllArticle() {
//     const entries = await client.getEntries({

//         content_type: 'projectUpdates',
//         content_type: "announcement",
//         order: "-fields.date",
//     });
//     // console.log("getallposts-test2", entries);

//     if (entries.items) {
//         console.log("allBlogentriesItems", entries.items)
//         return entries.items;
//     }
//     console.log(`Error getting Entries for ${contentType.name}.`);
// }

// get all Announcement
export async function getAllAnnouncement() {
    const entries = await client.getEntries({

        content_type: "announcement",
        order: "-fields.date",
    });
    // console.log("getallAnnouncement-test2", entries);

    if (entries.items) {
        console.log("entriesItems", entries.items)
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
        // console.log("latestAnnouncement", latestAnnouncement.items[0]);
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
    console.log("getMoreAnnouncement=", entries);

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
    console.log("getallprojects_test");
    const entries = await client.getEntries({
        content_type: "projectUpdates",
        order: "-fields.date",
    });
    console.log("project!!", entries)
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
    console.log("Project test", entries);
}

//    -----------Relate to Platform Updates-------------
//     -
//     -                                                -
//     -                                                -
//     -                                                -
//    --------------------------------------------------

// get all projects
export async function getAllPlatform() {
    console.log("getallplatform_test");
    const entries = await client.getEntries({
        content_type: "platform",
        order: "-fields.date",
    });
    console.log("platform!!", entries)
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
    console.log("platform test", entries);
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
    console.log("platform test", entries);
}


//    -----------Relate to Tutorials-------------
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
    console.log("platform test", entries);
}