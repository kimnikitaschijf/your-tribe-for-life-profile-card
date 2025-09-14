// server.js

export async function load({ url }) {
    const membersResponse = await fetch('https://fdnd.directus.app/items/person/158?fields=*,squads.squad_id.name,squads.squad_id.cohort');
    const memberData = await membersResponse.json();

    return { member: memberData.data };
}
